import { ArrowUpRight } from "lucide-react";
import { getSocialLinks, site } from "@/content/site";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { AvailabilityDot, Button, TextLink } from "@/components/ui";

export function Contact() {
  const socials = getSocialLinks();
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="absolute -bottom-1/3 left-1/2 -z-10 size-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_8%,transparent),transparent_60%)]"
      />
      <Spotlight className="-z-10" />

      <div className="shell py-24 sm:py-36">
        <p className="eyebrow">Contact</p>

        <Reveal>
          <h2 id="contact-title" className="display mt-10 max-w-[14ch] text-[clamp(3rem,9vw,9rem)]">
            Let&apos;s build something <span className="text-accent">useful.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5" delay={0.1}>
            <p className="text-lg leading-relaxed text-mute">
              Have a product idea, a development opportunity, or a workflow that could be better? I&apos;d love to
              hear about it.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-paper">
              {site.availability.enabled && <AvailabilityDot label={site.availability.label} />}
              {site.location && <p className="text-mute">Based in the {site.location}.</p>}
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.2}>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between gap-4 border-b border-line-strong pb-5 transition-colors hover:border-accent"
            >
              <span className="break-all text-[clamp(1.25rem,3.4vw,2.75rem)] font-medium tracking-[-0.03em] transition-colors group-hover:text-accent">
                {site.email}
              </span>
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-500 ease-out-expo group-hover:rotate-45 sm:size-14">
                <ArrowUpRight className="size-5" aria-hidden />
              </span>
            </a>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={`mailto:${site.email}?subject=${encodeURIComponent("Hello Oliver")}`}>Let&apos;s talk</Button>
              <CopyEmail email={site.email} />
            </div>
            {socials.length > 0 && (
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3" aria-label="Profiles">
                {socials.map((s) => (
                  <li key={s.label}>
                    <TextLink href={s.href} className="text-base">
                      {s.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
