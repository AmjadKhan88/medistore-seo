import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { readingTime } from "@/lib/utils";
import { createMetadata } from "@/seo/metadata";
import { readBlogPosts } from "@/lib/db";
import { blogPosts as staticPosts } from "@/content/blog";
import type { BlogPost } from "@/content/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Pharmacy Management Blog | Medicine Inventory and Billing Guides",
  description:
    "SEO guides for medicine store management software, medical inventory systems, pharmacy POS, expiry tracking, reports, and billing workflows.",
  path: "/blog",
});

export default function BlogPage() {
  const dynamic_posts = readBlogPosts();
  const slugs = new Set(dynamic_posts.map((p) => p.slug));
  const posts: BlogPost[] = [
    ...dynamic_posts,
    ...staticPosts.filter((p) => !slugs.has(p.slug)),
  ];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides for medicine store owners and healthcare operators"
        description="Practical guides on pharmacy management software, inventory, billing, and expiry tracking."
      />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-3">
          {posts.length === 0 && (
            <p className="text-sm opacity-60 col-span-3">No posts yet.</p>
          )}
          {posts.map((post) => (
            <Card key={post.slug}>
              <p className="text-sm font-semibold text-[rgb(var(--primary))]">
                {post.category} / {readingTime(post.body)} min read
              </p>
              <h2 className="mt-3 text-xl font-bold">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 opacity-70">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[rgb(var(--muted))] px-2 py-1 text-xs"
                  >
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