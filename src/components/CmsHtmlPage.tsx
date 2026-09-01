import type { Metadata } from "next";
import { HtmlMain } from "@/components/HtmlMain";
import { SiteShell } from "@/components/SiteShell";
import { type NavCurrent } from "@/components/SiteHeader";
import { buildMetadata } from "@/lib/seo";
import { getBlogs, getPage, getSite, injectCaseStudies, injectHomeBlogs, injectSolutions, injectTeamHtml } from "@/lib/cms";

export async function cmsMetadata(
  slug: string,
  canonical: string,
  ogUrl: string,
): Promise<Metadata> {
  const page = await getPage(slug);
  const site = await getSite();
  return buildMetadata({
    title: page.seo.title || site.seo?.siteTitle || "",
    description: page.seo.description || site.seo?.siteDescription || "",
    canonical: canonical || page.seo.canonical || "",
    ogTitle: page.seo.ogTitle,
    ogDescription: page.seo.ogDescription,
    ogUrl: ogUrl || page.seo.ogUrl,
    ogImage: page.seo.ogImage || site.seo?.ogImage,
  });
}

export async function CmsHtmlPage({
  slug,
  current = null,
  canonical,
  ogUrl,
}: {
  slug: string;
  current?: NavCurrent;
  canonical: string;
  ogUrl: string;
}) {
  const [page, site, blogs] = await Promise.all([
    getPage(slug),
    getSite(),
    slug === "home" ? getBlogs() : Promise.resolve([]),
  ]);
  let html = page.main_html;
  if (slug === "about") html = injectTeamHtml(html, site.team);
  if (slug === "proof") html = injectCaseStudies(html, site.case_studies);
  if (slug === "solutions") html = injectSolutions(html, site.solutions);
  if (slug === "home") html = injectHomeBlogs(html, blogs);
  void canonical;
  void ogUrl;
  return (
    <SiteShell current={current}>
      <HtmlMain html={html} />
    </SiteShell>
  );
}
