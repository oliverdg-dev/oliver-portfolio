import { skillGroups, type Skill } from "@/content/skills";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";

/** Brand colour for hover, lifted to paper when the brand is too dark to read on ink. */
function brandColor(hex: string) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.35 ? "var(--color-paper)" : `#${hex}`;
}

function SkillChip({ skill }: { skill: Skill }) {
  const color = skill.icon ? brandColor(skill.icon.hex) : "#c6f35a";
  return (
    <li
      className="group/chip flex items-center gap-2.5 rounded-full border border-line py-2 pl-2.5 pr-4 text-sm text-paper/85 transition-[border-color,color,background-color] duration-300 hover:border-line-strong hover:bg-tint/[0.03] hover:text-paper"
      style={{ "--brand": color } as React.CSSProperties}
    >
      <span className="grid size-5 place-items-center text-mute transition-colors duration-300 group-hover/chip:text-[var(--brand)]">
        {skill.icon ? (
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
            <path d={skill.icon.path} />
          </svg>
        ) : (
          <span className="font-mono text-[10px] font-medium leading-none" aria-hidden>
            {skill.glyph}
          </span>
        )}
      </span>
      {skill.name}
    </li>
  );
}

export function Skills() {
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);
  return (
    <section id="skills" aria-labelledby="skills-title" className="shell py-24 sm:py-32">
      <SectionHeading
        id="skills-title"
        index="04"
        eyebrow="Toolkit"
        title={
          <>
            Breadth, <span className="serif-accent text-accent">applied.</span>
          </>
        }
        aside={`${total} tools across six disciplines — chosen for the job, not collected for the list.`}
      />

      <div className="mt-16 border-t border-line">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.04}>
            <div className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-6 md:py-10">
              <div className="md:col-span-4">
                <h3 className="flex items-baseline gap-3 text-lg tracking-tight text-paper">
                  <span className="font-mono text-[11px] text-dim">0{i + 1}</span>
                  {group.title}
                </h3>
                <p className="mt-1 pl-8 text-sm text-dim">{group.blurb}</p>
              </div>
              <ul className="flex flex-wrap content-start items-start gap-2 md:col-span-8">
                {group.skills.map((s) => (
                  <SkillChip key={s.name} skill={s} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
