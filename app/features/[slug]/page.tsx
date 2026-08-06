import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, Tag, Users } from "lucide-react";
import { AppCta } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { allFeatures, getFeatureBySlug, getRelatedFeatures } from "@/content/features";
import { createMetadata } from "@/seo/metadata";
import { StructuredData } from "@/components/structured-data";
import { articleSchema, breadcrumbSchema } from "@/schemas/jsonld";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allFeatures.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const feature = getFeatureBySlug(params.slug);
  if (!feature) return {};

  return createMetadata({
    title: feature.metaTitle,
    description: feature.metaDescription,
    path: `/features/${feature.slug}`,
    keywords: feature.keywords,
  });
}

export default function FeatureDetailPage({ params }: PageProps) {
  const feature = getFeatureBySlug(params.slug);

  if (!feature) {
    notFound();
  }

  const related = getRelatedFeatures(feature.slug);
  const Icon = feature.icon;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: feature.title, path: `/features/${feature.slug}` },
  ];

  return (
    <>
      <StructuredData
        data={[
          articleSchema({
            title: feature.metaTitle,
            description: feature.metaDescription,
            path: `/features/${feature.slug}`,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />

      {/* Hero Header */}
      <section className="grid-bg relative border-b border-[rgb(var(--border))] py-14 md:py-20">
        <div className="container max-w-4xl">
          <Link
            href="/features"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[rgb(var(--primary))] hover:underline"
          >
            <ArrowLeft size={14} />
            <span>Back to All Features</span>
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--primary)/0.1)] px-3 py-1 text-xs font-semibold text-[rgb(var(--primary))]">
              <Icon size={14} />
              {feature.category}
            </span>
            <span className="rounded-full bg-[rgb(var(--foreground)/0.06)] px-3 py-1 text-xs font-semibold">
              Plan: {feature.plan}
            </span>
          </div>
          <h1 className="font-[var(--font-space)] text-3xl font-extrabold md:text-5xl leading-tight">
            {feature.title}
          </h1>
          <p className="mt-4 text-lg text-[rgb(var(--foreground)/0.76)] md:text-xl leading-relaxed">
            {feature.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AppCta label="Start 14-Day Free Trial" />
            <AppCta label="Explore All Features" variant="outline" href="/features" />
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div className="container max-w-4xl py-16">
        {/* Overview Block */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 font-[var(--font-space)]">Overview</h2>
          <p className="text-base leading-8 text-[rgb(var(--foreground)/0.8)] whitespace-pre-line">
            {feature.description}
          </p>
        </section>

        {/* Step-by-Step Workflow */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-[var(--font-space)]">Standard Operating Workflow</h2>
          <div className="space-y-4">
            {feature.workflow.map((w) => (
              <div key={w.step} className="flex gap-4 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--primary))] font-bold text-white text-sm">
                  {w.step}
                </div>
                <div>
                  <h3 className="font-bold text-base">{w.title}</h3>
                  <p className="mt-1 text-sm text-[rgb(var(--foreground)/0.74)] leading-relaxed">{w.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-[var(--font-space)]">Key Operational Benefits</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {feature.benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5 rounded-lg border border-[rgb(var(--border))] p-4 bg-[rgb(var(--background))]">
                <CheckCircle2 size={18} className="text-[rgb(var(--primary))] shrink-0 mt-0.5" />
                <span className="text-sm text-[rgb(var(--foreground)/0.8)] font-medium">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-[var(--font-space)]">Real-World Healthcare Scenarios</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {feature.useCases.map((u) => (
              <Card key={u.title} className="bg-[rgb(var(--card))]">
                <h3 className="font-bold text-base mb-2 text-[rgb(var(--primary))]">{u.title}</h3>
                <p className="text-sm leading-relaxed text-[rgb(var(--foreground)/0.74)]">{u.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Keywords / SEO Meta Tags Box */}
        <section className="mb-16 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--foreground)/0.02)] p-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--foreground)/0.5)] mb-3 flex items-center gap-1.5">
            <Tag size={12} />
            <span>Target Search Keywords</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {feature.keywords.map((kw) => (
              <span key={kw} className="rounded-md bg-[rgb(var(--background))] border border-[rgb(var(--border))] px-2.5 py-1 text-xs text-[rgb(var(--foreground)/0.7)]">
                {kw}
              </span>
            ))}
          </div>
        </section>

        {/* Related Modules */}
        {related.length > 0 && (
          <section className="border-t border-[rgb(var(--border))] pt-12">
            <h2 className="text-xl font-bold mb-6 font-[var(--font-space)]">Related System Modules</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => {
                const RIcon = r.icon;
                return (
                  <Link
                    key={r.slug}
                    href={`/features/${r.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-[rgb(var(--border))] p-4 hover:border-[rgb(var(--primary))] transition-all"
                  >
                    <div className="rounded-lg bg-[rgb(var(--primary)/0.1)] p-2 text-[rgb(var(--primary))]">
                      <RIcon size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm group-hover:text-[rgb(var(--primary))] transition-colors">
                        {r.title}
                      </div>
                      <div className="text-xs text-[rgb(var(--foreground)/0.6)] line-clamp-1">
                        {r.tagline}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
