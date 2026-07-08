import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { readBlogPosts, writeBlogPosts } from "@/lib/db";

function guard() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET() {
  if (!(await isAdminAuthenticated())) return guard();
  return NextResponse.json(readBlogPosts());
}

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return guard();
  const post = await req.json();
  const posts = readBlogPosts();
  // Replace if slug exists, otherwise append
  const idx = posts.findIndex((p) => p.slug === post.slug);
  if (idx >= 0) posts[idx] = post;
  else posts.unshift(post);
  writeBlogPosts(posts);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return guard();
  const { slug } = await req.json();
  writeBlogPosts(readBlogPosts().filter((p) => p.slug !== slug));
  return NextResponse.json({ ok: true });
}