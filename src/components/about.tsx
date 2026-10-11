import Image from "next/image";
import { education } from "@/content/experience";
import { site } from "@/content/site";
import portrait from "../../public/images/oliver-garcia.jpg";
import { Reveal } from "@/components/reveal";

const timeline = [
  {
    when: "Education",
    what: education.degree,
    where: `${education.school} · ${education.specialization}`,
    extra: "Thesis — SpeakUP: DQN vs PPO for real-time interview feedback",
  },
  { when: "Nov 2023 →", what: "Developer & Automation", where: "Dences LLC" },
  { when: "Jan–Apr 2026", what: "Software Development Intern", where: "Amdocs Philippines" },
];

const principles = [
  { title: "Engineering", body: "Full-stack applications with authentication, data models, tests and real deployments." },
  { title: "Automation", body: "AI integrations and pipelines that take repetitive work off people's plates — with humans kept in the loop where it matters." },
  { title: "Craft", body: "Interfaces that feel considered, because the details are what make software trustworthy." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="shell py-24 sm:py-32">
      <div className="grid gap-16 border-t border-line pt-6 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-8 lg:col-span-3">
          <p className="eyebrow">
            <span className="text-accent">02</span> <span className="mx-2 text-dim">/</span> About
          </p>
          <Reveal className="max-w-xs lg:sticky lg:top-24 lg:max-w-none">
            <figure className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-ink-2">
                <Image
                  src={portrait}
                  alt={`Portrait of ${site.name}`}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 22vw, 320px"
                  className="h-full w-full object-cover object-[50%_20%] grayscale-[35%] transition-[filter,transform] duration-[1.2s] ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                <span>{site.shortName}</span>
                <span>UST · BS CS</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <Reveal>
            <h2 id="about-title" className="sr-only">
              About Oliver
            </h2>
            <p className="text-[clamp(1.6rem,3.4vw,3rem)] font-medium leading-[1.12] tracking-[-0.03em] text-paper/45">
              I studied <span className="text-paper">Computer Science at the University of Santo Tomas</span>, and I
              build at the point where engineering meets{" "}
              <span className="serif-accent text-accent">practical outcomes</span> —{" "}
              <span className="text-paper">full-stack applications, AI integrations and workflow automation</span> that
              make operations measurably simpler, and stay{" "}
              <span className="text-paper">maintainable</span> after launch.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <Reveal>
              <h3 className="eyebrow mb-6">Path so far</h3>
              <ol className="relative border-l border-line">
                {timeline.map((t, i) => (
                  <li key={t.what} className="relative pb-8 pl-6 last:pb-0">
                    <span
                      aria-hidden
                      className={`absolute -left-[4.5px] top-1.5 size-2 rounded-full ${
                        i === timeline.length - 1 ? "bg-accent" : "border border-line-strong bg-ink"
                      }`}
                    />
                    <p className="font-mono text-[11px] text-dim">{t.when}</p>
                    <p className="mt-1 text-base text-paper">{t.what}</p>
                    <p className="text-sm text-mute">{t.where}</p>
                    {"extra" in t && t.extra && (
                      <a
                        href="#speakup-title"
                        className="link-underline mt-1.5 inline-block font-mono text-[11px] text-accent"
                      >
                        {t.extra}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="eyebrow mb-6">How I work</h3>
              <dl className="divide-y divide-line border-y border-line">
                {principles.map((p, i) => (
                  <div key={p.title} className="grid grid-cols-[2.5rem_1fr] gap-2 py-5">
                    <span className="font-mono text-xs text-dim" aria-hidden>
                      0{i + 1}
                    </span>
                    <div>
                      <dt className="text-base text-paper">{p.title}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-mute">{p.body}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
