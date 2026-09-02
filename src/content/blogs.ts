export type FallbackBlog = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  author: string;
  published_at: string;
  read_time: string;
  cover_url: string;
  cover_alt: string;
  seo: Record<string, string>;
};

export function blogCoverUrl(slug: string): string {
  return `/assets/blog_imgs/${slug}.png`;
}

export const FALLBACK_BLOGS: FallbackBlog[] = [
  {
    slug: "why-high-utilization-increases-lead-time",
    title: "Why high machine utilization can increase manufacturing lead time",
    dek: "High machine utilization increases lead time by inflating queue time. Above roughly 85% utilization, waiting stops rising gently and starts rising steeply.",
    category: "Manufacturing insights",
    author: "Trooba Team",
    published_at: "2026-08-31",
    read_time: "8 min read",
    cover_url: blogCoverUrl("why-high-utilization-increases-lead-time"),
    cover_alt: "Factory floor with machines running at high utilisation while jobs wait in queue",
    seo: {
      title: "High Machine Utilization Increases Lead Time | Trooba Flow",
      description:
        "High machine utilization increases manufacturing lead time by inflating queue time. See the queueing math, a worked example, and how to set a better target.",
      keywords:
        "high machine utilization, manufacturing lead time, queue time, Kingman's formula, Little's Law, Manufacturing Critical-Path Time, capacity utilization, work in process",
      canonical: "https://trooba.com/blog/why-high-utilization-increases-lead-time",
      ogTitle: "High Machine Utilization Increases Lead Time | Trooba Flow",
      ogDescription:
        "High machine utilization increases manufacturing lead time by inflating queue time. See the queueing math, a worked example, and how to set a better target.",
      ogUrl: "https://trooba.com/blog/why-high-utilization-increases-lead-time",
      ogImage: blogCoverUrl("why-high-utilization-increases-lead-time"),
    },
  },
  {
    slug: "manufacturing-lead-time-waiting-not-processing",
    title: "Why most manufacturing lead time is waiting, not processing",
    dek: "A part that takes four hours of real work routinely takes four weeks to reach the customer. The gap isn't slow machines — it's queue time, and it follows predictable mathematics.",
    category: "Manufacturing insights",
    author: "Trooba Team",
    published_at: "2026-08-31",
    read_time: "7 min read",
    cover_url: blogCoverUrl("manufacturing-lead-time-waiting-not-processing"),
    cover_alt: "Parts waiting between operations while only a small share of lead time is processing",
    seo: {
      title: "Why Manufacturing Lead Time Is Mostly Waiting | Trooba Flow",
      description:
        "Most manufacturing lead time is queue time, not processing time. Learn where the waiting hides, how to measure it, and which levers actually cut it.",
      keywords:
        "manufacturing lead time, queue time, work in process, Little's Law, Manufacturing Critical-Path Time, machine utilisation, transfer lot size, high-mix low-volume manufacturing",
      canonical:
        "https://trooba.com/blog/manufacturing-lead-time-waiting-not-processing",
      ogTitle: "Why Manufacturing Lead Time Is Mostly Waiting | Trooba Flow",
      ogDescription:
        "Most manufacturing lead time is queue time, not processing time. Learn where the waiting hides, how to measure it, and which levers actually cut it.",
      ogUrl: "https://trooba.com/blog/manufacturing-lead-time-waiting-not-processing",
      ogImage: blogCoverUrl("manufacturing-lead-time-waiting-not-processing"),
    },
  },
  {
    slug: "manufacturing-critical-path-time-mct",
    title: "Manufacturing Critical-Path Time (MCT): a better way to measure lead time",
    dek: "MCT counts every calendar day an order truly takes — weekends, waiting, approvals, outside processing — from order entry to first piece delivered.",
    category: "Manufacturing insights",
    author: "Trooba Team",
    published_at: "2026-08-31",
    read_time: "8 min read",
    cover_url: blogCoverUrl("manufacturing-critical-path-time-mct"),
    cover_alt: "Manufacturing Critical-Path Time map showing calendar days from order to first piece",
    seo: {
      title: "Manufacturing Critical-Path Time (MCT) Explained | Trooba",
      description:
        "Manufacturing Critical-Path Time (MCT) measures the calendar days an order truly takes, from order entry to first piece shipped. Learn to map and reduce it.",
      keywords:
        "manufacturing critical-path time, MCT, lead time measurement, Quick Response Manufacturing, QRM, queue time, touch time, work in process",
      canonical: "https://trooba.com/blog/manufacturing-critical-path-time-mct",
      ogTitle: "Manufacturing Critical-Path Time (MCT) Explained | Trooba",
      ogDescription:
        "Manufacturing Critical-Path Time (MCT) measures the calendar days an order truly takes, from order entry to first piece shipped. Learn to map and reduce it.",
      ogUrl: "https://trooba.com/blog/manufacturing-critical-path-time-mct",
      ogImage: blogCoverUrl("manufacturing-critical-path-time-mct"),
    },
  },
  {
    slug: "quick-response-manufacturing-qrm",
    title: "What is Quick Response Manufacturing (QRM)?",
    dek: "A factory can be busy all day and still be slow. QRM attacks calendar time — waiting, queues, WIP, and handoffs — rather than chasing machine utilisation.",
    category: "Manufacturing insights",
    author: "Trooba Team",
    published_at: "2026-09-02",
    read_time: "12 min read",
    cover_url: blogCoverUrl("quick-response-manufacturing-qrm"),
    cover_alt: "Quick Response Manufacturing focuses on calendar time through cells, queues, and MCT",
    seo: {
      title: "Quick Response Manufacturing (QRM): A Practical Guide | Trooba",
      description:
        "Learn what Quick Response Manufacturing (QRM) is, how it reduces manufacturing lead time, and how MCT, cells, capacity, and queues fit together.",
      keywords:
        "Quick Response Manufacturing, QRM, manufacturing lead time, Manufacturing Critical-path Time, MCT, QRM cells, POLCA, queueing theory",
      canonical: "https://trooba.com/blog/quick-response-manufacturing-qrm",
      ogTitle: "Quick Response Manufacturing (QRM): A Practical Guide | Trooba",
      ogDescription:
        "Learn what Quick Response Manufacturing (QRM) is, how it reduces manufacturing lead time, and how MCT, cells, capacity, and queues fit together.",
      ogUrl: "https://trooba.com/blog/quick-response-manufacturing-qrm",
      ogImage: blogCoverUrl("quick-response-manufacturing-qrm"),
    },
  },
  {
    slug: "qrm-response-time-spiral",
    title:
      "The QRM Response Time Spiral: why long lead times create even longer lead times",
    dek: "Long manufacturing lead times encourage earlier release, more WIP, larger batches, and expediting — which grow queues and stretch lead time again.",
    category: "Manufacturing insights",
    author: "Trooba Team",
    published_at: "2026-09-02",
    read_time: "10 min read",
    cover_url: blogCoverUrl("qrm-response-time-spiral"),
    cover_alt: "QRM Response Time Spiral showing how long lead times create more WIP and delay",
    seo: {
      title: "QRM Response Time Spiral: Why Lead Times Keep Growing | Trooba",
      description:
        "Understand the QRM Response Time Spiral, why long manufacturing lead times create more WIP and queues, and how manufacturers can break the cycle.",
      keywords:
        "QRM Response Time Spiral, manufacturing lead time, Quick Response Manufacturing, queue time, WIP, MCT, factory flow, manufacturing queues",
      canonical: "https://trooba.com/blog/qrm-response-time-spiral",
      ogTitle: "QRM Response Time Spiral: Why Lead Times Keep Growing | Trooba",
      ogDescription:
        "Understand the QRM Response Time Spiral, why long manufacturing lead times create more WIP and queues, and how manufacturers can break the cycle.",
      ogUrl: "https://trooba.com/blog/qrm-response-time-spiral",
      ogImage: blogCoverUrl("qrm-response-time-spiral"),
    },
  },
];
