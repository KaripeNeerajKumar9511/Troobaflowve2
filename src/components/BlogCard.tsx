import Link from "next/link";
import type { CmsBlog } from "@/lib/cms";

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

type Props = {
  post: CmsBlog;
  heading?: "h2" | "h3";
  showDate?: boolean;
};

export function BlogCard({ post, heading = "h3", showDate = true }: Props) {
  const meta = [
    post.read_time,
    showDate ? formatDate(post.published_at) : "",
  ]
    .filter(Boolean)
    .join(" · ");
  const Heading = heading;
  const cover = post.cover_url;
  return (
    <Link className="blog-card" href={`/blog/${post.slug}`}>
      {cover ? (
        <span className="blog-card__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cover} alt={post.cover_alt || post.title} />
        </span>
      ) : null}
      <span className="blog-card__copy">
        <p className="blog-card__meta">
          <span className="blog-card__tag">{post.category || "Insights"}</span>
          {meta ? <span>{meta}</span> : null}
        </p>
        <Heading className="h3">{post.title}</Heading>
        {post.dek ? <p className="body">{post.dek}</p> : null}
        <span className="link">
          Read article <span className="arw" aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  );
}
