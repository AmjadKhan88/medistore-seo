import type { Metadata } from "next";
import Link from "next/link";
import { AppCta } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Clinic Management Software Pakistan | OPD & EMR System | EliteHMS",
  description:
    "Complete clinic management software for Pakistan. Token OPD queue with TV display, online booking, 10-section EMR, digital prescriptions, and vital signs monitoring.",
  path: "/solutions/clinic",
  keywords: [
    "clinic management software Pakistan",
    "OPD queue management system",
    "clinic appointment software Pakistan",
    "EMR software clinic Pakistan",
    "online doctor booking clinic",
  ],
});

export default function ClinicSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="For OPD Clinics & Diagnostic Centers"
        title="OPD Queue, EMR & Clinic Management System"
        description="Organize OPD waiting areas with token TV displays, enable 24/7 online patient booking, and record unified medical timelines effortlessly."
      />

      <div className="container max-w-5xl py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-[var(--font-space)] mb-4">
                Elevate Patient Experience & Clinic Efficiency
              </h2>
              <p className="text-base leading-8 text-[rgb(var(--foreground)/0.8)]">
                EliteHMS Clinic solution eliminates crowded waiting room chaos. Issue Normal, VIP, or Urgent priority tokens, broadcast to an HDMI TV screen with automatic voice announcements, and let patients book appointments online 24/7.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold font-[var(--font-space)]">Core Clinic Features</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "OPD Queue & TV Display", desc: "Token system with priority logic and Web Speech voice announcements.", href: "/features/opd-queue" },
                  { title: "Online Booking Page", desc: "Public 24/7 booking URL for patients. Real-time slot management.", href: "/features/online-booking" },
                  { title: "Electronic Medical Records", desc: "Unified patient timeline merging vitals, labs, bills, and visits.", href: "/features/emr" },
                  { title: "Vital Signs Tracking", desc: "Record vitals with instant socket alerts on critical thresholds.", href: "/features/vital-signs" },
                  { title: "WhatsApp Broadcast", desc: "Send recall campaigns and health tips with audience filters.", href: "/features/whatsapp-broadcast" },
                  { title: "RAG Knowledge Base", desc: "Upload clinic protocols and query clinical drug monographs.", href: "/features/knowledge-base" },
                ].map((f) => (
                  <Card key={f.title} className="p-4">
                    <h4 className="font-bold text-base">{f.title}</h4>
                    <p className="mt-1 text-xs text-[rgb(var(--foreground)/0.7)]">{f.desc}</p>
                    <Link href={f.href} className="mt-3 inline-flex text-xs font-semibold text-[rgb(var(--primary))]">
                      Learn detail →
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div>
            <Card className="sticky top-24 border-[rgb(var(--primary))] bg-[rgb(var(--card))]">
              <h3 className="text-lg font-bold">Clinic Plan</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="font-bold text-sm">Clinic Tier</div>
                  <div className="text-2xl font-extrabold text-[rgb(var(--primary))]">₨5,999/mo</div>
                  <div className="text-xs text-[rgb(var(--foreground)/0.6)]">Unlimited staff • All OPD, EMR & Booking features</div>
                </div>
                <AppCta label="Start Free Trial" className="w-full justify-center mt-4" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
