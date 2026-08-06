import type {
  Article,
  BlogPosting,
  BreadcrumbList,
  FAQPage,
  MedicalBusiness,
  Organization,
  Product,
  Review,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { absoluteUrl, siteConfig } from "@/lib/env";

export function organizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/icons/icon-512.png"),
    sameAs: [siteConfig.social.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.supportEmail,
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
    founder: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.role,
      sameAs: siteConfig.author.linkedin,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
  };
}

export function softwareSchema(): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "HospitalManagementSystem",
    operatingSystem: "Web",
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    inLanguage: ["en", "ur"],
    offers: [
      {
        "@type": "Offer",
        name: "Pharmacy Basic",
        price: "1999",
        priceCurrency: "PKR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1999",
          priceCurrency: "PKR",
          billingDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
      },
      {
        "@type": "Offer",
        name: "Hospital Pro",
        price: "20999",
        priceCurrency: "PKR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "20999",
          priceCurrency: "PKR",
          billingDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "94",
      bestRating: "5",
    },
    author: organizationSchema(),
    publisher: organizationSchema(),
    featureList: [
      "Medicine Inventory Management",
      "Hospital Billing & Invoices",
      "IPD Patient Management",
      "OPD Queue Management",
      "Electronic Medical Records (EMR)",
      "Lab Test Tracking with Critical Alerts",
      "Blood Bank Management",
      "OT Scheduling",
      "AI Diagnosis Assistant (Gemini + Groq)",
      "Prescription OCR Scanner",
      "DRAP Compliance Reports",
      "Payroll & Salary Management",
      "Insurance & Panel Management",
      "WhatsApp Broadcast Campaigns",
      "Predictive Medicine Demand Forecasting",
    ],
  };
}

export function medicalBusinessSchema(): WithContext<MedicalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description:
      "Hospital and pharmacy management software for the Pakistani healthcare market — IPD, OPD, EMR, billing, blood bank, DRAP compliance.",
    areaServed: { "@type": "Country", name: "Pakistan" },
    availableService: [
      { "@type": "MedicalTherapy", name: "Hospital Management Software" },
      { "@type": "MedicalTherapy", name: "Pharmacy Management Software" },
      { "@type": "MedicalTherapy", name: "Electronic Medical Records" },
    ],
  };
}

export function productSchema(): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "EliteHMS Hospital Management System",
    brand: { "@type": "Brand", name: siteConfig.name },
    description: siteConfig.description,
    image: absoluteUrl("/api/og"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "94",
      bestRating: "5",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "1999",
      highPrice: "20999",
      priceCurrency: "PKR",
      offerCount: "6",
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function reviewSchema(): WithContext<Review> {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "HospitalManagementSystem",
    },
    author: { "@type": "Person", name: "Dr. Tariq Mehmood, Medical Director" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody:
      "EliteHMS transformed how we run our hospital. The IPD module, MAR sheets, and real-time vital alerts have dramatically improved patient safety. DRAP compliance reports alone save us hours each month.",
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
}): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: organizationSchema(),
    image: absoluteUrl(`/api/og?title=${encodeURIComponent(post.title)}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

export function articleSchema(page: {
  title: string;
  description: string;
  path: string;
}): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    author: organizationSchema(),
    publisher: organizationSchema(),
    mainEntityOfPage: absoluteUrl(page.path),
  };
}
