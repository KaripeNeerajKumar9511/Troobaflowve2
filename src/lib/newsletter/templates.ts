import { siteOrigin, subscribeUrl } from "./token";

const TEAL = "#009A8E";
const TEAL_DARK = "#00796F";
const INK = "#0C0F14";
const MUTED = "#5C6570";
const LINE = "#E4E4E0";
const MINT = "#EAF7F5";
const CARD = "#F4FBFA";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/144683945",
  instagram: "https://www.instagram.com/trooba_flow/",
  x: "https://x.com/buytrooba",
} as const;

function site(): string {
  return siteOrigin();
}

function logoImg(width: number, extra = ""): string {
  return `<img src="cid:nl-logo" alt="Trooba Flow" width="${width}" style="display:block;border:0;outline:none;text-decoration:none;max-width:100%;height:auto;${extra}">`;
}

function logoRow(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px">
    <tr>
      <td align="left" valign="middle" style="padding:0 0 8px">
        ${logoImg(188)}
      </td>
    </tr>
    <tr>
      <td align="left" valign="middle" style="font-family:'DM Sans',Arial,sans-serif;font-size:13px;color:${MUTED};line-height:1.35;padding:0 0 4px">
        Smarter Manufacturing. Higher Possibilities.
      </td>
    </tr>
  </table>`;
}

function benefitRow(title: string, body: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 12px">
    <tr>
      <td valign="top" width="8" style="width:8px;padding-top:4px">
        <div style="width:8px;height:8px;background:${TEAL};border-radius:8px;line-height:8px;font-size:0">&nbsp;</div>
      </td>
      <td valign="top" style="padding:0 0 0 12px;font-family:'DM Sans',Arial,sans-serif">
        <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:${INK}">${title}</p>
        <p style="margin:0;font-size:13px;line-height:1.45;color:${MUTED}">${body}</p>
      </td>
    </tr>
  </table>`;
}

function benefitsList(): string {
  return `${benefitRow("Industry Insights", "Trends, data and opportunities shaping manufacturing.")}
    ${benefitRow("Real-world Case Studies", "See how leading manufacturers solve real challenges.")}
    ${benefitRow("Expert Tips", "Practical strategies to improve operations.")}
    ${benefitRow("Product Updates", "Be the first to know about new features and capabilities.")}
    ${benefitRow("Webinars &amp; Events", "Invitations to exclusive sessions, demos and industry events.")}`;
}

function socialLink(href: string, label: string): string {
  return `<a href="${href}" style="display:inline-block;margin:0 12px 6px 0;color:${TEAL_DARK};font-family:'DM Sans',Arial,sans-serif;font-size:12px;font-weight:600;text-decoration:none">${label}</a>`;
}

