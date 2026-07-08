import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({ title: "Case Studies | Medicine Inventory Analytics", description: "Case studies for medical stores improving inventory accuracy, billing speed, expiry control, and reports.", path: "/case-studies" });

const cases = [
  ["Single-location pharmacy", "Reduced weekly expiry review from three hours to twenty minutes with batch alerts and product filters."],
  ["Clinic dispensary", "Improved patient medicine records and repeat purchase visibility for ongoing treatment workflows."],
  ["Hospital pharmacy", "Separated roles for stock intake, billing, reporting, and management review across a larger team."]
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="Case studies" title="Operational improvements for real medicine workflows" description="Use case-study pages to target long-tail pharmacy ERP, medical inventory analytics, and hospital pharmacy software searches." />
      <section className="section"><div className="container grid gap-4 md:grid-cols-3">{cases.map(([title, body]) => <Card key={title}><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 leading-7 text-[rgb(var(--foreground) / 0.74)]">{body}</p></Card>)}</div></section>
    </>
  );
}
