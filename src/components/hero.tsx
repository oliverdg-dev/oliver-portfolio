"use client";

import { motion } from "motion/react";
import { getSocialLinks, site } from "@/content/site";
import { AvailabilityDot, Button, TextLink } from "@/components/ui";
import { Spotlight } from "@/components/spotlight";

const ease = [0.16, 1, 0.3, 1] as const;
/** Words rendered in the italic serif accent. */
const accentWords = new Set(["complex."]);
/** Horizontal offset per line on large screens — gives the headline an editorial stagger. */
const lineIndent = ["", "lg:pl-[12%]", "lg:pl-[4%]"];

const focusAreas = ["Full-stack products", "AI integrations", "Workflow automation"];

/** Headline split into words, each carrying a global index for the stagger delay. */
const headlineLines = (() => {
  let n = 0;
  return site.headline.map((line) => line.split(" ").map((word) => ({ word, i: n++ })));
})();

export function Hero() {
  const socials = getSocialLinks();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="grain relative isolate flex min-h-svh flex-col overflow-hidden pt-16"
    >
      {/* Background: masked grid, one drifting light, pointer spotlight */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_70%_30%,black,transparent)]" />
        <div className="absolute -right-[10%] -top-[20%] size-[70vmax] animate-drift rounded-full bg-[radial-gradient(circle,rgb(198_243_90/0.10),transparent_60%)] motion-reduce:animate-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>
      <Spotlight className="-z-10" />

      <div className="shell flex flex-1 flex-col justify-between gap-12 pb-10 pt-10 sm:pt-16">
        {/* Meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <span className="text-paper">{site.name}</span>
          <span className="hidden h-px w-10 bg-line-strong sm:block" aria-hidden />
          <span>{site.role}</span>
          {site.location && <span className="hidden sm:inline">{site.location}</span>}
          {site.availability.enabled && (
            <AvailabilityDot label={site.availability.label} className="text-paper sm:ml-auto" />
          )}
        </motion.div>

        {/* Headline */}
        <h1 id="hero-title" className="display text-[clamp(2.6rem,6.4vw,7rem)]">
          <span className="sr-only">{site.shortName}, {site.role}. </span>
          {headlineLines.map((words, li) => (
            <span key={li} className={`block ${lineIndent[li] ?? ""}`}>
              {words.map(({ word, i }) => {
                const accent = accentWords.has(word);
                return (
                  <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span
                      className={`inline-block ${accent ? "serif-accent pr-[0.06em] text-accent" : ""} ${li === 2 ? "text-paper/55" : ""}`}
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.1, ease, delay: 0.35 + i * 0.06 }}
                    >
                      {word}
                    </motion.span>
                    {" "}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        {/* Intro + actions */}
        <div className="grid gap-10 border-t border-line pt-8 md:grid-cols-12 md:gap-6">
          <motion.ol
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.1 }}
            className="eyebrow hidden flex-col gap-2 lg:col-span-3 lg:flex"
            aria-label="Focus areas"
          >
            {focusAreas.map((f, i) => (
              <li key={f} className="flex gap-3">
                <span className="text-dim">0{i + 1}</span>
                <span className="text-paper/80">{f}</span>
              </li>
            ))}
          </motion.ol>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.2 }}
            className="max-w-xl text-lg leading-relaxed text-mute md:col-span-7 lg:col-span-5 lg:text-[1.1875rem]"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.3 }}
            className="flex flex-col gap-6 md:col-span-5 md:items-end lg:col-span-4"
          >
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button href="#work">Explore Selected Work</Button>
              <Button href="#contact" variant="ghost">
                Let&apos;s Talk
              </Button>
            </div>
            {socials.length > 0 && (
              <ul className="flex gap-6" aria-label="Profiles">
                {socials.map((s) => (
                  <li key={s.label}>
                    <TextLink href={s.href}>{s.label}</TextLink>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
