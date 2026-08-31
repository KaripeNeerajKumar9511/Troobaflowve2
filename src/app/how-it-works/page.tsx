import { CmsHtmlPage, cmsMetadata } from "@/components/CmsHtmlPage";

export const generateMetadata = () =>
  cmsMetadata(
    "how-it-works",
    "https://trooba.com/how-it-works",
    "https://trooba.com/how-it-works",
  );

export default function HowItWorksPage() {
  return (
    <CmsHtmlPage
      slug="how-it-works"
      current="how-it-works"
      canonical="https://trooba.com/how-it-works"
      ogUrl="https://trooba.com/how-it-works"
    />
  );
}
