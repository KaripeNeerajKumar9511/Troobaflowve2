"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function UnsubscribeClient() {
  const params = useSearchParams();
  const token = params.get("token") || "";
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");
  const [message, setMessage] = useState("Unsubscribing you from Trooba Flow Insights…");

  useEffect(() => {
    if (!token) {
      setState("error");
      setMessage("This unsubscribe link is missing. Use the link from your email.");
      return;
    }
    fetch("/api/newsletter/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    })
      .then(async (res) => {
        const data = (await res.json()) as { success?: boolean; error?: string };
        if (!res.ok || !data.success) {
          throw new Error(data.error || "Could not unsubscribe.");
        }
        setState("ok");
        setMessage(
          "You've been unsubscribed from Trooba Flow Insights. A confirmation email is on its way.",
        );
      })
      .catch((err: Error) => {
        setState("error");
        setMessage(err.message || "Could not unsubscribe.");
      });
  }, [token]);

  return (
    <section className="phead">
      <div className="wrap" style={{ maxWidth: "40rem" }}>
        <p className="tr-label">Trooba Flow Insights</p>
        <h1 className="section-title u-mt4">
          {state === "ok" ? "You've been unsubscribed" : "Unsubscribe"}
        </h1>
        <p className="lead u-mt6">{message}</p>
        {state !== "loading" ? (
          <p className="u-mt8">
            <a className="btn btn--primary" href="/#newsletter">
              {state === "ok" ? "Subscribe again" : "Back to Trooba Flow"}
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
