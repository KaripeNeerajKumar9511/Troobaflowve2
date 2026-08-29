import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { solutions } from "@/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  ...solutions.meta,
  canonical: "https://trooba.com/solutions",
  ogUrl: "https://trooba.com/solutions",
});

export default function SolutionsPage() {
  return (
    <SiteShell current="solutions">
      <HtmlMain html={solutions.mainHtml} />
    </SiteShell>
  );
}
