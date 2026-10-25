import { extractText, getDocumentProxy } from "unpdf";
import { CHAT_MODEL, getAI } from "@/lib/gemini";

async function ocrWithGemini(buffer: Buffer): Promise<string> {
  const res = await getAI().models.generateContent({
    model: CHAT_MODEL,
    contents: [
      {
        role: "user",
        parts: [
          { inlineData: { mimeType: "application/pdf", data: buffer.toString("base64") } },
          {
            text: "Transcribe all text in this PDF as clean plain text. Keep headings, lists and tables readable. Output only the text, no commentary.",
          },
        ],
      },
    ],
  });
  return res.text ?? "";
}

export async function extractPdfText(buffer: Buffer): Promise<{ text: string; pages: number }> {
  const pdf = await getDocumentProxy(new Uint8Array(buffer));
  const { totalPages, text } = await extractText(pdf, { mergePages: true });
  let out = (Array.isArray(text) ? text.join("\n\n") : text).trim();
  // Scanned PDF (no text layer) → let Gemini read it
  if (out.length < 200) out = (await ocrWithGemini(buffer)).trim();
  return { text: out, pages: totalPages };
}