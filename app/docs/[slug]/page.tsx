import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { connectDB } from "@/lib/mongodb";
import { Doc } from "@/models/Doc";
import { docs as staticDocs } from "@/content/docs";
import type { IDoc } from "@/models/Doc";
import { createMetadata } from "@/seo/metadata";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

async function getDoc(slug: string): Promise<IDoc | null> {
  try {
    await connectDB();
    const doc = await Doc.findOne({ slug, published: true }).lean() as IDoc | null;
    if (doc) return doc;
  } catch {}
  return (staticDocs.find((d) => d.slug === slug) as IDoc) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDoc(slug);
  if (!doc) return {};
  return createMetadata({
    title: `${doc.title} | Documentation`,
    description: doc.description,
    path: `/docs/${doc.slug}`,
  });
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = await getDoc(slug);
  if (!doc) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Docs", path: "/docs" },
          { name: doc.title, path: `/docs/${doc.slug}` },
        ]}
      />
      <section className="section pt-8">
        <div className="container grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <Card className="sticky top-24">
              <h2 className="font-bold">Sections</h2>
              <div className="mt-4 grid gap-2 text-sm opacity-70">
                {doc.sections.map((s) => (
                  <a
                    key={s.title}
                    href={`#${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="hover:opacity-100 transition-opacity"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </Card>
          </aside>
          <Card className="p-8">
            <h1 className="text-4xl font-bold">{doc.title}</h1>
            <p className="mt-4 text-lg leading-8 opacity-75">{doc.description}</p>
            <div className="prose-site mt-8">
              {doc.sections.map((section) => (
                <section
                  key={section.title}
                  id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                >
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.code && (
                    <pre className="overflow-x-auto rounded-md bg-[rgb(var(--muted))] p-4 text-sm">
                      <code>{section.code}</code>
                    </pre>
                  )}
                </section>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}