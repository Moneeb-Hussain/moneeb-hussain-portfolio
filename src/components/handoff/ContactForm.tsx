"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { CONTACT_FORM } from "@/content/handoff";

type FormStatus = "idle" | "sending" | "success" | "error";

const INITIAL = {
  name: "",
  email: "",
  linkedin: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const copy = CONTACT_FORM;
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as { ok?: boolean };
      setStatus(response.ok && payload.ok ? "success" : "error");
      if (response.ok && payload.ok) {
        setValues(INITIAL);
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="pf-form" onSubmit={handleSubmit} noValidate={false}>
      <label className="pf-sr-only" htmlFor="contact-company">
        Company
      </label>
      <input
        id="contact-company"
        name="company"
        className="pf-honeypot"
        tabIndex={-1}
        autoComplete="off"
        value={values.company}
        onChange={(event) =>
          setValues((current) => ({ ...current, company: event.target.value }))
        }
      />

      <label className="pf-label" htmlFor="contact-name">
        {copy.nameLabel}
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        required
        minLength={2}
        maxLength={80}
        autoComplete="name"
        placeholder={copy.namePlaceholder}
        className="pf-input"
        value={values.name}
        onChange={(event) =>
          setValues((current) => ({ ...current, name: event.target.value }))
        }
      />

      <label className="pf-label" htmlFor="contact-email">
        {copy.emailLabel}
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={copy.emailPlaceholder}
        className="pf-input"
        value={values.email}
        onChange={(event) =>
          setValues((current) => ({ ...current, email: event.target.value }))
        }
      />

      <label className="pf-label" htmlFor="contact-linkedin">
        {copy.linkedinLabel}
      </label>
      <input
        id="contact-linkedin"
        name="linkedin"
        type="url"
        autoComplete="url"
        placeholder={copy.linkedinPlaceholder}
        className="pf-input"
        value={values.linkedin}
        onChange={(event) =>
          setValues((current) => ({ ...current, linkedin: event.target.value }))
        }
      />

      <label className="pf-label" htmlFor="contact-message">
        {copy.messageLabel}
      </label>
      <textarea
        id="contact-message"
        name="message"
        required
        minLength={10}
        maxLength={2000}
        rows={5}
        placeholder={copy.messagePlaceholder}
        className="pf-input pf-textarea"
        value={values.message}
        onChange={(event) =>
          setValues((current) => ({ ...current, message: event.target.value }))
        }
      />

      <button
        type="submit"
        className="pf-btn-primary pf-form-submit"
        disabled={status === "sending"}
      >
        <Send size={16} strokeWidth={2} aria-hidden="true" />
        {status === "sending" ? copy.sending : copy.submit}
      </button>

      <p
        className={
          status === "success"
            ? "pf-form-status is-success"
            : status === "error"
              ? "pf-form-status is-error"
              : "pf-form-status"
        }
        role="status"
        aria-live="polite"
      >
        {status === "success" ? copy.success : null}
        {status === "error" ? copy.error : null}
      </p>
    </form>
  );
}
