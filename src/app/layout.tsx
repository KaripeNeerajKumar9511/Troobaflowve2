import type { Metadata } from "next";
import Script from "next/script";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  buildMetadata,
  jsonLd,
} from "@/lib/seo";
import "@/styles/trooba-design-tokens.css";
import "@/styles/site.css";
import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    canonical: "https://trooba.com/",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Marks progressive-enhancement CSS (html.js …) before paint so
            reveals/animations stay off when JavaScript is disabled.
            suppressHydrationWarning keeps the runtime class on <html>. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
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
      </body>
    </html>
  );
}
