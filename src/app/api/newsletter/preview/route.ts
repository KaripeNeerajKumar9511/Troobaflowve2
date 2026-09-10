import { NextResponse } from "next/server";
import { welcomeEmailHtml, unsubscribeEmailHtml } from "@/lib/newsletter/templates";

export const runtime = "nodejs";

export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse("Not found", { status: 404 });
  }
  const kind = new URL(request.url).searchParams.get("kind") === "unsub" ? "unsub" : "welcome";
  const html = (
    kind === "unsub"
      ? unsubscribeEmailHtml("https://trooba.com/#newsletter")
      : welcomeEmailHtml("Preview", "https://trooba.com/unsubscribe")
  ).replaceAll("cid:nl-logo", "/Trooba_Transperentlogo.png");
  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
