import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { featuredProjects, moreProjects, sortedProjects, type Project } from "@/content/projects";
import { previews } from "@/components/previews";
import { Reveal } from "@/components/reveal";
import { SectionHeading, TextLink } from "@/components/ui";

/** Real screenshots, layered: the main shot plus an offset overlay that lifts on hover. */
function ScreenStack({ screens, priority }: { screens: NonNullable<Project["screens"]>; priority: boolean }) {
  const [main, overlay] = screens;
  return (
    <div className="flex h-full flex-col justify-center p-4 sm:p-8">
      <div className="relative w-[88%] overflow-hidden rounded-lg border border-line-strong shadow-[0_40px_80px_-30px_rgb(0_0_0/0.85)] sm:w-[82%]">
        <Image
          src={main.src}
          alt={main.alt}
          width={main.width}
          height={main.height}
          priority={priority}
          sizes="(min-width: 1024px) 48vw, 88vw"
          className="h-auto w-full"
        />
      </div>
      {overlay && (
        <div className="relative -mt-[12%] ml-auto w-[64%] overflow-hidden rounded-lg border border-line-strong shadow-[0_40px_80px_-20px_rgb(0_0_0/0.9)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 sm:w-[58%]">
          <Image
            src={overlay.src}
            alt={overlay.alt}
            width={overlay.width}
            height={overlay.height}
            sizes="(min-width: 1024px) 34vw, 64vw"
            className="h-auto w-full"
          />
        </div>
      )}
    </div>
  );
}

function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  const Preview = previews[project.preview];
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-ink-2 sm:aspect-[16/11]">
      {/* Ambient depth: faint grid + accent wash that intensifies on hover */}
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgb(198_243_90/0.08),transparent_60%)] opacity-60 transition-opacity duration-700 group-hover:opacity-100"
      />
      <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.025]">
        {project.screens?.length ? (
          <ScreenStack screens={project.screens} priority={priority} />
        ) : project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div role="img" aria-label={`Illustrative preview of ${project.title}`} className="h-full pb-8">
            <Preview />
          </div>
        )}
      </div>
      {!project.image && !project.screens?.length && (
        <span className="absolute bottom-3 left-3 rounded-full border border-line bg-ink/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-dim backdrop-blur">
          Illustrative preview
        </span>
      )}
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
      <GraduationCap className="size-3.5" aria-hidden />
      {label}
    </span>
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
        <li key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-mute">
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const number = String(sortedProjects.indexOf(project) + 1).padStart(2, "0");

  return (
    <article aria-labelledby={`${project.slug}-title`} className="group grid gap-8 lg:grid-cols-12 lg:gap-12">
      <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <ProjectVisual project={project} priority={index === 0} />
      </Reveal>

      <Reveal delay={0.1} className={`flex flex-col gap-7 lg:col-span-5 lg:py-4 ${flip ? "lg:order-1" : ""}`}>
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
          <span className="font-mono text-xs text-accent">{number}</span>
          <span className="eyebrow text-right">{project.category}</span>
        </div>

        <div>
          {project.badge && (
            <div className="mb-4">
              <Badge label={project.badge} />
            </div>
          )}
          <h3 id={`${project.slug}-title`} className="text-[clamp(1.9rem,3.2vw,2.9rem)] font-medium leading-[1.02] tracking-[-0.035em]">
            {project.title}
          </h3>
          {project.context && <p className="mt-3 font-mono text-xs text-dim">{project.context}</p>}
        </div>

        <p className="text-[1.0625rem] leading-relaxed text-mute">{project.description}</p>

        {project.results.length > 0 && (
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {project.results.map((r) => (
              <div key={r.label} className="flex flex-col-reverse gap-1 bg-ink p-4 last:odd:col-span-2">
                <dt className="text-xs leading-snug text-mute">{r.label}</dt>
                <dd className="text-2xl font-medium tracking-tight text-paper sm:text-3xl">{r.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="grid gap-x-6 gap-y-2 text-sm text-paper/85 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" aria-hidden />
              {h}
            </li>
          ))}
        </ul>

        {project.note && <p className="border-l border-line-strong pl-3 text-xs leading-relaxed text-dim">{project.note}</p>}

        <div className="mt-auto flex flex-col gap-5">
          <Tags tags={project.tags} />
          <ProjectLinks project={project} />
        </div>
      </Reveal>
    </article>
  );
}

function CompactProject({ project, index }: { project: Project; index: number }) {
  const number = String(sortedProjects.indexOf(project) + 1).padStart(2, "0");
  return (
    <Reveal delay={index * 0.1}>
      <article aria-labelledby={`${project.slug}-title`} className="group flex h-full flex-col gap-6">
        <ProjectVisual project={project} />
        <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <span className="font-mono text-xs text-accent">{number}</span>
          <span className="eyebrow text-right">{project.category}</span>
        </div>
        {project.badge && <Badge label={project.badge} />}
        <h3 id={`${project.slug}-title`} className="text-3xl font-medium tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="leading-relaxed text-mute">{project.description}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-paper/85">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <span className="h-px w-2.5 bg-accent" aria-hidden />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-5">
          <Tags tags={project.tags} />
          <ProjectLinks project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="shell py-24 sm:py-32">
      <SectionHeading
        id="work-title"
        index="01"
        eyebrow="Selected work"
        title={
          <>
            Systems that <span className="serif-accent text-accent">do the work.</span>
          </>
        }
        aside="Production platforms, AI pipelines and automation — built to replace manual steps with something reliable. Previews are illustrative unless a screenshot is shown."
      />

      <div className="mt-20 flex flex-col gap-28 sm:mt-24 sm:gap-36">
        {featuredProjects.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} index={i} />
        ))}
      </div>

      {moreProjects.length > 0 && (
        <div className="mt-32 sm:mt-40">
          <Reveal>
            <p className="eyebrow mb-10 border-t border-line pt-6">More projects</p>
          </Reveal>
          <div className="grid gap-20 md:grid-cols-2 md:gap-10 lg:gap-14">
            {moreProjects.map((p, i) => (
              <CompactProject key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
