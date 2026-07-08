import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { docs } from "@/content/docs";
import { siteConfig } from "@/lib/env";

const staticRoutes = ["/", "/features", "/pricing", "/about", "/contact", "/blog", "/docs", "/faqs", "/integrations", "/reviews", "/testimonials", "/case-studies", "/privacy", "/terms", "/cookies", "/search"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...docs.map((doc) => `/docs/${doc.slug}`)
  ];
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.75,
    alternates: { languages: { en: `${siteConfig.siteUrl}${route}`, "x-default": `${siteConfig.siteUrl}${route}` } }
  }));
}
