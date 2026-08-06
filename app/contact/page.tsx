import type { Metadata } from "next";
import { Mail, MapPin, Phone, Linkedin, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/env";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact EliteHMS | Hospital & Pharmacy Software Pakistan Support",
  description:
    "Get in touch with EliteHMS support & sales in Pakistan. Contact our team for demo requests, custom hospital implementations, DRAP compliance, or onboarding assistance.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Direct Support & Onboarding"
        title="Contact EliteHMS Healthcare Solutions"
        description="Whether you need a custom hospital implementation, pricing clarification, or onboarding assistance, our Pakistani engineering team is ready to help."
      />
      <section className="section py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Company Details & Trust */}
          <div className="space-y-6">
            <Card className="bg-[rgb(var(--card))]">
              <h2 className="text-xl font-bold font-[var(--font-space)] mb-4">Official Contact Information</h2>
              <div className="space-y-4 text-sm text-[rgb(var(--foreground)/0.8)]">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-[rgb(var(--primary)/0.1)] p-2 text-[rgb(var(--primary))] shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[rgb(var(--foreground)/0.6)]">Headquarters / Location</div>
                    <div className="font-medium mt-0.5">{siteConfig.officeLocation}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-[rgb(var(--primary)/0.1)] p-2 text-[rgb(var(--primary))] shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[rgb(var(--foreground)/0.6)]">Direct Email</div>
                    <a href={`mailto:${siteConfig.supportEmail}`} className="font-medium mt-0.5 text-[rgb(var(--primary))] hover:underline block">
                      {siteConfig.supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-[rgb(var(--primary)/0.1)] p-2 text-[rgb(var(--primary))] shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[rgb(var(--foreground)/0.6)]">WhatsApp & Phone Support</div>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium mt-0.5 text-[rgb(var(--primary))] hover:underline block"
                    >
                      {siteConfig.whatsapp} (Instant WhatsApp Response)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-[rgb(var(--primary)/0.1)] p-2 text-[rgb(var(--primary))] shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[rgb(var(--foreground)/0.6)]">Response SLA</div>
                    <div className="font-medium mt-0.5">Within 2 Hours (Mon–Sat, 9:00 AM – 9:00 PM PKT)</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Developer & Verification Card */}
            <Card className="bg-[rgb(var(--background))] border-[rgb(var(--primary))]">
              <h3 className="font-bold text-base mb-2 flex items-center gap-2">
                <ShieldCheck className="text-emerald-500" size={18} />
                <span>Verified Technical Leadership</span>
              </h3>
              <p className="text-xs text-[rgb(var(--foreground)/0.74)] leading-relaxed">
                EliteHMS is engineered and directly supported by <strong>{siteConfig.author.name}</strong>, Full-Stack Developer specializing in real-time WebSockets and medical software architecture.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[rgb(var(--primary))] hover:underline"
                >
                  <Linkedin size={14} />
                  <span>Developer LinkedIn Profile</span>
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[rgb(var(--primary))] hover:underline"
                >
                  <Linkedin size={14} />
                  <span>Company LinkedIn Page</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form Card */}
          <Card>
            <h2 className="text-2xl font-bold font-[var(--font-space)] mb-2">Send an Inquiry</h2>
            <p className="text-xs text-[rgb(var(--foreground)/0.7)] mb-6">
              Fill out your details below and our team will get back to you with trial credentials or custom implementation options.
            </p>
            <ContactForm />
          </Card>
        </div>
      </section>
    </>
  );
}
