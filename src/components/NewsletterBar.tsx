"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterBar() {
  const pathname = usePathname();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [infoOpen, setInfoOpen] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"new" | "already" | "back" | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome || dismissed) {
      document.body.classList.remove("has-nl-bar");
      return;
    }
    document.body.classList.add("has-nl-bar");
    return () => document.body.classList.remove("has-nl-bar");
  }, [onHome, dismissed]);

  if (!onHome || dismissed) return null;

  const closeBar = () => {
    setInfoOpen(false);
    setDismissed(true);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        already?: boolean;
        welcome_back?: boolean;
      };
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Could not subscribe.");
      }
      setStatus(data.already ? "already" : data.welcome_back ? "back" : "new");
      setInfoOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not subscribe.");
    } finally {
      setSending(false);
    }
  };

  const doneCopy =
    status === "already"
      ? "You're already subscribed to Trooba Flow Insights."
      : status === "back"
        ? "Welcome back — you're subscribed to Trooba Flow Insights again."
        : "You're subscribed to Trooba Flow Insights. Check your inbox.";

  return (
    <div className="nl-bar" id="newsletter">
      <div className="nl-bar__inner">
        <div className="nl-bar__copy">
          <span className="nl-bar__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5.5" width="18" height="13" rx="2" />
              <path d="M4 7.5 12 13l8-5.5" />
            </svg>
          </span>
          <div>
            <p className="nl-bar__kicker">Trooba Flow Insights</p>
            <p className="nl-bar__title">Get the latest manufacturing insights in your inbox.</p>
            <p className="nl-bar__sub">
              Industry trends, case studies, product updates and expert tips — straight to your inbox.
            </p>
          </div>
        </div>

        {status ? (
          <p className="nl-bar__done" role="status">
            {doneCopy}
          </p>
        ) : (
          <form className="nl-bar__form" onSubmit={onSubmit}>
            <label className="nl-bar__field">
              <span className="visually-hidden">Your name</span>
              <span className="nl-bar__field-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <circle cx="12" cy="8" r="3.2" />
                  <path d="M5.5 19c1.2-3.2 3.5-4.6 6.5-4.6S16.8 15.8 18.5 19" />
                </svg>
              </span>
              <input
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="nl-bar__field">
              <span className="visually-hidden">Your email address</span>
              <span className="nl-bar__field-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3.5" y="6" width="17" height="12" rx="2" />
                  <path d="M4.5 8 12 13.2 19.5 8" />
                </svg>
              </span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button className="nl-bar__submit" type="submit" disabled={sending}>
              {sending ? "Subscribing…" : "Subscribe"}
            </button>
            <p className="nl-bar__hint">No spam. Unsubscribe anytime.</p>
            {error ? <p className="nl-bar__error">{error}</p> : null}
          </form>
        )}

        <div className="nl-bar__actions">
          <div className="nl-bar__info-wrap">
            {infoOpen ? (
              <div className="nl-bar__tip" role="dialog" aria-label="What's in our newsletter?">
                <div className="nl-bar__tip-head">
                  <div className="nl-bar__tip-brand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/logo/trooba-flow-light.svg" alt="Trooba Flow" width="140" height="24" />
                    <p>What&apos;s in our newsletter?</p>
                  </div>
                  <button type="button" aria-label="Close details" onClick={() => setInfoOpen(false)}>
                    ×
                  </button>
                </div>
                <ul>
                  <li>
                    <TipIcon kind="chart" />
                    Industry insights &amp; trends
                  </li>
                  <li>
                    <TipIcon kind="doc" />
                    Real-world case studies
                  </li>
                  <li>
                    <TipIcon kind="cube" />
                    Product updates &amp; new features
                  </li>
                  <li>
                    <TipIcon kind="bulb" />
                    Expert tips &amp; best practices
                  </li>
                  <li>
                    <TipIcon kind="cal" />
                    Invites to webinars and events
                  </li>
                </ul>
              </div>
            ) : null}
            <button
              className="nl-bar__info"
              type="button"
              aria-expanded={infoOpen}
              aria-label="What's in our newsletter?"
              onClick={() => setInfoOpen((v) => !v)}
            >
              i
            </button>
          </div>
          <button className="nl-bar__close" type="button" aria-label="Close newsletter bar" onClick={closeBar}>
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

function TipIcon({ kind }: { kind: "chart" | "doc" | "bulb" | "cube" | "cal" }) {
  return (
    <span className="nl-bar__tip-ico" aria-hidden="true">
      {kind === "chart" ? (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <rect x="4" y="12" width="4" height="8" rx="1" />
          <rect x="10" y="6" width="4" height="14" rx="1" />
          <rect x="16" y="9" width="4" height="11" rx="1" />
        </svg>
      ) : null}
      {kind === "doc" ? (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="4" width="12" height="16" rx="2" />
          <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4.5" />
        </svg>
      ) : null}
      {kind === "bulb" ? (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="10" r="4" />
          <path d="M12 14v2.5M9.5 19h5" />
        </svg>
      ) : null}
      {kind === "cube" ? (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 5 19 9v8l-7 4-7-4V9l7-4Z" />
          <path d="M12 13V21M12 13 5 9M12 13l7-4" />
        </svg>
      ) : null}
      {kind === "cal" ? (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="6" width="14" height="13" rx="2" />
          <path d="M8 4.5v3M16 4.5v3M5 10h14" />
        </svg>
      ) : null}
    </span>
  );
}
