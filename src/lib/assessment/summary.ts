import {
  CHALLENGE_FIELDS,
  LIKERT_OPTIONS,
} from "./options";
import type { AssessmentFormState } from "./types";

export type SummaryRow = { label: string; value: string };
export type SummarySection = { title: string; rows: SummaryRow[] };

const LIKERT: Record<string, string> = Object.fromEntries(
  LIKERT_OPTIONS.map((item) => [item.value, `${item.value} — ${item.label}`]),
);

function dash(value: string): string {
  const t = value.trim();
  return t || "—";
}

function list(values: string[]): string {
  return values.filter(Boolean).join(", ") || "None selected";
}

function likert(value: string): string {
  const t = value.trim();
  if (!t) return "—";
  return LIKERT[t] || t;
}

export function assessmentSummary(form: AssessmentFormState): SummarySection[] {
  return [
    {
      title: "Basic information",
      rows: [
        { label: "Name", value: dash(form.name) },
        { label: "Company", value: dash(form.company) },
        { label: "Company location", value: dash(form.companyLocation) },
        { label: "Work email", value: dash(form.email) },
        { label: "Phone", value: dash(form.phone) },
        { label: "Role", value: dash(form.role) },
      ],
    },
    {
      title: "Company profile",
      rows: [
        { label: "Industry", value: dash(form.industry) },
        { label: "Industry (other)", value: dash(form.industryOther) },
        { label: "Annual revenue", value: dash(form.annualRevenue) },
        { label: "Number of employees", value: dash(form.employeeCount) },
      ],
    },
    {
      title: "Manufacturing environment",
      rows: [
        { label: "Unique routing paths", value: dash(form.routingPaths) },
        { label: "Shared equipment", value: dash(form.sharedEquipment) },
        {
          label: "Schedule change frequency",
          value: dash(form.scheduleChangeFrequency),
        },
      ],
    },
    {
      title: "Operational challenges",
      rows: CHALLENGE_FIELDS.map((field) => ({
        label: field.label,
        value: likert(String(form[field.key as keyof AssessmentFormState] || "")),
      })),
    },
    {
      title: "Current planning process",
      rows: [
        { label: "ERP", value: dash(form.erpSystem) },
        { label: "ERP (other)", value: dash(form.erpSystemOther) },
        { label: "Scheduling method", value: dash(form.schedulingMethod) },
        { label: "Metrics monitored", value: list(form.metricsMonitored) },
      ],
    },
    {
      title: "Data availability",
      rows: [
        { label: "Routing information", value: dash(form.routingInformation) },
        {
          label: "Standard run & setup times",
          value: dash(form.standardRunSetupTimes),
        },
        {
          label: "Can production data be exported?",
          value: dash(form.productionDataExport),
        },
      ],
    },
    {
      title: "Business objectives",
      rows: [{ label: "Top priorities", value: list(form.topPriorities) }],
    },
  ];
}

export function contactSummary(form: {
  name: string;
  email: string;
  company: string;
  role: string;
  problem: string;
}): SummarySection[] {
  return [
    {
      title: "Contact request",
      rows: [
        { label: "Name", value: dash(form.name) },
        { label: "Work email", value: dash(form.email) },
        { label: "Company", value: dash(form.company) },
        { label: "Role", value: dash(form.role) },
        { label: "What is going wrong", value: dash(form.problem) },
      ],
    },
  ];
}

export function summaryToText(sections: SummarySection[]): string {
  return sections
    .map((section) => {
      const rows = section.rows
        .map((row) => `${row.label}: ${row.value}`)
        .join("\n");
      return `${section.title}\n${rows}`;
    })
    .join("\n\n");
}
