import type { Metadata } from "next";
import Link from "next/link";
import { AppCta } from "@/components/cta-link";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/env";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "About EliteHMS — Full-Stack Hospital & Pharmacy Management System Pakistan",
  description:
    "EliteHMS is a complete healthcare management platform built for Pakistani pharmacies, clinics, and hospitals. Features include inventory, billing, IPD, OPD, AI diagnosis, and real-time bed management.",
  path: "/about",
  keywords: [
    "hospital management system Pakistan",
    "pharmacy software Pakistan",
    "healthcare management system",
    "clinic management software",
    "hospital ERP Pakistan",
    "IPD management system",
    "pharmacy billing software",
    "medical inventory management",
    "AI diagnosis assistant",
    "patient management system",
    "DRAP compliance software",
    "hospital bed management",
    "OPD queue management",
    "prescription OCR scanner",
    "healthcare SaaS Pakistan",
  ],
});

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EliteHMS",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  description:
    "EliteHMS is a complete hospital and pharmacy management system built for Pakistani healthcare providers. Features include medicine inventory, billing, IPD/OPD management, AI diagnosis, prescription OCR, bed management, and real-time analytics.",
  url: "https://app.elitehms.online",
  author: {
    "@type": "Person",
    name: "Amjad Ullah",
    url: "www.linkedin.com/in/amjad-ullah-baa484246",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="About EliteHMS"
        title="Pakistan's Complete Hospital & Pharmacy Management System"
        description="EliteHMS is a full-stack healthcare SaaS platform built to digitize pharmacies, clinics, and hospitals across Pakistan. From inventory management to AI-powered diagnosis — everything in one place."
      />

      <div className="container max-w-4xl py-16 space-y-12">
        {/* Vision Section */}
        <ContentBlock title="Why EliteHMS Exists">
          <p className="text-base leading-8 text-[rgb(var(--foreground)/0.8)]">
            Healthcare facilities in Pakistan face unique operational challenges. Manual stock keeping leads to expired medicine sales. Chaotic outpatient queues frustrate patients. Fragmented paper-based medical records delay critical decisions. Lab alerts arrive too late. DRAP audits become a nightmare.
          </p>
          <p className="mt-4 text-base leading-8 text-[rgb(var(--foreground)/0.8)]">
            EliteHMS solves all of these challenges under one unified platform. Built natively for Pakistani workflows with support for local payment methods (JazzCash, EasyPaisa), FBR income tax slabs, EOBI compliance, and DRAP controlled drug registration.
          </p>
          <p className="mt-4 text-base leading-8 text-[rgb(var(--foreground)/0.8)]">
            From the moment a patient walks in to the moment they are discharged, EliteHMS tracks every interaction, every medicine administered, every test ordered, and every invoice generated — creating a complete digital footprint that improves patient care and operational efficiency.
          </p>
        </ContentBlock>

        {/* Features Overview */}
        <section className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
          <h2 className="text-2xl font-bold font-[var(--font-space)] mb-4">Complete Healthcare Management</h2>
          <p className="text-sm text-[rgb(var(--foreground)/0.7)] mb-6">
            EliteHMS covers everything from a small pharmacy to a multi-department hospital — all in one platform.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "💊", label: "Medicine Inventory & Expiry Alerts" },
              { icon: "🧾", label: "Billing & Invoices with Partial Payments" },
              { icon: "👤", label: "Patient Management with Allergy Alerts" },
              { icon: "🛏", label: "Ward & Bed Management (Color-Coded)" },
              { icon: "💉", label: "IPD Management with MAR Sheets" },
              { icon: "🏥", label: "OPD Queue with Priority System" },
              { icon: "🧠", label: "AI Diagnosis Assistant (Gemini + Groq)" },
              { icon: "📸", label: "Prescription OCR Scanner (Urdu/English)" },
              { icon: "🩸", label: "Blood Bank with Expiry Tracking" },
              { icon: "📊", label: "Advanced Accounting & P&L Statements" },
              { icon: "💰", label: "Payroll with FBR Tax Slabs" },
              { icon: "📱", label: "WhatsApp/SMS Broadcast" },
              { icon: "⭐", label: "Patient Feedback & Ratings" },
              { icon: "📅", label: "Online Appointment Booking" },
              { icon: "🔒", label: "Two-Factor Authentication" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm">
                <span className="text-lg">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Core Modules */}
        <section className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
          <h2 className="text-2xl font-bold font-[var(--font-space)] mb-4">Complete Healthcare Management</h2>
          <p className="text-sm text-[rgb(var(--foreground)/0.7)] mb-6">
            EliteHMS covers everything from a small pharmacy to a multi-department hospital — all in one platform.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "💊", label: "Medicine Inventory & Expiry Alerts" },
              { icon: "🧾", label: "Billing & Invoices with Partial Payments" },
              { icon: "👤", label: "Patient Management with Allergy Alerts" },
              { icon: "🛏", label: "Ward & Bed Management (Color-Coded)" },
              { icon: "💉", label: "IPD Management with MAR Sheets" },
              { icon: "🏥", label: "OPD Queue with Priority System" },
              { icon: "🧠", label: "AI Diagnosis Assistant" },
              { icon: "📸", label: "Prescription OCR Scanner (Urdu/English)" },
              { icon: "🩸", label: "Blood Bank with Expiry Tracking" },
              { icon: "📊", label: "Advanced Accounting & P&L" },
              { icon: "💰", label: "Payroll with FBR Tax Slabs" },
              { icon: "📱", label: "WhatsApp/SMS Broadcast" },
              { icon: "⭐", label: "Patient Feedback & Ratings" },
              { icon: "📅", label: "Online Appointment Booking" },
              { icon: "🔒", label: "Two-Factor Authentication" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm">
                <span className="text-lg">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[rgb(var(--foreground)/0.5)] mt-6 border-t border-[rgb(var(--border))] pt-4">
            All modules are role-based and configurable. Pharmacy staff see pharmacy modules. Hospital staff see hospital modules. Your dashboard, your way.
          </p>
        </section>

        {/* Who Uses EliteHMS */}
        <section className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] p-8">
          <h2 className="text-xl font-bold font-[var(--font-space)] mb-4">Who Uses EliteHMS</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🏪", label: "Pharmacies & Medical Stores" },
              { icon: "🏥", label: "Hospitals & Clinics" },
              { icon: "🩺", label: "Doctors & Nurses" },
              { icon: "🧪", label: "Lab Technicians" },
              { icon: "📋", label: "Receptionists & Admin" },
              { icon: "💰", label: "Owners & Managers" },
            ].map((u) => (
              <div key={u.label} className="flex items-center gap-3 p-3 rounded-lg border border-[rgb(var(--border))]">
                <span className="text-2xl">{u.icon}</span>
                <span className="text-sm font-medium">{u.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Attribution */}
        <section className="rounded-2xl border border-[rgb(var(--border))] p-8 bg-[rgb(var(--background))]">
          <h2 className="text-xl font-bold font-[var(--font-space)] mb-2">Lead Developer</h2>
          <p className="text-sm text-[rgb(var(--foreground)/0.74)]">
            Architected and developed by <strong>Amjad Ullah</strong>, a Full-Stack Developer specializing in high-performance healthcare platforms, real-time WebSockets, and scalable SaaS architecture with 2+ years of experience building production-grade applications. Built EliteHMS from the ground up to solve real-world healthcare challenges in Pakistan.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--primary))] hover:underline"
            >
              Connect on LinkedIn →
            </a>
            <a
              href="https://github.com/AmjadKhan88"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--primary))] hover:underline"
            >
              GitHub →
            </a>
            <a
              href="https://amjadullah.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--primary))] hover:underline"
            >
              Portfolio →
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold font-[var(--font-space)]">Ready to Digitize Your Healthcare Facility?</h2>
          <p className="text-sm text-[rgb(var(--foreground)/0.7)] mt-2">
            Join hundreds of pharmacies, clinics, and hospitals using EliteHMS across Pakistan.
          </p>
          <div className="mt-6">
            <AppCta />
          </div>
        </section>
      </div>
    </>
  );
}