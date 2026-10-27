import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { DocPageView } from "@/components/docs/doc-page-view";
import { allDocPages, docHref, findDocPage } from "@/content/documentation";
import { createMetadata } from "@/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allDocPages
    .filter((p) => p.slug !== "introduction")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = findDocPage(slug);
  if (!found) return {};
  return createMetadata({
    title: `${found.page.title} | EliteHMS Documentation`,
    description: found.page.description,
    path: docHref(slug),
    noIndex: !found.page.blocks?.length, // empty placeholder pages are not indexed
  });
}

export default async function DocumentationPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "introduction") redirect("/documentation"); // single canonical URL
  if (!findDocPage(slug)) notFound();
  return <DocPageView slug={slug} />;
}
