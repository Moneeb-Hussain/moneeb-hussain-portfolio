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
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    if (values.company.trim()) {
      setStatus("success");
      setValues(INITIAL);
      return;
    }

    if (!accessKey) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio message from ${values.name.trim()}`,
          from_name: values.name.trim(),
          name: values.name.trim(),
          email: values.email.trim(),
          linkedin: values.linkedin.trim() || "Not provided",
          message: values.message.trim(),
          replyto: values.email.trim(),
        }),
      });
      const payload = (await response.json()) as { success?: boolean };
      if (response.ok && payload.success) {
        setStatus("success");
        setValues(INITIAL);
        return;
      }
      setStatus("error");
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
