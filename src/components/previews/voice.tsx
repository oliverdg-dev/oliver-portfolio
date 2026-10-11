import { AudioLines, GitBranch, Plug, ShieldCheck } from "lucide-react";

/** Deterministic bar heights for the waveform (no Math.random → no hydration mismatch). */
const bars = Array.from({ length: 36 }, (_, i) => 0.25 + 0.75 * Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.23)));

const outputs = [
  { icon: GitBranch, label: "Workflows" },
  { icon: Plug, label: "Integrations" },
  { icon: ShieldCheck, label: "Testing & docs" },
];

export function VoicePreview() {
  return (
    <div className="flex h-full flex-col justify-center gap-6 p-4 sm:p-8">
      <div className="grid grid-cols-[1fr_auto_1.15fr] items-center gap-2.5 sm:grid-cols-[1fr_auto_1fr] sm:gap-6">
        {/* Voice input */}
        <div className="flex h-24 min-w-0 items-center gap-[2px] sm:h-32 sm:gap-[3px]" aria-hidden>
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-full origin-center animate-[wave_1.6s_ease-in-out_infinite] rounded-full bg-paper/60"
              style={{ height: `${h * 100}%`, animationDelay: `${(i % 12) * -0.13}s` }}
            />
          ))}
        </div>

        {/* Agent core */}
        <div className="relative grid size-16 place-items-center sm:size-32" aria-hidden>
          <span className="absolute inset-0 rounded-full border border-line-strong" />
          <span className="absolute inset-[14%] rounded-full border border-line" />
          <span className="absolute inset-[14%] animate-[spin_14s_linear_infinite] rounded-full border border-dashed border-accent/40" />
          <span className="absolute inset-[30%] rounded-full bg-[radial-gradient(circle,rgb(198_243_90/0.45),transparent_70%)] transition-transform duration-700 group-hover:scale-125" />
          <AudioLines className="relative size-6 text-accent" />
        </div>

        {/* Outputs */}
        <ul className="flex min-w-0 flex-col gap-2">
          {outputs.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-md border border-line bg-ink-2 px-2.5 py-2 text-[10px] text-paper/85 sm:text-[11px]"
            >
              <Icon className="size-3.5 shrink-0 text-mute" aria-hidden />
              <span className="truncate">{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between border-t border-line pt-4 font-mono text-[9px] text-dim sm:text-[10px]">
        <span>voice in → agent → workflows</span>
        <span className="text-accent">+35% efficiency (documented)</span>
      </div>
    </div>
  );
}
