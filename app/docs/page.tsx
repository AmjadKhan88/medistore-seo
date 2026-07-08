import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { readDocs } from "@/lib/db";
import { docs as staticDocs } from "@/content/docs";
import type { DocPage } from "@/content/docs";
import { createMetadata } from "@/seo/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({
  title: "Documentation | MediStore Cloud",
  description:
    "Guides on how to use MediStore — inventory, billing, expiry tracking, reports, patient records and more.",
  path: "/docs",
});

export default function DocsPage() {
  const dynamic_docs = readDocs();
  const slugs = new Set(dynamic_docs.map((d) => d.slug));
  const allDocs: DocPage[] = [
    ...dynamic_docs,
    ...staticDocs.filter((d) => !slugs.has(d.slug)),
  ];

  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Learn how to use MediStore"
        description="Step-by-step guides on every feature — from getting started to advanced reporting."
      />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-3">
          {allDocs.length === 0 && (
            <p className="text-sm opacity-60 col-span-3">No docs yet.</p>
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
              <p className="mt-3 text-sm leading-7 opacity-70">
                {doc.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}