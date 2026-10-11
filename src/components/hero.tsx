"use client";

import { motion } from "motion/react";
import { getSocialLinks, site } from "@/content/site";
import { AvailabilityDot, Button, TextLink } from "@/components/ui";
import { Spotlight } from "@/components/spotlight";

const ease = [0.16, 1, 0.3, 1] as const;

/** Headline split into words, each carrying a global index for the stagger delay. */
const headlineLines = (() => {
  let n = 0;
  return site.headline.map((line) => line.split(" ").map((word) => ({ word, i: n++ })));
})();

/**
 * Hero: a two-line headline, a sub-20-word intro that names Oliver, and one CTA row.
 * Everything else (focus areas, location, metrics) lives in later sections.
 */
export function Hero() {
  const socials = getSocialLinks();
  const lastWord = headlineLines.flat().length;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden pt-16"
    >
      {/* One slow light source plus the pointer spotlight; no decorative grid. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -right-[10%] -top-[20%] size-[70vmax] animate-drift rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_11%,transparent),transparent_60%)] motion-reduce:animate-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>
      <Spotlight className="-z-10" />

      <div className="shell flex flex-1 flex-col justify-center gap-10 py-16 sm:gap-12 lg:py-20">
        <h1 id="hero-title" className="display max-w-[22ch] text-[clamp(2.6rem,4.25vw,4.5rem)] leading-[1.02] lg:max-w-none">
          <span className="sr-only">
            {site.shortName}, {site.role}.{" "}
          </span>
          {headlineLines.map((words, li) => (
            <span key={li} className="lg:block">
              {words.map(({ word, i }) => (
                <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                  <motion.span
                    className={`inline-block ${word === site.headlineAccent ? "text-accent" : ""} ${li === 1 ? "text-paper/55" : ""}`}
                    initial={{ y: "105%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.1, ease, delay: 0.3 + i * 0.05 }}
                  >
                    {word}
                  </motion.span>
                  {" "}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 + lastWord * 0.05 }}
            className="max-w-[46ch] text-lg leading-relaxed text-mute lg:text-xl"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.5 + lastWord * 0.05 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-4"
          >
            <Button href="#work">Explore selected work</Button>
            <Button href="#contact" variant="ghost">
              Let&apos;s talk
            </Button>
            {socials.length > 0 && (
              <ul className="flex gap-5 sm:ml-3" aria-label="Profiles">
                {socials.map((s) => (
                  <li key={s.label}>
                    <TextLink href={s.href}>{s.label}</TextLink>
                  </li>
                ))}
              </ul>
            )}
            {site.availability.enabled && (
              <AvailabilityDot label={site.availability.label} className="basis-full text-sm text-mute" />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
