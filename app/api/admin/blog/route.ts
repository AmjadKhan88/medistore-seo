export const dynamic = 'force-dynamic';
// If you are using Edge Runtime, also add:
export const runtime = 'nodejs';  // or 'edge', but nodejs is usually safer
import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import { BlogPost } from "@/models/BlogPost";
import { uploadImage, deleteImage } from "@/lib/cloudinary";

function unauth() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

// GET all posts (admin view — includes unpublished)
export async function GET() {
  if (!(await isAdminAuthenticated())) return unauth();
  await connectDB();
  const posts = await BlogPost.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(posts);
}

// POST — create or update
export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return unauth();

  const body = await req.json();
  const { coverImageBase64, ...data } = body;

  await connectDB();

  // If a new image was uploaded
  if (coverImageBase64) {
    // Delete old image from Cloudinary if updating
    if (data.coverImageId) {
      await deleteImage(data.coverImageId);
    }
    const { url, publicId } = await uploadImage(coverImageBase64);
    data.coverImage = url;
    data.coverImageId = publicId;
  }

  // Auto-generate slug if missing
  if (!data.slug && data.title) {
    data.slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  await BlogPost.findOneAndUpdate(
    { slug: data.slug },
    { $set: data },
    { upsert: true, new: true }
  );

  return NextResponse.json({ ok: true });
}

// DELETE
export async function DELETE(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return unauth();

  const { slug } = await req.json();
  await connectDB();

  const post = await BlogPost.findOne({ slug });
  if (post?.coverImageId) {
    await deleteImage(post.coverImageId);
  }

  await BlogPost.deleteOne({ slug });
  return NextResponse.json({ ok: true });
}