import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

const MAX_FIELD_LENGTH = 500;

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function POST(req: NextRequest) {
  // Rate limit: 5 submissions per IP per hour
  const ip = getIp(req);
  const { allowed, retryAfterSeconds } = rateLimit(ip, 5, 60 * 60 * 1000);

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(retryAfterSeconds) },
      }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot check — bots fill hidden fields, humans don't
  if (body.hp) {
    return NextResponse.json({ ok: true }); // silent reject
  }

  const name      = sanitize(body.name);
  const phone     = sanitize(body.phone);
  const zip       = sanitize(body.zip);
  const appliance = sanitize(body.appliance);
  const email     = sanitize(body.email);
  const brand     = sanitize(body.brand);
  const location  = sanitize(body.location);
  const issue     = sanitize(body.issue);

  if (!name || !phone || !zip || !appliance) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const lines = [
    "📋 *New Booking — Margus Appliance*",
    "",
    `👤 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`,
    `📍 *ZIP:* ${zip}`,
    `🔧 *Appliance:* ${appliance}`,
    email    ? `📧 *Email:* ${email}`      : null,
    brand    ? `🏷 *Brand:* ${brand}`      : null,
    location ? `🏠 *Location:* ${location}` : null,
    issue    ? `📝 *Problem:* ${issue}`    : null,
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
