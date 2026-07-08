import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { Card } from "@/components/ui/card";
import { connectDB } from "@/lib/mongodb";
import { BlogPost } from "@/models/BlogPost";
import { blogPosts as staticPosts } from "@/content/blog";
import type { IBlogPost } from "@/models/BlogPost";
import { readingTime } from "@/lib/utils";
import { blogPostingSchema } from "@/schemas/jsonld";
import { createMetadata } from "@/seo/metadata";
import Image from "next/image";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

async function getPost(slug: string): Promise<IBlogPost | null> {
  try {
    await connectDB();
    const post = await BlogPost.findOne({ slug, published: true }).lean() as IBlogPost | null;
    if (post) return post;
  } catch {}
  return (staticPosts.find((p) => p.slug === slug) as IBlogPost) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const headings = post.body
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => l.replace("## ", ""));

  return (
    <>
      <StructuredData data={blogPostingSchema(post as any)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="section pt-8">
        <div className="container grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <Card className="sticky top-24">
              <h2 className="font-bold">Table of contents</h2>
              <div className="mt-4 grid gap-2 text-sm opacity-70">
                {headings.map((h) => (
                  <a
                    key={h}
                    href={`#${h.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {h}
                  </a>
                ))}
              </div>
            </Card>
          </aside>

          <Card className="p-8">
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 10, marginBottom: 28 }}
              />
            )}
            <p className="text-sm font-semibold text-[rgb(var(--primary))]">
              {post.category} · {readingTime(post.body)} min read · {post.date}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight">{post.title}</h1>
            <p className="mt-4 text-lg leading-8 opacity-75">{post.description}</p>
            <div className="prose-site mt-8">
              {post.body
                .split("\n")
                .filter(Boolean)
                .map((line, i) => {
                  if (line.startsWith("## ")) {
                    const text = line.replace("## ", "");
                    return <h2 id={text.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={i}>{text}</h2>;
                  }
                  if (line.startsWith("### ")) {
                    return <h3 key={i}>{line.replace("### ", "")}</h3>;
                  }
                  return <p key={i}>{line}</p>;
                })}
            </div>
          </Card>
        </div>
      </article>
    </>
  );
}