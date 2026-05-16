"use client";

/* ----------------------------------------------------------------------
 * CursorGlow — makes the hero ambient glow lag the cursor.
 *
 * Reads the bounding rect of `parentRef` (the hero section), tracks
 * pointermove inside it, and interpolates a target position toward the
 * cursor with a small lerp factor each animation frame. The final
 * position is written to `--glow-x` / `--glow-y` on the parent so the
 * `.hero-glow` element (positioned via CSS) follows along.
 *
 * Disabled when:
 *   - device has no fine pointer (`(hover: hover) and (pointer: fine)`)
 *   - user prefers reduced motion
 *
 * In those cases the component is a no-op and the inline-style fallback
 * corner position on the parent (set by HomeContent) is used.
 * -------------------------------------------------------------------- */

import { useEffect } from "react";

export function CursorGlow({
  targetSelector,
}: {
  /** CSS selector for the hero section that owns --glow-x/--glow-y. */
  targetSelector: string;
}) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(targetSelector);
    if (!el) return;

    // Bail on touch / coarse pointer or reduced-motion.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduced.matches) return;

    // Track target (set by mousemove) and current (interpolated each frame).
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let initialized = false;
    let rafId = 0;
    let active = false;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Clamp to the hero bounds — outside, the listener won't fire.
      targetX = Math.max(0, Math.min(rect.width, x));
      targetY = Math.max(0, Math.min(rect.height, y));
      if (!initialized) {
        currentX = targetX;
        currentY = targetY;
        initialized = true;
      }
      if (!active) {
        active = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      // When the cursor exits, let the glow drift toward the fallback
      // corner. `data-glow-fallback-side` is "end" (LTR top-right) or
      // "start" (RTL top-left); we translate that into a pixel target
      // against the current bounding rect.
      const rect = el.getBoundingClientRect();
      const side = el.dataset.glowFallbackSide;
      targetX = side === "start" ? 0 : rect.width;
      targetY = 0;
      if (!active) {
        active = true;
        rafId = requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      // Lerp toward the target — ~0.08 gives a perceptible but premium lag.
      const lerp = 0.08;
      currentX += (targetX - currentX) * lerp;
      currentY += (targetY - currentY) * lerp;

      el.style.setProperty("--glow-x", `${currentX}px`);
      el.style.setProperty("--glow-y", `${currentY}px`);

      const dx = Math.abs(targetX - currentX);
      const dy = Math.abs(targetY - currentY);
      if (dx < 0.4 && dy < 0.4) {
        active = false;
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [targetSelector]);

  return null;
}
