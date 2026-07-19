"use client";

/* ----------------------------------------------------------------------
 * ContactForm — a real, working contact form backed by Netlify Forms.
 *
 * Netlify + static export detection:
 *   Netlify's build bot scans deployed HTML for `<form data-netlify>`.
 *   Because this form is React-rendered (and only exists after hydration),
 *   we ALSO ship a plain static `public/__forms.html` containing an
 *   identical `<form name="contact">` with every field. That guarantees
 *   the "contact" form + its fields are registered at build time.
 *
 * Submission:
 *   On submit we POST url-encoded data to "/" (same-origin — allowed by
 *   the site CSP `connect-src 'self'`). Netlify intercepts any POST whose
 *   body carries `form-name=contact` and files it under that form. If JS
 *   is unavailable, the native `action="/" method="POST"` submit still
 *   works (progressive enhancement).
 *
 * Accessibility:
 *   Every field is labelled; the honeypot is removed from the a11y tree
 *   and tab order; status changes are announced via an aria-live region.
 * -------------------------------------------------------------------- */

import { useState } from "react";
import { ArrowRight } from "./ui";
import { getDictionary, type Locale } from "@/i18n/dictionaries";

type Status = "idle" | "submitting" | "success" | "error";

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}

const fieldClass =
  "mt-2 w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-[15px] text-[var(--color-fg)] transition placeholder:text-zinc-400 hover:border-[var(--color-line-strong)] focus:border-[var(--color-fg)] focus:outline-none";

const labelClass =
  "block text-start text-[13px] font-medium text-[var(--color-fg)]";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contactForm;
  const isRtl = locale === "ar";

  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    projectType: t.projectTypes[0].value,
    message: "",
  });

  const update =
    (key: keyof typeof values) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:p-10"
      >
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10.5l3.5 3.5L16 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 text-start text-xl font-medium tracking-tight text-[var(--color-fg)]">
          {t.successTitle}
        </h3>
        <p className="mt-3 max-w-md text-start text-[15px] leading-relaxed text-zinc-600">
          {t.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      action="/"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:p-8"
    >
      {/* Netlify needs the form name in the POST body. */}
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot — hidden from users, bots fill it and get filtered. */}
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            {t.nameLabel}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            dir={isRtl ? "rtl" : "ltr"}
            value={values.name}
            onChange={update("name")}
            placeholder={t.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            {t.emailLabel}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            dir="ltr"
            value={values.email}
            onChange={update("email")}
            placeholder={t.emailPlaceholder}
            className={`${fieldClass} text-start`}
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelClass}>
            {t.companyLabel}{" "}
            <span className="font-normal text-zinc-400">({t.optional})</span>
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            autoComplete="organization"
            dir={isRtl ? "rtl" : "ltr"}
            value={values.company}
            onChange={update("company")}
            placeholder={t.companyPlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-project" className={labelClass}>
            {t.projectTypeLabel}
          </label>
          <select
            id="cf-project"
            name="projectType"
            value={values.projectType}
            onChange={update("projectType")}
            className={`${fieldClass} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pe-10 rtl:bg-[left_1rem_center]`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%23a1a1aa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            }}
          >
            {t.projectTypes.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-message" className={labelClass}>
          {t.messageLabel}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          dir={isRtl ? "rtl" : "ltr"}
          value={values.message}
          onChange={update("message")}
          placeholder={t.messagePlaceholder}
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-start text-[14px] text-red-700"
        >
          <span className="font-medium">{t.errorTitle}</span> {t.errorBody}
        </div>
      ) : null}

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="cta-arrow inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? t.submitting : t.submit}
          {status === "submitting" ? null : <ArrowRight locale={locale} />}
        </button>
      </div>
    </form>
  );
}
