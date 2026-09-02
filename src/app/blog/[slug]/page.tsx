import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { BlogToc } from "@/components/BlogToc";
import { SiteShell } from "@/components/SiteShell";
import { getBlog, getBlogs, relatedBlogs } from "@/lib/cms";
import { prepareBlogHtml, tocFromHtml } from "@/lib/blog-html";
import { SITE, buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value?: string | null): string {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) return {};
  const url = `${SITE}/blog/${post.slug}`;
  const seo = post.seo || {};
  return buildMetadata({
    title: seo.title || `${post.title} | Trooba Flow`,
    description: seo.description || post.dek || "",
    canonical: seo.canonical || url,
    ogTitle: seo.ogTitle || seo.title || post.title,
    ogDescription: seo.ogDescription || seo.description || post.dek || "",
    ogUrl: seo.ogUrl || url,
    ogImage: seo.ogImage || post.cover_url,
    keywords: seo.keywords,
    type: "article",
  });
}

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getBlog(slug), getBlogs()]);
  if (!post) notFound();
  const body = prepareBlogHtml(post.body_html || "");
  const toc = tocFromHtml(body);
  const related = relatedBlogs(all, post.slug);
  const url = `${SITE}/blog/${post.slug}`;
  const seo = post.seo || {};
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: seo.description || post.dek,
    datePublished: post.published_at || undefined,
    author: { "@type": "Organization", name: post.author || "Trooba Team" },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntityOfPage: url,
    keywords: seo.keywords || undefined,
    image: seo.ogImage || post.cover_url || `${SITE}/og-banner.png`,
  };

  return (
    <SiteShell current="blog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <main id="main">
        <article className="blog-page">
          <div className="wrap">
            <div className={toc.length ? "blog-layout" : "blog-layout blog-layout--solo"}>
              <div className="blog-main">
                <header className="blog-hero">
                  <p className="blog-crumb">
                    <Link href="/blog">Blogs</Link>
                    <span className="blog-crumb__sep">/</span>
                    <span>{post.category || "Manufacturing insights"}</span>
                  </p>
                  <p className="blog-card__meta">
                    <span className="blog-card__tag">
                      {post.category || "Manufacturing insights"}
                    </span>
                    <span>
                      {[post.read_time, formatDate(post.published_at)]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  </p>
                  <h1 className="blog-title">{post.title}</h1>
                  {post.dek ? <p className="lead">{post.dek}</p> : null}
                  <Link href="/about#team" className="blog-byline">
                    <span className="blog-byline__mark" aria-hidden="true">
                      {(post.author || "T").slice(0, 1)}
                    </span>
                    {post.author || "Trooba Team"}
                  </Link>
                </header>
                <div className="blog-article">
                  {post.cover_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="blog-cover"
                      src={post.cover_url}
                      alt={post.cover_alt || post.title}
                    />
                  ) : null}
                  <div
                    className="blog-body"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              </div>
              {toc.length ? <BlogToc items={toc} /> : null}
            </div>
          </div>
        </article>
        {related.length ? (
          <section className="section section--ruled">
            <div className="wrap">
              <h2 className="h3">More from the blogs</h2>
              <div className="blog-index blog-index--related u-mt8">
                {related.map((row) => (
                  <BlogCard key={row.slug} post={row} showDate={false} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </SiteShell>
  );
}

