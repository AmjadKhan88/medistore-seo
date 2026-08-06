import type { Metadata } from "next";
import Link from "next/link";
import { AppCta } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Hospital Management System Pakistan | IPD, Ward, OT & Blood Bank | EliteHMS",
  description:
    "Full-scale Hospital Management System (HMS) for Pakistani hospitals. IPD admission to discharge, digital MAR sheets, OT scheduling, blood bank, insurance billing, and AI diagnosis.",
  path: "/solutions/hospital",
  keywords: [
    "hospital management system Pakistan",
    "HMS software Pakistan",
    "IPD software Pakistan",
    "hospital bed management software",
    "OT scheduling system hospital",
    "blood bank software hospital Pakistan",
  ],
});

export default function HospitalSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="For Mid-Size & Large Hospitals"
        title="Full-Stack SaaS Hospital Management System"
        description="Connect inpatient admissions, ward bed maps, MAR execution, operation theatre conflict checks, blood bank units, and insurance claim tracking on one platform."
      />

      <div className="container max-w-5xl py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-[var(--font-space)] mb-4">
                Enterprise Hospital Operations in One Cloud System
              </h2>
              <p className="text-base leading-8 text-[rgb(var(--foreground)/0.8)]">
                EliteHMS bridges communication gaps between doctors, nurses, pharmacists, lab technicians, and accountants. From STAT doctor orders to MAR administration timestamps, critical lab alerts, and FBR tax/EOBI payroll calculations — everything is automated.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold font-[var(--font-space)]">Core Hospital Modules</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "IPD & MAR Sheets", desc: "Admission, automated dose schedules, and digital MAR execution.", href: "/features/ipd-management" },
                  { title: "Ward & Bed Map", desc: "Real-time occupancy map with Available, Occupied, Cleaning statuses.", href: "/features/ward-bed-management" },
                  { title: "OT Scheduling", desc: "Duration conflict checks, pre-op safety checklists, and OT reports.", href: "/features/ot-scheduling" },
                  { title: "Blood Bank", desc: "Unit tracking, 56-day donor cooldown, and critical shortage alerts.", href: "/features/blood-bank" },
                  { title: "AI Diagnosis Assistant", desc: "Gemini + Groq differential diagnosis with Pakistan cost guidance.", href: "/features/ai-diagnosis" },
                  { title: "Insurance & Panel Claims", desc: "Jubilee, EFU, State Life, EOBI claim lifecycle from Draft to Paid.", href: "/features/insurance-panels" },
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
              <h3 className="text-lg font-bold">Hospital Plans</h3>
              <div className="mt-4 space-y-4">
                <div className="border-b border-[rgb(var(--border))] pb-3">
                  <div className="font-bold text-sm">Hospital Basic</div>
                  <div className="text-xl font-extrabold text-[rgb(var(--primary))]">₨10,999/mo</div>
                  <div className="text-xs text-[rgb(var(--foreground)/0.6)]">IPD, Wards, OT, Nurse Station, Blood Bank</div>
                </div>
                <div>
                  <div className="font-bold text-sm">Hospital Pro</div>
                  <div className="text-xl font-extrabold text-[rgb(var(--primary))]">₨20,999/mo</div>
                  <div className="text-xs text-[rgb(var(--foreground)/0.6)]">Insurance, Payroll, AI Diagnosis, DRAP Reports</div>
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
