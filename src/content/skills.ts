/**
 * Skills grouped by category. `icon` is a simple-icons export
 * (https://simpleicons.org); brands without an icon use a short typographic `glyph`.
 * No proficiency percentages on purpose.
 */

import type { SimpleIcon } from "simple-icons";
import {
  siAirtable,
  siClaude,
  siCss,
  siDart,
  siDeepseek,
  siDocker,
  siFirebase,
  siFlutter,
  siGoogle,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siMysql,
  siN8n,
  siNeon,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siR,
  siReact,
  siResend,
  siShopify,
  siSupabase,
  siSwift,
  siVercel,
  siWordpress,
} from "simple-icons";

export type Skill = { name: string; icon?: SimpleIcon; glyph?: string };
export type SkillGroup = { id: string; title: string; blurb: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "dev",
    title: "Programming & development",
    blurb: "Languages and frameworks I build products with.",
    skills: [
      { name: "Python", icon: siPython },
      { name: "SQL", glyph: "SQL" },
      { name: "R", icon: siR },
      { name: "JavaScript", icon: siJavascript },
      { name: "React", icon: siReact },
      { name: "Node.js", icon: siNodedotjs },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Flutter", icon: siFlutter },
      { name: "Dart", icon: siDart },
      { name: "Java", icon: siOpenjdk },
      { name: "C#", glyph: "C#" },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
      { name: "Swift", icon: siSwift },
    ],
  },
  {
    id: "ai",
    title: "AI & LLMs",
    blurb: "Models and techniques I integrate into real workflows.",
    skills: [
      { name: "Claude", icon: siClaude },
      { name: "OpenAI", glyph: "OA" },
      { name: "Gemini", icon: siGooglegemini },
      { name: "Grok", glyph: "GR" },
      { name: "DeepSeek", icon: siDeepseek },
      { name: "Prompt Engineering", glyph: "›_" },
      { name: "API Integration", glyph: "{}" },
    ],
  },
  {
    id: "data",
    title: "Databases & platforms",
    blurb: "Where the data lives.",
    skills: [
      { name: "MySQL", icon: siMysql },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Supabase", icon: siSupabase },
      { name: "Neon", icon: siNeon },
      { name: "Firebase", icon: siFirebase },
      { name: "Airtable", icon: siAirtable },
    ],
  },
  {
    id: "automation",
    title: "Automation & integrations",
    blurb: "Glue that removes manual steps.",
    skills: [
      { name: "n8n", icon: siN8n },
      { name: "Resend", icon: siResend },
      { name: "Google Workspace API", icon: siGoogle },
    ],
  },
  {
    id: "commerce",
    title: "E-commerce & CMS",
    blurb: "Storefronts and content.",
    skills: [
      { name: "Shopify", icon: siShopify },
      { name: "WordPress", icon: siWordpress },
    ],
  },
  {
    id: "devops",
    title: "Deployment & DevOps",
    blurb: "Shipping it.",
    skills: [
      { name: "Vercel", icon: siVercel },
      { name: "Docker", icon: siDocker },
    ],
  },
];
