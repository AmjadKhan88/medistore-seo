import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { integrations } from "@/content/site";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({ title: "Pharmacy Software Integrations | Barcode, Printers, Analytics", description: "Integration page for barcode scanners, thermal printers, invoice printers, accounting exports, WhatsApp reminders, payments, suppliers, and analytics.", path: "/integrations" });

export default function IntegrationsPage() {
  return (
    <>
      <PageHero eyebrow="Integrations" title="Connect pharmacy workflows to the tools already on your counter" description="Position the product for medical POS hardware, reporting exports, supplier workflows, reminders, and analytics searches." />
      <section className="section"><div className="container grid gap-4 md:grid-cols-4">{integrations.map((item) => <Card key={item}><h2 className="text-lg font-bold">{item}</h2><p className="mt-3 text-sm leading-7 text-[rgb(var(--foreground) / 0.72)]">Designed for practical medicine shop workflows and future API or connector expansion.</p></Card>)}</div></section>
    </>
  );
}
