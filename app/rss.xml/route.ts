import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/lib/env";

export const revalidate = 3600;

export function GET() {
  const items = blogPosts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${siteConfig.siteUrl}/blog/${post.slug}</link>
      <guid>${siteConfig.siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
  `).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0"><channel>
    <title>${siteConfig.name} Blog</title>
    <description>${siteConfig.description}</description>
    <link>${siteConfig.siteUrl}</link>
    ${items}
  </channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
