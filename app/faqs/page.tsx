import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { Card } from "@/components/ui/card";
import { faqs } from "@/content/site";
import { faqSchema } from "@/schemas/jsonld";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({ title: "FAQs | Medicine Store Management Software", description: "Questions about the SEO website, dashboard redirects, rich snippets, CMS readiness, and Vercel deployment.", path: "/faqs" });

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqSchema(faqs)} />
      <PageHero eyebrow="FAQs" title="Answers for pharmacy software buyers and site operators" description="Structured for FAQ rich snippets and practical buyer confidence." />
      <section className="section">
        <div className="container max-w-4xl grid gap-4">
          {faqs.map((faq) => <Card key={faq.question}><h2 className="text-xl font-bold">{faq.question}</h2><p className="mt-3 leading-7 text-[rgb(var(--foreground) / 0.74)]">{faq.answer}</p></Card>)}
        </div>
      </section>
    </>
  );
}
