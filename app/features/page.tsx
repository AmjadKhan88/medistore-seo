import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { featureCategories, featuresByCategory, categoryIcons } from "@/content/features";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "EliteHMS Feature Directory — All 35+ Hospital & Pharmacy Modules",
  description:
    "Complete documentation of EliteHMS modules — Pharmacy Inventory, IPD/OPD Management, EMR, Lab Tests, Blood Bank, OT Scheduling, AI Diagnosis, and DRAP Compliance.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Complete System Modules"
        title="35+ Hospital & Pharmacy Management Features"
        description="Detailed workflows, business logic, and setup guides for every single module in EliteHMS. Designed to streamline healthcare operations across Pakistan."
      />

      <section className="section py-16">
        <div className="container space-y-16">
          {featureCategories.map((cat) => {
            const catFeatures = featuresByCategory[cat] || [];
            return (
              <div key={cat} id={cat.toLowerCase().replace(/[^a-z0-0]+/g, "-")}>
                <div className="flex items-center gap-3 mb-6 border-b border-[rgb(var(--border))] pb-4">
                  <span className="text-2xl">{categoryIcons[cat]}</span>
                  <h2 className="font-[var(--font-space)] text-2xl font-bold md:text-3xl">{cat}</h2>
                  <span className="ml-auto rounded-full bg-[rgb(var(--primary)/0.1)] px-3 py-1 text-xs font-semibold text-[rgb(var(--primary))]">
                    {catFeatures.length} Modules
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {catFeatures.map((f) => {
                    const Icon = f.icon;
                    return (
                      <Card key={f.slug} className="flex flex-col justify-between hover:border-[rgb(var(--primary))] transition-all">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="rounded-lg bg-[rgb(var(--primary)/0.1)] p-2.5 text-[rgb(var(--primary))]">
                              <Icon size={20} />
                            </div>
                            <span className="text-[10px] font-semibold uppercase tracking-wider bg-[rgb(var(--foreground)/0.06)] px-2 py-0.5 rounded">
                              {f.plan}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold">{f.title}</h3>
                          <p className="mt-2 text-xs leading-5 text-[rgb(var(--foreground)/0.7)]">
                            {f.tagline}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-[rgb(var(--border))] flex items-center justify-between">
                          <Link
                            href={`/features/${f.slug}`}
                            className="text-xs font-semibold text-[rgb(var(--primary))] hover:underline"
                          >
                            Read Full Workflow →
                          </Link>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
