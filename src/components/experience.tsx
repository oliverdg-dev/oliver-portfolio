import { achievements, experience } from "@/content/experience";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="shell py-24 sm:py-32">
      <SectionHeading id="experience-title" title="Experience" />

      {/* Roles side by side: one column per role, no row rules. */}
      <ol className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10 lg:gap-16">
        {experience.map((job, i) => (
          <li key={job.company}>
            <Reveal delay={i * 0.08} className="flex h-full flex-col gap-6 border-t border-line-strong pt-8">
              <div>
                <p className="text-sm text-dim">
                  <time dateTime={job.start}>{job.startLabel}</time> to{" "}
                  {job.current ? (
                    <span className="text-accent">{job.endLabel}</span>
                  ) : (
                    <time dateTime={job.end}>{job.endLabel}</time>
                  )}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{job.company}</h3>
                <p className="mt-1 text-mute">{job.role}</p>
              </div>
              <ul className="flex flex-col gap-3 leading-relaxed text-paper/85">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Recognition: two large statements, not cards. */}
      <div className="mt-24">
        <h3 className="mb-8 text-sm font-medium text-paper">Recognition</h3>
        <ul className="grid gap-10 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={i * 0.08} className="flex flex-col gap-3">
                <span className="text-[clamp(3rem,7vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-accent">
                  {a.distinction}
                </span>
                <span className="text-lg leading-snug text-paper">{a.title}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
