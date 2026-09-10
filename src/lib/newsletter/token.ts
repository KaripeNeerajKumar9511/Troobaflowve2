import { createHmac, timingSafeEqual } from "crypto";

function secret(): string {
  return (
    process.env.NEWSLETTER_SECRET ||
    process.env.JWT_SECRET ||
    process.env.EMAIL_HOST_PASSWORD ||
    "trooba-newsletter-dev"
  );
}

export function siteOrigin(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.FRONTEND_ORIGIN ||
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

export function newsletterToken(email: string): string {
  const e = email.trim().toLowerCase();
  const sig = createHmac("sha256", secret()).update(e).digest("base64url");
  return Buffer.from(`${e}.${sig}`).toString("base64url");
}

export function readNewsletterToken(token: string): string | null {
  try {
    const raw = Buffer.from(token, "base64url").toString("utf8");
    const i = raw.lastIndexOf(".");
    if (i <= 0) return null;
    const email = raw.slice(0, i).trim().toLowerCase();
    const sig = raw.slice(i + 1);
    const expected = createHmac("sha256", secret()).update(email).digest("base64url");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (!email || a.length !== b.length || !timingSafeEqual(a, b)) return null;
    return email;
  } catch {
    return null;
  }
}

export function unsubscribeUrl(email: string): string {
  return `${siteOrigin()}/unsubscribe?token=${encodeURIComponent(newsletterToken(email))}`;
}

export function subscribeUrl(): string {
  return `${siteOrigin()}/#newsletter`;
}
