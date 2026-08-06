import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { docs } from "@/content/docs";
import { allFeatures } from "@/content/features";
import { siteConfig } from "@/lib/env";

const staticRoutes = [
  "/",
  "/features",
  "/pricing",
  "/about",
  "/contact",
  "/blog",
  "/docs",
  "/faqs",
  "/integrations",
  "/reviews",
  "/testimonials",
  "/case-studies",
  "/privacy",
  "/terms",
  "/cookies",
  "/search",
  "/solutions/pharmacy",
  "/solutions/clinic",
  "/solutions/hospital",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const featureRoutes = allFeatures.map((f) => `/features/${f.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const docRoutes = docs.map((doc) => `/docs/${doc.slug}`);

  const routes = [...staticRoutes, ...featureRoutes, ...blogRoutes, ...docRoutes];

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "/") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route.startsWith("/solutions/") || route === "/features" || route === "/pricing") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route.startsWith("/features/")) {
      priority = 0.85;
      changeFrequency = "weekly";
    }

    return {
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "en-PK": `${siteConfig.siteUrl}${route}`,
          "x-default": `${siteConfig.siteUrl}${route}`,
        },
      },
    };
  });
}
