/**
 * Site configuration — edit this file to update personal links and settings.
 *
 * Rules:
 * - Leave a URL as an empty string ("") when it is unknown. Empty links are
 *   never rendered, so the site will not show a fake destination.
 * - `siteUrl` should be the final production domain (used for canonical URLs,
 *   Open Graph and the sitemap). Override it with NEXT_PUBLIC_SITE_URL on Vercel.
 */

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Oliver Deniel C. Garcia",
  shortName: "Oliver Garcia",
  monogram: "OG",
  role: "Software Developer",
  focus: "Full-stack · AI integrations · Workflow automation",
  /** Shown in the hero meta row. Set to "" to hide. */
  location: "Philippines",
  email: "oli.deniel.garcia@gmail.com",

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://oliver-garcia.vercel.app",

  headline: ["Engineering software.", "Automating the complex.", "Designing better experiences."],
  intro:
    "I'm a software developer focused on building useful digital products, AI-powered workflows, and polished web experiences. I combine full-stack engineering with practical automation to turn complex processes into reliable, user-friendly solutions.",

  description:
    "Oliver Garcia is a software developer building full-stack products, AI integrations and workflow automation. Computer Science, University of Santo Tomas.",

  availability: {
    /** Toggle the green "available" indicator in the nav and hero. */
    enabled: true,
    label: "Open to new roles & freelance work",
  },

  links: {
    /** Verified from the authenticated GitHub CLI account (oliverdg-dev). */
    github: "https://github.com/oliverdg-dev",
    /** TODO(oliver): add your LinkedIn profile URL. Hidden while empty. */
    linkedin: "",
    /** Optional: URL to a hosted PDF résumé. Hidden while empty. */
    resume: "",
  },
} as const;

/** Social links that actually have a destination. */
export function getSocialLinks(): SocialLink[] {
  const candidates: SocialLink[] = [
    { label: "GitHub", href: site.links.github },
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "Résumé", href: site.links.resume },
  ];
  return candidates.filter((l) => l.href.trim().length > 0);
}

export const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
