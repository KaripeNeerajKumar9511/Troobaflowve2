import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/product", destination: "/", permanent: true },
      { source: "/product/", destination: "/", permanent: true },
      { source: "/product.html", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/how-it-works.html",
        destination: "/how-it-works",
        permanent: true,
      },
      { source: "/proof.html", destination: "/proof", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      {
        source: "/solutions.html",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/ai-capabilities.html",
        destination: "/ai-capabilities",
        permanent: true,
      },
      {
        source: "/flow-analysis.html",
        destination: "/flow-analysis",
        permanent: true,
      },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
