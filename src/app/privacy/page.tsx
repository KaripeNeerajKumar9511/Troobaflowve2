import { CmsHtmlPage, cmsMetadata } from "@/components/CmsHtmlPage";

export const generateMetadata = () =>
  cmsMetadata(
    "privacy",
    "https://trooba.com/privacy",
    "https://trooba.com/privacy",
  );

export default function PrivacyPage() {
  return (
    <CmsHtmlPage
      slug="privacy"
      canonical="https://trooba.com/privacy"
      ogUrl="https://trooba.com/privacy"
    />
  );
}
