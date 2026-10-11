import { Search } from "lucide-react";
import { Bar } from "./frame";

function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] w-[42%] max-w-44 rounded-[1.4rem] border border-line-strong bg-ink-2 p-1.5 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] transition-transform duration-700 ease-out-expo ${className}`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.05rem] bg-ink-3 px-2.5 pb-2 pt-5">
        <span className="absolute left-1/2 top-1.5 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black" aria-hidden />
        {children}
      </div>
    </div>
  );
}

const pantry = ["Rice", "Egg", "Tomato"];
const recipes = [
  { tone: "from-[#3a3420] to-[#1c1a12]", w: "70%" },
  { tone: "from-[#22301f] to-[#121810]", w: "55%" },
  { tone: "from-[#3a2620] to-[#1c1412]", w: "64%" },
];

export function MealconomyPreview() {
  return (
    <div className="flex h-full items-center justify-center gap-4 p-4 sm:gap-6 sm:p-6">
      <Phone className="-rotate-3 group-hover:-rotate-6">
        <p className="text-[10px] font-medium leading-tight">What&apos;s in your pantry?</p>
        <div className="mt-2 flex items-center gap-1 rounded-md bg-tint/[0.06] px-1.5 py-1">
          <Search className="size-2.5 text-dim" aria-hidden />
          <Bar w="50%" />
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {pantry.map((p) => (
            <span key={p} className="rounded-full bg-accent/15 px-1.5 py-0.5 font-mono text-[7px] text-accent">
              {p}
            </span>
          ))}
        </div>
        <p className="mt-3 font-mono text-[7px] uppercase tracking-wider text-dim">Budget</p>
        <div className="relative mt-1.5 h-1 rounded-full bg-tint/10">
          <div className="h-1 w-[45%] rounded-full bg-accent" />
          <span className="absolute left-[45%] top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink-3 bg-paper" />
        </div>
        <p className="mt-3 font-mono text-[7px] uppercase tracking-wider text-dim">Diet</p>
        <div className="mt-1 flex flex-wrap gap-1">
          {["Vegetarian", "Any"].map((d, i) => (
            <span
              key={d}
              className={`rounded-full border px-1.5 py-0.5 font-mono text-[7px] ${i === 0 ? "border-paper/50 text-paper" : "border-line text-dim"}`}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="mt-auto rounded-md bg-paper py-1 text-center text-[8px] font-medium text-ink">Find meals</div>
      </Phone>

      <Phone className="translate-y-4 rotate-3 group-hover:rotate-6">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium">Meals for you</p>
          <span className="flex items-center gap-1 font-mono text-[7px] text-accent">
            <span className="size-1 animate-blink rounded-full bg-accent" aria-hidden />
            live
          </span>
        </div>
        <ul className="mt-2 flex flex-col gap-1.5">
          {recipes.map((r, i) => (
            <li key={i} className="flex gap-1.5 rounded-md bg-tint/[0.04] p-1">
              <span className={`size-7 shrink-0 rounded bg-gradient-to-br ${r.tone}`} aria-hidden />
              <span className="flex flex-1 flex-col justify-center gap-1">
                <Bar w={r.w} className="bg-tint/20" />
                <Bar w="40%" />
              </span>
            </li>
          ))}
        </ul>
      </Phone>
    </div>
  );
}