function brandCard(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px">
    <tr>
      <td valign="middle" style="padding:0 0 10px">${logoImg(160)}</td>
    </tr>
    <tr>
      <td valign="middle" align="left" style="padding:0 0 8px">
        ${socialLink(SOCIAL_LINKS.linkedin, "LinkedIn")}
        ${socialLink(SOCIAL_LINKS.instagram, "Instagram")}
        ${socialLink(SOCIAL_LINKS.x, "X")}
      </td>
    </tr>
    <tr>
      <td style="padding-top:2px;font-family:'DM Sans',Arial,sans-serif;font-size:12px;color:${MUTED}">Smarter Manufacturing. Higher Possibilities.</td>
    </tr>
  </table>`;
}

function footerBlock(kind: "welcome" | "unsub", actionUrl: string): string {
  const prefs =
    kind === "welcome"
      ? `You're receiving this email because you subscribed to Trooba Flow Insights. If you no longer wish to receive these emails, you can unsubscribe at any time.`
      : `You've been unsubscribed from Trooba Flow Insights. If this was a mistake, you can subscribe again anytime.`;
  const actionLabel =
    kind === "welcome"
      ? "Unsubscribe from Trooba Flow Insights →"
      : "Subscribe to Trooba Flow Insights →";
  const origin = site();
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;border:1px solid ${LINE};border-radius:14px;background:#fafafa">
    <tr>
      <td style="padding:18px 16px 8px">${brandCard()}</td>
    </tr>
    <tr>
      <td class="nl-col" valign="top" style="padding:8px 16px 16px;border-top:1px solid ${LINE};font-family:'DM Sans',Arial,sans-serif;font-size:12px;line-height:1.55;color:${MUTED};word-break:break-word">
        <strong style="color:${INK}">Email Preferences</strong><br>
        ${prefs}<br>
        <a href="${actionUrl}" style="color:${TEAL_DARK};font-weight:600;text-decoration:underline">${actionLabel}</a>
      </td>
    </tr>
    <tr>
      <td class="nl-col" valign="top" style="padding:0 16px 18px;font-family:'DM Sans',Arial,sans-serif;font-size:12px;line-height:1.7;color:${MUTED};word-break:break-word">
        <a href="${origin}" style="color:${MUTED};text-decoration:none">Visit our website</a>
        &nbsp;|&nbsp;
        <a href="${origin}/blog" style="color:${MUTED};text-decoration:none">Read our blogs</a>
        &nbsp;|&nbsp;
        <a href="${origin}/contact" style="color:${MUTED};text-decoration:none">Contact us</a>
        <br>© ${new Date().getFullYear()} Trooba Flow. All rights reserved.
      </td>
    </tr>
  </table>`;
}

function wrap(inner: string): string {
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Trooba Flow Insights</title>
  <style>
    html, body { margin:0 !important; padding:0 !important; width:100% !important; }
    * { -ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; }
    table, td { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
    img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; max-width:100% !important; height:auto !important; }
    @media only screen and (max-width: 620px) {
      .nl-wrap { padding:8px 6px !important; }
      .nl-pad { padding:16px 14px 20px !important; }
      .nl-col { display:block !important; width:100% !important; max-width:100% !important; box-sizing:border-box !important; text-align:left !important; padding-left:0 !important; padding-right:0 !important; }
      .nl-h1 { font-size:26px !important; line-height:1.2 !important; }
      .nl-cta { display:block !important; width:100% !important; text-align:left !important; padding:0 0 16px !important; }
      .nl-cta a { display:block !important; text-align:center !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f3f6f5;width:100%">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f5;width:100%">
    <tr>
      <td align="center" class="nl-wrap" style="padding:20px 8px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="nl-card" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px">
          <tr>
            <td class="nl-pad" style="padding:24px 22px 28px">
              ${inner}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function welcomeCard(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${MINT};border-radius:16px">
    <tr>
      <td align="center" style="padding:22px 16px">
        ${logoImg(200, "margin:0 auto")}
      </td>
    </tr>
  </table>`;
}

