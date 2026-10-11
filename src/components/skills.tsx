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
      <SectionHeading id="skills-title" title="Tools I work with" aside={`${total} tools across six areas.`} />

      {/* Groups flow in balanced columns instead of ruled rows. */}
      <div className="mt-16 gap-x-14 md:columns-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={(i % 2) * 0.06} className="mb-12 break-inside-avoid">
            <h3 className="mb-4 text-lg tracking-tight text-paper">{group.title}</h3>
            <ul className="flex flex-wrap content-start items-start gap-2">
              {group.skills.map((s) => (
                <SkillChip key={s.name} skill={s} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
