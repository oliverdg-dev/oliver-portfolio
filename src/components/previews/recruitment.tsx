import { Check, Flag, Inbox, LayoutDashboard, Lock, MessageSquareText, Users } from "lucide-react";
import { Bar, Pill, WindowChrome } from "./frame";

const rows = [
  { role: "Executive Assistant", status: "Shortlist sent", tone: "accent" as const },
  { role: "Bookkeeper", status: "Shortlisting", tone: "neutral" as const },
  { role: "Customer Support", status: "Client feedback", tone: "neutral" as const },
  { role: "Project Coordinator", status: "New request", tone: "muted" as const },
  { role: "Marketing Assistant", status: "New request", tone: "muted" as const },
];

const nav = [
  { icon: Inbox, label: "Requests", active: true },
  { icon: Users, label: "Shortlists" },
  { icon: MessageSquareText, label: "Feedback" },
  { icon: LayoutDashboard, label: "Dashboard" },
];

export function RecruitmentPreview() {
  return (
    <div className="relative h-full p-4 sm:p-8">
      <WindowChrome path="/admin/requests">
        <div className="flex h-full text-paper">
          <aside className="hidden w-[28%] shrink-0 flex-col gap-1 border-r border-line p-3 sm:flex">
            <div className="mb-3 flex items-center gap-2 text-[10px] text-mute">
              <Lock className="size-3 text-accent" aria-hidden /> Staff area
            </div>
            {nav.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${active ? "bg-tint/[0.06] text-paper" : "text-dim"}`}
              >
                <Icon className="size-3" aria-hidden /> {label}
              </div>
            ))}
          </aside>
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium tracking-tight sm:text-sm">Requests</p>
              <div className="flex gap-1.5">
                <Pill>All</Pill>
                <Pill tone="muted">Open</Pill>
              </div>
            </div>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {rows.map((r) => (
                <li key={r.role} className="flex items-center gap-3 py-2">
                  <span className="size-1.5 shrink-0 rounded-full bg-tint/20" aria-hidden />
                  <span className="min-w-0 flex-1 truncate text-[10px] text-paper/85 sm:text-[11px]">{r.role}</span>
                  <Bar w="18%" className="hidden md:block" />
                  <Pill tone={r.tone}>{r.status}</Pill>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </WindowChrome>

      {/* Floating shortlist panel */}
      <div className="absolute bottom-[8%] right-[3%] w-[46%] max-w-64 rounded-lg border border-line-strong bg-ink-3/95 p-3 shadow-2xl backdrop-blur transition-transform duration-700 ease-out-expo group-hover:-translate-y-2 sm:right-[4%]">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium sm:text-[11px]">Private shortlist</p>
          <Lock className="size-3 text-mute" aria-hidden />
        </div>
        <ul className="mt-2 space-y-1.5">
          {["A", "B", "C"].map((c, i) => (
            <li key={c} className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full bg-tint/10 font-mono text-[8px]">{c}</span>
              <Bar w={`${55 - i * 10}%`} />
              <span className="ml-auto flex items-center gap-1 font-mono text-[8px] text-accent sm:text-[9px]">
                <Check className="size-2.5" aria-hidden /> consent
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Test + feature flag chips */}
      <div className="absolute left-[3%] top-[6%] flex flex-col gap-2 sm:left-[2%]">
        <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink/90 px-3 py-1 font-mono text-[9px] backdrop-blur sm:text-[10px]">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden /> 161 tests passing
        </span>
        <span className="hidden items-center gap-2 rounded-full border border-line-strong bg-ink/90 px-3 py-1 font-mono text-[9px] text-mute backdrop-blur sm:inline-flex sm:text-[10px]">
          <Flag className="size-3" aria-hidden /> FEATURE_SHORTLIST
        </span>
      </div>
    </div>
  );
}
