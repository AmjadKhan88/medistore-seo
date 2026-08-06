import Link from "next/link";
import { Pill, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ShieldCheck } from "lucide-react";
import { AppCta } from "@/components/cta-link";
import { navItems } from "@/content/site";
import { siteConfig } from "@/lib/env";

const footerLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Integrations", href: "/integrations" },
  { label: "Reviews", href: "/reviews" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "RSS Feed", href: "/rss.xml" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--card))]">
      <div className="container grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        {/* Brand & Trust Section */}
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <Pill className="text-[rgb(var(--primary))]" size={22} />
            {siteConfig.name}
          </div>
          <p className="mt-3 text-xs leading-6 text-[rgb(var(--foreground)/0.72)] max-w-sm">
            {siteConfig.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <ShieldCheck size={16} />
            <span>DRAP & FBR Ready • 256-Bit Encrypted Healthcare Platform</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <AppCta label="Start Free Trial" />
            <AppCta label="Login to Portal" variant="outline" />
          </div>
        </div>

        {/* Product Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-[rgb(var(--foreground))]">System Modules</h3>
          <div className="mt-4 grid gap-2.5 text-xs text-[rgb(var(--foreground)/0.74)]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[rgb(var(--primary))] transition-colors">
                {item.label}
              </Link>
            ))}
            <Link href="/solutions/pharmacy" className="hover:text-[rgb(var(--primary))] transition-colors">
              Pharmacy POS
            </Link>
            <Link href="/solutions/clinic" className="hover:text-[rgb(var(--primary))] transition-colors">
              Clinic & OPD Queue
            </Link>
            <Link href="/solutions/hospital" className="hover:text-[rgb(var(--primary))] transition-colors">
              Hospital & IPD
            </Link>
          </div>
        </div>

        {/* Resources & Legal */}
        <div>
          <h3 className="text-sm font-semibold text-[rgb(var(--foreground))]">Legal & Support</h3>
          <div className="mt-4 grid gap-2.5 text-xs text-[rgb(var(--foreground)/0.74)]">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[rgb(var(--primary))] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Office Contact & Social Profiles */}
        <div>
          <h3 className="text-sm font-semibold text-[rgb(var(--foreground))]">Company & Contact</h3>
          <div className="mt-4 space-y-3 text-xs text-[rgb(var(--foreground)/0.74)]">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="text-[rgb(var(--primary))] shrink-0 mt-0.5" />
              <span>{siteConfig.officeLocation}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={15} className="text-[rgb(var(--primary))] shrink-0" />
              <a href={`mailto:${siteConfig.supportEmail}`} className="hover:underline">
                {siteConfig.supportEmail}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={15} className="text-[rgb(var(--primary))] shrink-0" />
              <a href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                WhatsApp / Support ({siteConfig.whatsapp})
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="text-xs font-semibold text-[rgb(var(--foreground)/0.8)] mb-2">Connect With Us</h4>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EliteHMS LinkedIn Page"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-[rgb(var(--foreground)/0.7)] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Founder LinkedIn Profile"
                aria-label="Lead Developer LinkedIn Profile"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-[rgb(var(--foreground)/0.7)] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EliteHMS Facebook Page"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-[rgb(var(--foreground)/0.7)] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EliteHMS Twitter Page"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgb(var(--border))] text-[rgb(var(--foreground)/0.7)] hover:border-[rgb(var(--primary))] hover:text-[rgb(var(--primary))] transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Developer Credits */}
      <div className="border-t border-[rgb(var(--border))] py-6 bg-[rgb(var(--background))]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[rgb(var(--foreground)/0.64)]">
          <div>
            © 2026 {siteConfig.legalName}. All rights reserved.
          </div>
          <div>
            Architected & Maintained by{" "}
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[rgb(var(--primary))] hover:underline"
            >
              {siteConfig.author.name} ({siteConfig.author.role})
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
