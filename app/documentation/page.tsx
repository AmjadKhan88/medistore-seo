import type { Metadata } from "next";
import { DocPageView } from "@/components/docs/doc-page-view";
import { findDocPage } from "@/content/documentation";
import { createMetadata } from "@/seo/metadata";

const intro = findDocPage("introduction")!.page;

export const metadata: Metadata = createMetadata({
  title: "EliteHMS Documentation",
  description: intro.description,
  path: "/documentation",
  noIndex: !intro.blocks?.length, // stays out of Google until you add content
});

export default function DocumentationHome() {
  return <DocPageView slug="introduction" />;
}
