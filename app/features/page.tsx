import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { features } from "@/content/site";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pharmacy Management Software Features | Inventory, Billing, Reports",
  description: "Explore medicine inventory, billing, expiry alerts, patient records, supplier tracking, analytics, reports, barcode support, and secure medical POS features.",
  path: "/features"
});

export default function FeaturesPage() {
  return (
    <>
      <PageHero eyebrow="Features" title="Everything a medicine store needs to manage inventory, billing, and reports" description="Rank for feature-specific pharmacy software searches while explaining exactly how your existing management application supports daily medical shop operations." />
      <section className="section">
        <div className="container">
          <SectionHeading title="Feature library" description="Each capability is written for pharmacy owners, clinic dispensaries, hospital pharmacy teams, and medical shop operators searching for practical software." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="h-full">
                  <Icon className="mb-4 text-[rgb(var(--primary))]" />
                  <h2 className="text-xl font-bold">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--foreground) / 0.72)]">{feature.description}</p>
                  <p className="mt-4 text-sm leading-7 text-[rgb(var(--foreground) / 0.72)]">
                    This workflow supports pharmacy management software searches because it connects operational pain with visible product value: cleaner records, faster counter service, fewer stock surprises, and better management decisions.
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
