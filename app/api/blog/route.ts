import { NextResponse } from "next/server";
import { readBlogPosts } from "@/lib/db";
import { blogPosts as staticPosts } from "@/content/blog";

export async function GET() {
  const dynamic = readBlogPosts();
  // Merge: dynamic posts first, then static fallback (no duplicates)
  const slugs = new Set(dynamic.map((p) => p.slug));
  const merged = [...dynamic, ...staticPosts.filter((p) => !slugs.has(p.slug))];
  return NextResponse.json(merged);
}