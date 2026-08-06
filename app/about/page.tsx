import type { Metadata } from "next";
import Link from "next/link";
import { AppCta } from "@/components/cta-link";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/env";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "About EliteHMS — Full-Stack Hospital Management System Pakistan",
  description:
    "Learn about EliteHMS — built by full-stack developer Amjad Ullah to solve healthcare management challenges across Pakistani pharmacies, clinics, and hospitals.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About EliteHMS"
        title="Purpose-Built Healthcare SaaS for Pakistan"
        description="EliteHMS was engineered to provide Pakistani hospitals, OPD clinics, and retail pharmacies with a single, secure, cloud-based operating system."
      />

      <div className="container max-w-4xl py-16 space-y-12">
        <ContentBlock title="The Vision Behind EliteHMS">
          <p className="text-base leading-8 text-[rgb(var(--foreground)/0.8)]">
            Healthcare facilities in Pakistan face unique operational challenges: manual stock keeping resulting in expired medicine sales, unorganized OPD waiting room queues, fragmented paper medical records, delayed STAT laboratory alerts, and tedious DRAP audit preparation.
          </p>
          <p className="mt-4 text-base leading-8 text-[rgb(var(--foreground)/0.8)]">
            EliteHMS solves all of these challenges under one unified platform — built natively for local workflows with support for local payment methods, FBR income tax slabs, EOBI compliance, and DRAP controlled drug registration.
          </p>
        </ContentBlock>

        {/* Tech Stack */}
        <section className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8">
          <h2 className="text-2xl font-bold font-[var(--font-space)] mb-4">Technology Architecture</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { title: "MongoDB", role: "Document Database" },
              { title: "Express & Node.js", role: "Backend API Layer" },
              { title: "React & Vite", role: "Single Page Dashboard" },
              { title: "Socket.io", role: "Real-Time Emergency Alerts" },
              { title: "Gemini AI", role: "Vision OCR & Clinical Assist" },
              { title: "Groq LLM", role: "High-Speed AI Reasoning" },
              { title: "Qdrant", role: "Vector DB for RAG Clinical Search" },
              { title: "Next.js 14", role: "SEO & Marketing Frontend" },
            ].map((t) => (
              <div key={t.title} className="rounded-lg border border-[rgb(var(--border))] p-3 bg-[rgb(var(--background))]">
                <div className="font-bold text-sm text-[rgb(var(--primary))]">{t.title}</div>
                <div className="text-xs text-[rgb(var(--foreground)/0.6)] mt-0.5">{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Attribution */}
        <section className="rounded-2xl border border-[rgb(var(--border))] p-8 bg-[rgb(var(--background))]">
          <h2 className="text-xl font-bold font-[var(--font-space)] mb-2">Lead Developer</h2>
          <p className="text-sm text-[rgb(var(--foreground)/0.74)]">
            Architected and developed by <strong>Amjad Ullah</strong>, Full-Stack Developer specializing in high-performance healthcare platforms and real-time WebSockets SaaS systems.
          </p>
          <div className="mt-4">
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[rgb(var(--primary))] hover:underline"
            >
              Connect on LinkedIn →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
