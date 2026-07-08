export const siteConfig = {
  name: "MediStore Cloud",
  description:
    "Medicine store management software for pharmacy inventory, billing, expiry tracking, patient medicine records, analytics, and medical POS workflows.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://medicine.example.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.example.com",
  locale: "en_US",
  twitter: "@medistorecloud",
  supportEmail: "hello@medicine.example.com",
  address: "Remote-first healthcare software company"
};

export const analytics = {
  ga: process.env.NEXT_PUBLIC_GA_ID,
  gtm: process.env.NEXT_PUBLIC_GTM_ID,
  clarity: process.env.NEXT_PUBLIC_CLARITY_ID,
  fbPixel: process.env.NEXT_PUBLIC_FB_PIXEL,
  gsc: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
