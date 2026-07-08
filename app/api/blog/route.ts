import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { BlogPost } from "@/models/BlogPost";
import { blogPosts as staticPosts } from "@/content/blog";

export async function GET() {
  try {
    await connectDB();
    const dbPosts = await BlogPost.find({ published: true })
      .sort({ date: -1 })
      .lean();

    // Merge DB posts with static fallback (no slug duplicates)
    const slugs = new Set(dbPosts.map((p) => p.slug));
    const merged = [
      ...dbPosts,
      ...staticPosts.filter((p) => !slugs.has(p.slug)),
    ];

    return NextResponse.json(merged);
  } catch {
    // If DB is unavailable fall back to static
    return NextResponse.json(staticPosts);
  }
}