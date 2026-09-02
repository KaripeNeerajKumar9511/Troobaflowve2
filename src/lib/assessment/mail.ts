import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type { AssessmentFormState, AssessmentSource } from "./types";
import {
  assessmentSummary,
  contactSummary,
  summaryToText,
  type SummarySection,
} from "./summary";

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

function mailRecipients(cfg: SmtpConfig): string[] {
  const unique = new Set(
    [cfg.adminEmail, cfg.user]
      .map((value) => value.trim())
      .filter(Boolean),
  );
  return [...unique];
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
  const htmlValue = value.includes("\n")
    ? escapeHtml(value).replace(/\n/g, "<br>")
    : escapeHtml(value);
  return `<tr style="background:${bg}"><td style="padding:10px 12px;font-family:Arial,sans-serif;font-size:13px;color:#667085;width:38%;vertical-align:top">${escapeHtml(label)}</td><td style="padding:10px 12px;font-family:Arial,sans-serif;font-size:13px;color:#101828">${htmlValue}</td></tr>`;
}

function wrapSection(title: string, rowsHtml: string): string {
  return `<h2 style="font-family:Arial,sans-serif;font-size:16px;color:#101828;margin:28px 0 10px">${escapeHtml(title)}</h2><table style="width:100%;border-collapse:collapse;border:1px solid #e4e7ec">${rowsHtml}</table>`;
}

function sectionsHtml(blocks: SummarySection[]): string {
  return blocks
    .map((block) => {
      const rows = block.rows
        .map((item, index) => row(item.label, item.value, index % 2 === 1))
        .join("");
      return wrapSection(block.title, rows);
    })
    .join("");
}

function envelopeHtml(kicker: string, title: string, blocks: SummarySection[]): string {
  return `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#f9fafb">
  <div style="max-width:720px;margin:0 auto;background:#fff;border:1px solid #e4e7ec;border-radius:8px;padding:28px">
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#667085;margin:0 0 8px">${escapeHtml(kicker)}</p>
    <h1 style="font-family:Arial,sans-serif;font-size:22px;color:#101828;margin:0 0 8px">${escapeHtml(title)}</h1>
    ${sectionsHtml(blocks)}
  </div></body></html>`;
}

export async function sendAssessmentEmail(
  form: AssessmentFormState,
  source: AssessmentSource = "flow-analysis",
): Promise<{ messageId: string }> {
  const cfg = readSmtpConfig();
  const transporter = getTransporter(cfg);
  const blocks = assessmentSummary(form);
  const subject = `New Factory Flow Assessment from ${stripNewlines(form.name)} (${stripNewlines(form.company)})`;

  const info = await transporter.sendMail({
    from: cfg.user,
    to: mailRecipients(cfg),
    replyTo: form.email,
    subject,
    text: `${subject}\n\n${summaryToText(blocks)}`,
    html: envelopeHtml(
      source === "contact"
        ? "Submitted from /contact"
        : "Submitted from /flow-analysis",
      "New Trooba Flow™ Factory Flow Assessment",
      blocks,
    ),
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
  const blocks = contactSummary(form);
  const subject = `New Contact request from ${stripNewlines(form.name)} (${stripNewlines(form.company)})`;

  const info = await transporter.sendMail({
    from: cfg.user,
    to: mailRecipients(cfg),
    replyTo: form.email,
    subject,
    text: `${subject}\n\n${summaryToText(blocks)}`,
    html: envelopeHtml(
      "Submitted from /contact",
      "New Trooba Flow™ Contact Request",
      blocks,
    ),
  });

  return { messageId: String(info.messageId || "") };
}
