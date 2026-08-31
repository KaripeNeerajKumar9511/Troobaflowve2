import { CmsHtmlPage, cmsMetadata } from "@/components/CmsHtmlPage";

export const generateMetadata = () =>
  cmsMetadata("about", "https://trooba.com/about", "https://trooba.com/about");

export default function AboutPage() {
  return (
    <CmsHtmlPage
      slug="about"
      current="about"
      canonical="https://trooba.com/about"
      ogUrl="https://trooba.com/about"
    />
  );
}
