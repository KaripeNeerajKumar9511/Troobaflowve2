import {
  about,
  aiCapabilities,
  home,
  howItWorks,
  privacy,
  proof,
  solutions,
  terms,
} from "@/content";
import {
  DEFAULT_FOOTER,
  DEFAULT_NAV,
  DEFAULT_TYPOGRAPHY,
} from "./cms-defaults";

const API =
  process.env.BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";

export type NavItem = {
  label: string;
  href: string;
  current?: string;
  mobileLabel?: string;
};

export type SiteBundle = {
  logo_url: string;
  nav: NavItem[];
  footer: {
    tagline?: string;
    copyright?: string;
    cta?: { label: string; href: string };
    columns?: {
      heading: string;
      links: { label: string; href: string; external?: boolean }[];
    }[];
  };
  typography: {
    googleFontsHref?: string;
    fontSans?: string;
    fontMono?: string;
    fs?: Record<string, string>;
    mk?: Record<string, string>;
  };
  seo?: Record<string, string>;
  team?: TeamMember[];
  case_studies?: CmsCase[];
  solutions?: CmsSolution[];
};

export type TeamMember = {
  name: string;
  role: string;
  photo_url: string;
  alt: string;
};

export type CmsCase = {
  slug?: string;
  title: string;
  badge?: string;
  status?: string;
  metric?: string;
  caption?: string;
  image_url?: string;
  image_alt?: string;
  facts?: { dt?: string; dd?: string }[];
  body_html?: string;
};

export type CmsSolution = {
  title: string;
  body?: string;
  tagline?: string;
  icon_html?: string;
  figure_html?: string;
};

export type CmsPage = {
  slug?: string;
  title?: string;
  seo: Record<string, string>;
  fields: Record<string, unknown>;
  html_blocks?: Record<string, string>;
  main_html: string;
};

const FALLBACK_PAGES: Record<string, CmsPage> = {
  home: { seo: { ...home.meta }, fields: {}, main_html: home.mainHtml },
  "how-it-works": {
    seo: { ...howItWorks.meta },
    fields: {},
    main_html: howItWorks.mainHtml,
  },
  proof: { seo: { ...proof.meta }, fields: {}, main_html: proof.mainHtml },
  about: { seo: { ...about.meta }, fields: {}, main_html: about.mainHtml },
  solutions: {
    seo: { ...solutions.meta },
    fields: {},
    main_html: solutions.mainHtml,
  },
  "ai-capabilities": {
    seo: { ...aiCapabilities.meta },
    fields: {},
    main_html: aiCapabilities.mainHtml,
  },
  privacy: { seo: { ...privacy.meta }, fields: {}, main_html: privacy.mainHtml },
  terms: { seo: { ...terms.meta }, fields: {}, main_html: terms.mainHtml },
};

export const FALLBACK_SITE: SiteBundle = {
  logo_url: "/assets/logo/trooba-flow-light.svg",
  nav: DEFAULT_NAV,
  footer: DEFAULT_FOOTER,
  typography: DEFAULT_TYPOGRAPHY,
  team: [],
};

