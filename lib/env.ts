export const siteConfig = {
  name: "EliteHMS",
  shortName: "EliteHMS",
  legalName: "EliteHMS Hospital Pharymacy and Healthcare Solutions Pakistan",
  description:
    "EliteHMS is a full-stack SaaS Hospital Management System for Pakistan — covering pharmacy billing, IPD/OPD management, EMR, lab tests, blood bank, OT scheduling, AI diagnosis, and DRAP compliance in one platform.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.elitehms.online",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.elitehms.online",
  locale: "en_PK",
  twitter: "@EliteHMS",
  supportEmail: "amjadfast87@gmail.com",
  contactPhone: "+92 306 9534618", // Editable placeholder
  whatsapp: "+92 306 9534618",
  address: "Peshawar / Islamabad, Pakistan",
  officeLocation: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
  author: {
    name: "Amjad Ullah",
    role: "Lead Full-Stack Architect & Founder",
    email: "amjadfast87@gmail.com",
    linkedin: "https://www.linkedin.com/in/amjad-ullah-baa484246",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/elitehms",
    facebook: "https://www.facebook.com/elitehms",
    twitter: "https://twitter.com/elitehms",
  },
};

export const analytics = {
  ga: process.env.NEXT_PUBLIC_GA_ID,
  gtm: process.env.NEXT_PUBLIC_GTM_ID,
  clarity: process.env.NEXT_PUBLIC_CLARITY_ID,
  fbPixel: process.env.NEXT_PUBLIC_FB_PIXEL,
  gsc: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
