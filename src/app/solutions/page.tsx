import { CmsHtmlPage, cmsMetadata } from "@/components/CmsHtmlPage";

export const generateMetadata = () =>
  cmsMetadata(
    "solutions",
    "https://trooba.com/solutions",
    "https://trooba.com/solutions",
  );

export default function SolutionsPage() {
  return (
    <CmsHtmlPage
      slug="solutions"
      current="solutions"
      canonical="https://trooba.com/solutions"
      ogUrl="https://trooba.com/solutions"
    />
  );
}
