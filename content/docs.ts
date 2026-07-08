export type DocPage = {
  slug: string;
  title: string;
  description: string;
  sections: { title: string; body: string; code?: string }[];
};

export const docs: DocPage[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Configure the SEO website and connect every CTA to your deployed React dashboard.",
    sections: [
      {
        title: "Set environment variables",
        body: "Add the production marketing domain and existing dashboard URL in Vercel. The website does not recreate authentication or management screens.",
        code: "NEXT_PUBLIC_SITE_URL=https://medicine.example.com\nNEXT_PUBLIC_APP_URL=https://app.example.com"
      },
      {
        title: "Deploy to Vercel",
        body: "Import the repository, set variables, and run the default Next.js build. The App Router pages are optimized for static delivery and rich search snippets."
      }
    ]
  },
  {
    slug: "seo-configuration",
    title: "SEO Configuration",
    description: "How metadata, canonical URLs, structured data, sitemap, robots, RSS, and OG images are wired.",
    sections: [
      {
        title: "Metadata API",
        body: "Each route calls a shared metadata helper so page titles, descriptions, canonical URLs, Open Graph images, Twitter Cards, robots directives, and verification tags stay consistent."
      },
      {
        title: "Structured data",
        body: "Schemas live in the schemas directory and cover Organization, SoftwareApplication, Product, FAQ, Review, Breadcrumb, Article, and BlogPosting rich result signals."
      }
    ]
  },
  {
    slug: "analytics",
    title: "Analytics",
    description: "Enable GA4, GTM, Microsoft Clarity, Facebook Pixel, and webmaster verification tags.",
    sections: [
      {
        title: "Optional scripts",
        body: "The analytics component only injects scripts when IDs exist in the environment. This keeps local development clean and production-ready.",
        code: "NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX\nNEXT_PUBLIC_GTM_ID=GTM-XXXXXXX\nNEXT_PUBLIC_CLARITY_ID=xxxxxx"
      }
    ]
  }
];
