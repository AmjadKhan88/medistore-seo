import crypto from "node:crypto";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { KnowledgeDoc } from "@/models/KnowledgeDoc";
import { indexDocument, removeVectors } from "@/lib/rag";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

type Ctx = { params: Promise<{ id: string }> };
const unauth = () => NextResponse.json({ error: "Unauthorized" }, { status: 401 });
const fail = (error: string, status = 400) => NextResponse.json({ error }, { status });

// Full doc incl. text (for the edit modal)
export async function GET(_req: NextRequest, { params }: Ctx) {
  if (!(await isAdminAuthenticated())) return unauth();
  const { id } = await params;
  if (!isValidObjectId(id)) return fail("Invalid id.");
  await connectDB();
  const doc = await KnowledgeDoc.findById(id).select("+content").lean();
  return doc ? NextResponse.json(doc) : fail("Not found.", 404);
}

/**
 * body: { title?, enabled?, content?, action?: "reindex" | "unindex" }
 *  - content changed  → re-embeds automatically
 *  - action unindex   → deletes the vectors from Pinecone, keeps the text in MongoDB
 */
export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!(await isAdminAuthenticated())) return unauth();
  const { id } = await params;
  if (!isValidObjectId(id)) return fail("Invalid id.");
  const body = await req.json();

  await connectDB();
  const doc = await KnowledgeDoc.findById(id).select("+content");
  if (!doc) return fail("Not found.", 404);

  let contentChanged = false;
  if (typeof body.title === "string" && body.title.trim()) doc.title = body.title.trim().slice(0, 200);
  if (typeof body.enabled === "boolean") doc.enabled = body.enabled;
  if (typeof body.content === "string" && body.content.trim() !== doc.content) {
    const text = body.content.trim();
    if (text.length < 30) return fail("Not enough text (minimum 30 characters).");
    if (text.length > 400_000) return fail("Text is too large.", 413);
    doc.content = text;
    doc.charCount = text.length;
    doc.contentHash = crypto.createHash("sha256").update(text).digest("hex");
    contentChanged = true;
  }
  await doc.save();

  try {
    if (body.action === "unindex") {
      await removeVectors(id, doc.chunkCount);
      doc.chunkCount = 0;
      doc.status = "unindexed";
      await doc.save();
    } else if (contentChanged || body.action === "reindex") {
      await indexDocument(id);
    }
  } catch (e: any) {
    return fail(e?.message || "Operation failed.", 500);
  }
  return NextResponse.json(await KnowledgeDoc.findById(id).lean());
}

export async function DELETE(_req: NextRequest, { params }: Ctx) {
  if (!(await isAdminAuthenticated())) return unauth();
  const { id } = await params;
  if (!isValidObjectId(id)) return fail("Invalid id.");
  await connectDB();
  const doc = await KnowledgeDoc.findById(id).select("chunkCount");
  if (!doc) return fail("Not found.", 404);
  try {
    await removeVectors(id, doc.chunkCount); // Pinecone first; if it fails we keep the record and can retry
  } catch (e: any) {
    return fail(`Could not delete embeddings: ${e?.message || e}`, 500);
  }
  await KnowledgeDoc.deleteOne({ _id: id });
  return NextResponse.json({ ok: true });
}