/** Experience, education and achievements. Keep entries outcome-focused. */

export type Experience = {
  company: string;
  role: string;
  period: string;
  /** Machine-readable dates for <time> elements. */
  start: string;
  end?: string;
  current?: boolean;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Amdocs Philippines",
    role: "Software Development Intern",
    period: "Jan 2026 — Apr 2026",
    start: "2026-01",
    end: "2026-04",
    highlights: [
      "Contributed to an automated voice AI agent pipeline for a telecommunications company.",
      "Helped build automation workflows and integrations.",
      "Took part in agile delivery, testing and documentation.",
      "Contributed to a pipeline associated with a documented 35% increase in operational efficiency.",
    ],
  },
  {
    company: "Dences LLC",
    role: "Developer & Automation",
    period: "Nov 2023 — Present",
    start: "2023-11",
    current: true,
    highlights: [
      "Built Python + Airtable automation for YouTube channel vetting.",
      "Developed Shopify-integrated AI product image generation workflows.",
      "Delivered recruitment platform features and workflow automation.",
      "Expanded automated test coverage from 106 to 161 tests.",
      "Implemented staff authentication and request tracking workflows.",
    ],
  },
];

export const education = {
  school: "University of Santo Tomas",
  location: "Manila, Philippines",
  degree: "Bachelor of Science in Computer Science",
  specialization: "Specialization in Game Development",
};

export const achievements = [
  { title: "National AI Prompt Challenge", distinction: "Finalist" },
  { title: "Globe Innovania 2025", distinction: "Top 3" },
];
