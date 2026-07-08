import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact | Pharmacy Management Software Demo",
  description: "Contact the medicine store management software team for pharmacy POS, inventory, billing, expiry tracking, reports, and SaaS onboarding.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to us about your pharmacy workflow" description="Ask about medicine inventory, medical POS, billing, reports, integrations, and the best way to connect this SEO website to your existing app." />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <h2 className="text-2xl font-bold">Sales and implementation</h2>
            <p className="mt-4 leading-7 text-[rgb(var(--foreground) / 0.74)]">Use this validated form as the starting point for a secure API route, CRM integration, email provider, or helpdesk workflow. The honeypot field is ready for basic spam filtering.</p>
          </Card>
          <Card><ContactForm /></Card>
        </div>
      </section>
    </>
  );
}
