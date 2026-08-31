import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/assessment/mail";
import { persistLead } from "@/lib/cms";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  if (!raw || typeof raw !== "object") {
    return NextResponse.json(
      { success: false, error: "Invalid payload" },
      { status: 400 },
    );
  }

  const body = raw as Record<string, unknown>;
  const form = {
    name: String(body.name ?? "").trim(),
    email: String(body.email ?? "").trim(),
    company: String(body.company ?? "").trim(),
    role: String(body.role ?? "").trim(),
    problem: String(body.problem ?? "").trim(),
  };

  if (!form.name) {
    return NextResponse.json(
      { success: false, error: "name is required" },
      { status: 400 },
    );
  }
  if (!form.email || !EMAIL_RE.test(form.email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (!form.company) {
    return NextResponse.json(
      { success: false, error: "company is required" },
      { status: 400 },
    );
  }
  if (!form.problem) {
    return NextResponse.json(
      { success: false, error: "problem is required" },
      { status: 400 },
    );
  }

  try {
    await persistLead("contact", form);
    const { messageId } = await sendContactEmail(form);
    return NextResponse.json({ success: true, messageId });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send email";
    console.error("[contact] email failed:", err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
