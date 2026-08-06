import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Pill, ShieldCheck, Zap } from "lucide-react";
import { AppCta } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Pharmacy Management Software Pakistan | Retail Pharmacy POS | EliteHMS",
  description:
    "Complete pharmacy management software for Pakistan. Barcode scanning, batch expiry alerts, DRAP compliance, purchase orders, and billing with JazzCash/EasyPaisa.",
  path: "/solutions/pharmacy",
  keywords: [
    "pharmacy management software Pakistan",
    "retail pharmacy POS Pakistan",
    "medical store software Pakistan",
    "pharmacy stock management",
    "DRAP pharmacy compliance",
    "medicine expiry tracking Pakistan",
  ],
});

export default function PharmacySolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pharmacies & Medical Stores"
        title="Pharmacy Management Software Built for Pakistan"
        description="Streamline counter sales, prevent expired medicine sales, automate supplier orders, and maintain DRAP compliance records effortlessly."
      />

      <div className="container max-w-5xl py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-[var(--font-space)] mb-4">
                Designed for Fast Counter Operations
              </h2>
              <p className="text-base leading-8 text-[rgb(var(--foreground)/0.8)]">
                Whether you run a single retail pharmacy or a busy medical store, counter speed and inventory accuracy determine your margin. EliteHMS eliminates manual typing with ZXing barcode scanning, tracks batch expiry dates, and auto-calculates profit margins on every single sale.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold font-[var(--font-space)]">Core Pharmacy Features</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Medicine Inventory", desc: "Track batches, expiry, reorder levels, and generic names.", href: "/features/medicine-inventory" },
                  { title: "Billing & Invoices", desc: "Cash, JazzCash, EasyPaisa, partial payments, and WhatsApp share.", href: "/features/billing-invoices" },
                  { title: "Expiry Alerts", desc: "Sidebar badges for expired stock and items expiring in 30 days.", href: "/features/expiry-alerts" },
                  { title: "Purchase Orders", desc: "Order from suppliers, receive stock, and track balances.", href: "/features/purchase-orders" },
                  { title: "Prescription OCR", desc: "Scan handwritten doctor prescriptions with Gemini AI.", href: "/features/prescription-ocr" },
                  { title: "DRAP Compliance", desc: "Form-10 controlled register and destruction records.", href: "/features/drap-compliance" },
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
              <h3 className="text-lg font-bold">Recommended Plans</h3>
              <div className="mt-4 space-y-4">
                <div className="border-b border-[rgb(var(--border))] pb-3">
                  <div className="font-bold text-sm">Pharmacy Basic</div>
                  <div className="text-xl font-extrabold text-[rgb(var(--primary))]">₨1,999/mo</div>
                  <div className="text-xs text-[rgb(var(--foreground)/0.6)]">3 staff • Core billing & inventory</div>
                </div>
                <div>
                  <div className="font-bold text-sm">Pharmacy Pro</div>
                  <div className="text-xl font-extrabold text-[rgb(var(--primary))]">₨3,999/mo</div>
                  <div className="text-xs text-[rgb(var(--foreground)/0.6)]">Unlimited staff • AI OCR & Accounting</div>
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
