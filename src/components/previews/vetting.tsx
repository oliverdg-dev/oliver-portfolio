import { Filter, Search, Sparkles, Table2, UserCheck } from "lucide-react";
import { Bar, Pill } from "./frame";

const steps = [
  { icon: Search, label: "Discover", meta: "candidate channels" },
  { icon: Filter, label: "Screen", meta: "dedupe · suppression list" },
  { icon: Sparkles, label: "LLM-assisted evaluation", meta: "Claude · OpenAI", accent: true },
  { icon: Table2, label: "Airtable", meta: "centralised tracking" },
  { icon: UserCheck, label: "Human review", meta: "team decides" },
];

const criteria = [
  { label: "Niche fit", w: "82%" },
  { label: "Audience", w: "68%" },
  { label: "Brand safety", w: "90%" },
];

export function VettingPreview() {
  return (
    <div className="grid h-full grid-cols-1 gap-4 p-4 sm:grid-cols-[1.1fr_1fr] sm:gap-6 sm:p-8">
      {/* Pipeline */}
      <ol className="relative flex flex-col justify-between gap-2" aria-label="Pipeline stages">
        <svg aria-hidden className="absolute bottom-6 left-[17px] top-6 h-[calc(100%-3rem)] w-px overflow-visible" preserveAspectRatio="none">
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="var(--color-line-strong)" />
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#c6f35a" strokeDasharray="4 8" className="animate-flow" />
        </svg>
        {steps.map(({ icon: Icon, label, meta, accent }, i) => (
          <li key={label} className="relative flex items-center gap-3">
            <span
              className={`grid size-9 shrink-0 place-items-center rounded-md border bg-ink-2 transition-colors duration-500 ${
                accent ? "border-accent/50 text-accent" : "border-line-strong text-paper/80"
              }`}
            >
              <Icon className="size-4" aria-hidden />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-medium text-paper sm:text-xs">{label}</span>
              <span className="block truncate font-mono text-[9px] text-dim sm:text-[10px]">
                0{i + 1} · {meta}
              </span>
            </span>
          </li>
        ))}
      </ol>

      {/* Evaluation card */}
      <div className="hidden flex-col justify-center sm:flex">
        <div className="rounded-lg border border-line-strong bg-ink-2 p-4 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.9)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-2">
          <div className="flex items-center gap-2">
            <span className="size-7 rounded-full bg-gradient-to-br from-tint/25 to-tint/5" aria-hidden />
            <div className="flex-1 space-y-1.5">
              <Bar w="60%" className="bg-tint/20" />
              <Bar w="35%" />
            </div>
          </div>
          <div className="mt-4 space-y-2.5">
            {criteria.map((c) => (
              <div key={c.label}>
                <div className="flex justify-between font-mono text-[9px] text-mute">
                  <span>{c.label}</span>
                </div>
                <div className="mt-1 h-1 rounded-full bg-tint/[0.06]">
                  <div className="h-1 rounded-full bg-paper/70" style={{ width: c.w }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-line bg-tint/[0.02] p-2.5">
            <p className="flex items-center gap-1.5 font-mono text-[9px] text-accent">
              <Sparkles className="size-3" aria-hidden /> LLM notes
            </p>
            <div className="mt-2 space-y-1.5">
              <Bar w="95%" />
              <Bar w="80%" />
              <Bar w="55%" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Pill tone="accent">Qualified</Pill>
            <span className="font-mono text-[9px] text-mute">awaiting human review</span>
          </div>
        </div>
      </div>
    </div>
  );
}
