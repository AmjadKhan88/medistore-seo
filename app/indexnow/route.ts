import { siteConfig } from "@/lib/env";

export function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) return Response.json({ enabled: false, message: "Set INDEXNOW_KEY to enable IndexNow submission." });
  return Response.json({
    host: new URL(siteConfig.siteUrl).host,
    key,
    keyLocation: `${siteConfig.siteUrl}/${key}.txt`,
    urlList: [`${siteConfig.siteUrl}/`, `${siteConfig.siteUrl}/features`, `${siteConfig.siteUrl}/pricing`, `${siteConfig.siteUrl}/blog`]
  });
}
