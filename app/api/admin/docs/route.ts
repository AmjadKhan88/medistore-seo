import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { readDocs, writeDocs } from "@/lib/db";

function guard() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  if (!(await isAdminAuthenticated())) return guard();
  return NextResponse.json(readDocs());
}

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return guard();
  const doc = await req.json();
  const docs = readDocs();
  const idx = docs.findIndex((d) => d.slug === doc.slug);
  if (idx >= 0) docs[idx] = doc;
  else docs.unshift(doc);
  writeDocs(docs);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return guard();
  const { slug } = await req.json();
  writeDocs(readDocs().filter((d) => d.slug !== slug));
  return NextResponse.json({ ok: true });
}