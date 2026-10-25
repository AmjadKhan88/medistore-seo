import { Pinecone } from "@pinecone-database/pinecone";

export const NAMESPACE = process.env.PINECONE_NAMESPACE || "knowledge-base";

let _pc: Pinecone | null = null;
function client() {
  if (!process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX) {
    throw new Error("PINECONE_API_KEY / PINECONE_INDEX not set");
  }
  if (!_pc) _pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  return _pc;
}
const ns = () => client().index(process.env.PINECONE_INDEX!).namespace(NAMESPACE);

export type VectorRecord = {
  id: string;
  values: number[];
  metadata: { docId: string; chunkIndex: number; text: string };
};

export async function upsertVectors(records: VectorRecord[]) {
  for (let i = 0; i < records.length; i += 100) {
    await ns().upsert(records.slice(i, i + 100));
  }
}

export async function deleteVectorsByIds(ids: string[]) {
  for (let i = 0; i < ids.length; i += 1000) {
    await ns().deleteMany(ids.slice(i, i + 1000));
  }
}

export async function queryVectors(vector: number[], topK: number) {
  const res = await ns().query({ vector, topK, includeMetadata: true });
  return res.matches ?? [];
}

export async function getVectorCount(): Promise<number | null> {
  try {
    const stats = await client().index(process.env.PINECONE_INDEX!).describeIndexStats();
    return (stats.namespaces as any)?.[NAMESPACE]?.recordCount ?? 0;
  } catch {
    return null;
  }
}