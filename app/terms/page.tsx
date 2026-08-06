import type { Metadata } from "next";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/env";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: `Terms of Service | ${siteConfig.name}`,
  description:
    "Official Terms of Service for EliteHMS SaaS Hospital & Pharmacy Management Platform. Service levels, subscription terms, acceptable use, and data guarantees.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Terms of Service"
        description="These Terms of Service govern your use of the EliteHMS platform, software subscription, and associated cloud services."
      />

      <div className="container max-w-4xl py-16 space-y-10">
        <ContentBlock title="1. Acceptance of Terms">
          <p>
            By registering an account, starting a 14-day free trial, or subscribing to any plan offered by <strong>{siteConfig.legalName}</strong> ("EliteHMS"), your healthcare facility agrees to be bound by these Terms of Service.
          </p>
        </ContentBlock>

        <ContentBlock title="2. Description of Service">
          <p>
            EliteHMS provides a web-based Software-as-a-Service (SaaS) management platform covering pharmacy inventory, POS billing, IPD/OPD management, EMR, lab tracking, blood bank, OT scheduling, AI clinical assistance, and accounting tools.
          </p>
        </ContentBlock>

        <ContentBlock title="3. Subscription & Local Payment Terms">
          <ul className="list-disc pl-6 space-y-2 text-sm text-[rgb(var(--foreground)/0.8)]">
            <li><strong>Free Trial:</strong> New subscribers receive 14 days of full access with no credit card required.</li>
            <li><strong>Billing Cycle:</strong> Paid plans are billed monthly in Pakistani Rupees (PKR) as listed on our official pricing schedule.</li>
            <li><strong>Local Payments:</strong> Subscription fees may be settled via JazzCash, EasyPaisa, or direct Bank Transfer. Subscriptions are activated within 2 hours of payment receipt verification.</li>
            <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Access remains active until the end of your prepaid billing period.</li>
          </ul>
        </ContentBlock>

        <ContentBlock title="4. Account Responsibility & Security">
          <p>
            Facility administrators are responsible for managing staff user accounts and maintaining password security. You agree not to share administrator credentials. EliteHMS provides role-based access controls (RBAC) and two-factor authentication (2FA) to safeguard your account.
          </p>
        </ContentBlock>

        <ContentBlock title="5. Service Availability & SLA">
          <p>
            EliteHMS strives to maintain <strong>99.9% platform availability</strong>. Scheduled maintenance is conducted during off-peak hours with prior notification posted on the admin dashboard.
          </p>
        </ContentBlock>

        <ContentBlock title="6. Clinical Disclaimer">
          <p>
            The AI Diagnosis Assistant, prescription OCR scanner, and RAG knowledge base provided within EliteHMS are decision support tools intended for qualified healthcare professionals. They do not replace professional medical judgment. Attending physicians and pharmacists remain solely responsible for patient treatment decisions and drug dispensing.
          </p>
        </ContentBlock>

        <ContentBlock title="7. Governing Law & Dispute Resolution">
          <p>
            These Terms are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any legal disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts in Pakistan.
          </p>
        </ContentBlock>
      </div>
    </>
  );
}
