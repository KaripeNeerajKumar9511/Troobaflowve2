"use client";

import { useState } from "react";
import { FormSuccess } from "@/components/FormSuccess";
import { PortalSelect } from "@/components/PortalSelect";
import type { AssessmentFormState, AssessmentSource } from "@/lib/assessment/types";
import { emptyAssessmentForm, STEP_TITLES, TOTAL_STEPS } from "@/lib/assessment/types";
import {
  CHALLENGE_FIELDS,
  DATA_AVAILABILITY_OPTIONS,
  EMPLOYEE_OPTIONS,
  ERP_OPTIONS,
  INDUSTRY_OPTIONS,
  LIKERT_OPTIONS,
  METRICS_OPTIONS,
  PRIORITY_OPTIONS,
  REVENUE_OPTIONS,
  ROUTING_PATH_OPTIONS,
  SCHEDULE_CHANGE_OPTIONS,
  SCHEDULING_METHOD_OPTIONS,
  SHARED_EQUIPMENT_OPTIONS,
} from "@/lib/assessment/options";
import { validateStep } from "@/lib/assessment/validate";

export type AssessmentCopy = {
  formTitle?: string;
  formSubtitle?: string;
  successMessage?: string;
  submitLabel?: string;
  submittingLabel?: string;
  stepTitles?: string[];
  options?: {
    industry?: string[];
    revenue?: string[];
    employees?: string[];
    erp?: string[];
    metrics?: string[];
    priorities?: string[];
    challenges?: { key: string; label: string }[];
  };
};

type AssessmentFormProps = {
  source: AssessmentSource;
  title?: string;
  subtitle?: string;
  copy?: AssessmentCopy;
};

const API_BY_SOURCE: Record<AssessmentSource, string> = {
  "flow-analysis": "/api/request-access",
  contact: "/api/contact",
};

const likertSelectOptions = LIKERT_OPTIONS.map((o) => ({
  value: o.value,
  label: o.label,
}));

