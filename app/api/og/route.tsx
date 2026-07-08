import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/env";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Medicine Store Management Software";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f6fbfa", color: "#101e28", padding: 64, fontFamily: "Arial" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
          <div style={{ color: "#007c74", fontSize: 28, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: 950 }}>{title}</div>
          <div style={{ fontSize: 30, color: "#40545b" }}>Inventory, billing, expiry alerts, reports, and medical POS</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
