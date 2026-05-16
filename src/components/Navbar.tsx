import Link from "next/link";
import { ArrowRight, PrimaryCTA } from "./ui";

export function Navbar() {
  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-line)] bg-white/75 backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[var(--color-fg)]"
          aria-label="Unode home"
        >
          <span
            className="grid h-6 w-6 place-items-center rounded-[7px] border border-[var(--color-line-strong)] bg-white"
            aria-hidden="true"
          >
            <span className="text-[11px] font-semibold tracking-tight">u</span>
          </span>
          <span className="text-[15px] font-medium tracking-tight">unode</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          <Link href="/#work" className="transition hover:text-[var(--color-fg)]">
            Work
          </Link>
          <Link
            href="/services"
            className="transition hover:text-[var(--color-fg)]"
          >
            Services
          </Link>
          <Link
            href="/studio"
            className="transition hover:text-[var(--color-fg)]"
          >
            Studio
          </Link>
        </div>

        <PrimaryCTA href="/#contact" className="hidden md:inline-flex">
          Start a project
          <ArrowRight />
        </PrimaryCTA>
      </div>
    </nav>
  );
}
