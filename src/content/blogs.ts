export type FallbackBlog = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  author: string;
  published_at: string;
  read_time: string;
  seo: Record<string, string>;
};

export const FALLBACK_BLOGS: FallbackBlog[] = [
  {
    slug: "why-high-utilization-increases-lead-time",
    title: "Why high machine utilization can increase manufacturing lead time",
    dek: "High machine utilization increases lead time by inflating queue time. Above roughly 85% utilization, waiting stops rising gently and starts rising steeply.",
    category: "Manufacturing insights",
    author: "Trooba Team",
    published_at: "2026-08-31",
    read_time: "8 min read",
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
    },
  },
];
