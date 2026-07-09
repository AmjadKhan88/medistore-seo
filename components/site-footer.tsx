import Link from "next/link";
import { Pill } from "lucide-react";
import { AppCta } from "@/components/cta-link";
import { navItems } from "@/content/site";

const footerLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Integrations", href: "/integrations" },
  { label: "Reviews", href: "/reviews" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "RSS", href: "/rss.xml" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <Pill className="text-[rgb(var(--primary))]" />
            Elite HMS
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-[rgb(var(--foreground) / 0.72)]">
            SEO website for Hospital and medicine inventory, pharmacy billing, medical POS, patient records, expiry alerts, and healthcare inventory software.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <AppCta label="Try Demo" />
            <AppCta label="Dashboard" variant="outline" />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Product</h2>
          <div className="mt-4 grid gap-3 text-sm text-[rgb(var(--foreground) / 0.74)]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Resources</h2>
          <div className="mt-4 grid gap-3 text-sm text-[rgb(var(--foreground) / 0.74)]">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[rgb(var(--border))] py-5">
        <div className="container text-sm text-[rgb(var(--foreground) / 0.64)]">Copyright 2026 elitehms. All rights reserved.</div>
      </div>
    </footer>
  );
}
