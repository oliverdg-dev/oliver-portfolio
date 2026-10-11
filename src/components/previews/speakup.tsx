import { Mic } from "lucide-react";
import { Bar, Pill } from "./frame";

const feedback = [
  { label: "Confidence", w: "72%" },
  { label: "Clarity", w: "84%" },
  { label: "Pace", w: "58%" },
  { label: "Tone", w: "66%" },
];

/** Deterministic mic level bars (no randomness → no hydration mismatch). */
const levels = Array.from({ length: 20 }, (_, i) => 0.3 + 0.7 * Math.abs(Math.sin(i * 0.9 + 0.4)));

export function SpeakupPreview() {
  return (
    <div className="grid h-full grid-cols-1 gap-4 p-4 sm:grid-cols-[1.25fr_1fr] sm:gap-5 sm:p-8">
      {/* Interview scene */}
      <div className="flex flex-col justify-between rounded-lg border border-line-strong bg-ink-2 p-4">
        <div className="flex items-center justify-between">
          <Pill tone="muted">Technical · Senior</Pill>
          <span className="font-mono text-[9px] text-dim">Q 3 / 5</span>
        </div>
        <div className="my-4 space-y-2">
          <p className="font-mono text-[9px] uppercase tracking-wider text-mute">Interviewer</p>
          <Bar w="92%" className="h-2 bg-tint/25" />
          <Bar w="70%" className="h-2 bg-tint/25" />
        </div>
        <div className="flex items-center gap-3 rounded-md border border-line bg-tint/[0.02] p-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-accent-ink">
            <Mic className="size-4" aria-hidden />
          </span>
          <div className="flex h-7 flex-1 items-center gap-[3px]" aria-hidden>
            {levels.map((h, i) => (
              <span
                key={i}
                className="w-full animate-[wave_1.4s_ease-in-out_infinite] rounded-full bg-paper/60"
                style={{ height: `${h * 100}%`, animationDelay: `${(i % 8) * -0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Adaptive feedback */}
      <div className="flex flex-col justify-center gap-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="flex-1 rounded-md border border-accent/50 bg-accent/10 py-1.5 text-center font-mono text-[10px] text-accent">
            DQN
          </span>
          <span className="flex-1 rounded-md border border-line-strong py-1.5 text-center font-mono text-[10px] text-paper/80">
            PPO
          </span>
        </div>
        <div className="rounded-lg border border-line-strong bg-ink-2 p-3.5 transition-transform duration-700 ease-out-expo group-hover:-translate-y-2">
          <p className="font-mono text-[9px] uppercase tracking-wider text-mute">Real-time feedback</p>
          <div className="mt-3 space-y-2.5">
            {feedback.map((f) => (
              <div key={f.label}>
                <p className="font-mono text-[9px] text-mute">{f.label}</p>
                <div className="mt-1 h-1 rounded-full bg-tint/[0.06]">
                  <div className="h-1 rounded-full bg-paper/70" style={{ width: f.w }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
