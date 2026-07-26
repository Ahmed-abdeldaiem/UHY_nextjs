import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

/**
 * Contact form handler — sends the submitted message straight to the firm's
 * official mailbox using its Bluehost domain SMTP (NOT a Google/Gmail account).
 *
 * Required environment variables (set them in `.env.local`):
 *   SMTP_HOST   e.g. mail.wmcpa-eg.com   (Bluehost outgoing server)
 *   SMTP_PORT   465 (SSL) or 587 (TLS)
 *   SMTP_USER   the full mailbox address, e.g. info@wmcpa-eg.com
 *   SMTP_PASS   the mailbox password
 *   CONTACT_TO  (optional) recipient; defaults to SMTP_USER
 *   CONTACT_FROM (optional) From address; defaults to SMTP_USER
 */

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  /** Honeypot — must stay empty for genuine submissions */
  website?: string;
};

type ResponseData = { ok: boolean; error?: string };

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = (req.body ?? {}) as ContactPayload;

  // Silently accept bot submissions that trip the honeypot.
  if (body.website) return res.status(200).json({ ok: true });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const company = (body.company ?? "").trim();
  const service = (body.service ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message || !isEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid submission" });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || user;
  const from = process.env.CONTACT_FROM || user;

  if (!host || !user || !pass || !to) {
    console.error("[contact] SMTP environment variables are not configured.");
    return res
      .status(500)
      .json({ ok: false, error: "Email service is not configured" });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Company", company || "—"],
    ["Service", service || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;color:#1a1224">
      <div style="background:#3D1A5C;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">
        <h2 style="margin:0;font-size:18px">New Contact Request</h2>
        <p style="margin:6px 0 0;opacity:.8;font-size:13px">Submitted via the website contact form</p>
      </div>
      <div style="border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px;padding:20px 24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows
            .map(
              ([label, value]) =>
                `<tr>
                  <td style="padding:8px 0;color:#7a6d88;width:120px;vertical-align:top">${label}</td>
                  <td style="padding:8px 0;font-weight:600">${escapeHtml(value)}</td>
                </tr>`,
            )
            .join("")}
        </table>
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid #eee">
          <p style="margin:0 0 6px;color:#7a6d88;font-size:14px">Message</p>
          <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(
            message,
          )}</p>
        </div>
      </div>
    </div>`;

  const text = rows
    .map(([label, value]) => `${label}: ${value}`)
    .concat(["", "Message:", message])
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"UHY Website" <${from}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New contact request — ${service || "General enquiry"}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return res.status(502).json({ ok: false, error: "Failed to send message" });
  }
}
