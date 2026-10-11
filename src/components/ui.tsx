import { ArrowRight, ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

/** Pill CTA with a sliding arrow. Renders an <a>; internal anchors scroll smoothly via CSS. */
export function Button({ href, children, variant = "primary", external, className = "" }: ButtonProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const base =
    "group/btn relative inline-flex h-12 items-center gap-3 overflow-hidden rounded-full pl-6 pr-2 text-sm font-medium tracking-tight transition-[background-color,border-color,color,transform] duration-300 active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-ink hover:bg-paper"
      : "border border-line-strong text-paper hover:border-paper/60 hover:bg-tint/[0.04]";
  const bubble =
    variant === "primary" ? "bg-accent-ink text-accent" : "bg-tint/[0.08] text-paper group-hover/btn:bg-paper group-hover/btn:text-ink";

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <span
        className={`relative grid size-8 place-items-center overflow-hidden rounded-full transition-colors duration-300 ${bubble}`}
        aria-hidden
      >
        <Icon className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-6" />
        <Icon className="absolute size-4 -translate-x-6 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-0" />
      </span>
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

/** Small external text link with an arrow, used for repo / demo / social links. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={`group/link inline-flex items-center gap-1.5 text-sm text-paper ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="link-underline">{children}</span>
      <ArrowUpRight
        aria-hidden
        className="size-3.5 text-mute transition-[transform,color] duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent"
      />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

/** Section header: one focused headline, optional body stacked underneath. No kicker labels. */
export function SectionHeading({
  title,
  aside,
  id,
}: {
  title: React.ReactNode;
  aside?: React.ReactNode;
  id: string;
}) {
  return (
    <header className="max-w-4xl">
      <h2 id={id} className="display text-[clamp(2.5rem,6vw,5.5rem)]">
        {title}
      </h2>
      {aside && <div className="mt-6 max-w-[60ch] text-base leading-relaxed text-mute">{aside}</div>}
    </header>
  );
}

export function AvailabilityDot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex size-2" aria-hidden>
        <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
        <span className="relative size-2 rounded-full bg-accent" />
      </span>
      {label}
    </span>
  );
}
