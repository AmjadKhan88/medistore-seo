import type { Metadata } from "next";
import { absoluteUrl, analytics, siteConfig } from "@/lib/env";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

const defaultKeywords = [
  "EliteHMS",
  "Hospital Management System Pakistan",
  "HMS Software Pakistan",
  "Pharmacy Management Software Pakistan",
  "Hospital Management Software",
  "Medical Inventory System",
  "IPD Management Software",
  "OPD Queue Management System",
  "Electronic Medical Records Pakistan",
  "EMR Software Pakistan",
  "Blood Bank Management System",
  "DRAP Compliance Software",
  "Medical Billing Software Pakistan",
  "Medicine Expiry Tracking",
  "Healthcare SaaS Pakistan",
  "Pharmacy POS Pakistan",
  "Lab Management Software",
  "Patient Management System",
  "Medical Store Software Pakistan",
  "Hospital Billing Software",
];

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/api/og",
  type = "website",
  noIndex = false,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    applicationName: siteConfig.name,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.linkedin }],
    creator: siteConfig.author.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
      languages: {
        "en-PK": url,
        "x-default": url,
      },
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitter,
      images: [imageUrl],
    },
    verification: {
      google: analytics.gsc,
      other: {
        "msvalidate.01": analytics.bing || "",
        "yandex-verification": analytics.yandex || "",
      },
    },
    category: "Healthcare Software",
  };
}
