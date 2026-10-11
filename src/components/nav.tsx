"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import avatar from "../../public/images/oliver-garcia-avatar.jpg";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, site } from "@/content/site";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Motion's scroll value is batched per frame; state only flips at the threshold.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    setScrolled((prev) => (prev === next ? prev : next));
    // Above the first section nothing is "current", so clear the highlight.
    if (y < window.innerHeight * 0.5) setActive((prev) => (prev === "" ? prev : ""));
  });

  useEffect(() => {

    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open ? "border-b border-line bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${site.shortName}, back to top`}>
          <span className="relative shrink-0">
            <Image
              src={avatar}
              alt=""
              width={36}
              height={36}
              priority
              className="size-9 rounded-full border border-line-strong object-cover transition-[border-color,transform] duration-500 ease-out-expo group-hover:scale-105 group-hover:border-accent"
            />
            {site.availability.enabled && (
              <span
                aria-hidden
                className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-ink bg-accent"
              />
            )}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm tracking-tight transition-colors group-hover:text-accent">{site.shortName}</span>
            <span className="text-xs text-dim">
              {site.role}
              <span className="hidden lg:inline"> · AI &amp; Automation</span>
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-line bg-ink-2/60 p-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={`relative z-10 block rounded-full px-4 py-1.5 text-[13px] transition-colors duration-300 ${
                  active === item.id ? "text-ink" : "text-mute hover:text-paper"
                }`}
              >
                {item.label}
              </a>
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-paper"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${site.email}`}
            className="hidden h-9 items-center rounded-full border border-line-strong px-4 text-[13px] transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="relative grid size-10 place-items-center rounded-full border border-line-strong lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              aria-hidden
              className={`absolute h-px w-4 bg-paper transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[3px]"}`}
            />
            <span
              aria-hidden
              className={`absolute h-px w-4 bg-paper transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[3px]"}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100svh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="shell flex flex-col gap-1 pt-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-4xl tracking-tight transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="shell mt-8">
              <a href={`mailto:${site.email}`} className="text-mute">
                {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
