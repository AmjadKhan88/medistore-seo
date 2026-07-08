import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import { createMetadata } from "@/seo/metadata";
import { organizationSchema, softwareSchema } from "@/schemas/jsonld";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = createMetadata({
  title: "Medicine Store Management Software | Pharmacy Inventory and Billing",
  description: "SEO-ready medicine store management software website for medical inventory, pharmacy billing, expiry tracking, medical POS, patient records, reports, and analytics."
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#090e12" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${space.variable}`}>
        <ThemeProvider>
          <StructuredData data={[organizationSchema(), softwareSchema()]} />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
