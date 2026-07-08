import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Doc } from "@/models/Doc";
import { docs as staticDocs } from "@/content/docs";

export async function GET() {
  try {
    await connectDB();
    const dbDocs = await Doc.find({ published: true })
      .sort({ order: 1, createdAt: -1 })
      .lean();

    const slugs = new Set(dbDocs.map((d) => d.slug));
    const merged = [
      ...dbDocs,
      ...staticDocs.filter((d) => !slugs.has(d.slug)),
    ];

    return NextResponse.json(merged);
  } catch {
    return NextResponse.json(staticDocs);
  }
}