import { NextRequest, NextResponse } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { isAdminAuthenticated } from "@/lib/auth";
import { CHAT_MODEL, EMBED_DIM, EMBED_MODEL, getAI } from "@/lib/gemini";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

type Check = { name: string; ok: boolean; detail: string };
const msg = (e: unknown) => (e instanceof Error ? e.message : String(e)).slice(0, 400);

/**
 * Admin-only diagnostics.
 *   GET /api/admin/knowledge/health            -> checks everything
 *   GET /api/admin/knowledge/health?create=1   -> also creates the Pinecone index if missing
 */
export async function GET(req: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized. Log in at /admin first." }, { status: 401 });
  }

  const create = new URL(req.url).searchParams.get("create") === "1";
  const INDEX = process.env.PINECONE_INDEX || "";
  const NS = process.env.PINECONE_NAMESPACE || "knowledge-base";
  const checks: Check[] = [];
  const add = (name: string, ok: boolean, detail: string) => checks.push({ name, ok, detail });

  // 1) env variables (names only, never values)
  const required = ["GEMINI_API_KEY", "PINECONE_API_KEY", "PINECONE_INDEX", "MONGODB_URI"];
  const missing = required.filter((k) => !process.env[k]);
  add(
    "Environment variables",
    missing.length === 0,
    missing.length ? `Missing on this server: ${missing.join(", ")}` : `OK. Index="${INDEX}", namespace="${NS}", chat model="${CHAT_MODEL}"`
  );

  // 2) Gemini embedding
  try {
    const r = await getAI().models.embedContent({
      model: EMBED_MODEL,
      contents: ["hello"],
      config: { outputDimensionality: EMBED_DIM },
    });
    const len = r.embeddings?.[0]?.values?.length ?? 0;
    add("Gemini embedding", len === EMBED_DIM, `${len} dimensions (expected ${EMBED_DIM})`);
  } catch (e) {
    add("Gemini embedding", false, msg(e));
  }

  // 3) Gemini chat model
  try {
    const r = await getAI().models.generateContent({ model: CHAT_MODEL, contents: "Reply with the single word OK" });
    add(`Gemini chat model (${CHAT_MODEL})`, true, `Replied: ${(r.text || "").trim().slice(0, 30)}`);
  } catch (e) {
    add(`Gemini chat model (${CHAT_MODEL})`, false, msg(e));
  }

  // 4) Pinecone
  if (process.env.PINECONE_API_KEY && INDEX) {
    try {
      const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
      const { indexes = [] } = await pc.listIndexes();
      add(
        "Indexes in your Pinecone project",
        true,
        `${indexes.length} of 5: ` +
          (indexes.map((i) => `${i.name} (dimension ${i.dimension ?? "NONE"}, metric ${i.metric ?? "NONE"})`).join(" | ") || "none")
      );

      let info = indexes.find((i) => i.name === INDEX);

      if (!info && create) {
        try {
          await pc.createIndex({
            name: INDEX,
            dimension: EMBED_DIM,
            metric: "cosine",
            spec: { serverless: { cloud: "aws", region: "us-east-1" } },
            waitUntilReady: false,
          });
          add("Create index", true, `Creation of "${INDEX}" started. Wait about 1 minute, then open this page again WITHOUT ?create=1.`);
        } catch (e) {
          add("Create index", false, msg(e));
        }
      } else if (!info) {
        add("Index exists", false, `No index named "${INDEX}". Open this URL with ?create=1 added to create it.`);
      } else {
        const typeOk = info.dimension === EMBED_DIM && info.metric === "cosine";
        add(
          "Index type",
          typeOk,
          typeOk
            ? `"${INDEX}" is a classic vector index (dimension ${info.dimension}, cosine).`
            : `"${INDEX}" has dimension ${info.dimension ?? "NONE"} / metric ${info.metric ?? "NONE"}. It must be dimension ${EMBED_DIM} + cosine. If dimension is NONE it is a document-schema index: delete it and use a NEW name.`
        );

        if (typeOk && info.status?.ready === false) {
          add("Index ready", false, "Index is still starting. Wait a minute and reload.");
        } else if (typeOk) {
          try {
            const ns = pc.index(INDEX).namespace(NS);
            await ns.upsert([{ id: "healthcheck#0", values: Array(EMBED_DIM).fill(0.01), metadata: { healthcheck: true } }]);
            await ns.deleteMany(["healthcheck#0"]);
            add("Pinecone write + delete", true, "Upload and delete both work.");
          } catch (e) {
            add("Pinecone write + delete", false, msg(e));
          }
        }
      }
    } catch (e) {
      add("Pinecone connection", false, msg(e));
    }
  }

  return NextResponse.json({ allGood: checks.every((c) => c.ok), checks });
}