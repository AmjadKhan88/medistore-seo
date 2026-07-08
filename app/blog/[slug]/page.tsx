import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { Card } from "@/components/ui/card";
import { readBlogPosts } from "@/lib/db";
import { blogPosts as staticPosts } from "@/content/blog";
import type { BlogPost } from "@/content/blog";
import { readingTime } from "@/lib/utils";
import { blogPostingSchema } from "@/schemas/jsonld";
import { createMetadata } from "@/seo/metadata";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

function getAllPosts(): BlogPost[] {
  const dynamic = readBlogPosts();
  const slugs = new Set(dynamic.map((p) => p.slug));
  return [...dynamic, ...staticPosts.filter((p) => !slugs.has(p.slug))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
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
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  const headings = post.body
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", ""));

  return (
    <>
      <StructuredData data={blogPostingSchema(post)} />
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
                {headings.map((heading) => (
                  <a
                    key={heading}
                    href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {heading}
                  </a>
                ))}
              </div>
            </Card>
          </aside>
          <Card className="p-8">
            <p className="text-sm font-semibold text-[rgb(var(--primary))]">
              {post.category} / {readingTime(post.body)} min read / {post.date}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-8 opacity-75">
              {post.description}
            </p>
            <div className="prose-site mt-8">
              {post.body
                .split("\n")
                .filter(Boolean)
                .map((line, i) => {
                  if (line.startsWith("## ")) {
                    const text = line.replace("## ", "");
                    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                    return (
                      <h2 id={id} key={i}>
                        {text}
                      </h2>
                    );
                  }
                  if (line.startsWith("### ")) {
                    const text = line.replace("### ", "");
                    return <h3 key={i}>{text}</h3>;
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