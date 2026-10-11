/**
 * Skills grouped by category. `icon` is a simple-icons brand mark
 * (https://simpleicons.org); entries without a brand mark use a generic Lucide
 * icon (`symbol`) so every chip is drawn from a real icon set.
 * No proficiency percentages on purpose.
 */

import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Braces, Database, FileCode2, MessageSquareCode } from "lucide-react";
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

export type Skill = { name: string; icon?: SimpleIcon; symbol?: LucideIcon };
export type SkillGroup = { id: string; title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "dev",
    title: "Programming & development",
    skills: [
      { name: "Python", icon: siPython },
      { name: "SQL", symbol: Database },
      { name: "R", icon: siR },
      { name: "JavaScript", icon: siJavascript },
      { name: "React", icon: siReact },
      { name: "Node.js", icon: siNodedotjs },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Flutter", icon: siFlutter },
      { name: "Dart", icon: siDart },
      { name: "Java", icon: siOpenjdk },
      { name: "C#", symbol: FileCode2 },
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
      { name: "Swift", icon: siSwift },
    ],
  },
  {
    id: "ai",
    title: "AI & LLMs",
    skills: [
      { name: "Claude", icon: siClaude },
      { name: "OpenAI", symbol: BrainCircuit },
      { name: "Gemini", icon: siGooglegemini },
      { name: "Grok", symbol: BrainCircuit },
      { name: "DeepSeek", icon: siDeepseek },
      { name: "Prompt Engineering", symbol: MessageSquareCode },
      { name: "API Integration", symbol: Braces },
    ],
  },
  {
    id: "data",
    title: "Databases & platforms",
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
    skills: [
      { name: "n8n", icon: siN8n },
      { name: "Resend", icon: siResend },
      { name: "Google Workspace API", icon: siGoogle },
    ],
  },
  {
    id: "commerce",
    title: "E-commerce & CMS",
    skills: [
      { name: "Shopify", icon: siShopify },
      { name: "WordPress", icon: siWordpress },
    ],
  },
  {
    id: "devops",
    title: "Deployment & DevOps",
    skills: [
      { name: "Vercel", icon: siVercel },
      { name: "Docker", icon: siDocker },
    ],
  },
];
