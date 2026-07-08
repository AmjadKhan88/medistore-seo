import type { Metadata } from "next";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "About MediStore Cloud | Healthcare Inventory Software",
  description: "Learn about the pharmacy management software website built to promote medicine inventory, medical billing, reports, analytics, and expiry tracking.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A marketing website for serious pharmacy operations software" description="MediStore Cloud presents your existing management platform with the clarity, speed, and search structure needed for competitive healthcare SaaS growth." />
      <ContentBlock title="Why this site exists">
        <p>The management application already exists. This Next.js website is intentionally separate: it educates buyers, captures organic search demand, builds trust, documents the product, and sends qualified users into the deployed React dashboard.</p>
        <p>Pharmacy owners search with practical intent. They want fewer billing mistakes, fewer expired batches, cleaner medicine inventory, reliable reports, and an easier way to understand daily cash and stock movement. The content architecture speaks directly to those needs while giving search engines strong technical signals.</p>
      </ContentBlock>
    </>
  );
}
