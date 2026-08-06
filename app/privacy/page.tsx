import type { Metadata } from "next";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/env";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: `Privacy Policy & Patient Data Security | ${siteConfig.name}`,
  description:
    "Official Privacy Policy for EliteHMS. Learn how we handle medical data, patient records, 256-bit encryption, HIPAA alignment, and DRAP compliance standards.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal & Security"
        title="Privacy Policy & Patient Data Security"
        description="EliteHMS is committed to protecting patient health records, pharmacy transactions, and medical enterprise data with bank-level encryption and strict privacy standards."
      />

      <div className="container max-w-4xl py-16 space-y-10">
        <ContentBlock title="1. Overview & Data Ownership">
          <p>
            This Privacy Policy governs the collection, storage, and processing of personal and medical data by <strong>{siteConfig.legalName}</strong> ("EliteHMS", "we", "us", or "our").
          </p>
          <p className="mt-3">
            <strong>Your Data Belongs to You:</strong> All patient profiles, electronic medical records (EMR), billing histories, lab reports, and inventory data entered into your EliteHMS subscription remain the exclusive property of your healthcare facility. EliteHMS does not sell, rent, or monetize patient or facility data to any third party.
          </p>
        </ContentBlock>

        <ContentBlock title="2. Information We Collect">
          <p>We collect and process the following categories of data solely to provide healthcare management services:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-sm text-[rgb(var(--foreground)/0.8)]">
            <li><strong>Facility & Account Information:</strong> Store/hospital name, administrator email, contact phone, NTN, and billing preferences.</li>
            <li><strong>Clinical & Patient Data:</strong> Patient demographics, CNIC, medical histories, vital signs, prescriptions, lab results, and IPD admission records uploaded by authorized staff.</li>
            <li><strong>Technical & Session Data:</strong> IP addresses, browser user-agent signatures, active device tokens, and 30-day httpOnly refresh session cookies for security audit logging.</li>
          </ul>
        </ContentBlock>

        <ContentBlock title="3. Security & Encryption Standards">
          <p>EliteHMS implements enterprise-grade technical safeguards to ensure data integrity and confidentiality:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-sm text-[rgb(var(--foreground)/0.8)]">
            <li><strong>256-Bit SSL/TLS Encryption:</strong> All data in transit between your browser and our servers is encrypted using modern TLS protocols.</li>
            <li><strong>Authentication & Access Controls:</strong> Password hashing via bcrypt, 15-minute access tokens, 30-day httpOnly refresh cookies, optional 2FA via Google Authenticator, and active session management (max 5 devices).</li>
            <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions prevent non-authorized personnel (e.g., receptionist or nurse) from accessing sensitive financial or administrative data.</li>
            <li><strong>Database Isolation:</strong> Vector embeddings in Qdrant and clinical records in MongoDB are logically isolated by store ID.</li>
          </ul>
        </ContentBlock>

        <ContentBlock title="4. Regulatory Alignment (DRAP & FBR)">
          <p>
            In accordance with Drug Regulatory Authority of Pakistan (DRAP) regulations, controlled medicine purchase and sale registers (Schedule H / Form-10 equivalents) are maintained securely to satisfy legal inspection requirements.
          </p>
          <p className="mt-3">
            Tax summaries exported for FBR IRIS portal submission contain only necessary transaction line items and NTN invoice identifiers required by law.
          </p>
        </ContentBlock>

        <ContentBlock title="5. Data Retention & Erasure">
          <p>
            Your facility data is retained for the duration of your active subscription. Upon account termination, you may request a complete database export in standard JSON/Excel formats. Account backup archives are permanently purged within 60 days of cancellation.
          </p>
        </ContentBlock>

        <ContentBlock title="6. Contact Data Protection Officer">
          <p>
            If you have questions regarding data security, patient privacy, or compliance audits, contact our technical team directly:
          </p>
          <div className="mt-3 rounded-lg border border-[rgb(var(--border))] p-4 bg-[rgb(var(--card))] text-sm">
            <div><strong>Data Privacy Officer:</strong> {siteConfig.author.name}</div>
            <div><strong>Email:</strong> <a href={`mailto:${siteConfig.supportEmail}`} className="text-[rgb(var(--primary))] hover:underline">{siteConfig.supportEmail}</a></div>
            <div><strong>Location:</strong> {siteConfig.officeLocation}</div>
          </div>
        </ContentBlock>
      </div>
    </>
  );
}
