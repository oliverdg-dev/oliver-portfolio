import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Pill } from "./frame";

const variants = [
  { name: "Sage", body: "#9fb59a", bg: "from-[#1d2a20] to-[#121614]" },
  { name: "Sand", body: "#d8c3a2", bg: "from-[#2b261d] to-[#151411]" },
  { name: "Slate", body: "#7f8aa3", bg: "from-[#1c2130] to-[#121318]" },
];

/** Simple vector "product" so the preview never implies real client assets. */
function Product({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 80 80" className="h-[68%] w-auto drop-shadow-[0_12px_12px_rgb(0_0_0/0.5)]" aria-hidden>
      <ellipse cx="38" cy="70" rx="22" ry="4" fill="black" opacity="0.35" />
      <path d="M58 30c10 0 10 20 0 20" fill="none" stroke={color} strokeWidth="5" />
      <rect x="16" y="20" width="44" height="50" rx="6" fill={color} />
      <rect x="16" y="20" width="12" height="50" rx="6" fill="white" opacity="0.18" />
      <ellipse cx="38" cy="21" rx="22" ry="4" fill="black" opacity="0.2" />
    </svg>
  );
}

export function ShopifyPreview() {
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-4 sm:p-8">
      <div className="grid grid-cols-[1fr_auto_1.4fr] items-center gap-3 sm:grid-cols-[0.9fr_auto_1.6fr] sm:gap-5">
        {/* Input: product data */}
        <div className="rounded-lg border border-line-strong bg-ink-2 p-3 font-mono text-[9px] leading-relaxed text-mute sm:text-[10px]">
          <p className="mb-2 text-dim">{"// sample product data"}</p>
          <p>
            <span className="text-paper/80">title</span>: &quot;Ceramic Mug&quot;
          </p>
          <p className="hidden sm:block">
            <span className="text-paper/80">type</span>: &quot;Drinkware&quot;
          </p>
          <p>
            <span className="text-paper/80">variants</span>: [
          </p>
          {variants.map((v) => (
            <p key={v.name} className="pl-3">
              &quot;{v.name}&quot;,
            </p>
          ))}
          <p>]</p>
        </div>

        {/* Model step */}
        <div className="flex flex-col items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full border border-accent/50 bg-accent/10 text-accent">
            <Sparkles className="size-4" aria-hidden />
          </span>
          <span className="hidden text-center font-mono text-[9px] leading-tight text-mute sm:block">
            Gemini
            <br />
            OpenAI
          </span>
          <ArrowRight className="size-3.5 text-dim" aria-hidden />
        </div>

        {/* Output: generated variants */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {variants.map((v, i) => (
            <figure
              key={v.name}
              className={`relative grid aspect-[2/1] place-items-center sm:aspect-[3/4] overflow-hidden rounded-md border border-line bg-gradient-to-b ${v.bg} transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Product color={v.body} />
              <figcaption className="absolute bottom-1.5 left-1.5 font-mono text-[8px] text-paper/70 sm:text-[9px]">
                {v.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Publish step */}
      <div className="flex items-center justify-between rounded-lg border border-line bg-ink-2/80 px-3 py-2.5">
        <span className="flex items-center gap-2 text-[10px] text-paper/85 sm:text-[11px]">
          <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-ink">
            <Check className="size-3" aria-hidden />
          </span>
          Published to Shopify listing
        </span>
        <span className="hidden gap-1.5 sm:flex">
          <Pill tone="muted">3 variants</Pill>
          <Pill tone="muted">no manual upload</Pill>
        </span>
      </div>
    </div>
  );
}
