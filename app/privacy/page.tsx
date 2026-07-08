import type { Metadata } from "next";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({ title: "Privacy Policy | MediStore Cloud", description: "Privacy policy for the medicine store management software marketing website.", path: "/privacy" });
export default function PrivacyPage() {
  return <><PageHero eyebrow="Privacy" title="Privacy Policy" description="How this marketing website can describe analytics, contact forms, cookies, and user privacy." /><ContentBlock title="Privacy overview"><p>This website collects only the information needed to respond to inquiries, understand aggregate traffic, and improve product education. Configure analytics vendors through environment variables and update this policy with your legal counsel before launch.</p><p>The dashboard application remains separate and should maintain its own privacy, security, and data processing documents.</p></ContentBlock></>;
}
