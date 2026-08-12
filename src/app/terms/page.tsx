import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { terms } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...terms.meta,
  canonical: "https://www.trooba.com/terms",
  ogUrl: "https://www.trooba.com/terms",
});

export default function TermsPage() {
  return (
    <SiteShell>
      <HtmlMain html={terms.mainHtml} />
    </SiteShell>
  );
}
