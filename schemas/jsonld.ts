import type { Article, BlogPosting, BreadcrumbList, FAQPage, Organization, Product, Review, SoftwareApplication, WithContext } from "schema-dts";
import { absoluteUrl, siteConfig } from "@/lib/env";

export function organizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/icons/icon-512.png"),
    sameAs: ["https://www.linkedin.com/", "https://www.facebook.com/"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.supportEmail
    }
  };
}

export function softwareSchema(): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    offers: { "@type": "Offer", price: "49", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "186" }
  };
}

export function productSchema(): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Medicine Store Management Software",
    brand: { "@type": "Brand", name: siteConfig.name },
    description: siteConfig.description,
    image: absoluteUrl("/api/og"),
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "186" },
    offers: { "@type": "AggregateOffer", lowPrice: "49", highPrice: "199", priceCurrency: "USD" }
  };
}

export function faqSchema(items: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
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
      item: absoluteUrl(item.path)
    }))
  };
}

export function reviewSchema(): WithContext<Review> {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "SoftwareApplication", name: siteConfig.name, applicationCategory: "HealthcareApplication" },
    author: { "@type": "Person", name: "Operations Lead, CityCare Pharmacy" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: "The system reduced expiry losses, billing errors, and stock disputes while giving our pharmacy team a clear daily operating dashboard."
  };
}

export function blogPostingSchema(post: { title: string; description: string; slug: string; date: string; author: string }): WithContext<BlogPosting> {
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
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
}

export function articleSchema(page: { title: string; description: string; path: string }): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    author: organizationSchema(),
    publisher: organizationSchema(),
    mainEntityOfPage: absoluteUrl(page.path)
  };
}
