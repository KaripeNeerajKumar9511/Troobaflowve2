import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { home } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...home.meta,
  canonical: "https://trooba.com/",
  ogUrl: "https://trooba.com/",
});

export default function HomePage() {
  return (
    <SiteShell>
      <HtmlMain html={home.mainHtml} />
    </SiteShell>
  );
}