function unsubCard(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${MINT};border-radius:16px">
    <tr>
      <td align="center" style="padding:22px 16px">
        ${logoImg(200, "margin:0 auto")}
      </td>
    </tr>
  </table>`;
}

export function welcomeEmailHtml(_name: string, unsubUrl: string): string {
  const inner = `${logoRow()}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(180deg,#f3fbf9 0%,#ffffff 70%);border-radius:16px">
    <tr>
      <td valign="top" style="padding:8px 4px 12px">
        <p style="margin:0 0 10px;font-family:'DM Sans',Arial,sans-serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${TEAL_DARK}">Welcome to Trooba Flow Insights</p>
        <h1 class="nl-h1" style="margin:0 0 10px;font-family:'DM Sans',Arial,sans-serif;font-size:32px;line-height:1.15;color:${INK}">You're <span style="color:${TEAL}">Subscribed!</span></h1>
        <p style="margin:0 0 12px;font-family:'DM Sans',Arial,sans-serif;font-size:16px;color:${INK}">Thank you for joining Trooba Flow Insights.</p>
        <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;line-height:1.55;color:${MUTED}">You'll now receive our latest manufacturing insights, case studies, product updates and more — straight to your inbox.</p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="padding:0 0 8px">
        ${welcomeCard()}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;background:${CARD};border-radius:16px">
    <tr>
      <td style="padding:20px 16px 12px">
        <h2 style="margin:0 0 6px;font-family:'DM Sans',Arial,sans-serif;font-size:20px;color:${INK}">What you'll get in Trooba Flow Insights</h2>
        <p style="margin:0 0 16px;font-family:'DM Sans',Arial,sans-serif;font-size:13px;color:${MUTED}">Curated content to help you build a smarter, more efficient factory.</p>
        ${benefitsList()}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;background:${MINT};border-radius:14px">
    <tr>
      <td style="padding:16px;font-family:'DM Sans',Arial,sans-serif">
        <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:${INK}">A quick note</p>
        <p style="margin:0;font-size:13px;line-height:1.5;color:${MUTED}">You'll receive an email from us only when we publish a new newsletter. No unnecessary emails — just valuable content, when it matters.</p>
      </td>
    </tr>
  </table>
  <p style="margin:22px 0 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;line-height:1.55;color:${MUTED}">We're excited to have you on this journey.<br>Together, let's build a more intelligent and efficient manufacturing future.</p>
  <p style="margin:18px 0 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:${INK}">Best regards,<br><strong>The Trooba Flow Team</strong><br><span style="color:${MUTED}">Smarter Manufacturing. Higher Possibilities.</span></p>
  ${footerBlock("welcome", unsubUrl)}`;
  return wrap(inner);
}

export function unsubscribeEmailHtml(resubUrl: string): string {
  const inner = `${logoRow()}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(180deg,#f3fbf9 0%,#ffffff 70%);border-radius:16px">
    <tr>
      <td valign="top" style="padding:8px 4px 12px">
        <h1 class="nl-h1" style="margin:0 0 10px;font-family:'DM Sans',Arial,sans-serif;font-size:32px;line-height:1.15;color:${INK}">You've been <span style="color:${TEAL}">Unsubscribed</span></h1>
        <p style="margin:0 0 12px;font-family:'DM Sans',Arial,sans-serif;font-size:16px;color:${INK}">Your email has been successfully removed from Trooba Flow Insights.</p>
        <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;line-height:1.55;color:${MUTED}">We're sorry to see you go. You will no longer receive our manufacturing insights, case studies, product updates, and event invitations.</p>
      </td>
    </tr>
    <tr>
      <td valign="top" style="padding:0 0 8px">
        ${unsubCard()}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;background:${CARD};border-radius:16px">
    <tr>
      <td style="padding:20px 16px 12px">
        <h2 style="margin:0 0 16px;font-family:'DM Sans',Arial,sans-serif;font-size:20px;color:${INK}">You'll no longer receive:</h2>
        ${benefitsList()}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;background:${MINT};border-radius:14px">
    <tr>
      <td valign="top" style="padding:16px;font-family:'DM Sans',Arial,sans-serif">
        <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:${INK}">Changed your mind?</p>
        <p style="margin:0 0 12px;font-size:13px;line-height:1.5;color:${MUTED}">You can subscribe again anytime and continue receiving valuable insights to help build a smarter, more efficient factory.</p>
        <a href="${resubUrl}" style="display:inline-block;background:${TEAL_DARK};color:#ffffff;text-decoration:none;font-family:'DM Sans',Arial,sans-serif;font-size:13px;font-weight:600;padding:10px 16px;border-radius:8px">Subscribe Again →</a>
      </td>
    </tr>
  </table>
  <p style="margin:22px 0 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;line-height:1.55;color:${MUTED}">Thank you for being a part of the Trooba Flow community.<br>We hope to see you back soon.</p>
  <p style="margin:18px 0 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:${INK}">Best regards,<br><strong>The Trooba Flow Team</strong><br><span style="color:${MUTED}">Smarter Manufacturing. Higher Possibilities.</span></p>
  ${footerBlock("unsub", resubUrl)}`;
  return wrap(inner);
}