export function AssessmentForm({
  source,
  title,
  subtitle,
  copy,
}: AssessmentFormProps) {
  const formTitle = copy?.formTitle || title || "Send the details";
  const formSubtitle =
    copy?.formSubtitle ||
    subtitle ||
    "Eight steps. We will follow up after we have reviewed your submission.";
  const stepTitles = copy?.stepTitles?.length ? copy.stepTitles : [...STEP_TITLES];
  const industryOptions = copy?.options?.industry?.length
    ? copy.options.industry
    : [...INDUSTRY_OPTIONS];
  const revenueOptions = copy?.options?.revenue?.length
    ? copy.options.revenue
    : [...REVENUE_OPTIONS];
  const employeeOptions = copy?.options?.employees?.length
    ? copy.options.employees
    : [...EMPLOYEE_OPTIONS];
  const erpOptions = copy?.options?.erp?.length ? copy.options.erp : [...ERP_OPTIONS];
  const metricsOptions = copy?.options?.metrics?.length
    ? copy.options.metrics
    : [...METRICS_OPTIONS];
  const priorityOptions = copy?.options?.priorities?.length
    ? copy.options.priorities
    : [...PRIORITY_OPTIONS];
  const challengeList = copy?.options?.challenges?.length
    ? copy.options.challenges
    : [...CHALLENGE_FIELDS];
  const challengeA = challengeList.slice(0, 6);
  const challengeB = challengeList.slice(6);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<AssessmentFormState>(emptyAssessmentForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const setField = <K extends keyof AssessmentFormState>(
    key: K,
    value: AssessmentFormState[K],
  ) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "industry" && value !== "Other") next.industryOther = "";
      if (key === "erpSystem" && value !== "Other") next.erpSystemOther = "";
      return next;
    });
    setErrors((prev) => {
      if (!prev[key as string]) return prev;
      const copy = { ...prev };
      delete copy[key as string];
      return copy;
    });
    setFormError("");
  };

  const toggleMulti = (key: "metricsMonitored" | "topPriorities", option: string) => {
    setForm((prev) => {
      const list = prev[key];
      const next = list.includes(option)
        ? list.filter((x) => x !== option)
        : [...list, option];
      return { ...prev, [key]: next };
    });
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
    setFormError("");
  };

  const goNext = () => {
    const stepErrors = validateStep(step, form);
    if (Object.keys(stepErrors).length) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const goBack = () => {
    setErrors({});
    setFormError("");
    setStep((s) => Math.max(1, s - 1));
  };

  const submit = async () => {
    const stepErrors = validateStep(TOTAL_STEPS, form);
    if (Object.keys(stepErrors).length) {
      setErrors(stepErrors);
      return;
    }
    setSubmitting(true);
    setFormError("");
    try {
      const res = await fetch(API_BY_SOURCE[source], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;
      if (!res.ok || !data?.success) {
        setFormError(
          data?.error || "Something went wrong. Please try again.",
        );
        return;
      }
      setDone(true);
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) goNext();
    else void submit();
  };

  if (done) {
    return (
      <div className="assess-form-wrap">
        <FormSuccess>
          {copy?.successMessage || "We'll be in touch within 2 business days."}
        </FormSuccess>
        <div className="assess-form__foot">
          <p className="meta">
            Already have an account?{" "}
            <a href="https://app.trooba.com" target="_blank">Login.</a>
          </p>
          <p className="meta">
            We use this to reply to you and for nothing else. See the{" "}
            <a href="/privacy">privacy notice</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="assess-form-wrap">
      <form className="form panel assess-form" onSubmit={onFormSubmit} noValidate>
        <div>
          <h2 className="h3" style={{ marginBottom: "var(--space-2)" }}>
            {formTitle}
          </h2>
          <p className="meta">{formSubtitle}</p>
          <p className="tr-label u-mt6">
            Step {step} of {TOTAL_STEPS} · {stepTitles[step - 1]}
          </p>
          <div className="assess-form__progress" aria-hidden="true">
            <i style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
          </div>
        </div>

      {step === 1 && (
        <>
          <div className="two-up">
            <Field
              id="a-name"
              label="Name"
              error={errors.name}
              value={form.name}
              onChange={(v) => setField("name", v)}
              autoComplete="name"
            />
            <Field
              id="a-company"
              label="Company"
              error={errors.company}
              value={form.company}
              onChange={(v) => setField("company", v)}
              autoComplete="organization"
            />
          </div>
          <Field
            id="a-location"
            label="Company location"
            error={errors.companyLocation}
            value={form.companyLocation}
            onChange={(v) => setField("companyLocation", v)}
            placeholder="City, region, or country"
          />
          <div className="two-up">
            <Field
              id="a-email"
              label="Contact email"
              type="email"
              error={errors.email}
              value={form.email}
              onChange={(v) => setField("email", v)}
              autoComplete="email"
            />
            <Field
              id="a-phone"
              label="Contact phone"
              type="tel"
              error={errors.phone}
              value={form.phone}
              onChange={(v) => setField("phone", v)}
              autoComplete="tel"
            />
          </div>
          <Field
            id="a-role"
            label="Role"
            error={errors.role}
            value={form.role}
            onChange={(v) => setField("role", v)}
            placeholder="Plant manager, operations, engineering"
          />
        </>
      )}

      {step === 2 && (
        <>
          <SelectField
            id="a-industry"
            label="Industry"
            error={errors.industry}
            value={form.industry}
            onChange={(v) => setField("industry", v)}
            options={industryOptions}
          />
          {form.industry === "Other" && (
            <Field
              id="a-industry-other"
              label="Please specify your industry"
              error={errors.industryOther}
              value={form.industryOther}
              onChange={(v) => setField("industryOther", v)}
            />
          )}
          <SelectField
            id="a-revenue"
            label="Annual Revenue"
            error={errors.annualRevenue}
            value={form.annualRevenue}
            onChange={(v) => setField("annualRevenue", v)}
            options={revenueOptions}
          />
          <SelectField
            id="a-employees"
            label="Number of Employees"
            error={errors.employeeCount}
            value={form.employeeCount}
            onChange={(v) => setField("employeeCount", v)}
            options={employeeOptions}
          />
        </>
      )}

      {step === 3 && (
        <>
          <SelectField
            id="a-routing"
            label="Approximately how many unique routing paths exist?"
            error={errors.routingPaths}
            value={form.routingPaths}
            onChange={(v) => setField("routingPaths", v)}
            options={ROUTING_PATH_OPTIONS}
          />
          <SelectField
            id="a-shared"
            label="Do multiple products share the same equipment?"
            error={errors.sharedEquipment}
            value={form.sharedEquipment}
            onChange={(v) => setField("sharedEquipment", v)}
            options={SHARED_EQUIPMENT_OPTIONS}
          />
          <SelectField
            id="a-schedule"
            label="How often does your production schedule change?"
            error={errors.scheduleChangeFrequency}
            value={form.scheduleChangeFrequency}
            onChange={(v) => setField("scheduleChangeFrequency", v)}
            options={SCHEDULE_CHANGE_OPTIONS}
          />
        </>
      )}

      {step === 4 && (
        <div className="assess-form__stack">
          {challengeA.map((f) => (
            <SelectField
              key={f.key}
              id={`a-${f.key}`}
              label={f.label}
              error={errors[f.key]}
              value={String(form[f.key as keyof AssessmentFormState] || "")}
              onChange={(v) =>
                setField(f.key as keyof AssessmentFormState, v as never)
              }
              options={likertSelectOptions}
            />
          ))}
        </div>
      )}

      {step === 5 && (
        <div className="assess-form__stack">
          {challengeB.map((f) => (
            <SelectField
              key={f.key}
              id={`a-${f.key}`}
              label={f.label}
              error={errors[f.key]}
              value={String(form[f.key as keyof AssessmentFormState] || "")}
              onChange={(v) =>
                setField(f.key as keyof AssessmentFormState, v as never)
              }
              options={likertSelectOptions}
            />
          ))}
        </div>
      )}

      {step === 6 && (
        <>
          <SelectField
            id="a-erp"
            label="Which ERP system do you use?"
            error={errors.erpSystem}
            value={form.erpSystem}
            onChange={(v) => setField("erpSystem", v)}
            options={erpOptions}
          />
          {form.erpSystem === "Other" && (
            <Field
              id="a-erp-other"
              label="Please specify your ERP system"
              error={errors.erpSystemOther}
              value={form.erpSystemOther}
              onChange={(v) => setField("erpSystemOther", v)}
            />
          )}
          <SelectField
            id="a-scheduling"
            label="Production Scheduling Method"
            error={errors.schedulingMethod}
            value={form.schedulingMethod}
            onChange={(v) => setField("schedulingMethod", v)}
            options={SCHEDULING_METHOD_OPTIONS}
          />
          <fieldset className="assess-form__checks">
            <legend>Metrics Monitored <span className="u-tert">(optional)</span></legend>
            <div className="assess-form__checkgrid">
              {metricsOptions.map((opt) => (
                <label key={opt} className="assess-form__check">
                  <input
                    type="checkbox"
                    checked={form.metricsMonitored.includes(opt)}
                    onChange={() => toggleMulti("metricsMonitored", opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      {step === 7 && (
        <>
          <SelectField
            id="a-routing-info"
            label="Routing Information"
            error={errors.routingInformation}
            value={form.routingInformation}
            onChange={(v) => setField("routingInformation", v)}
            options={DATA_AVAILABILITY_OPTIONS.routingInformation}
          />
          <SelectField
            id="a-run-setup"
            label="Standard Run & Setup Times"
            error={errors.standardRunSetupTimes}
            value={form.standardRunSetupTimes}
            onChange={(v) => setField("standardRunSetupTimes", v)}
            options={DATA_AVAILABILITY_OPTIONS.standardRunSetupTimes}
          />
          <SelectField
            id="a-export"
            label="Can production data be exported?"
            error={errors.productionDataExport}
            value={form.productionDataExport}
            onChange={(v) => setField("productionDataExport", v)}
            options={DATA_AVAILABILITY_OPTIONS.productionDataExport}
          />
        </>
      )}

      {step === 8 && (
        <fieldset className="assess-form__checks">
          <legend>Top Priorities</legend>
          <p className="hint">Select at least 3.</p>
          <div className="assess-form__checkgrid">
            {priorityOptions.map((opt) => (
              <label key={opt} className="assess-form__check">
                <input
                  type="checkbox"
                  checked={form.topPriorities.includes(opt)}
                  onChange={() => toggleMulti("topPriorities", opt)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {errors.topPriorities ? (
            <p className="err" role="alert">
              {errors.topPriorities}
            </p>
          ) : null}
        </fieldset>
      )}

      {formError ? (
        <p className="form__error" role="alert">
          {formError}
        </p>
      ) : null}

      <div className="assess-form__actions">
        {step > 1 ? (
          <button
            type="button"
            className="btn btn--secondary"
            onClick={goBack}
            disabled={submitting}
          >
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="submit"
          className="btn btn--primary btn--lg"
          data-primary-cta
          disabled={submitting}
        >
          {step < TOTAL_STEPS
            ? "Next"
            : submitting
              ? copy?.submittingLabel || "Submitting..."
              : copy?.submitLabel || "Request Access"}
        </button>
      </div>
      </form>

      <div className="assess-form__foot">
        <p className="meta">
          Already have an account?{" "}
          <a href="https://app.trooba.com" target="_blank">Login.</a>
        </p>
        <p className="meta">
          We use this to reply to you and for nothing else. See the{" "}
          <a href="/privacy">privacy notice</a>.
        </p>
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: FieldProps) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        onChange={(e) => onChange(e.target.value)}
      />
      {error ? (
        <p className="err" id={`${id}-err`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly (string | { value: string; label: string })[];
  error?: string;
};

function SelectField(props: SelectFieldProps) {
  return <PortalSelect {...props} />;
}
