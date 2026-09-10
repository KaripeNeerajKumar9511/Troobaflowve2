import { after, NextResponse } from "next/server";
import { persistNewsletter } from "@/lib/cms";
import { sendWelcomeEmail } from "@/lib/newsletter/mail";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
  }
  if (!raw || typeof raw !== "object") {
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }
  const body = raw as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();

  if (!name) {
    return NextResponse.json({ success: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const saved = await persistNewsletter("subscribe", { name, email });
    if (!saved.already_subscribed) {
      after(async () => {
        try {
          const sent = await sendWelcomeEmail(name, email);
          if (sent.messageId) {
            await persistNewsletter("subscribe", { name, email, message_id: sent.messageId });
          }
        } catch (err) {
          console.error("[newsletter] welcome mail failed:", err);
        }
      });
    }
    return NextResponse.json({
      success: true,
      already: Boolean(saved.already_subscribed),
      welcome_back: Boolean(saved.welcome_back),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to subscribe";
    console.error("[newsletter] subscribe failed:", err);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
