import { Reveal } from "@/components/reveal";

/** Verified outcomes only — each one traces back to a project or role. */
const metrics = [
  { value: "+35%", label: "Documented operational efficiency", source: "Voice AI pipeline · Amdocs" },
  { value: "106→161", label: "Automated tests (+52%)", source: "Recruitment platform" },
  { value: "30", label: "Qualified channels surfaced", source: "Vetting pipeline" },
  { value: "4 people", label: "Daily manual process replaced", source: "Vetting pipeline" },
];

export function Metrics() {
  return (
    <section aria-label="Selected outcomes" className="shell">
      <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal
            key={m.label}
            delay={i * 0.08}
            className={`flex flex-col gap-3 py-8 pr-4 sm:py-10 ${i % 2 === 1 ? "border-l border-line pl-4 sm:pl-8" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
          >
            <dd className="order-1 text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-none tracking-[-0.045em]">
              {m.value}
            </dd>
            <dt className="order-2 flex flex-col gap-3 text-sm leading-snug text-paper/85">
              {m.label}
              <span className="text-xs text-dim">{m.source}</span>
            </dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
