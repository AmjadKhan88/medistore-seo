import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { CHAT_MODEL, getAI } from "@/lib/gemini";
import { retrieve, type RetrievedChunk } from "@/lib/rag";
import { buildSystemPrompt } from "@/lib/chat-prompt";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const bodySchema = z.object({
  messages: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().min(1).max(2000) }))
    .min(1)
    .max(30),
});

const FALLBACK =
  "I couldn't generate a reply just now. Please rephrase your question or contact us on the [Contact page](/contact).";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`chat:${ip}`, 15, 60_000)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid request." }, { status: 400 });

const MEMORY_MESSAGES = 10; // 5 exchanges

const messages = parsed.data.messages.slice(-(MEMORY_MESSAGES + 1));
if (messages[messages.length - 1].role !== "user") {
  return NextResponse.json({ error: "Last message must be from the user." }, { status: 400 });
}

// Short follow-ups ("and the price?") borrow the user's previous questions
const userTurns = messages.filter((m) => m.role === "user").map((m) => m.content);
const question = userTurns[userTurns.length - 1];
const retrievalQuery =
  question.length < 80 && userTurns.length > 1 ? userTurns.slice(-3).join("\n") : question;

  let chunks: RetrievedChunk[] = [];
  try {
    chunks = (await retrieve(retrievalQuery)).slice(0, 6);
  } catch (e) {
    console.error("[chat] retrieval failed", e); // chat still works, just without the knowledge base
  }

  // Gemini wants user-first, alternating roles
  const contents: { role: "user" | "model"; parts: { text: string }[] }[] = [];
  for (const m of messages) {
    const role = m.role === "user" ? "user" : "model";
    const last = contents[contents.length - 1];
    if (last && last.role === role) last.parts[0].text += `\n\n${m.content}`;
    else contents.push({ role, parts: [{ text: m.content }] });
  }
  while (contents.length && contents[0].role !== "user") contents.shift();

  const systemInstruction = buildSystemPrompt(chunks);
  const sources = [...new Set(chunks.map((c) => c.title))].slice(0, 4);
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const result = await getAI().models.generateContentStream({
          model: CHAT_MODEL,
          contents,
          config: { systemInstruction, temperature: 0.3, maxOutputTokens: 2048 },
        });
        let sent = false;
        for await (const chunk of result) {
          if (chunk.text) {
            sent = true;
            controller.enqueue(encoder.encode(chunk.text));
          }
        }
        if (!sent) controller.enqueue(encoder.encode(FALLBACK));
      } catch (e) {
        console.error("[chat] generation failed", e);
        controller.enqueue(encoder.encode(`\n\n${FALLBACK}`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
      "X-Sources": encodeURIComponent(JSON.stringify(sources)),
    },
  });
}