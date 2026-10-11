"use client";

import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";


export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode) — theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className={`group grid size-9 place-items-center rounded-full border border-line-strong text-paper transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      <Moon aria-hidden className="theme-icon-moon size-4 transition-transform duration-500 ease-out-expo group-hover:-rotate-12" />
      <Sun aria-hidden className="theme-icon-sun size-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
    </button>
  );
}
