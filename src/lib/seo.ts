import type { Metadata } from "next";

const SITE = "https://www.trooba.com";
const OG_IMAGE = `${SITE}/og-banner.png`;
const AUTHOR = "Techsprout AI Labs Pvt Ltd";

type PageMetaInput = {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  noIndex?: boolean;
};

export function buildMetadata(input: PageMetaInput): Metadata {
  const title = input.title;
  const description = input.description;
  const canonical = input.canonical.replace(/\.html$/, "").replace(/\/index$/, "/");
  const ogTitle = input.ogTitle || title;
  const ogDescription = input.ogDescription || description;
  const ogUrl = (input.ogUrl || canonical).replace(/\.html$/, "").replace(/\/index$/, "/");

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
      "Factory Flow Intelligence",
      "reduce lead time",
      "reduce WIP",
      "reduce bottlenecks",
      "reduce queue time",
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
      siteName: "Trooba",
      url: ogUrl,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Trooba Flow",
        },
      ],
      locale: "en",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE],
    },
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Trooba Flow",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Factory Flow Intelligence. Trooba Flow models how work moves through a factory and predicts where queues, bottlenecks and lead time will appear.",
  url: SITE,
  image: OG_IMAGE,
  publisher: {
    "@type": "Organization",
    name: AUTHOR,
    url: SITE,
  },
};
