import type { Metadata } from "next";

export const SITE = "https://trooba.com";
export const SITE_TITLE =
  "AI-Powered Factory Flow Intelligence for Manufacturing | Trooba Flow";
export const SITE_DESCRIPTION =
  "Trooba Flow helps manufacturers identify bottlenecks, reduce lead times, uncover hidden capacity, and test production changes before they affect the factory floor.";
export const SITE_ICON = "/favicon.svg";
export const SITE_ICON_PNG = "/icon-512.png";
const OG_IMAGE = `${SITE}/og-banner.png`;
const AUTHOR = "Techsprout AI Labs Pvt Ltd";

type PageMetaInput = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata(input: PageMetaInput): Metadata {
  const title = input.title;
  const description = input.description;
  const canonical = input.canonical.replace(/\.html$/, "").replace(/\/index$/, "/");
  const ogTitle = input.ogTitle || title;
  const ogDescription = input.ogDescription || description;
  const ogUrl = (input.ogUrl || canonical).replace(/\.html$/, "").replace(/\/index$/, "/");
  const ogImage = input.ogImage
    ? /^https?:\/\//i.test(input.ogImage)
      ? input.ogImage
      : `${SITE}${input.ogImage.startsWith("/") ? "" : "/"}${input.ogImage}`
    : OG_IMAGE;

  return {
    title,
    description,
    authors: [{ name: AUTHOR, url: SITE }],
    creator: AUTHOR,
    publisher: AUTHOR,
    applicationName: "Trooba Flow",
    keywords: [
      "Trooba",
      "Trooba Flow",
      "AI-Powered Factory Flow Intelligence for Manufacturing",
      "Factory Flow Intelligence",
      "reduce lead time",
      "reduce WIP",
      "reduce bottlenecks",
      "hidden capacity",
      "Queueing Theory",
      "QRM",
      "Quick Response Manufacturing",
      "manufacturing lead time",
      "bottlenecks",
      "WIP",
    ],
    alternates: { canonical },
    robots: input.noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: "Trooba Flow",
      url: ogUrl,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Trooba Flow — AI-Powered Factory Flow Intelligence for Manufacturing",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          alt: "Trooba Flow — AI-Powered Factory Flow Intelligence for Manufacturing",
        },
      ],
    },
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Trooba",
      legalName: "Techsprout AI Labs Private Limited",
      url: SITE,
      logo: `${SITE}${SITE_ICON_PNG}`,
      sameAs: ["https://www.linkedin.com/company/trooba"],
    },
    {
      "@type": "SoftwareApplication",
      name: "Trooba Flow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: SITE_DESCRIPTION,
      url: SITE,
      image: OG_IMAGE,
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "WebSite",
      name: "Trooba Flow",
      url: SITE,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE}/#organization` },
    },
  ],
};
