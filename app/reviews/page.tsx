import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/content/site";
import { reviewSchema } from "@/schemas/jsonld";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({ title: "Reviews | Pharmacy Management Software", description: "Customer reviews for medicine inventory, medical billing, expiry tracking, pharmacy analytics, and reports.", path: "/reviews" });

export default function ReviewsPage() {
  return (
    <>
      <StructuredData data={reviewSchema()} />
      <PageHero eyebrow="Reviews" title="Pharmacy teams trust clearer stock, billing, and reporting" description="Review content supports trust signals, commercial SEO, and sales confidence." />
      <section className="section"><div className="container grid gap-4 md:grid-cols-3">{testimonials.map((item) => <Card key={item.name}><div className="mb-4 flex gap-1 text-[rgb(var(--accent))]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div><p className="leading-7">&ldquo;{item.quote}&rdquo;</p><h2 className="mt-5 font-bold">{item.name}</h2><p className="text-sm text-[rgb(var(--foreground) / 0.64)]">{item.role}</p></Card>)}</div></section>
    </>
  );
}
