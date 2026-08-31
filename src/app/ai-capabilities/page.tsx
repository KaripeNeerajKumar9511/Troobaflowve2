import { CmsHtmlPage, cmsMetadata } from "@/components/CmsHtmlPage";

export const generateMetadata = () =>
  cmsMetadata(
    "ai-capabilities",
    "https://trooba.com/ai-capabilities",
    "https://trooba.com/ai-capabilities",
  );

export default function AiCapabilitiesPage() {
  return (
    <CmsHtmlPage
      slug="ai-capabilities"
      current="ai-capabilities"
      canonical="https://trooba.com/ai-capabilities"
      ogUrl="https://trooba.com/ai-capabilities"
    />
  );
}
