import { readFileSync } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import { unsubscribeEmailHtml, welcomeEmailHtml } from "./templates";
import { subscribeUrl, unsubscribeUrl } from "./token";

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  useTls: boolean;
};

function readSmtpConfig(): SmtpConfig {
  const host = process.env.EMAIL_HOST?.trim();
  const portRaw = process.env.EMAIL_PORT?.trim();
  const user = process.env.EMAIL_HOST_USER?.trim();
  const pass = process.env.EMAIL_HOST_PASSWORD?.trim().replace(/^['"]|['"]$/g, "");
  const useTls = ["true", "1", "yes"].includes(
    String(process.env.EMAIL_USE_TLS ?? "true").trim().toLowerCase(),
  );
  const missing: string[] = [];
  if (!host) missing.push("EMAIL_HOST");
  if (!portRaw) missing.push("EMAIL_PORT");
  if (!user) missing.push("EMAIL_HOST_USER");
  if (!pass) missing.push("EMAIL_HOST_PASSWORD");
  if (missing.length) {
    throw new Error(`Missing SMTP env vars: ${missing.join(", ")}`);
  }
  return { host: host!, port: Number(portRaw), user: user!, pass: pass!, useTls };
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

function asset(...parts: string[]): string {
  return path.join(process.cwd(), "public", "assets", "newsletter", ...parts);
}

function inlineFile(cid: string, contentType: string, ...parts: string[]) {
  return {
    filename: parts[parts.length - 1],
    content: readFileSync(asset(...parts)),
    cid,
    contentDisposition: "inline" as const,
    contentType,
  };
}

function commonAttachments() {
  return [
    {
      filename: "trooba-flow-logo.png",
      content: readFileSync(path.join(process.cwd(), "public", "Trooba_Transperentlogo.png")),
      cid: "nl-logo",
      contentDisposition: "inline" as const,
      contentType: "image/png",
    },
    inlineFile("icon-chart", "image/png", "icons", "icon-chart.png"),
    inlineFile("icon-doc", "image/png", "icons", "icon-doc.png"),
    inlineFile("icon-bulb", "image/png", "icons", "icon-bulb.png"),
    inlineFile("icon-cube", "image/png", "icons", "icon-cube.png"),
    inlineFile("icon-cal", "image/png", "icons", "icon-cal.png"),
    inlineFile("icon-mail", "image/png", "icons", "icon-mail.png"),
    inlineFile("social-linkedin", "image/png", "icons", "social-linkedin.png"),
    inlineFile("social-instagram", "image/png", "icons", "social-instagram.png"),
    inlineFile("social-x", "image/png", "icons", "social-x.png"),
  ];
}

function heroAttachment(kind: "welcome" | "unsubscribed") {
  const file = kind === "welcome" ? "welcome.jpg" : "unsubscribed.jpg";
  return {
    filename: file,
    content: readFileSync(asset(file)),
    cid: "nl-hero",
    contentDisposition: "inline" as const,
    contentType: "image/jpeg",
  };
}

export async function sendWelcomeEmail(
  name: string,
  email: string,
): Promise<{ messageId: string }> {
  const cfg = readSmtpConfig();
  const html = welcomeEmailHtml(name, unsubscribeUrl(email));
  const info = await getTransporter(cfg).sendMail({
    from: `Trooba Flow Insights <${cfg.user}>`,
    to: email,
    subject: "Congratulations — you're subscribed to Trooba Flow Insights",
    text: `You're subscribed to Trooba Flow Insights. Thank you for joining. Unsubscribe: ${unsubscribeUrl(email)}`,
    html,
    attachments: [...commonAttachments(), heroAttachment("welcome")],
  });
  return { messageId: String(info.messageId || "") };
}

export async function sendUnsubscribeEmail(
  email: string,
): Promise<{ messageId: string }> {
  const cfg = readSmtpConfig();
  const html = unsubscribeEmailHtml(subscribeUrl());
  const info = await getTransporter(cfg).sendMail({
    from: `Trooba Flow Insights <${cfg.user}>`,
    to: email,
    subject: "You've been unsubscribed from Trooba Flow Insights",
    text: `Your email has been removed from Trooba Flow Insights. Subscribe again: ${subscribeUrl()}`,
    html,
    attachments: [...commonAttachments(), heroAttachment("unsubscribed")],
  });
  return { messageId: String(info.messageId || "") };
}
