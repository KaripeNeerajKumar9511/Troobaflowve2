import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { aiCapabilities } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...aiCapabilities.meta,
  canonical: "https://www.trooba.com/ai-capabilities",
  ogUrl: "https://www.trooba.com/ai-capabilities",
});

export default function AiCapabilitiesPage() {
  return (
    <SiteShell current="ai-capabilities">
      <HtmlMain html={aiCapabilities.mainHtml} />
    </SiteShell>
  );
}
