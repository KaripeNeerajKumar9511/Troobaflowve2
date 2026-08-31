import { CmsHtmlPage, cmsMetadata } from "@/components/CmsHtmlPage";

export const generateMetadata = () =>
  cmsMetadata("terms", "https://trooba.com/terms", "https://trooba.com/terms");

export default function TermsPage() {
  return (
    <CmsHtmlPage
      slug="terms"
      canonical="https://trooba.com/terms"
      ogUrl="https://trooba.com/terms"
    />
  );
}
