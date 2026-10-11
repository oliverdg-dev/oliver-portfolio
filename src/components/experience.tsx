import { achievements, experience } from "@/content/experience";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="shell py-24 sm:py-32">
      <SectionHeading
        id="experience-title"
        index="03"
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="serif-accent text-accent">shipped.</span>
          </>
        }
      />

      <ol className="mt-16 border-t border-line">
        {experience.map((job, i) => (
          <li key={job.company} className="border-b border-line">
            <Reveal delay={i * 0.05} className="grid gap-6 py-10 transition-colors duration-500 hover:bg-tint/[0.015] md:grid-cols-12 md:gap-6 md:py-12">
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-dim">
                  <time dateTime={job.start}>{job.period.split(" — ")[0]}</time> —{" "}
                  {job.current ? (
                    <span className="text-accent">Present</span>
                  ) : (
                    <time dateTime={job.end}>{job.period.split(" — ")[1]}</time>
                  )}
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{job.company}</h3>
                <p className="mt-1 text-mute">{job.role}</p>
              </div>
              <ul className="flex flex-col gap-3 md:col-span-7 md:col-start-6">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 leading-relaxed text-paper/85">
                    <span className="mt-[0.75em] h-px w-3 shrink-0 bg-line-strong" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Achievements */}
      <div className="mt-20 grid gap-8 md:grid-cols-12">
        <h3 className="eyebrow md:col-span-4">Recognition</h3>
        <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 md:col-span-8">
          {achievements.map((a, i) => (
            <li key={a.title} className="bg-ink">
              <Reveal delay={i * 0.08} className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden p-6 sm:p-8">
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,rgb(198_243_90/0.12),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <span className="serif-accent text-5xl text-accent sm:text-6xl">{a.distinction}</span>
                <span className="text-lg leading-snug text-paper">{a.title}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
