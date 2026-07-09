import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { connectDB } from "@/lib/mongodb";
import { Doc } from "@/models/Doc";
import { docs as staticDocs } from "@/content/docs";
import type { IDoc } from "@/models/Doc";
import { createMetadata } from "@/seo/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Documentation | MediStore Cloud",
  description: "How to use MediStore — inventory, billing, expiry tracking, reports, and patient records.",
  path: "/docs",
});

async function getDocs(): Promise<IDoc[]> {
  try {
    await connectDB();
    const dbDocs = await Doc.find({ published: true }).sort({ order: 1, createdAt: -1 }).lean() as IDoc[];
    const slugs = new Set(dbDocs.map((d) => d.slug));
    return [...dbDocs, ...staticDocs.filter((d) => !slugs.has(d.slug))] as IDoc[];
  } catch {
    return staticDocs as IDoc[];
  }
}

export default async function DocsPage() {
  const allDocs = await getDocs();

  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Learn how to use EliteHMS"
        description="Step-by-step guides on every feature — from getting started to advanced reporting."
      />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-3">
          {allDocs.length === 0 && (
            <p className="col-span-3 text-sm opacity-60">No docs yet.</p>
          )}
          {allDocs.map((doc) => (
            <Card key={doc.slug}>
              <h2 className="text-xl font-bold">
                <Link
                  href={`/docs/${doc.slug}`}
                  className="hover:text-[rgb(var(--primary))] transition-colors"
                >
                  {doc.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-7 opacity-70">{doc.description}</p>
              <p className="mt-3 text-xs opacity-50">{doc.sections.length} sections</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}