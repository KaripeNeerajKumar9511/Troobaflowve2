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

function cid(name: string, alt: string, width: number, extra = ""): string {
  return `<img src="cid:${name}" alt="${alt}" width="${width}" style="display:block;border:0;outline:none;text-decoration:none;max-width:100%;height:auto;${extra}">`;
}

function logoRow(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px">
    <tr>
      <td align="left" valign="middle" class="nl-col" style="padding:0 8px 8px 0">
        ${cid("nl-logo", "Trooba Flow", 168)}
      </td>
      <td align="right" valign="middle" class="nl-col" style="font-family:'DM Sans',Arial,sans-serif;font-size:13px;color:${MUTED};line-height:1.35;padding:0 0 8px 8px">
        Smarter Manufacturing.<br>Higher Possibilities.
      </td>
    </tr>
  </table>`;
}

function benefitCell(iconCid: string, title: string, body: string): string {
  return `<td class="nl-benefit" width="20%" valign="top" style="padding:10px 6px 0;text-align:center">
    ${cid(iconCid, title, 46, "margin:0 auto 10px")}
    <p style="margin:0 0 6px;font-family:'DM Sans',Arial,sans-serif;font-size:13px;font-weight:700;color:${INK}">${title}</p>
    <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:12px;line-height:1.45;color:${MUTED}">${body}</p>
  </td>`;
}

function benefitsRow(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="nl-benefits">
    <tr>
      ${benefitCell("icon-chart", "Industry Insights", "Trends, data and opportunities shaping manufacturing.")}
      ${benefitCell("icon-doc", "Real-world Case Studies", "See how leading manufacturers solve real challenges.")}
      ${benefitCell("icon-bulb", "Expert Tips", "Practical strategies to improve operations.")}
      ${benefitCell("icon-cube", "Product Updates", "Be the first to know about new features and capabilities.")}
      ${benefitCell("icon-cal", "Webinars &amp; Events", "Invitations to exclusive sessions, demos and industry events.")}
    </tr>
  </table>`;
}

function socialIcon(cidName: string, href: string, label: string): string {
  return `<a href="${href}" style="display:inline-block;margin-left:8px;text-decoration:none" title="${label}">${cid(cidName, label, 28)}</a>`;
}

