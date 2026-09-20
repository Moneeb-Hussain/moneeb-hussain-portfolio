"use client";

import { useState } from "react";
import { handoffProfile, RETAIL_CASE_STUDY } from "@/content/handoff";

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect
        x="5.5"
        y="5.5"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M10.5 5.5V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AskBar() {
  const { ask } = RETAIL_CASE_STUDY;
  const email = handoffProfile.email;
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can fail in some contexts; the email stays visible on the button.
    }
  }

  return (
    <section className="pf-cs-ask" aria-label="Contact">
      <div>
        <p className="pf-cs-ask-title">{ask.title}</p>
        <p className="pf-cs-ask-lead">{ask.lead}</p>
      </div>
      <button
        type="button"
        className="pf-cs-ask-btn"
        onClick={handleCopy}
        aria-label={
          copied ? "Email copied to clipboard" : `Copy email address ${email}`
        }
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? "Copied" : email}
      </button>
    </section>
  );
}
