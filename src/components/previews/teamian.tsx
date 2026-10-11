import { Bell, CalendarDays, GraduationCap, Lock } from "lucide-react";
import { Bar, Pill, WindowChrome } from "./frame";

const roles = ["Student", "Teacher", "Admin"];
const eventDays = new Set([4, 11, 15, 22, 27]);

export function TeamianPreview() {
  return (
    <div className="h-full p-4 sm:p-6">
      <WindowChrome path="teamian / dashboard">
        <div className="flex h-full flex-col p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-2 text-[11px] font-medium sm:text-xs">
              <GraduationCap className="size-3.5 text-accent" aria-hidden /> Teamian
            </p>
            <div className="flex gap-1">
              {roles.map((r, i) => (
                <Pill key={r} tone={i === 2 ? "accent" : "muted"}>
                  {r}
                </Pill>
              ))}
            </div>
          </div>
          <div className="mt-3 grid min-h-0 flex-1 grid-cols-[1.2fr_1fr] gap-3">
            <div className="rounded-md border border-line p-2.5">
              <p className="flex items-center gap-1.5 font-mono text-[9px] text-mute">
                <Bell className="size-3" aria-hidden /> Announcements
              </p>
              <ul className="mt-2.5 space-y-2.5">
                {[70, 85, 60].map((w, i) => (
                  <li key={i} className="space-y-1">
                    <Bar w={`${w}%`} className="bg-tint/20" />
                    <Bar w={`${w - 25}%`} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-line p-2.5">
              <p className="flex items-center gap-1.5 font-mono text-[9px] text-mute">
                <CalendarDays className="size-3" aria-hidden /> Events
              </p>
              <div className="mt-2 grid max-w-36 grid-cols-7 gap-[3px]" aria-hidden>
                {Array.from({ length: 28 }, (_, d) => (
                  <span
                    key={d}
                    className={`aspect-square rounded-[2px] ${eventDays.has(d) ? "bg-accent/80" : "bg-tint/[0.06]"}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 flex items-center gap-1.5 font-mono text-[9px] text-dim">
            <Lock className="size-3" aria-hidden /> Signed in · role-based access
          </p>
        </div>
      </WindowChrome>
    </div>
  );
}
