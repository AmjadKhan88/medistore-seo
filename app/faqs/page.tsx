import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { Card } from "@/components/ui/card";
import { faqs } from "@/content/site";
import { faqSchema } from "@/schemas/jsonld";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions | EliteHMS Hospital Software Pakistan",
  description:
    "Answers to common questions about EliteHMS — pricing, DRAP compliance, JazzCash/EasyPaisa payments, online booking, AI diagnosis, and mobile accessibility.",
  path: "/faqs",
});

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqSchema(faqs)} />
      <PageHero
        eyebrow="Knowledge Base & Support"
        title="Frequently Asked Questions"
        description="Everything you need to know about setting up EliteHMS in your pharmacy, clinic, or hospital."
      />
      <section className="section py-16">
        <div className="container max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <h2 className="text-lg font-bold">{faq.question}</h2>
              <p className="mt-2 text-sm leading-7 text-[rgb(var(--foreground)/0.76)]">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