async function cmsFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API}${path}`, { next: { revalidate: 30 } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getSite(): Promise<SiteBundle> {
  const data = await cmsFetch<SiteBundle>("/api/public/site/");
  if (!data) return FALLBACK_SITE;
  return {
    ...FALLBACK_SITE,
    ...data,
    nav: data.nav?.length ? data.nav : FALLBACK_SITE.nav,
    footer: { ...FALLBACK_SITE.footer, ...data.footer },
    typography: { ...FALLBACK_SITE.typography, ...data.typography },
    logo_url: data.logo_url || FALLBACK_SITE.logo_url,
  };
}

export async function getPage(slug: string): Promise<CmsPage> {
  const fallback = FALLBACK_PAGES[slug] || {
    seo: {},
    fields: {},
    main_html: "",
  };
  const data = await cmsFetch<CmsPage>(`/api/public/pages/${slug}/`);
  if (!data) return fallback;
  return {
    ...fallback,
    ...data,
    seo: { ...fallback.seo, ...(data.seo || {}) },
    fields: { ...(fallback.fields || {}), ...(data.fields || {}) },
    main_html: data.main_html || fallback.main_html,
  };
}

export function typographyCss(ty: SiteBundle["typography"]): string {
  const fs = ty.fs || {};
  const mk = ty.mk || {};
  const rules: string[] = [];
  if (ty.fontSans) rules.push(`--font-sans:${ty.fontSans}`);
  if (ty.fontMono) rules.push(`--font-mono:${ty.fontMono}`);
  const fsMap: Record<string, string> = {
    display: "--fs-display",
    h1: "--fs-h1",
    h2: "--fs-h2",
    h3: "--fs-h3",
    bodyLg: "--fs-body-lg",
    body: "--fs-body",
    sm: "--fs-sm",
    meta: "--fs-meta",
    micro: "--fs-micro",
    valueLg: "--fs-value-lg",
    value: "--fs-value",
    valueSm: "--fs-value-sm",
  };
  for (const [k, css] of Object.entries(fsMap)) {
    if (fs[k]) rules.push(`${css}:${fs[k]}`);
  }
  const mkMap: Record<string, string> = {
    hero: "--mk-hero",
    section: "--mk-section",
    h3: "--mk-h3",
    lead: "--mk-lead",
    body: "--mk-body",
  };
  for (const [k, css] of Object.entries(mkMap)) {
    if (mk[k]) rules.push(`${css}:${mk[k]}`);
  }
  return rules.length ? `:root{${rules.join(";")}}` : "";
}

export function injectTeamHtml(html: string, team: TeamMember[] | undefined): string {
  if (!team?.length || !html.includes("about-team__grid")) return html;
  const items = team
    .map(
      (m) => `<li>
        <figure class="about-team__photo">
          <div class="about-team__frame">
            <img src="${escapeAttr(m.photo_url)}" alt="${escapeAttr(m.alt || m.name)}" width="400" height="400">
          </div>
          <figcaption>
            <span class="about-team__name">${escapeHtml(m.name)}</span>
            <span class="about-team__role">${escapeHtml(m.role)}</span>
          </figcaption>
        </figure>
      </li>`,
    )
    .join("");
  return html.replace(
    /<ul class="about-team__grid">[\s\S]*?<\/ul>/,
    `<ul class="about-team__grid">${items}</ul>`,
  );
}

function padCase(i: number): string {
  return String(i + 1).padStart(2, "0");
}

function caseIndexHtml(cases: CmsCase[]): string {
  return cases
    .map((c, i) => {
      const metric = c.metric
        ? `<p class="cases-card__metric">${escapeHtml(c.metric)}</p>`
        : "";
      const cap = c.caption
        ? c.metric
          ? `<p class="cases-card__cap">${escapeHtml(c.caption)}</p>`
          : `<p class="cases-card__note">${escapeHtml(c.caption)}</p>`
        : "";
      const img = c.image_url
        ? `<figure class="cases-card__media${c.metric ? "" : " cases-card__media--dark"}">
          <img src="${escapeAttr(c.image_url)}" alt="${escapeAttr(c.image_alt || c.title)}" width="720" height="540">
        </figure>`
        : "";
      return `<a class="cases-card" href="#case-${padCase(i)}">
      <div class="cases-card__copy">
        <p class="cases-card__meta">
          <span class="cases-card__badge">${escapeHtml(c.badge || "")}</span>
          <span class="cases-card__status">${escapeHtml(c.status || "")}</span>
        </p>
        <h2 class="cases-card__title">${escapeHtml(c.title)}</h2>
        ${metric}${cap}
      </div>
      ${img}
    </a>`;
    })
    .join("");
}

function patchCaseArticle(article: string, c: CmsCase, i: number): string {
  let a = article.replace(/id="case-\d+"/, `id="case-${padCase(i)}"`);
  a = a.replace(
    /<p class="case__tag">[\s\S]*?<\/p>/,
    `<p class="case__tag">${escapeHtml([c.badge, c.status].filter(Boolean).join(" · "))}</p>`,
  );
  a = a.replace(
    /<h2 class="section-title">[\s\S]*?<\/h2>/,
    `<h2 class="section-title">${escapeHtml(c.title)}</h2>`,
  );
  if (c.metric && /class="result__v/.test(a)) {
    a = a.replace(
      /<p class="result__v[^"]*">[\s\S]*?<\/p>/,
      `<p class="result__v u-mt10">${escapeHtml(c.metric)}</p>`,
    );
  }
  if (c.caption && /class="result__cap/.test(a)) {
    a = a.replace(
      /<p class="result__cap[^"]*">[\s\S]*?<\/p>/,
      `<p class="result__cap u-mt5">${escapeHtml(c.caption)}</p>`,
    );
  }
  if (c.image_url) {
    a = a.replace(
      /<img\b[^>]*>/,
      `<img src="${escapeAttr(c.image_url)}" alt="${escapeAttr(c.image_alt || c.title)}" width="720" height="540">`,
    );
  }
  if (c.facts?.length) {
    const dl = `<dl class="u-mt10">${c.facts
      .map(
        (f) =>
          `<div class="fact"><dt>${escapeHtml(f.dt || "")}</dt><dd>${escapeHtml(f.dd || "")}</dd></div>`,
      )
      .join("")}</dl>`;
    a = a.replace(/<dl class="u-mt10">[\s\S]*?<\/dl>/, dl);
  }
  return a;
}

export function injectCaseStudies(html: string, cases: CmsCase[] | undefined): string {
  if (!cases?.length || !html.includes("cases-index")) return html;
  let next = html.replace(
    /<div class="cases-index">[\s\S]*?<\/div>(?=\s*<\/div>\s*<\/section>)/,
    `<div class="cases-index">${caseIndexHtml(cases)}</div>`,
  );
  let idx = 0;
  next = next.replace(
    /<article class="case" id="case-\d+"[\s\S]*?<\/article>/g,
    (article) => {
      const c = cases[idx++];
      if (!c) return "";
      return patchCaseArticle(article, c, idx - 1);
    },
  );
  return next;
}

export function injectSolutions(html: string, cards: CmsSolution[] | undefined): string {
  if (!cards?.length || !html.includes("sol-grid")) return html;
  let i = 0;
  let next = html.replace(
    /<article class="panel sol-card[\s\S]*?<\/article>/g,
    (article) => {
      const card = cards[i++];
      if (!card) return "";
      let a = article;
      a = a.replace(
        /<span class="row__idx">[\s\S]*?<\/span>/,
        `<span class="row__idx">${String(i).padStart(2, "0")}</span>`,
      );
      a = a.replace(
        /<h2 class="h3">[\s\S]*?<\/h2>/,
        `<h2 class="h3">${escapeHtml(card.title)}</h2>`,
      );
      if (card.body) {
        a = a.replace(
          /<p class="body">[\s\S]*?<\/p>/,
          `<p class="body">${escapeHtml(card.body)}</p>`,
        );
      }
      if (card.tagline) {
        a = a.replace(
          /<p class="sol-card__tag">[\s\S]*?<\/p>/,
          `<p class="sol-card__tag">${escapeHtml(card.tagline)}</p>`,
        );
      }
      return a;
    },
  );
  if (i < cards.length) {
    const extra = cards
      .slice(i)
      .map((card, j) => {
        const n = String(i + j + 1).padStart(2, "0");
        return `<article class="panel sol-card reveal">
        <div class="sol-card__copy">
          <div class="sol-card__head"><span class="row__idx">${n}</span></div>
          <h2 class="h3">${escapeHtml(card.title)}</h2>
          <p class="body">${escapeHtml(card.body || "")}</p>
          <p class="sol-card__tag">${escapeHtml(card.tagline || "")}</p>
        </div>
      </article>`;
      })
      .join("");
    next = next.replace(
      /(<\/div>\s*)(<p class="fig__note)/,
      `${extra}$1$2`,
    );
  }
  return next;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value: string): string {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

export async function persistLead(
  kind: "contact" | "request",
  body: unknown,
): Promise<void> {
  try {
    await fetch(`${API}/api/public/leads/${kind}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error(`[cms] persist ${kind} failed:`, err);
  }
}
