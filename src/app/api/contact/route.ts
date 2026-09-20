import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINKEDIN_PATTERN = /^https?:\/\/(\w+\.)?linkedin\.com\/.+/i;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  linkedin?: unknown;
  message?: unknown;
  company?: unknown;
}

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { ok: false, error: "not-configured" },
      { status: 503 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  if (asTrimmedString(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const linkedin = asTrimmedString(body.linkedin);
  const message = asTrimmedString(body.message);

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  if (linkedin && !LINKEDIN_PATTERN.test(linkedin)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Portfolio message from ${name}`,
      from_name: name,
      name,
      email,
      linkedin: linkedin || "Not provided",
      message,
      replyto: email,
    }),
  });

  const result = (await response.json()) as { success?: boolean };
  if (!response.ok || !result.success) {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