function brandCard(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px">
    <tr>
      <td valign="middle">${cid("nl-logo", "Trooba Flow", 150)}</td>
      <td valign="middle" align="right">
        ${socialIcon("social-linkedin", SOCIAL_LINKS.linkedin, "LinkedIn")}
        ${socialIcon("social-instagram", SOCIAL_LINKS.instagram, "Instagram")}
        ${socialIcon("social-x", SOCIAL_LINKS.x, "X")}
      </td>
    </tr>
    <tr>
      <td colspan="2" style="padding-top:6px;font-family:'DM Sans',Arial,sans-serif;font-size:12px;color:${MUTED}">Smarter Manufacturing. Higher Possibilities.</td>
    </tr>
  </table>`;
}

function footerBlock(kind: "welcome" | "unsub", actionUrl: string): string {
  const prefs =
    kind === "welcome"
      ? `You're receiving this email because you subscribed to Trooba Flow Insights.<br>If you no longer wish to receive these emails, you can unsubscribe at any time.`
      : `You've been unsubscribed from Trooba Flow Insights.<br>If this was a mistake, you can subscribe again anytime.`;
  const actionLabel =
    kind === "welcome"
      ? "Unsubscribe from Trooba Flow Insights →"
      : "Subscribe to Trooba Flow Insights →";
  const origin = site();
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;border:1px solid ${LINE};border-radius:14px;background:#fafafa">
    <tr>
      <td style="padding:20px 22px 12px" colspan="2">${brandCard()}</td>
    </tr>
    <tr>
      <td class="nl-col" width="52%" valign="top" style="padding:8px 22px 20px;border-top:1px solid ${LINE};font-family:'DM Sans',Arial,sans-serif;font-size:12px;line-height:1.55;color:${MUTED}">
        <strong style="color:${INK}">Email Preferences</strong><br>
        ${prefs}<br>
        <a href="${actionUrl}" style="color:${TEAL_DARK};font-weight:600;text-decoration:underline">${actionLabel}</a>
      </td>
      <td class="nl-col" width="48%" valign="top" style="padding:8px 22px 20px;border-top:1px solid ${LINE};text-align:right;font-family:'DM Sans',Arial,sans-serif;font-size:12px;line-height:1.7;color:${MUTED}">
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
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>Trooba Flow Insights</title>
  <style>
    img { max-width:100% !important; height:auto !important; }
    @media only screen and (max-width: 620px) {
      .nl-wrap { padding:12px 8px !important; }
      .nl-pad { padding:18px 14px 22px !important; }
      .nl-col { display:block !important; width:100% !important; max-width:100% !important; text-align:left !important; }
      .nl-h1 { font-size:28px !important; line-height:1.15 !important; }
      .nl-hero-img { width:100% !important; max-width:100% !important; height:auto !important; margin:12px 0 0 !important; }
      .nl-benefit { display:block !important; width:100% !important; padding:12px 8px 4px !important; }
      .nl-cta { display:block !important; width:100% !important; text-align:left !important; padding:0 16px 16px !important; }
      .nl-cta a { display:block !important; text-align:center !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f3f6f5;width:100%">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f5;width:100%">
    <tr>
      <td align="center" class="nl-wrap" style="padding:28px 12px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="nl-card" style="max-width:640px;width:100%;background:#ffffff;border-radius:18px">
          <tr>
            <td class="nl-pad" style="padding:28px 28px 32px">
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
      <td align="center" style="padding:18px 16px 8px">
        ${cid("nl-logo", "Trooba Flow", 150, "margin:0 auto")}
      </td>
    </tr>
    <tr>
      <td align="center" style="padding:0 12px 12px">
        ${cid("nl-hero", "Welcome to the flow", 280, "margin:0 auto;width:100%;max-width:280px;border-radius:12px")}
      </td>
    </tr>
  </table>`;
}

function unsubCard(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${MINT};border-radius:16px">
    <tr>
      <td align="center" style="padding:18px 16px 8px">
        ${cid("nl-logo", "Trooba Flow", 150, "margin:0 auto")}
      </td>
    </tr>
    <tr>
      <td align="center" style="padding:0 12px 12px">
        ${cid("nl-hero", "You've been unsubscribed", 280, "margin:0 auto;width:100%;max-width:280px;border-radius:12px")}
      </td>
    </tr>
  </table>`;
}

export function welcomeEmailHtml(_name: string, unsubUrl: string): string {
  const inner = `${logoRow()}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(180deg,#f3fbf9 0%,#ffffff 70%);border-radius:16px">
    <tr>
      <td class="nl-col" width="52%" valign="middle" style="padding:8px 18px 18px 8px">
        <p style="margin:0 0 10px;font-family:'DM Sans',Arial,sans-serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${TEAL_DARK}">Welcome to Trooba Flow Insights</p>
        <h1 class="nl-h1" style="margin:0 0 10px;font-family:'DM Sans',Arial,sans-serif;font-size:34px;line-height:1.1;color:${INK}">You're <span style="color:${TEAL}">Subscribed!</span></h1>
        <p style="margin:0 0 12px;font-family:'DM Sans',Arial,sans-serif;font-size:16px;color:${INK}">Thank you for joining Trooba Flow Insights.</p>
        <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;line-height:1.55;color:${MUTED}">You'll now receive our latest manufacturing insights, case studies, product updates and more — straight to your inbox.</p>
      </td>
      <td class="nl-col" width="48%" valign="middle" style="padding:8px 0 8px 8px">
        ${welcomeCard()}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:22px;background:${CARD};border-radius:16px">
    <tr>
      <td style="padding:22px 16px 18px;text-align:center">
        <h2 style="margin:0 0 6px;font-family:'DM Sans',Arial,sans-serif;font-size:20px;color:${INK}">What you'll get in Trooba Flow Insights</h2>
        <p style="margin:0 0 18px;font-family:'DM Sans',Arial,sans-serif;font-size:13px;color:${MUTED}">Curated content to help you build a smarter, more efficient factory.</p>
        ${benefitsRow()}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;background:${MINT};border-radius:14px">
    <tr>
      <td width="56" valign="top" style="padding:16px 0 16px 16px">
        ${cid("icon-mail", "", 40)}
      </td>
      <td style="padding:16px 16px 16px 10px;font-family:'DM Sans',Arial,sans-serif">
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
      <td class="nl-col" width="54%" valign="middle" style="padding:8px 18px 18px 8px">
        <h1 class="nl-h1" style="margin:0 0 10px;font-family:'DM Sans',Arial,sans-serif;font-size:34px;line-height:1.1;color:${INK}">You've been <span style="color:${TEAL}">Unsubscribed</span></h1>
        <p style="margin:0 0 12px;font-family:'DM Sans',Arial,sans-serif;font-size:16px;color:${INK}">Your email has been successfully removed from Trooba Flow Insights.</p>
        <p style="margin:0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;line-height:1.55;color:${MUTED}">We're sorry to see you go. You will no longer receive our manufacturing insights, case studies, product updates, and event invitations.</p>
      </td>
      <td class="nl-col" width="46%" valign="middle" style="padding:8px 0 8px 8px">
        ${unsubCard()}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:22px;background:${CARD};border-radius:16px">
    <tr>
      <td style="padding:22px 16px 18px;text-align:center">
        <h2 style="margin:0 0 18px;font-family:'DM Sans',Arial,sans-serif;font-size:20px;color:${INK}">You'll no longer receive:</h2>
        ${benefitsRow()}
      </td>
    </tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;background:${MINT};border-radius:14px">
    <tr>
      <td style="padding:16px 8px;font-family:'DM Sans',Arial,sans-serif">
        <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:${INK}">Changed your mind?</p>
        <p style="margin:0;font-size:13px;line-height:1.5;color:${MUTED}">You can subscribe again anytime and continue receiving valuable insights to help build a smarter, more efficient factory.</p>
      </td>
      <td class="nl-cta" valign="middle" style="padding:16px 16px 16px 8px" align="right">
        <a href="${resubUrl}" style="display:inline-block;background:${TEAL_DARK};color:#ffffff;text-decoration:none;font-family:'DM Sans',Arial,sans-serif;font-size:13px;font-weight:600;padding:10px 16px;border-radius:8px">Subscribe Again →</a>
      </td>
    </tr>
  </table>
  <p style="margin:22px 0 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;line-height:1.55;color:${MUTED}">Thank you for being a part of the Trooba Flow community.<br>We hope to see you back soon.</p>
  <p style="margin:18px 0 0;font-family:'DM Sans',Arial,sans-serif;font-size:14px;color:${INK}">Best regards,<br><strong>The Trooba Flow Team</strong><br><span style="color:${MUTED}">Smarter Manufacturing. Higher Possibilities.</span></p>
  ${footerBlock("unsub", resubUrl)}`;
  return wrap(inner);
}
