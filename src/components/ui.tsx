/* ----------------------------------------------------------------------
 * Shared UI primitives — used by both English and Arabic pages.
 *
 * Components accept an optional `locale` to flip directional details
 * (arrow glyph). Default is "en" so existing call sites stay valid.
 * -------------------------------------------------------------------- */

import type { Locale } from "@/i18n/dictionaries";

export function MonoLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-mono-tag text-[var(--color-fg-subtle)] ${className}`}>
      {children}
    </span>
  );
}

/**
 * Directional arrow. In RTL it visually points left (←) because the
 * "forward" direction is right-to-left. The arrow always means "next /
 * proceed", so consumers don't need to pass a different glyph.
 */
export function ArrowRight({
  className = "",
  locale = "en",
}: {
  className?: string;
  locale?: Locale;
}) {
  const isRtl = locale === "ar";
  // Mirror the SVG path horizontally for RTL by flipping the viewBox.
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={isRtl ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M2.5 7h9m0 0L7.5 3M11.5 7l-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrimaryCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`cta-arrow inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 ${className}`}
    >
      {children}
    </a>
  );
}

export function GhostCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`cta-arrow inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition hover:border-zinc-400 hover:bg-white ${className}`}
    >
      {children}
    </a>
  );
}
