import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { AppCta } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { pricingPlans } from "@/content/site";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Medicine Store Software Pricing | Pharmacy POS Plans",
  description: "Transparent pricing page for medicine store management software, pharmacy POS, medical inventory analytics, expiry tracking, and reports.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Plans for medical shops, clinics, and hospital pharmacies" description="Use this page to position your SaaS pricing clearly while every CTA routes into the already deployed management app." />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-[rgb(var(--primary))] shadow-lg" : ""}>
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--foreground) / 0.72)]">{plan.description}</p>
              <div className="mt-5 text-4xl font-bold">{plan.price}</div>
              <ul className="mt-6 grid gap-3 text-sm">
                {plan.features.map((feature) => <li key={feature} className="flex gap-2"><CheckCircle2 size={18} className="text-[rgb(var(--primary))]" />{feature}</li>)}
              </ul>
              <div className="mt-8"><AppCta label="Start Free" variant={plan.popular ? "default" : "outline"} /></div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
