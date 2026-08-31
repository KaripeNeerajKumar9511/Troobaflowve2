export const DEFAULT_NAV = [
  { label: "How It Works", href: "/how-it-works", current: "how-it-works" },
  {
    label: "Case Studies",
    href: "/proof",
    current: "proof",
    mobileLabel: "Proof",
  },
  { label: "About", href: "/about", current: "about" },
  { label: "Solutions", href: "/solutions", current: "solutions" },
  {
    label: "AI Capabilities",
    href: "/ai-capabilities",
    current: "ai-capabilities",
  },
];

export const DEFAULT_FOOTER = {
  tagline:
    "Factory Flow Intelligence. Software that shows manufacturers how work actually moves through their factories.",
  copyright:
    "© 2026 Trooba. All Rights Reserved.\nTrooba is owned and operated by\nTechsprout AI Labs Private Limited.",
  cta: { label: "Request a Flow Analysis", href: "/flow-analysis" },
  columns: [
    {
      heading: "Trooba Flow",
      links: [
        { label: "How it works", href: "/how-it-works" },
        { label: "Solutions", href: "/solutions" },
        { label: "AI Capabilities", href: "/ai-capabilities" },
        { label: "Proof", href: "/proof" },
        { label: "Request a Flow Analysis", href: "/flow-analysis" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/trooba",
          external: true,
        },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
};

export const DEFAULT_TYPOGRAPHY = {
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap",
  fontSans: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
  fontMono: '"DM Mono", ui-monospace, monospace',
};
