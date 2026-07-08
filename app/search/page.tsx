import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/content/blog";
import { docs } from "@/content/docs";
import { features } from "@/content/site";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({ title: "Search | Medicine Store Software", description: "Search index page for pharmacy software features, docs, and blog resources.", path: "/search" });

export default function SearchPage() {
  const results = [
    ...features.slice(0, 6).map((item) => ({ title: item.title, href: "/features", description: item.description })),
    ...blogPosts.map((item) => ({ title: item.title, href: `/blog/${item.slug}`, description: item.description })),
    ...docs.map((item) => ({ title: item.title, href: `/docs/${item.slug}`, description: item.description }))
  ];
  return (
    <>
      <PageHero eyebrow="Search" title="Find pharmacy software resources" description="A crawlable search surface for features, documentation, guides, and high-intent product pages." />
      <section className="section"><div className="container grid gap-4 md:grid-cols-2">{results.map((result) => <Card key={`${result.href}-${result.title}`}><h2 className="text-xl font-bold"><Link href={result.href}>{result.title}</Link></h2><p className="mt-3 text-sm leading-7 text-[rgb(var(--foreground) / 0.72)]">{result.description}</p></Card>)}</div></section>
    </>
  );
}
