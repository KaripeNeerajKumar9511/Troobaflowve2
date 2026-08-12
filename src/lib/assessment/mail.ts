import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type { AssessmentFormState, AssessmentSource } from "./types";
import { CHALLENGE_FIELDS } from "./options";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripNewlines(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  useTls: boolean;
  adminEmail: string;
};

function readSmtpConfig(): SmtpConfig {
  const host = process.env.EMAIL_HOST?.trim();
  const portRaw = process.env.EMAIL_PORT?.trim();
  const user = process.env.EMAIL_HOST_USER?.trim();
  // Passwords often include `$`; strip accidental wrapping quotes from .env.
  const pass = process.env.EMAIL_HOST_PASSWORD?.trim().replace(/^['"]|['"]$/g, "");
  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const useTls = ["true", "1", "yes"].includes(
    String(process.env.EMAIL_USE_TLS ?? "true").trim().toLowerCase(),
  );

  const missing: string[] = [];
  if (!host) missing.push("EMAIL_HOST");
  if (!portRaw) missing.push("EMAIL_PORT");
  if (!user) missing.push("EMAIL_HOST_USER");
  if (!pass) missing.push("EMAIL_HOST_PASSWORD");
  if (!adminEmail) missing.push("ADMIN_EMAIL");
  if (missing.length) {
    throw new Error(`Missing SMTP env vars: ${missing.join(", ")}`);
  }

  return {
    host: host!,
    port: Number(portRaw),
    user: user!,
    pass: pass!,
    useTls,
    adminEmail: adminEmail!,
  };
}

let cachedKey = "";
let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter(cfg: SmtpConfig) {
  const key = `${cfg.host}|${cfg.port}|${cfg.user}|${cfg.useTls}|${cfg.pass.length}`;
  if (cachedTransporter && cachedKey === key) return cachedTransporter;

  const secure = cfg.port === 465;
  const options = {
    host: cfg.host,
    port: cfg.port,
    secure,
    requireTLS: cfg.useTls && !secure,
    auth: { user: cfg.user, pass: cfg.pass },
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  } as SMTPTransport.Options;

  cachedTransporter = nodemailer.createTransport(options);
  cachedKey = key;
  return cachedTransporter;
}

function row(label: string, value: string, alt: boolean): string {
  const bg = alt ? "#f4f6f8" : "#ffffff";
  return `<tr style="background:${bg}"><td style="padding:10px 12px;font-family:Arial,sans-serif;font-size:13px;color:#667085;width:38%;vertical-align:top">${escapeHtml(label)}</td><td style="padding:10px 12px;font-family:Arial,sans-serif;font-size:13px;color:#101828">${value}</td></tr>`;
}

function section(title: string, rowsHtml: string): string {
  return `<h2 style="font-family:Arial,sans-serif;font-size:16px;color:#101828;margin:28px 0 10px">${escapeHtml(title)}</h2><table style="width:100%;border-collapse:collapse;border:1px solid #e4e7ec">${rowsHtml}</table>`;
}

function industryDisplay(form: AssessmentFormState): string {
  if (form.industry === "Other" && form.industryOther) {
    return escapeHtml(`Other — ${form.industryOther}`);
  }
  return escapeHtml(form.industry || "—");
}

function erpDisplay(form: AssessmentFormState): string {
  if (form.erpSystem === "Other" && form.erpSystemOther) {
    return escapeHtml(`Other — ${form.erpSystemOther}`);
  }
  return escapeHtml(form.erpSystem || "—");
}

function buildAssessmentHtml(form: AssessmentFormState, source: AssessmentSource): string {
  const title =
    source === "contact"
      ? "New Trooba Flow™ Contact Assessment"
      : "New Trooba Flow™ Factory Flow Assessment";

  const sourceLabel =
    source === "contact" ? "Submitted from /contact" : "Submitted from /flow-analysis";

  let i = 0;
  const r = (label: string, value: string) => row(label, value, (i++ % 2) === 1);

  i = 0;
  const contact = [
    r("Name", escapeHtml(form.name)),
    r("Company", escapeHtml(form.company)),
    r("Company location", escapeHtml(form.companyLocation)),
    r(
      "Contact email",
      `<a href="mailto:${escapeHtml(form.email)}">${escapeHtml(form.email)}</a>`,
    ),
    r("Contact phone", escapeHtml(form.phone)),
    r("Role", escapeHtml(form.role)),
  ].join("");

  i = 0;
  const profile = [
    r("Industry", industryDisplay(form)),
    r("Annual Revenue", escapeHtml(form.annualRevenue)),
    r("Number of Employees", escapeHtml(form.employeeCount)),
  ].join("");

  i = 0;
  const mfg = [
    r("Unique routing paths", escapeHtml(form.routingPaths)),
    r("Shared equipment", escapeHtml(form.sharedEquipment)),
    r("Schedule change frequency", escapeHtml(form.scheduleChangeFrequency)),
  ].join("");

  i = 0;
  const challenges = CHALLENGE_FIELDS.map((f) =>
    r(f.label, escapeHtml(String(form[f.key as keyof AssessmentFormState] || "—"))),
  ).join("");

  i = 0;
  const metrics =
    form.metricsMonitored.length > 0
      ? escapeHtml(form.metricsMonitored.join(", "))
      : "—";
  const planning = [
    r("ERP", erpDisplay(form)),
    r("Scheduling Method", escapeHtml(form.schedulingMethod)),
    r("Metrics Monitored", metrics),
  ].join("");

  i = 0;
  const data = [
    r("Routing Information", escapeHtml(form.routingInformation)),
    r("Standard Run & Setup Times", escapeHtml(form.standardRunSetupTimes)),
    r("Can production data be exported?", escapeHtml(form.productionDataExport)),
  ].join("");

  i = 0;
  const objectives = [
    r("Top Priorities", escapeHtml(form.topPriorities.join(", "))),
  ].join("");

  return `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#f9fafb">
  <div style="max-width:720px;margin:0 auto;background:#fff;border:1px solid #e4e7ec;border-radius:8px;padding:28px">
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#667085;margin:0 0 8px">${escapeHtml(sourceLabel)}</p>
    <h1 style="font-family:Arial,sans-serif;font-size:22px;color:#101828;margin:0 0 8px">${escapeHtml(title)}</h1>
    ${section("Contact", contact)}
    ${section("Company Profile", profile)}
    ${section("Manufacturing Environment", mfg)}
    ${section("Operational Challenges", challenges)}
    ${section("Current Planning Process", planning)}
    ${section("Data Availability", data)}
    ${section("Business Objectives", objectives)}
  </div></body></html>`;
}

export async function sendAssessmentEmail(
  form: AssessmentFormState,
  source: AssessmentSource = "flow-analysis",
): Promise<{ messageId: string }> {
  const cfg = readSmtpConfig();
  const transporter = getTransporter(cfg);

  const subject = `New Factory Flow Assessment from ${stripNewlines(form.name)} (${stripNewlines(form.company)})`;

  const info = await transporter.sendMail({
    from: cfg.user,
    to: cfg.adminEmail,
    subject,
    html: buildAssessmentHtml(form, source),
  });

  return { messageId: String(info.messageId || "") };
}

export type ContactLead = {
  name: string;
  email: string;
  company: string;
  role: string;
  problem: string;
};

export async function sendContactEmail(
  form: ContactLead,
): Promise<{ messageId: string }> {
  const cfg = readSmtpConfig();
  const transporter = getTransporter(cfg);

  const subject = `New Contact request from ${stripNewlines(form.name)} (${stripNewlines(form.company)})`;

  let i = 0;
  const r = (label: string, value: string) => {
    const bg = i++ % 2 === 1 ? "#f4f6f8" : "#ffffff";
    return `<tr style="background:${bg}"><td style="padding:10px 12px;font-family:Arial,sans-serif;font-size:13px;color:#667085;width:38%;vertical-align:top">${escapeHtml(label)}</td><td style="padding:10px 12px;font-family:Arial,sans-serif;font-size:13px;color:#101828">${value}</td></tr>`;
  };

  const rows = [
    r("Name", escapeHtml(form.name)),
    r(
      "Work email",
      `<a href="mailto:${escapeHtml(form.email)}">${escapeHtml(form.email)}</a>`,
    ),
    r("Company", escapeHtml(form.company)),
    r("Role", escapeHtml(form.role || "—")),
    r("What is going wrong", escapeHtml(form.problem).replace(/\n/g, "<br>")),
  ].join("");

  const html = `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#f9fafb">
  <div style="max-width:720px;margin:0 auto;background:#fff;border:1px solid #e4e7ec;border-radius:8px;padding:28px">
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#667085;margin:0 0 8px">Submitted from /contact</p>
    <h1 style="font-family:Arial,sans-serif;font-size:22px;color:#101828;margin:0 0 8px">New Trooba Flow™ Contact Request</h1>
    <h2 style="font-family:Arial,sans-serif;font-size:16px;color:#101828;margin:28px 0 10px">Details</h2>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e4e7ec">${rows}</table>
  </div></body></html>`;

  const info = await transporter.sendMail({
    from: cfg.user,
    to: cfg.adminEmail,
    subject,
    html,
  });

  return { messageId: String(info.messageId || "") };
}
