import { handleAssessmentPost } from "@/lib/assessment/api";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleAssessmentPost(request, "flow-analysis");
}
