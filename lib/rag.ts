import { connectDB } from "@/lib/mongodb";
import { KnowledgeDoc } from "@/models/KnowledgeDoc";
import { embedDocuments, embedQuery, EMBED_MODEL } from "@/lib/gemini";
import { deleteVectorsByIds, queryVectors, upsertVectors } from "@/lib/pinecone";

// ───────────── chunking ─────────────
const tail = (s: string, n: number) => s.slice(-n).replace(/^\S*\s/, "");

function hardSplit(s: string, size: number) {
  const out: string[] = [];
  for (let i = 0; i < s.length; i += size) out.push(s.slice(i, i + size));
  return out;
}

export function chunkText(text: string, size = 1000, overlap = 150): string[] {
  const clean = text
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const chunks: string[] = [];
  let buf = "";
  const flush = () => {
    if (buf.trim()) chunks.push(buf.trim());
  };

  for (const p of clean.split(/\n\n+/)) {
    if (p.length > size) {
      flush();
      buf = "";
      let s = "";
      for (const sent of p.match(/[^.!?\n]+[.!?]*\s*/g) ?? [p]) {
        if ((s + sent).length > size && s) {
          chunks.push(s.trim());
          s = tail(s, overlap) + sent;
        } else s += sent;
      }
      if (s.trim()) chunks.push(s.trim());
      continue;
    }
    if (buf && (buf + "\n\n" + p).length > size) {
      flush();
      buf = tail(buf, overlap) + "\n\n" + p;
    } else buf = buf ? buf + "\n\n" + p : p;
  }
  flush();
  return chunks.flatMap((c) => (c.length > size * 1.5 ? hardSplit(c, size) : [c]));
}

// ───────────── vectors lifecycle ─────────────
export async function removeVectors(docId: string, chunkCount: number) {
  if (!chunkCount) return;
  await deleteVectorsByIds(Array.from({ length: chunkCount }, (_, i) => `${docId}#${i}`));
}

/** (Re)builds the Pinecone vectors for one doc from the text stored in MongoDB. */
export async function indexDocument(id: string) {
  await connectDB();
  const doc = await KnowledgeDoc.findById(id).select("+content");
  if (!doc || !doc.content) throw new Error("Document not found or empty");

  const oldCount = doc.chunkCount;
  const chunks = chunkText(doc.content);

  doc.status = "processing";
  doc.error = "";
  doc.chunkCount = Math.max(oldCount, chunks.length); // so cleanup always knows every id
  await doc.save();

  try {
    await removeVectors(id, oldCount);
    const vectors = await embedDocuments(chunks.map((c) => `${doc.title}\n\n${c}`));
    await upsertVectors(
      chunks.map((text, i) => ({
        id: `${id}#${i}`,
        values: vectors[i],
        metadata: { docId: id, chunkIndex: i, text },
      }))
    );
    doc.status = "ready";
    doc.chunkCount = chunks.length;
    doc.indexedAt = new Date();
    doc.embeddingModel = EMBED_MODEL;
  } catch (e: any) {
    doc.status = "failed";
    doc.error = String(e?.message || e).slice(0, 500);
  }
  await doc.save();
}

// ───────────── retrieval ─────────────
export type RetrievedChunk = {
  docId: string;
  title: string;
  text: string;
  score: number;
  chunkIndex: number;
  enabled: boolean;
};

export async function retrieve(
  query: string,
  opts: { topK?: number; minScore?: number; onlyEnabled?: boolean } = {}
): Promise<RetrievedChunk[]> {
  const {
    topK = 8,
    minScore = Number(process.env.CHAT_MIN_SCORE || 0.55),
    onlyEnabled = true,
  } = opts;

  const matches = (await queryVectors(await embedQuery(query), topK)).filter(
    (m) => (m.score ?? 0) >= minScore
  );
  if (!matches.length) return [];

  await connectDB();
  const ids = [...new Set(matches.map((m) => String(m.metadata?.docId)))];
  const docs = await KnowledgeDoc.find({ _id: { $in: ids } })
    .select("title enabled status")
    .lean();
  const byId = new Map(docs.map((d) => [String(d._id), d]));

  return matches
    .map((m) => {
      const docId = String(m.metadata?.docId);
      const d = byId.get(docId);
      return {
        docId,
        title: d?.title ?? "(deleted document)",
        text: String(m.metadata?.text ?? ""),
        score: m.score ?? 0,
        chunkIndex: Number(m.metadata?.chunkIndex ?? 0),
        enabled: !!d && d.enabled && d.status === "ready",
      };
    })
    .filter((c) => !onlyEnabled || c.enabled);
}