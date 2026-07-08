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
  "Medicine Store Management Software",
  "Pharmacy Management Software",
  "Medical Inventory System",
  "Medicine Billing Software",
  "Medical POS",
  "Medicine Expiry Tracking",
  "Healthcare Inventory Software",
  "Hospital Pharmacy Software"
];

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/api/og",
  type = "website",
  noIndex = false
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    applicationName: siteConfig.name,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "x-default": url
      }
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitter,
      images: [imageUrl]
    },
    verification: {
      google: analytics.gsc,
      other: {
        "msvalidate.01": analytics.bing || "",
        "yandex-verification": analytics.yandex || ""
      }
    },
    category: "Healthcare Software"
  };
}
