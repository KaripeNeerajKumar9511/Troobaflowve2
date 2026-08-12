import { NextResponse } from "next/server";
import { sendAssessmentEmail } from "@/lib/assessment/mail";
import type { AssessmentSource } from "@/lib/assessment/types";
import {
  parseAssessmentBody,
  validateFullPayload,
} from "@/lib/assessment/validate";

export async function handleAssessmentPost(
  request: Request,
  source: AssessmentSource,
) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const form = parseAssessmentBody(raw);
  if (!form) {
    return NextResponse.json(
      { success: false, error: "Invalid payload" },
      { status: 400 },
    );
  }

  const validationError = validateFullPayload(form);
  if (validationError) {
    return NextResponse.json(
      { success: false, error: validationError },
      { status: 400 },
    );
  }

  try {
    const { messageId } = await sendAssessmentEmail(form, source);
    return NextResponse.json({ success: true, messageId });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send email";
    console.error(`[${source}] assessment email failed:`, err);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
