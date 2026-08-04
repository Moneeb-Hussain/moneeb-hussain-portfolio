"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export function CopyEmailButton({
  email,
  className,
  variant = "secondary",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API can fail in unsupported contexts; the email is still
      // visible as text so the user can select it manually.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email copied to clipboard" : `Copy email address ${email}`}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors",
        variant === "primary"
          ? "border-cobalt bg-cobalt text-white hover:bg-cobalt-hover"
          : "border-border bg-surface text-text hover:border-cobalt hover:text-cobalt",
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="size-4" aria-hidden="true" />
          Copied
        </>
      ) : (
        <>
          <Copy className="size-4" aria-hidden="true" />
          {email}
        </>
      )}
    </button>
  );
}
