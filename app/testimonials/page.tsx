import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/content/site";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Testimonials | Medical Store Dashboard Customers",
  description: "Testimonials from pharmacy and clinic teams using medicine inventory, billing, expiry tracking, analytics, and reports.",
  path: "/testimonials"
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Real pharmacy teams, clearer medicine operations" description="Customer stories for medical store dashboards, pharmacy inventory control, expiry alerts, and billing confidence." />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <div className="mb-4 flex gap-1 text-[rgb(var(--accent))]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>
              <p className="leading-7">&ldquo;{item.quote}&rdquo;</p>
              <h2 className="mt-5 font-bold">{item.name}</h2>
              <p className="text-sm text-[rgb(var(--foreground) / 0.64)]">{item.role}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
