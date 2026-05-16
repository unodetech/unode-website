"use client";

/* ----------------------------------------------------------------------
 * Reveal — IntersectionObserver-driven fade/rise wrapper.
 *
 * Renders a <div> that starts in `.reveal` (opacity 0, translateY 12px),
 * and once it crosses 15% of the viewport adds `.is-visible`. The
 * per-element delay is set via the `--reveal-delay` CSS var so callers
 * can stagger children inside the same section.
 *
 * If reduced-motion is set, the CSS overrides force opacity:1 / no
 * transform — the markup is identical, the animation is just skipped.
 *
 * Once visible, the observer is disconnected — this is a one-shot reveal.
 * -------------------------------------------------------------------- */

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before the reveal animation starts after entering view. */
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If we mount already in view (above-the-fold sections), reveal
    // straight away — skip the observer.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: CSSProperties = {
    // CSS custom property; cast through `as` to satisfy CSSProperties.
    ["--reveal-delay" as string]: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
