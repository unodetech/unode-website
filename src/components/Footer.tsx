import Link from "next/link";
import { MonoLabel } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                className="grid h-6 w-6 place-items-center rounded-[7px] border border-[var(--color-line-strong)] bg-white"
                aria-hidden="true"
              >
                <span className="text-[11px] font-semibold tracking-tight text-[var(--color-fg)]">
                  u
                </span>
              </span>
              <span className="text-[15px] font-medium tracking-tight text-[var(--color-fg)]">
                unode
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-zinc-600">
              A technology studio. Privately held.
            </p>
          </div>

          <div className="md:col-span-7 md:grid md:grid-cols-3 md:gap-8">
            <div>
              <MonoLabel>Work</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <a
                    href="https://amlakeyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    Amlakey
                  </a>
                </li>
                <li>
                  <a
                    href="https://masarqiyas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    Masar Qiyas
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <MonoLabel>Studio</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <Link
                    href="/studio"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <MonoLabel>Direct</MonoLabel>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li>
                  <a
                    href="mailto:info@unode.tech"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    info@unode.tech
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@unode.tech"
                    className="text-zinc-600 transition hover:text-[var(--color-fg)]"
                  >
                    support@unode.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 text-[12px] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Unode Company</p>
          <p className="font-mono-tag">Unode Company LLC · CR 7053929092</p>
        </div>
      </div>
    </footer>
  );
}
