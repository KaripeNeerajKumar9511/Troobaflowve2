import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { privacy } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...privacy.meta,
  canonical: "https://trooba.com/privacy",
  ogUrl: "https://trooba.com/privacy",
});

export default function PrivacyPage() {
  return (
    <SiteShell>
      <HtmlMain html={privacy.mainHtml} />
    </SiteShell>
  );
}
