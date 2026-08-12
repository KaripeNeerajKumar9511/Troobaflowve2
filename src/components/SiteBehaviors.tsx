"use client";

import { useEffect } from "react";

const FALLBACK_EMAIL = "hello@trooba.com";

/**
 * Ports trooba-site/assets/js/site.js behaviour for the Next.js app.
 * Nav, reveal, scenario state, product tabs, and flow-analysis form.
 */
export function SiteBehaviors() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* -- 1. Navigation ------------------------------------------------------ */
    const nav = document.querySelector<HTMLElement>("[data-nav]");
    if (nav) {
      const onScroll = () => {
        nav.classList.toggle("is-scrolled", window.scrollY > 12);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));

      const toggle = nav.querySelector<HTMLElement>("[data-nav-toggle]");
      const drawer = nav.querySelector<HTMLElement>("[data-nav-drawer]");
      if (toggle && drawer) {
        const onToggle = () => {
          const open = drawer.classList.toggle("is-open");
          toggle.setAttribute("aria-expanded", String(open));
          toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        };
        toggle.addEventListener("click", onToggle);

        const onDrawerClick = (e: Event) => {
          if ((e.target as HTMLElement).closest("a")) {
            drawer.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
          }
        };
        drawer.addEventListener("click", onDrawerClick);

        const onKey = (e: KeyboardEvent) => {
          if (e.key === "Escape" && drawer.classList.contains("is-open")) {
            drawer.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();
          }
        };
        document.addEventListener("keydown", onKey);

        cleanups.push(() => {
          toggle.removeEventListener("click", onToggle);
          drawer.removeEventListener("click", onDrawerClick);
          document.removeEventListener("keydown", onKey);
        });
      }
    }

    /* -- 1b. One primary action in view ------------------------------------- */
    if (nav) {
      const ctas = document.querySelectorAll("[data-primary-cta]");
      if (!ctas.length) {
        nav.classList.remove("has-page-cta");
      } else if (!("IntersectionObserver" in window)) {
        nav.classList.remove("has-page-cta");
      } else {
        const onScreen: Element[] = [];
        const ctaObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              const i = onScreen.indexOf(e.target);
              if (e.isIntersecting && i === -1) onScreen.push(e.target);
              if (!e.isIntersecting && i !== -1) onScreen.splice(i, 1);
            });
            nav.classList.toggle("has-page-cta", onScreen.length > 0);
          },
          { threshold: 0 },
        );
        ctas.forEach((el) => ctaObserver.observe(el));
        nav.classList.add("has-page-cta");
        cleanups.push(() => ctaObserver.disconnect());
      }
    }

    /* -- 2. Reveal ---------------------------------------------------------- */
    const targets = document.querySelectorAll(".reveal");
    if (targets.length) {
      if (reduced || !("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("is-in"));
      } else {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-in");
                io.unobserve(entry.target);
              }
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
        );
        targets.forEach((el) => io.observe(el));
        cleanups.push(() => io.disconnect());
      }
    }

    /* -- 3. Scenario state -------------------------------------------------- */
    document.querySelectorAll("[data-scene]").forEach((scene) => {
      const buttons = scene.querySelectorAll("[data-scene-btn]");

      function apply(state: string) {
        scene.setAttribute("data-scene", state);
        buttons.forEach((b) => {
          b.setAttribute(
            "aria-pressed",
            String(b.getAttribute("data-scene-btn") === state),
          );
        });
        scene.querySelectorAll("[data-state]").forEach((d) => {
          d.setAttribute("data-state", state);
        });
        scene.querySelectorAll("[data-v-base]").forEach((v) => {
          const next =
            state === "scenario"
              ? v.getAttribute("data-v-scenario")
              : v.getAttribute("data-v-base");
          if (next !== null && v.textContent !== next) v.textContent = next;
        });
        scene.querySelectorAll("[data-on-scenario]").forEach((v) => {
          v.classList.toggle("metric__v--on", state === "scenario");
        });
        scene.querySelectorAll("[data-w-base]").forEach((el) => {
          (el as HTMLElement).style.width =
            el.getAttribute(
              state === "scenario" ? "data-w-scenario" : "data-w-base",
            ) + "%";
        });
        scene.querySelectorAll("[data-u-base]").forEach((el) => {
          (el as HTMLElement).style.opacity =
            el.getAttribute(
              state === "scenario" ? "data-u-scenario" : "data-u-base",
            ) || "";
        });
        const live = scene.querySelector("[data-scene-live]");
        if (live) {
          live.textContent =
            live.getAttribute(
              state === "scenario" ? "data-msg-scenario" : "data-msg-base",
            ) || "";
        }
      }

      const handlers: Array<[Element, () => void]> = [];
      buttons.forEach((b) => {
        const handler = () => apply(b.getAttribute("data-scene-btn") || "base");
        b.addEventListener("click", handler);
        handlers.push([b, handler]);
      });
      apply(scene.getAttribute("data-scene") || "base");
      cleanups.push(() => {
        handlers.forEach(([b, handler]) => b.removeEventListener("click", handler));
      });
    });

    /* -- 3b. Product tabs --------------------------------------------------- */
    document.querySelectorAll("[data-tabs]").forEach((group) => {
      const buttons = Array.from(
        group.querySelectorAll<HTMLElement>("[data-tab-btn]"),
      );
      const panels = Array.from(
        group.querySelectorAll<HTMLElement>("[data-tab-panel]"),
      );

      function select(id: string, focus?: boolean) {
        buttons.forEach((b) => {
          const on = b.getAttribute("data-tab-btn") === id;
          b.setAttribute("aria-selected", String(on));
          b.tabIndex = on ? 0 : -1;
          if (on && focus) b.focus();
        });
        panels.forEach((p) => {
          p.hidden = p.getAttribute("data-tab-panel") !== id;
        });
      }

      const clickHandlers: Array<[HTMLElement, () => void]> = [];
      const keyHandlers: Array<[HTMLElement, (e: KeyboardEvent) => void]> = [];

      buttons.forEach((b, i) => {
        const onClick = () => select(b.getAttribute("data-tab-btn") || "");
        b.addEventListener("click", onClick);
        clickHandlers.push([b, onClick]);

        const onKey = (e: KeyboardEvent) => {
          let next: number | null = null;
          if (e.key === "ArrowRight") next = (i + 1) % buttons.length;
          else if (e.key === "ArrowLeft")
            next = (i - 1 + buttons.length) % buttons.length;
          else if (e.key === "Home") next = 0;
          else if (e.key === "End") next = buttons.length - 1;
          if (next === null) return;
          e.preventDefault();
          select(buttons[next].getAttribute("data-tab-btn") || "", true);
        };
        b.addEventListener("keydown", onKey);
        keyHandlers.push([b, onKey]);
      });

      cleanups.push(() => {
        clickHandlers.forEach(([b, h]) => b.removeEventListener("click", h));
        keyHandlers.forEach(([b, h]) => b.removeEventListener("keydown", h));
      });
    });

    /* -- 4. Flow-analysis form --------------------------------------------- */
    const form = document.querySelector<HTMLFormElement>("[data-flow-form]");
    if (form) {
      const submitBtn = form.querySelector<HTMLButtonElement>("[data-form-submit]");
      const errorBox = form.querySelector<HTMLElement>("[data-form-error]");
      const done = document.querySelector<HTMLElement>("[data-form-done]");
      let sending = false;

      function fieldError(input: HTMLInputElement | HTMLTextAreaElement, message: string) {
        const box = input.getAttribute("aria-describedby");
        const el =
          box && document.getElementById(box.split(" ").pop() as string);
        if (!el || !el.classList.contains("err")) return;
        el.textContent = message || "";
        el.hidden = !message;
        input.setAttribute("aria-invalid", message ? "true" : "false");
      }

      function validate() {
        let firstBad: HTMLElement | null = null;
        for (const raw of Array.from(form!.elements)) {
          const el = raw as HTMLInputElement | HTMLTextAreaElement;
          if (!el.name || (el as HTMLInputElement).type === "submit") continue;
          let msg = "";
          if (el.required && !el.value.trim()) {
            msg = "This one is needed.";
          } else if (
            (el as HTMLInputElement).type === "email" &&
            el.value &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(el.value)
          ) {
            msg = "That does not look like an email address.";
          }
          fieldError(el, msg);
          if (msg && !firstBad) firstBad = el;
        }
        firstBad?.focus();
        return !firstBad;
      }

      const inputHandlers: Array<[Element, () => void]> = [];
      Array.from(form.elements).forEach((raw) => {
        const el = raw as HTMLInputElement | HTMLTextAreaElement;
        if (!el.name) return;
        const onInput = () => {
          if (el.getAttribute("aria-invalid") === "true") fieldError(el, "");
        };
        el.addEventListener("input", onInput);
        inputHandlers.push([el, onInput]);
      });

      function showError(message: string) {
        if (!errorBox) return;
        errorBox.textContent = message;
        errorBox.hidden = false;
      }

      function succeed() {
        form!.hidden = true;
        const intro = document.querySelector<HTMLElement>("[data-form-intro]");
        if (intro) intro.hidden = true;
        if (done) {
          done.hidden = false;
          done.setAttribute("tabindex", "-1");
          done.focus();
        }
      }

      function mailtoFallback(data: Record<string, string>) {
        const body = Object.keys(data)
          .map((k) => k.charAt(0).toUpperCase() + k.slice(1) + ": " + data[k])
          .join("\n");
        window.location.href =
          "mailto:" +
          FALLBACK_EMAIL +
          "?subject=" +
          encodeURIComponent("Flow Analysis request — " + (data.company || "")) +
          "&body=" +
          encodeURIComponent(body);
      }

      const onSubmit = (e: Event) => {
        e.preventDefault();
        if (sending) return;
        if (errorBox) errorBox.hidden = true;
        if (!validate()) return;

        const data: Record<string, string> = {};
        Array.from(form!.elements).forEach((raw) => {
          const el = raw as HTMLInputElement | HTMLTextAreaElement;
          if (el.name) data[el.name] = el.value.trim();
        });

        const action = form!.getAttribute("action") || "";
        if (!action || action.indexOf("YOUR-FORM-ID") !== -1) {
          showError(
            "Opening your email client — the form endpoint is not connected yet.",
          );
          mailtoFallback(data);
          return;
        }

        sending = true;
        if (submitBtn) {
          submitBtn.disabled = true;
          const label = submitBtn.textContent;
          submitBtn.textContent = "Sending…";

          fetch(action, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => {
              if (!res.ok) throw new Error("HTTP " + res.status);
              succeed();
            })
            .catch(() => {
              sending = false;
              submitBtn.disabled = false;
              submitBtn.textContent = label;
              showError(
                "That did not send. Please try again, or email " +
                  FALLBACK_EMAIL +
                  " directly.",
              );
            });
        }
      };

      form.addEventListener("submit", onSubmit);
      cleanups.push(() => {
        form.removeEventListener("submit", onSubmit);
        inputHandlers.forEach(([el, h]) => el.removeEventListener("input", h));
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
