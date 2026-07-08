import { NextResponse } from "next/server";
import { readDocs } from "@/lib/db";
import { docs as staticDocs } from "@/content/docs";

export async function GET() {
  const dynamic = readDocs();
  const slugs = new Set(dynamic.map((d) => d.slug));
  const merged = [...dynamic, ...staticDocs.filter((d) => !slugs.has(d.slug))];
  return NextResponse.json(merged);
}