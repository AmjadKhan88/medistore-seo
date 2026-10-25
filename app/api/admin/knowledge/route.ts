import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { KnowledgeDoc } from "@/models/KnowledgeDoc";
import { extractPdfText } from "@/lib/pdf";
import { indexDocument } from "@/lib/rag";
import { getVectorCount } from "@/lib/pinecone";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_PDF_BYTES = 4 * 1024 * 1024; // Vercel request body limit is ~4.5 MB
const MAX_CHARS = 400_000;
const unauth = () => NextResponse.json({ error: "Unauthorized" }, { status: 401 });
const fail = (error: string, status = 400) => NextResponse.json({ error }, { status });

export async function GET() {
  if (!(await isAdminAuthenticated())) return unauth();
  await connectDB();
  const docs = await KnowledgeDoc.find().sort({ createdAt: -1 }).lean();
  const ready = docs.filter((d) => d.status === "ready");
  return NextResponse.json({
    docs,
    stats: {
      totalDocs: docs.length,
      readyDocs: ready.length,
      totalChunks: ready.reduce((s, d) => s + d.chunkCount, 0),
      pineconeVectors: await getVectorCount(),
    },
  });
}

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return unauth();

  let title = "";
  let text = "";
  let type: "pdf" | "text" = "text";
  let fileName: string | undefined;
  let fileSize: number | undefined;
  let pages: number | undefined;

  try {
    if ((req.headers.get("content-type") || "").includes("multipart/form-data")) {
      const form = await req.formData();
      const file = form.get("file");
      if (!(file instanceof File)) return fail("PDF file is required.");
      if (!file.name.toLowerCase().endsWith(".pdf")) return fail("Only PDF files are allowed.");
      if (file.size > MAX_PDF_BYTES) return fail("PDF is larger than 4 MB.", 413);
      const parsed = await extractPdfText(Buffer.from(await file.arrayBuffer()));
      type = "pdf";
      text = parsed.text;
      pages = parsed.pages;
      fileName = file.name;
      fileSize = file.size;
      title = String(form.get("title") || "").trim() || file.name.replace(/\.pdf$/i, "");
    } else {
      const body = await req.json();
      title = String(body.title || "").trim();
      text = String(body.content || "").trim();
      if (!title) return fail("Title is required.");
    }
  } catch (e: any) {
    return fail(`Could not read the file: ${e?.message || e}`, 422);
  }

  if (text.length < 30) return fail("Not enough text found (minimum 30 characters).");
  if (text.length > MAX_CHARS) return fail("Text is too large (max 400,000 characters).", 413);

  await connectDB();
  const contentHash = crypto.createHash("sha256").update(text).digest("hex");
  const dup = await KnowledgeDoc.findOne({ contentHash }).select("title").lean();
  if (dup) return fail(`This content already exists as "${dup.title}".`, 409);

  const doc = await KnowledgeDoc.create({
    title: title.slice(0, 200),
    type,
    fileName,
    fileSize,
    pages,
    content: text,
    contentHash,
    charCount: text.length,
    status: "processing",
  });

  await indexDocument(String(doc._id)); // sets ready / failed itself
  return NextResponse.json(await KnowledgeDoc.findById(doc._id).lean());
}