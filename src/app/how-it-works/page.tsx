import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { howItWorks } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...howItWorks.meta,
  canonical: "https://trooba.com/how-it-works",
  ogUrl: "https://trooba.com/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <SiteShell current="how-it-works">
      <HtmlMain html={howItWorks.mainHtml} />
    </SiteShell>
  );
}
