"use client";

import { useState } from "react";
import { FormSuccess } from "@/components/FormSuccess";

type ContactFields = {
  name: string;
  email: string;
  company: string;
  role: string;
  problem: string;
};

const empty: ContactFields = {
  name: "",
  email: "",
  company: "",
  role: "",
  problem: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactCopy = {
  formTitle?: string;
  formSubtitle?: string;
  labels?: Record<string, string>;
  placeholders?: Record<string, string>;
  problemHint?: string;
  submitLabel?: string;
  submittingLabel?: string;
  successMessage?: string;
  loginHref?: string;
  loginHtml?: string;
  loginLabel?: string;
  privacyNote?: string;
};

export function ContactForm({ copy }: { copy?: ContactCopy }) {
  const labels = copy?.labels || {};
  const [form, setForm] = useState<ContactFields>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const setField = (key: keyof ContactFields, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setFormError("");
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter data";
    if (!form.email.trim()) next.email = "Please enter data";
    else if (!EMAIL_RE.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.company.trim()) next.company = "Please enter data";
    if (!form.problem.trim()) next.problem = "Please enter data";
    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setSubmitting(true);
    setFormError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;
      if (!res.ok || !data?.success) {
        setFormError(data?.error || "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="assess-form-wrap">
        <FormSuccess>
          {copy?.successMessage ||
            "We'll personally review your request and follow up with the essentials for your product family."}
        </FormSuccess>
        <FormFoot copy={copy} />
      </div>
    );
  }

  return (
    <div className="assess-form-wrap">
      <form className="form panel" onSubmit={onSubmit} noValidate>
        <div>
          <h2 className="h3" style={{ marginBottom: "var(--space-2)" }}>
            {copy?.formTitle || "Send the details"}
          </h2>
          <p className="meta">
            {copy?.formSubtitle ||
              "Five fields. We will ask for the data itself after we have replied."}
          </p>
        </div>

        <div className="two-up">
          <div className="field">
            <label htmlFor="c-name">{labels.name || "Name"}</label>
            <input
              id="c-name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              aria-invalid={errors.name ? true : undefined}
              onChange={(e) => setField("name", e.target.value)}
            />
            {errors.name ? <p className="err">{errors.name}</p> : null}
          </div>
          <div className="field">
            <label htmlFor="c-email">{labels.email || "Work email"}</label>
            <input
              id="c-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              aria-invalid={errors.email ? true : undefined}
              onChange={(e) => setField("email", e.target.value)}
            />
            {errors.email ? <p className="err">{errors.email}</p> : null}
          </div>
        </div>

        <div className="field">
          <label htmlFor="c-company">{labels.company || "Company"}</label>
          <input
            id="c-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            aria-invalid={errors.company ? true : undefined}
            onChange={(e) => setField("company", e.target.value)}
          />
          {errors.company ? <p className="err">{errors.company}</p> : null}
        </div>

        <div className="field">
          <label htmlFor="c-role">
            {labels.role || "Role"}{" "}
            <span className="u-tert">{labels.roleOptional || "(optional)"}</span>
          </label>
          <input
            id="c-role"
            name="role"
            type="text"
            placeholder={
              copy?.placeholders?.role ||
              "Plant manager, operations, engineering"
            }
            value={form.role}
            onChange={(e) => setField("role", e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="c-problem">{labels.problem || "What is going wrong"}</label>
          <textarea
            id="c-problem"
            name="problem"
            value={form.problem}
            aria-invalid={errors.problem ? true : undefined}
            aria-describedby="c-problem-hint"
            placeholder={
              copy?.placeholders?.problem ||
              "Late orders on a particular family, lead time that will not come down, a capacity decision you are about to make."
            }
            onChange={(e) => setField("problem", e.target.value)}
          />
          <p className="hint" id="c-problem-hint">
            {copy?.problemHint ||
              "Plain description is fine. We would rather have the symptom than a diagnosis."}
          </p>
          {errors.problem ? <p className="err">{errors.problem}</p> : null}
        </div>

        {formError ? (
          <p className="form__error" role="alert">
            {formError}
          </p>
        ) : null}

        <button
          className="btn btn--primary btn--lg"
          type="submit"
          data-primary-cta
          disabled={submitting}
          style={{ width: "100%" }}
        >
          {submitting
            ? copy?.submittingLabel || "Submitting..."
            : copy?.submitLabel || "Request a Flow Analysis"}
        </button>
      </form>
      <FormFoot copy={copy} />
    </div>
  );
}

function FormFoot({ copy }: { copy?: ContactCopy }) {
  return (
    <div className="assess-form__foot">
      <p className="meta">
        {copy?.loginHtml || "Already have an account?"}{" "}
        <a href={copy?.loginHref || "https://app.trooba.com"}>
          {copy?.loginLabel || "Login."}
        </a>
      </p>
      <p className="meta">
        {copy?.privacyNote ||
          "We use this to reply to you and for nothing else. See the privacy notice."}{" "}
        <a href="/privacy">privacy notice</a>.
      </p>
    </div>
  );
}
