import type { Metadata } from "next";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({ title: "Terms of Service | MediStore Cloud", description: "Terms of service for the medicine store management software marketing website.", path: "/terms" });
export default function TermsPage() {
  return <><PageHero eyebrow="Terms" title="Terms of Service" description="General terms placeholder for the marketing website and SaaS product positioning." /><ContentBlock title="Terms overview"><p>These terms are a production-ready starting point, not legal advice. Replace this copy with terms reviewed for your jurisdiction, pricing model, service commitments, refunds, acceptable use, and data responsibilities.</p></ContentBlock></>;
}
