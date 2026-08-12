import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { about } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...about.meta,
  canonical: "https://www.trooba.com/about",
  ogUrl: "https://www.trooba.com/about",
});

export default function AboutPage() {
  return (
    <SiteShell current="about">
      <HtmlMain html={about.mainHtml} />
    </SiteShell>
  );
}
