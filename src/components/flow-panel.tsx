"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

type FlowPanelProps = {
  /** Real workflow stages, in order. */
  flow: string[];
  /** Optional verified headline metric. */
  metric?: { value: string; label: string };
  /** `feature` fills a large case-study frame; `tile` sits inside a bento cell. */
  size?: "feature" | "tile";
  label: string;
};

/**
 * Type-led project visual: the system's actual workflow plus its headline
 * result. Used instead of fake screenshots when no real imagery exists.
 * The stages reveal in order on scroll, so the motion tells the pipeline story.
 */
export function FlowPanel({ flow, metric, size = "feature", label }: FlowPanelProps) {
  const feature = size === "feature";

  return (
    <figure
      aria-label={label}
      className={`relative flex flex-col justify-between overflow-hidden ${
        feature ? "min-h-[24rem] gap-10 rounded-xl border border-line bg-ink-2 p-6 sm:aspect-[16/11] sm:min-h-0 sm:p-10" : "gap-10"
      }`}
    >
      {feature && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-1/4 -top-1/3 size-[90%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_10%,transparent),transparent_65%)] transition-transform duration-[1.4s] ease-out-expo group-hover:scale-110"
        />
      )}

      <motion.ol
        className={`relative flex flex-col gap-3 ${feature ? "sm:flex-row sm:flex-wrap sm:items-center" : "flex-row flex-wrap items-center"}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
      >
        {flow.map((step, i) => (
          <motion.li
            key={step}
            className={`flex gap-3 ${feature ? "flex-col items-start sm:flex-row sm:items-center" : "items-center"}`}
            variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}
          >
            <span
              className={`rounded-full border px-3.5 py-1.5 text-sm ${
                i === flow.length - 1 ? "border-accent/50 bg-accent/10 text-accent" : "border-line-strong text-paper/85"
              }`}
            >
              {step}
            </span>
            {i < flow.length - 1 && (
              <>
                <ArrowRight aria-hidden className={`size-3.5 text-dim ${feature ? "hidden sm:block" : ""}`} />
                {feature && <ArrowDown aria-hidden className="ml-4 size-3.5 text-dim sm:hidden" />}
              </>
            )}
          </motion.li>
        ))}
      </motion.ol>

      {metric && (
        <div className="relative">
          <motion.div
            aria-hidden
            className="mb-5 h-px origin-left bg-accent/60"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease, delay: 0.2 + flow.length * 0.12 }}
          />
          <p
            className={`font-medium leading-none tabular-nums tracking-[-0.04em] text-paper ${
              feature ? "text-[clamp(3.5rem,9vw,7.5rem)]" : "text-[clamp(3rem,6vw,4.5rem)]"
            }`}
          >
            {metric.value}
          </p>
          <p className="mt-3 text-sm text-mute">{metric.label}</p>
        </div>
      )}
    </figure>
  );
}
