import type { Metadata } from "next";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { AppCta } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { pricingPlans, faqs } from "@/content/site";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "EliteHMS Pricing Plans Pakistan | Hospital & Pharmacy Software Subscription",
  description:
    "Transparent PKR pricing for EliteHMS — Pharmacy Basic (₨1,999), Pharmacy Pro (₨3,999), Clinic (₨5,999), Hospital Basic (₨10,999), Hospital Pro (₨20,999). Free 14-day trial.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple PKR Subscriptions"
        title="Plans for Medical Stores, Clinics, and Multi-Dept Hospitals"
        description="Try everything free for 14 days. No credit card required. Simple local payment options via JazzCash, EasyPaisa, or direct Bank Transfer."
      />

      <section className="section py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col justify-between ${
                  plan.popular ? "border-[rgb(var(--primary))] shadow-lg relative" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[rgb(var(--primary))] px-3 py-0.5 text-xs font-semibold text-white">
                    {plan.highlight}
                  </span>
                )}
                <div>
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <p className="mt-2 text-xs leading-5 text-[rgb(var(--foreground)/0.7)]">
                    {plan.description}
                  </p>
                  <div className="mt-4 text-4xl font-extrabold text-[rgb(var(--primary))]">
                    {plan.price}{" "}
                    <span className="text-xs font-normal text-[rgb(var(--foreground)/0.6)]">/{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[rgb(var(--primary))] shrink-0 mt-0.5" />
                        <span className="text-xs text-[rgb(var(--foreground)/0.8)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <AppCta
                    label={plan.cta}
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full justify-center"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Payment Method Notice */}
          <div className="mt-16 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold">Local Payment Options in Pakistan</h3>
            <p className="mt-2 text-sm text-[rgb(var(--foreground)/0.74)] leading-relaxed">
              We accept payments via <strong>JazzCash</strong>, <strong>EasyPaisa</strong>, and <strong>Direct Bank Transfer</strong>. After selecting your plan, send us your receipt via WhatsApp and your account will be activated within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs on Pricing Page */}
      <section className="section border-t border-[rgb(var(--border))] py-16 bg-[rgb(var(--card))]">
        <div className="container max-w-4xl">
          <SectionHeading title="Pricing & Subscription FAQs" description="Common questions about billing cycles, plan upgrades, and local payment methods." />
          <div className="mt-8 space-y-4">
            {faqs.slice(11, 15).map((faq) => (
              <Card key={faq.question} className="bg-[rgb(var(--background))]">
                <h3 className="font-bold text-base">{faq.question}</h3>
                <p className="mt-2 text-sm text-[rgb(var(--foreground)/0.74)]">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
