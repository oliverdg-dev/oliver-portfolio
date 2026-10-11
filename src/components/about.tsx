import Image from "next/image";
import { education } from "@/content/experience";
import { site } from "@/content/site";
import portrait from "../../public/images/oliver-garcia.jpg";
import { Reveal } from "@/components/reveal";

const timeline = [
  {
    when: "Education",
    what: education.degree,
    where: `${education.school}, ${education.specialization}`,
    extra: "Thesis: SpeakUP, DQN vs PPO for real-time interview feedback",
  },
  { when: "Nov 2023 to present", what: "Developer & Automation", where: "Dences LLC" },
  { when: "Jan to Apr 2026", what: "Software Development Intern", where: "Amdocs Philippines" },
];

const principles = [
  { title: "Engineering", body: "Full-stack applications with authentication, data models, tests and real deployments." },
  {
    title: "Automation",
    body: "AI integrations and pipelines that take repetitive work off people's plates, with humans kept in the loop where it matters.",
  },
  { title: "Craft", body: "Interfaces that feel considered, because the details are what make software trustworthy." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="shell py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="max-w-sm lg:col-span-4 lg:max-w-none">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-ink-2 lg:sticky lg:top-24">
            <Image
              src={portrait}
              alt={`Portrait of ${site.name}`}
              placeholder="blur"
              sizes="(min-width: 1024px) 30vw, 384px"
              className="h-full w-full object-cover object-[50%_20%] grayscale-[35%] transition-[filter,transform] duration-[1.2s] ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <p className="eyebrow mb-8">About</p>
            <h2 id="about-title" className="sr-only">
              About Oliver
            </h2>
            <p className="text-[clamp(1.6rem,3.2vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.03em] text-paper/45">
              I studied <span className="text-paper">Computer Science at the University of Santo Tomas</span>. I build
              where engineering meets <span className="text-accent">practical outcomes</span>:{" "}
              <span className="text-paper">full-stack applications, AI integrations and workflow automation</span> that
              make operations simpler and stay <span className="text-paper">maintainable</span> after launch.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
            <Reveal>
              <h3 className="mb-6 text-sm font-medium text-paper">Path so far</h3>
              <ol className="flex flex-col gap-8 border-l border-line-strong pl-6">
                {timeline.map((t) => (
                  <li key={t.what}>
                    <p className="text-sm text-dim">{t.when}</p>
                    <p className="mt-1 text-base text-paper">{t.what}</p>
                    <p className="text-sm text-mute">{t.where}</p>
                    {t.extra && (
                      <a href="#speakup-title" className="link-underline mt-2 inline-block text-sm text-accent">
                        {t.extra}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mb-6 text-sm font-medium text-paper">How I work</h3>
              <dl className="flex flex-col gap-7">
                {principles.map((p) => (
                  <div key={p.title}>
                    <dt className="text-base text-paper">{p.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-mute">{p.body}</dd>
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
