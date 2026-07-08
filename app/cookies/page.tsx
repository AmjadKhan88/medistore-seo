import type { Metadata } from "next";
import { ContentBlock } from "@/components/content-block";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/seo/metadata";

export const metadata: Metadata = createMetadata({ title: "Cookie Policy | MediStore Cloud", description: "Cookie policy for analytics, marketing pixels, and website preferences.", path: "/cookies" });
export default function CookiesPage() {
  return <><PageHero eyebrow="Cookies" title="Cookie Policy" description="Explain analytics, marketing pixels, theme preferences, and consent expectations." /><ContentBlock title="Cookie overview"><p>The site can use cookies and local storage for theme preferences, analytics, tag management, Microsoft Clarity, and Facebook Pixel when those integrations are enabled. Add a consent banner if your markets require one.</p></ContentBlock></>;
}
