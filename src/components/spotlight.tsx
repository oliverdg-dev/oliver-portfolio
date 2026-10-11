"use client";

import { useEffect, useRef } from "react";

/**
 * Pointer-following light for desktop. Writes --mx/--my on its own element,
 * throttled to one update per animation frame. Inert on touch devices.
 */
export function Spotlight({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    host.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={ref} aria-hidden className={`spotlight pointer-events-none absolute inset-0 ${className}`} />;
}
