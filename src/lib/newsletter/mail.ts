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
  });
  return { messageId: String(info.messageId || "") };
}
