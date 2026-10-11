"use client";

import { MotionConfig } from "motion/react";

/**
 * Entrance and scroll-reveal animations are short, one-shot and part of the
 * design, so they play on every device — including ones with the OS
 * "reduce motion" setting on (common on Windows and Android). Looping,
 * ambient motion is still paused for those visitors in globals.css.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
