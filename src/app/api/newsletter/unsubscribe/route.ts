import { after, NextResponse } from "next/server";
import { persistNewsletter } from "@/lib/cms";
import { sendUnsubscribeEmail } from "@/lib/newsletter/mail";
import { readNewsletterToken } from "@/lib/newsletter/token";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
  }
  const token = String((raw as { token?: unknown })?.token ?? "").trim();
  const email = readNewsletterToken(token);
  if (!email) {
    return NextResponse.json(
      { success: false, error: "This unsubscribe link is invalid or has expired." },
      { status: 400 },
    );
  }

  try {
    const saved = await persistNewsletter("unsubscribe", { email });
    if (!saved.already_unsubscribed) {
      after(async () => {
        try {
          await sendUnsubscribeEmail(email);
        } catch (err) {
          console.error("[newsletter] unsubscribe mail failed:", err);
        }
      });
    }
    return NextResponse.json({ success: true, already: Boolean(saved.already_unsubscribed) });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to unsubscribe";
    console.error("[newsletter] unsubscribe failed:", err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
