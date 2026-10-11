import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { featuredProjects, moreProjects, type Project } from "@/content/projects";
import { FlowPanel } from "@/components/flow-panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading, TextLink } from "@/components/ui";

/* Shape rule for this section: surfaces use rounded-xl (12px), anything
   interactive or tag-like is a full pill. */

/** Real screenshots, layered: the main shot plus an offset overlay that lifts on hover. */
function ScreenStack({ screens }: { screens: NonNullable<Project["screens"]> }) {
  const [main, overlay] = screens;
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-ink-2 px-4 py-8 sm:px-12 sm:py-14 lg:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 top-0 size-[80%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_9%,transparent),transparent_65%)]"
      />
      <div className="relative w-[90%] overflow-hidden rounded-lg border border-line-strong shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] transition-transform duration-[1.2s] ease-out-expo group-hover:-translate-y-1 sm:w-[78%]">
        <Image src={main.src} alt={main.alt} width={main.width} height={main.height} sizes="(min-width: 1024px) 60vw, 90vw" className="h-auto w-full" />
      </div>
      {overlay && (
        <div className="relative -mt-[18%] ml-auto w-[62%] overflow-hidden rounded-lg border border-line-strong shadow-[0_40px_80px_-20px_rgb(0_0_0/0.7)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-3 sm:-mt-[24%] sm:w-[52%]">
          <Image src={overlay.src} alt={overlay.alt} width={overlay.width} height={overlay.height} sizes="(min-width: 1024px) 40vw, 62vw" className="h-auto w-full" />
        </div>
      )}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const extra = project.extraLinks ?? [];
  if (!project.repoUrl && !project.liveUrl && extra.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {project.repoUrl && <TextLink href={project.repoUrl}>{project.repoLabel ?? "View repository"}</TextLink>}
      {project.liveUrl && <TextLink href={project.liveUrl}>Live demo</TextLink>}
      {extra.map((l) => (
        <TextLink key={l.href} href={l.href}>
          {l.label}
        </TextLink>
      ))}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-mute">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
      <GraduationCap className="size-3.5" aria-hidden />
      {label}
    </span>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-2.5 text-sm leading-snug text-paper/85 sm:grid-cols-2">
      {items.map((h) => (
        <li key={h}>{h}</li>
      ))}
    </ul>
  );
}

/** Secondary verified results (the first one is shown large in the panel). */
function MoreResults({ results }: { results: Project["results"] }) {
  if (results.length === 0) return null;
  return (
    <dl className="flex flex-wrap gap-x-10 gap-y-4">
      {results.map((r) => (
        <div key={r.label} className="flex flex-col-reverse gap-1">
          <dt className="text-sm text-mute">{r.label}</dt>
          <dd className="text-3xl font-medium tracking-[-0.03em]">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectTitle({ project, size = "lg" }: { project: Project; size?: "lg" | "md" }) {
  return (
    <div>
      {project.badge && (
        <div className="mb-4">
          <Badge label={project.badge} />
        </div>
      )}
      <h3
        id={`${project.slug}-title`}
        className={`font-medium leading-[1.05] tracking-[-0.035em] ${
          size === "lg" ? "text-[clamp(2rem,3.4vw,3rem)]" : "text-[clamp(1.6rem,2.4vw,2.1rem)]"
        }`}
      >
        {project.title}
      </h3>
      {project.context && <p className="mt-2 text-sm text-dim">{project.context}</p>}
    </div>
  );
}

/** Layout A: panel and text side by side. Used at most twice in a row. */
function SplitCase({ project, flip }: { project: Project; flip: boolean }) {
  const [headline, ...rest] = project.results;
  return (
    <article aria-labelledby={`${project.slug}-title`} className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <FlowPanel flow={project.flow} metric={headline} label={`${project.title} workflow`} />
      </Reveal>
      <Reveal delay={0.1} className={`flex flex-col gap-7 lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <ProjectTitle project={project} />
        <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed text-mute">{project.description}</p>
        <MoreResults results={rest} />
        <Highlights items={project.highlights} />
        <div className="flex flex-col gap-5">
          <Tags tags={project.tags} />
          <ProjectLinks project={project} />
        </div>
      </Reveal>
    </article>
  );
}

/** Layout B: full-width visual with the text stacked below in two columns. */
function WideCase({ project }: { project: Project }) {
  return (
    <article aria-labelledby={`${project.slug}-title`} className="group flex flex-col gap-10">
      <Reveal>
        {project.screens?.length ? (
          <ScreenStack screens={project.screens} />
        ) : (
          <FlowPanel flow={project.flow} metric={project.results[0]} label={`${project.title} workflow`} />
        )}
      </Reveal>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="flex flex-col gap-6 lg:col-span-7">
          <ProjectTitle project={project} />
          <p className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-mute">{project.description}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-5 lg:pt-2">
          <Highlights items={project.highlights} />
          {project.note && <p className="text-xs leading-relaxed text-dim">{project.note}</p>}
          <Tags tags={project.tags} />
          <ProjectLinks project={project} />
        </Reveal>
      </div>
    </article>
  );
}

/** Layout C: asymmetric bento. Spans alternate wide/narrow so rows never mirror. */
const bentoSpans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4"];
const bentoSurfaces = [
  "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-accent)_12%,var(--color-ink-2)),var(--color-ink-2)_70%)]",
  "bg-ink-3",
  "bg-ink-2",
  "bg-[linear-gradient(225deg,color-mix(in_srgb,var(--color-accent)_7%,var(--color-ink-2)),var(--color-ink-2)_65%)]",
];

function BentoTile({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08} className={`${bentoSpans[index % 4]} md:col-span-1`}>
      <article
        aria-labelledby={`${project.slug}-title`}
        className={`group flex h-full flex-col justify-between gap-10 rounded-xl border border-line p-6 sm:p-8 ${bentoSurfaces[index % 4]}`}
      >
        <FlowPanel flow={project.flow} metric={project.results[0]} size="tile" label={`${project.title} workflow`} />
        <div className="flex flex-col gap-5">
          <ProjectTitle project={project} size="md" />
          <p className="max-w-[56ch] leading-relaxed text-mute">{project.summary}</p>
          {project.note && <p className="text-xs leading-relaxed text-dim">{project.note}</p>}
          <Tags tags={project.tags} />
          <ProjectLinks project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  const splits = featuredProjects.filter((p) => !p.screens?.length);
  const wides = featuredProjects.filter((p) => p.screens?.length);

  return (
    <section id="work" aria-labelledby="work-title" className="shell py-24 sm:py-32">
      <SectionHeading
        id="work-title"
        title="Selected work"
        aside="Production platforms, AI pipelines and automation, built to take manual steps out of real workflows."
      />

      <div className="mt-20 flex flex-col gap-28 sm:mt-24 sm:gap-36">
        {splits.map((p, i) => (
          <SplitCase key={p.slug} project={p} flip={i % 2 === 1} />
        ))}
        {wides.map((p) => (
          <WideCase key={p.slug} project={p} />
        ))}
      </div>

      {moreProjects.length > 0 && (
        <div className="mt-28 grid gap-4 sm:mt-36 md:grid-cols-2 lg:grid-cols-6">
          {moreProjects.map((p, i) => (
            <BentoTile key={p.slug} project={p} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
