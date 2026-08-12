import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { proof } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...proof.meta,
  canonical: "https://www.trooba.com/proof",
  ogUrl: "https://www.trooba.com/proof",
});

export default function ProofPage() {
  return (
    <SiteShell current="proof">
      <HtmlMain html={proof.mainHtml} />
    </SiteShell>
  );
}
