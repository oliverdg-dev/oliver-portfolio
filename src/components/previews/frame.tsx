/** Browser-style chrome shared by the illustrative previews. */
export function WindowChrome({ path, children }: { path: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-line-strong bg-ink-2 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-tint/15" />
          <span className="size-2 rounded-full bg-tint/15" />
          <span className="size-2 rounded-full bg-tint/15" />
        </div>
        <div className="mx-auto w-1/2 truncate rounded-md bg-tint/[0.04] px-3 py-1 text-center font-mono text-[9px] text-dim sm:text-[10px]">
          {path}
        </div>
        <span className="w-8" aria-hidden />
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

export function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "accent" | "muted" }) {
  const tones = {
    neutral: "border-line-strong text-paper/80",
    accent: "border-accent/40 bg-accent/10 text-accent",
    muted: "border-line text-dim",
  };
  return (
    <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-2 py-0.5 font-mono text-[9px] leading-none sm:text-[10px] ${tones[tone]}`}>
      {children}
    </span>
  );
}

/** Placeholder text bar — keeps previews abstract instead of inventing content. */
export function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <span aria-hidden className={`block h-1.5 rounded-full bg-tint/10 ${className}`} style={{ width: w }} />;
}
