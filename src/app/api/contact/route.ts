import { NextRequest, NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 1000;

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields, humans don't
  if (body.hp) {
    return NextResponse.json({ ok: true });
  }

  const name    = sanitize(body.name);
  const phone   = sanitize(body.phone);
  const zip     = sanitize(body.zip);
  const email   = sanitize(body.email);
  const message = sanitize(body.message);

  if (!name || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const lines = [
    "📬 *New Inquiry — Margus Appliance*",
    "",
    `👤 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`,
    zip     ? `📍 *ZIP:* ${zip}`         : null,
    email   ? `📧 *Email:* ${email}`     : null,
    message ? `📝 *Message:* ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const tgRes = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: lines,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!tgRes.ok) {
    return NextResponse.json({ error: "Telegram error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
