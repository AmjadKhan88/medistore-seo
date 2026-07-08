export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { Doc } from "@/models/Doc";

function unauth() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  if (!(await isAdminAuthenticated())) return unauth();
  await connectDB();
  const docs = await Doc.find().sort({ order: 1, createdAt: -1 }).lean();
  return NextResponse.json(docs);
}

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return unauth();

  const data = await req.json();

  if (!data.slug && data.title) {
    data.slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  await connectDB();
  await Doc.findOneAndUpdate(
    { slug: data.slug },
    { $set: data },
    { upsert: true, new: true }
  );

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return unauth();
  const { slug } = await req.json();
  await connectDB();
  await Doc.deleteOne({ slug });
  return NextResponse.json({ ok: true });
}