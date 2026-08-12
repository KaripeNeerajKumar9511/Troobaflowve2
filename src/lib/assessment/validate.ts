import type { AssessmentFormState } from "./types";
import { CHALLENGE_FIELDS_A, CHALLENGE_FIELDS_B } from "./options";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeArrays(body: Record<string, unknown>): {
  metricsMonitored: string[];
  topPriorities: string[];
} {
  const asArray = (v: unknown): string[] => {
    if (Array.isArray(v)) return v.map(String).filter(Boolean);
    if (v == null || v === "") return [];
    return [String(v)];
  };
  return {
    metricsMonitored: asArray(body.metricsMonitored),
    topPriorities: asArray(body.topPriorities),
  };
}

/** Validate a single wizard step (1–8). Returns field → message map. */
export function validateStep(
  step: number,
  form: AssessmentFormState,
): Record<string, string> {
  const errors: Record<string, string> = {};
  const need = (key: keyof AssessmentFormState) => {
    const v = form[key];
    if (typeof v === "string" && !v.trim()) errors[key] = "Please enter data";
  };

  if (step === 1) {
    (["name", "company", "companyLocation", "email", "phone", "role"] as const).forEach(
      (k) => need(k),
    );
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (step === 2) {
    (["industry", "annualRevenue", "employeeCount"] as const).forEach((k) => need(k));
    if (form.industry === "Other" && !form.industryOther.trim()) {
      errors.industryOther = "Please enter data";
    }
  }

  if (step === 3) {
    (["routingPaths", "sharedEquipment", "scheduleChangeFrequency"] as const).forEach(
      (k) => need(k),
    );
  }

  if (step === 4) {
    for (const f of CHALLENGE_FIELDS_A) {
      if (!form[f.key as keyof AssessmentFormState]) {
        errors[f.key] = "Please enter data";
      }
    }
  }

  if (step === 5) {
    for (const f of CHALLENGE_FIELDS_B) {
      if (!form[f.key as keyof AssessmentFormState]) {
        errors[f.key] = "Please enter data";
      }
    }
  }

  if (step === 6) {
    (["erpSystem", "schedulingMethod"] as const).forEach((k) => need(k));
    if (form.erpSystem === "Other" && !form.erpSystemOther.trim()) {
      errors.erpSystemOther = "Please enter data";
    }
  }

  if (step === 7) {
    (["routingInformation", "standardRunSetupTimes", "productionDataExport"] as const).forEach(
      (k) => need(k),
    );
  }

  if (step === 8) {
    if (form.topPriorities.length < 3) {
      errors.topPriorities = "Please select at least 3 business priorities.";
    }
  }

  return errors;
}

/** Full payload validation for API. Returns first error string or null. */
export function validateFullPayload(
  form: AssessmentFormState,
): string | null {
  for (let step = 1; step <= 8; step++) {
    const errs = validateStep(step, form);
    const firstKey = Object.keys(errs)[0];
    if (!firstKey) continue;
    if (firstKey === "email" && errs.email.includes("valid")) return errs.email;
    if (firstKey === "topPriorities") return errs.topPriorities;
    return `${firstKey} is required`;
  }
  return null;
}

export function parseAssessmentBody(raw: unknown): AssessmentFormState | null {
  if (!raw || typeof raw !== "object") return null;
  const body = raw as Record<string, unknown>;
  const arrays = normalizeArrays(body);
  const str = (k: string) => String(body[k] ?? "").trim();

  return {
    name: str("name"),
    company: str("company"),
    companyLocation: str("companyLocation"),
    email: str("email"),
    phone: str("phone"),
    role: str("role"),
    industry: str("industry"),
    industryOther: str("industryOther"),
    annualRevenue: str("annualRevenue"),
    employeeCount: str("employeeCount"),
    routingPaths: str("routingPaths"),
    sharedEquipment: str("sharedEquipment"),
    scheduleChangeFrequency: str("scheduleChangeFrequency"),
    expediteOrders: str("expediteOrders"),
    longLeadTimes: str("longLeadTimes"),
    highWip: str("highWip"),
    movingBottlenecks: str("movingBottlenecks"),
    unevenResourceLoad: str("unevenResourceLoad"),
    changingPriorities: str("changingPriorities"),
    unpredictableDelivery: str("unpredictableDelivery"),
    difficultCapacityPlanning: str("difficultCapacityPlanning"),
    missDeliveriesDespiteUtilization: str("missDeliveriesDespiteUtilization"),
    overtimeToMeetCommitments: str("overtimeToMeetCommitments"),
    unsureBiggestImpact: str("unsureBiggestImpact"),
    erpSystem: str("erpSystem"),
    erpSystemOther: str("erpSystemOther"),
    schedulingMethod: str("schedulingMethod"),
    metricsMonitored: arrays.metricsMonitored,
    routingInformation: str("routingInformation"),
    standardRunSetupTimes: str("standardRunSetupTimes"),
    productionDataExport: str("productionDataExport"),
    topPriorities: arrays.topPriorities,
  };
}
