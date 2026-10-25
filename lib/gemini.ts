import { GoogleGenAI } from "@google/genai";

export const EMBED_MODEL = "gemini-embedding-001";
export const EMBED_DIM = Number(process.env.EMBEDDING_DIMENSION || 768);
export const CHAT_MODEL = process.env.GEMINI_CHAT_MODEL || "gemini-2.5-flash";

let _ai: GoogleGenAI | null = null;
export function getAI() {
  if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not set");
  if (!_ai) _ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  return _ai;
}

async function withRetry<T>(fn: () => Promise<T>, tries = 3): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i < tries; i++) {
    try {
      return await fn();
    } catch (e: any) {
      lastErr = e;
      const status = e?.status ?? e?.code;
      if (![429, 500, 503].includes(Number(status))) throw e;
      await new Promise((r) => setTimeout(r, 1000 * 2 ** i));
    }
  }
  throw lastErr;
}

async function embed(texts: string[], taskType: "RETRIEVAL_DOCUMENT" | "RETRIEVAL_QUERY") {
  const res = await withRetry(() =>
    getAI().models.embedContent({
      model: EMBED_MODEL,
      contents: texts,
      config: { taskType, outputDimensionality: EMBED_DIM },
    })
  );
  return (res.embeddings ?? []).map((e) => e.values ?? []);
}

export async function embedDocuments(texts: string[]): Promise<number[][]> {
  const out: number[][] = [];
  for (let i = 0; i < texts.length; i += 50) {
    out.push(...(await embed(texts.slice(i, i + 50), "RETRIEVAL_DOCUMENT")));
  }
  return out;
}

export async function embedQuery(text: string): Promise<number[]> {
  return (await embed([text], "RETRIEVAL_QUERY"))[0];
}