import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { type CmsBlog, getBlogs } from "@/lib/cms";
import { SITE, buildMetadata, jsonLd } from "@/lib/seo";

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

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Manufacturing Insights | Trooba Flow",
    description:
      "Articles on manufacturing lead time, queue time, utilisation, and Manufacturing Critical-Path Time — written for people who run plants.",
    canonical: `${SITE}/blog`,
    ogTitle: "Manufacturing Insights | Trooba Flow",
    ogDescription:
      "Articles on manufacturing lead time, queue time, utilisation, and Manufacturing Critical-Path Time — written for people who run plants.",
    ogUrl: `${SITE}/blog`,
    keywords:
      "manufacturing lead time, queue time, MCT, utilization, Quick Response Manufacturing, factory flow",
  });
}

export default async function BlogIndexPage() {
  const posts = await getBlogs();
  const listingLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Trooba Flow Insights",
    url: `${SITE}/blog`,
    publisher: { "@id": `${SITE}/#organization` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.dek,
      url: `${SITE}/blog/${post.slug}`,
      datePublished: post.published_at || undefined,
    })),
  };

  return (
    <SiteShell current="blog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, listingLd]) }}
      />
      <main id="main">
        <section className="blog-head">
          <div className="wrap">
            <p className="tr-label">Insights</p>
            <h1 className="section-title section-title--wide">
              How factories actually lose time.
            </h1>
            <p className="lead u-mt6">
              Queueing, utilisation, and manufacturing critical-path time —
              written for people who run plants.
            </p>
          </div>
        </section>
        <section className="section section--tight">
          <div className="wrap">
            {posts.length ? (
              <div className="blog-index">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="body">No articles published yet.</p>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function BlogCard({ post }: { post: CmsBlog }) {
  const meta = [post.read_time, formatDate(post.published_at)]
    .filter(Boolean)
    .join(" · ");
  return (
    <Link className="blog-card" href={`/blog/${post.slug}`}>
      <p className="blog-card__meta">
        <span className="blog-card__tag">{post.category || "Insights"}</span>
        {meta ? <span>{meta}</span> : null}
      </p>
      <h2 className="h3">{post.title}</h2>
      {post.dek ? <p className="body">{post.dek}</p> : null}
      <span className="link">
        Read article <span className="arw" aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
