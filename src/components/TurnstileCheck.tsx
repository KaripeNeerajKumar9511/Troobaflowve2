"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type TurnstileApi = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      size: "compact";
      appearance: "always";
      theme: "light" | "dark" | "auto";
      callback: (token: string) => void;
      "error-callback": () => void;
      "expired-callback": () => void;
    },
  ) => string;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.turnstile) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${SCRIPT_SRC}"]`,
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.turnstile) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("script")),
        { once: true },
      );
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("script"));
    document.head.appendChild(script);
  });
}

export function TurnstileCheck({
  open,
  onVerified,
  onClose,
}: {
  open: boolean;
  onVerified: (token: string) => void;
  onClose: () => void;
}) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const onVerifiedRef = useRef(onVerified);
  const onCloseRef = useRef(onClose);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    onVerifiedRef.current = onVerified;
    onCloseRef.current = onClose;
  }, [onVerified, onClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setError("");
      return;
    }

    const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
    if (!sitekey) {
      setError("Verification is unavailable right now.");
      return;
    }

    const el = widgetRef.current;
    if (!el) return;

    let widgetId = "";
    let cancelled = false;
    let settled = false;

    loadTurnstile()
      .then(() => {
        if (cancelled || !widgetRef.current || !window.turnstile) return;
        widgetId = window.turnstile.render(widgetRef.current, {
          sitekey,
          size: "compact",
          appearance: "always",
          theme: "light",
          callback: (token) => {
            if (settled) return;
            settled = true;
            onVerifiedRef.current(token);
          },
          "error-callback": () => {
            setError("Verification could not load. Close this and try again.");
            return true;
          },
          "expired-callback": () => {
            setError("Verification expired. Close this and try again.");
          },
        });
      })
      .catch(() => {
        if (!cancelled) {
          setError("Verification could not load. Close this and try again.");
        }
      });

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [open]);

  if (!open || !mounted) return null;

  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  return createPortal(
    <div
      className="turnstile-gate"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="turnstile-gate__card"
        role="dialog"
        aria-modal="true"
        aria-label="Verify you are human"
      >
        {sitekey ? <div ref={widgetRef} className="turnstile-gate__widget" /> : null}
        {error ? <p className="err">{error}</p> : null}
        <button type="button" className="turnstile-gate__cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>,
    document.body,
  );
}
