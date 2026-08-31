import { CmsHtmlPage, cmsMetadata } from "@/components/CmsHtmlPage";

export const generateMetadata = () =>
  cmsMetadata("home", "https://trooba.com/", "https://trooba.com/");

export default function HomePage() {
  return (
    <CmsHtmlPage
      slug="home"
      canonical="https://trooba.com/"
      ogUrl="https://trooba.com/"
    />
  );
}
