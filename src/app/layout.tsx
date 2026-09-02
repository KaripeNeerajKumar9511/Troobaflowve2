import type { Metadata } from "next";
import Script from "next/script";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  buildMetadata,
  jsonLd,
} from "@/lib/seo";
import { getSite, typographyCss } from "@/lib/cms";
import "@/styles/trooba-design-tokens.css";
import "@/styles/site.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite();
  return {
    ...buildMetadata({
      title: site.seo?.siteTitle || SITE_TITLE,
      description: site.seo?.siteDescription || SITE_DESCRIPTION,
      canonical: "https://trooba.com/",
      ogImage: site.seo?.ogImage,
    }),
    metadataBase: new URL("https://trooba.com"),
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    other: {
      "theme-color": "#F6F6F4",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const site = await getSite();
  const fontHref =
    site.typography.googleFontsHref ||
    "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap";
  const css = typographyCss(site.typography);

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={fontHref} />
        {css ? (
          <style dangerouslySetInnerHTML={{ __html: css }} />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "production" ? (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-6EGGF1QSM3"
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6EGGF1QSM3');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
