import { CmsHtmlPage, cmsMetadata } from "@/components/CmsHtmlPage";

export const generateMetadata = () =>
  cmsMetadata("proof", "https://trooba.com/proof", "https://trooba.com/proof");

export default function ProofPage() {
  return (
    <CmsHtmlPage
      slug="proof"
      current="proof"
      canonical="https://trooba.com/proof"
      ogUrl="https://trooba.com/proof"
    />
  );
}
