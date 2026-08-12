import type { Metadata } from "next";
import { buildMetadata, jsonLd } from "@/lib/seo";
import "@/styles/trooba-design-tokens.css";
import "@/styles/site.css";
import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Trooba Flow — Factory Flow Intelligence for Manufacturers",
    description:
      "Trooba Flow predicts where work will queue in your factory, how manufacturing lead time will change, and where hidden capacity is sitting unused — before delivery slips.",
    canonical: "https://www.trooba.com/",
  }),
  metadataBase: new URL("https://www.trooba.com"),
  icons: {
    icon: [{ url: "/assets/logo/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/assets/logo/trooba-app-icon-512.svg" }],
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
      <body>{children}</body>
    </html>
  );
}
