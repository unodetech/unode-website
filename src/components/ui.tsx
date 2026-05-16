/* ----------------------------------------------------------------------
 * Shared UI primitives — used by both the home page and standalone pages.
 * -------------------------------------------------------------------- */

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

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
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
      className={`link-arrow inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 ${className}`}
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
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition hover:border-zinc-400 hover:bg-white ${className}`}
    >
      {children}
    </a>
  );
}
