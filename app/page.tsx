import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, MapPin, Pill, ShieldCheck, Sparkles, Star, UserCheck } from "lucide-react";
import { AppCta } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { features, pricingPlans, faqs, testimonials, stats } from "@/content/site";
import { siteConfig } from "@/lib/env";
import { createMetadata } from "@/seo/metadata";
import { StructuredData } from "@/components/structured-data";
import { faqSchema, softwareSchema } from "@/schemas/jsonld";

export const metadata: Metadata = createMetadata({
  title: "EliteHMS — #1 Hospital & Pharmacy Management System Pakistan",
  description:
    "Full-stack Hospital Management System (HMS) for Pakistan — Pharmacy Billing, IPD/OPD, EMR, Lab Tests, Blood Bank, OT Scheduling, AI Diagnosis, and DRAP Compliance.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={[softwareSchema(), faqSchema(faqs)]} />

      {/* Hero Section */}
      <section className="grid-bg relative overflow-hidden py-16 md:py-28 border-b border-[rgb(var(--border))]">
        <div className="container relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--primary)/0.2)] bg-[rgb(var(--primary)/0.08)] px-4 py-1.5 text-xs font-semibold text-[rgb(var(--primary))] mb-6">
            <Sparkles size={14} />
            <span>Built for Pakistani Healthcare Market • DRAP & FBR Ready</span>
          </div>
          <h1 className="font-[var(--font-space)] text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-tight">
            Complete Hospital & Pharmacy <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[rgb(var(--primary))] to-teal-500 bg-clip-text text-transparent">
              Management System
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[rgb(var(--foreground)/0.76)] md:text-xl">
            Single platform for small pharmacies, clinics, and multi-department hospitals. From IPD/OPD queue and digital MAR sheets to AI diagnosis assistant and DRAP compliance.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AppCta label="Start 14-Day Free Trial" size="lg" />
            <AppCta label="View Live Features" variant="outline" size="lg" href="/features" />
          </div>

          {/* Key Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 shadow-sm md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-2">
                <div className="font-[var(--font-space)] text-3xl font-bold text-[rgb(var(--primary))] md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-[rgb(var(--foreground)/0.68)] md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section bg-[rgb(var(--background))] py-20">
        <div className="container">
          <SectionHeading
            title="Core Platform Modules"
            description="Explore the features built to streamline hospital workflows, ensure regulatory compliance, and eliminate operational bottlenecks."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="group relative flex flex-col justify-between transition-all hover:border-[rgb(var(--primary))] hover:shadow-md">
                  <div>
                    <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[rgb(var(--primary)/0.1)] p-3 text-[rgb(var(--primary))]">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[rgb(var(--foreground)/0.72)]">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[rgb(var(--border))]">
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[rgb(var(--primary))] group-hover:gap-2.5 transition-all"
                    >
                      <span>Explore workflow details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--primary)/0.1)] px-6 py-3 text-sm font-semibold text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary)/0.2)] transition-colors"
            >
              <span>View All 35+ System Modules</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions / Segment Banner */}
      <section className="section border-y border-[rgb(var(--border))] bg-[rgb(var(--card))] py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-[rgb(var(--border))] p-6 bg-[rgb(var(--background))]">
              <h3 className="text-xl font-bold">For Retail Pharmacies</h3>
              <p className="mt-2 text-sm text-[rgb(var(--foreground)/0.72)]">
                Barcode billing, expiry alerts, purchase orders, reorder limits, and WhatsApp invoices.
              </p>
              <Link href="/solutions/pharmacy" className="mt-4 inline-flex text-xs font-bold text-[rgb(var(--primary))]">
                Pharmacy Solutions →
              </Link>
            </div>
            <div className="rounded-xl border border-[rgb(var(--border))] p-6 bg-[rgb(var(--background))]">
              <h3 className="text-xl font-bold">For OPD Clinics</h3>
              <p className="mt-2 text-sm text-[rgb(var(--foreground)/0.72)]">
                Token queue system with TV display, online booking, EMR timeline, and digital prescriptions.
              </p>
              <Link href="/solutions/clinic" className="mt-4 inline-flex text-xs font-bold text-[rgb(var(--primary))]">
                Clinic Solutions →
              </Link>
            </div>
            <div className="rounded-xl border border-[rgb(var(--border))] p-6 bg-[rgb(var(--background))]">
              <h3 className="text-xl font-bold">For Multi-Dept Hospitals</h3>
              <p className="mt-2 text-sm text-[rgb(var(--foreground)/0.72)]">
                IPD management, MAR sheets, OT scheduling, blood bank, insurance panels, and DRAP reports.
              </p>
              <Link href="/solutions/hospital" className="mt-4 inline-flex text-xs font-bold text-[rgb(var(--primary))]">
                Hospital Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="section py-20">
        <div className="container">
          <SectionHeading
            title="Flexible Pricing Tiers for Every Facility"
            description="Start free for 14 days. Scale as your hospital or pharmacy grows with straightforward PKR plans."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.slice(0, 3).map((plan) => (
              <Card key={plan.name} className={`flex flex-col justify-between ${plan.popular ? "border-[rgb(var(--primary))] shadow-lg relative" : ""}`}>
                {plan.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[rgb(var(--primary))] px-3 py-0.5 text-xs font-semibold text-white">
                    {plan.highlight}
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-xs text-[rgb(var(--foreground)/0.7)]">{plan.description}</p>
                  <div className="mt-4 text-3xl font-extrabold text-[rgb(var(--primary))]">
                    {plan.price}{" "}
                    <span className="text-xs font-normal text-[rgb(var(--foreground)/0.6)]">/{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[rgb(var(--primary))]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <AppCta label={plan.cta} variant={plan.popular ? "default" : "outline"} className="w-full justify-center" />
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="text-sm font-semibold text-[rgb(var(--primary))] hover:underline">
              Compare all 6 plans and feature matrix →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust, Security & Compliance Section */}
      <section className="section border-t border-[rgb(var(--border))] bg-[rgb(var(--card))] py-20">
        <div className="container max-w-5xl">
          <SectionHeading
            title="Enterprise Security & Regulatory Compliance"
            description="Your medical data is protected with 256-bit SSL encryption, 2FA authentication, role-based access control, and complete legal transparency."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="bg-[rgb(var(--background))]">
              <div className="mb-3 text-[rgb(var(--primary))]">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-bold text-lg">DRAP & FBR Compliant</h3>
              <p className="mt-2 text-xs leading-5 text-[rgb(var(--foreground)/0.74)]">
                Form-10 Schedule H controlled drug registers, expiry destruction records with pharmacist PCP numbers, and FBR GST reconciliation exports.
              </p>
            </Card>

            <Card className="bg-[rgb(var(--background))]">
              <div className="mb-3 text-[rgb(var(--primary))]">
                <Lock size={28} />
              </div>
              <h3 className="font-bold text-lg">256-Bit SSL & 2FA Security</h3>
              <p className="mt-2 text-xs leading-5 text-[rgb(var(--foreground)/0.74)]">
                JWT access tokens, 30-day httpOnly session refresh cookies, Google Authenticator 2FA, and remote device revocation.
              </p>
            </Card>

            <Card className="bg-[rgb(var(--background))]">
              <div className="mb-3 text-[rgb(var(--primary))]">
                <UserCheck size={28} />
              </div>
              <h3 className="font-bold text-lg">100% Verified Business</h3>
              <p className="mt-2 text-xs leading-5 text-[rgb(var(--foreground)/0.74)]">
                Developed and supported by <strong>{siteConfig.author.name}</strong> ({siteConfig.officeLocation}). Full legal Privacy Policy & Terms of Service provided.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-t border-[rgb(var(--border))] bg-[rgb(var(--background))] py-20">
        <div className="container max-w-5xl">
          <SectionHeading
            title="Trusted by Healthcare Leaders"
            description="See how EliteHMS helps medical centers across Pakistan elevate patient care and streamline business operations."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col justify-between bg-[rgb(var(--card))]">
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm italic leading-6 text-[rgb(var(--foreground)/0.78)]">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-[rgb(var(--border))]">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-[rgb(var(--foreground)/0.6)]">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section py-20">
        <div className="container max-w-4xl">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Have questions about onboarding, DRAP compliance, or hardware requirements? We've got answers."
          />
          <div className="mt-12 space-y-4">
            {faqs.slice(0, 6).map((faq) => (
              <Card key={faq.question}>
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-[rgb(var(--foreground)/0.74)]">{faq.answer}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faqs" className="text-sm font-semibold text-[rgb(var(--primary))] hover:underline">
              View all 15+ answered FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
