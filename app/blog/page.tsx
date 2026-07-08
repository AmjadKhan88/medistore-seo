import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { readingTime } from "@/lib/utils";
import { createMetadata } from "@/seo/metadata";
import { connectDB } from "@/lib/mongodb";
import { BlogPost } from "@/models/BlogPost";
import { blogPosts as staticPosts } from "@/content/blog";
import type { IBlogPost } from "@/models/BlogPost";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Pharmacy Management Blog | Medicine Inventory and Billing Guides",
  description:
    "Guides on medicine store management, pharmacy inventory, billing, expiry tracking, and medical POS.",
  path: "/blog",
});

async function getPosts(): Promise<IBlogPost[]> {
  try {
    await connectDB();
    const dbPosts = await BlogPost.find({ published: true })
      .sort({ date: -1 })
      .lean() as IBlogPost[];
    const slugs = new Set(dbPosts.map((p) => p.slug));
    return [...dbPosts, ...staticPosts.filter((p) => !slugs.has(p.slug))] as IBlogPost[];
  } catch {
    return staticPosts as IBlogPost[];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides for medicine store owners and healthcare operators"
        description="Practical guides on pharmacy management, inventory, billing, and expiry tracking."
      />
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {posts.length === 0 && (
            <p className="col-span-3 opacity-60 text-sm">No posts yet.</p>
          )}
          {posts.map((post) => (
            <Card key={post.slug}>
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover"}}
                />
              )}
              <p className="text-sm font-semibold text-[rgb(var(--primary))]">
                {post.category} · {readingTime(post.body)} min read
              </p>
              <h2 className="mt-3 text-xl font-bold leading-snug">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 opacity-70">{post.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-[rgb(var(--muted))] px-2 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-[rgb(var(--primary))]"
              >
                Read article <ArrowRight size={16} />
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}