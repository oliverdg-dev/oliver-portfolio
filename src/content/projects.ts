/**
 * Project data — the single source of truth for the "Selected Work" section.
 *
 * Content rules (keep the portfolio honest):
 * - `results` must only contain verified, documented outcomes.
 * - `repoUrl` / `liveUrl`: leave "" when unknown. Empty links are not rendered.
 *   Never point a project at the generic GitHub profile.
 * - `image`: path to a REAL screenshot in /public (e.g. "/projects/recruitment.png").
 *   While empty, an illustrative, code-drawn preview (`preview`) is shown and
 *   labelled as illustrative so it is not mistaken for the production UI.
 */

export type PreviewKind = "recruitment" | "vetting" | "shopify" | "teamian" | "mealconomy" | "voice" | "speakup";

export type Project = {
  slug: string;
  order: number;
  featured: boolean;
  title: string;
  category: string;
  /** One-line summary used in compact layouts. */
  summary: string;
  /** Longer case-study description. */
  description: string;
  /** Concrete, verified capabilities. */
  highlights: string[];
  /** Verified outcomes — shown as emphasised metrics. */
  results: { value: string; label: string }[];
  tags: string[];
  /** Context line, e.g. where the work was done. */
  context?: string;
  /** Prominent label shown above the title, e.g. "Undergraduate Thesis". */
  badge?: string;
  /** Optional legal/confidentiality note rendered with the project. */
  note?: string;
  image?: { src: string; alt: string };
  /**
   * Real screenshots shown as a layered composition (first = main, second = overlay).
   * Takes precedence over `preview`. Use only images you have the right to show.
   */
  screens?: { src: string; alt: string; width: number; height: number }[];
  preview: PreviewKind;
  repoUrl: string;
  /** Link text for the repo, e.g. "Team repository" for shared repos. Defaults to "View repository". */
  repoLabel?: string;
  liveUrl: string;
  /** Any other relevant links, e.g. a research paper. */
  extraLinks?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "recruitment-platform",
    order: 1,
    featured: true,
    title: "Recruitment Agency Platform",
    category: "Full-stack Development / Workflow Automation",
    context: "Dences LLC",
    summary:
      "Internal request management, private candidate shortlisting and client feedback workflows for a recruitment agency.",
    description:
      "A recruitment agency platform that moves job requests from intake to a private, consent-aware candidate shortlist and back again with client feedback — with a staff area, admin dashboards and a production rollout guarded by feature flags.",
    highlights: [
      "Secure staff authentication",
      "Admin request management",
      "Private candidate shortlisting & consent tracking",
      "Client feedback workflows",
      "Admin dashboards",
      "Production deployment with feature flags",
    ],
    results: [
      { value: "106 → 161", label: "automated tests" },
      { value: "+52%", label: "test coverage growth" },
    ],
    tags: ["TypeScript", "React", "Vite", "Vercel Functions", "Neon Postgres", "Resend"],
    preview: "recruitment",
    repoUrl: "https://github.com/oliverdg-dev/assistant-agency",
    liveUrl: "",
  },
  {
    slug: "youtube-vetting-pipeline",
    order: 2,
    featured: true,
    title: "YouTube Channel Vetting Pipeline",
    category: "AI Automation / Python / LLM Integration",
    context: "Dences LLC",
    summary:
      "An automated workflow that discovers and evaluates YouTube channels for product-testing collaborations, with humans making the final call.",
    description:
      "A Python pipeline that discovers candidate channels, uses Claude and OpenAI to assist with evaluation, and centralises every creator in Airtable — where the team reviews and decides. It replaced a daily manual process that previously took four people.",
    highlights: [
      "Python + Airtable integration",
      "LLM-assisted analysis with Claude and OpenAI",
      "Centralised creator tracking and review",
      "Human review stays in the loop",
    ],
    results: [
      { value: "30", label: "qualified channels surfaced" },
      { value: "4 people", label: "daily manual process replaced" },
    ],
    tags: ["Python", "Airtable", "Claude", "OpenAI", "YouTube Data API"],
    preview: "vetting",
    repoUrl: "https://github.com/oliverdg-dev/vetting-pipeline",
    liveUrl: "",
  },
  {
    slug: "shopify-ai-imagery",
    order: 3,
    featured: true,
    title: "Shopify AI Product Imagery",
    category: "E-commerce / Generative AI / Automation",
    context: "Dences LLC",
    summary:
      "A pipeline that turns product data into generated product images and variants, then publishes them straight to Shopify listings.",
    description:
      "Product data goes in; generated images and variants come out and are published to the matching Shopify listings. The documented workflow no longer needs manual image creation or manual uploads.",
    highlights: [
      "Generative models including Gemini and OpenAI",
      "Product images and multiple variants",
      "Generation pipeline connected to Shopify",
      "Automated publishing to product listings",
    ],
    results: [{ value: "Data → Listing", label: "manual creation & upload steps removed" }],
    tags: ["Shopify", "Gemini", "OpenAI", "Automation"],
    preview: "shopify",
    repoUrl: "",
    liveUrl: "",
  },
  {
    slug: "amdocs-voice-ai",
    order: 4,
    featured: true,
    title: "Voice AI Agent Pipeline",
    category: "AI Engineering / Automation",
    context: "Software Development Internship · Amdocs Philippines",
    summary:
      "Contributions to an automated voice AI agent pipeline for a telecommunications company.",
    description:
      "As a Software Development Intern, I contributed to an automated voice AI agent pipeline for a telecommunications client — helping on automation workflows and integrations, testing and documentation within an agile team. The pipeline was documented as increasing operational efficiency by 35%.",
    highlights: [
      "Voice AI agent pipeline development",
      "Automation workflows and integrations",
      "Testing, documentation and agile delivery",
    ],
    results: [{ value: "+35%", label: "documented operational efficiency" }],
    tags: ["Voice AI", "Automation", "Integrations", "Agile"],
    note: "Team project. Abstract visualisation only — no internal systems, data or architecture are shown.",
    preview: "voice",
    repoUrl: "https://github.com/Jaelih/N8N-Agent-Workflow",
    repoLabel: "Team repository",
    liveUrl: "",
  },
  {
    slug: "speakup",
    order: 5,
    featured: true,
    title: "SpeakUP",
    category: "Game Development / Reinforcement Learning",
    badge: "Our Undergraduate Thesis",
    context: "BS Computer Science · University of Santo Tomas · A.Y. 2025–2026",
    summary:
      "A job interview training game where reinforcement learning agents drive real-time, adaptive feedback.",
    description:
      "Our undergraduate thesis: a job interview training simulation that makes practice feel less like a test and more like a game. I trained two reinforcement learning algorithms — Deep Q-Network and Proximal Policy Optimization — to simulate the job interview environment, and our research compares how each one delivers personalised, real-time feedback.",
    highlights: [
      "Trained DQN and PPO agents to simulate the interview environment",
      "Real-time feedback on confidence, clarity, pace and tone",
      "Speech recognition for spoken answers",
      "Behavioural and technical interview scenarios",
    ],
    results: [],
    tags: ["Unity", "C#", "Python", "DQN", "PPO", "Speech recognition"],
    note: "Team research project with three co-authors.",
    screens: [
      {
        src: "/projects/speakup/05.jpg",
        alt: "SpeakUP interview scene: the interviewer Mr. Thorne asks a question and the player's spoken answer is transcribed",
        width: 1298,
        height: 682,
      },
      {
        src: "/projects/speakup/06.jpg",
        alt: "SpeakUP real-time feedback panel rating the player's tone during an answer",
        width: 1298,
        height: 682,
      },
    ],
    preview: "speakup",
    repoUrl: "https://github.com/mgocon/SpeakUP",
    repoLabel: "Team repository",
    liveUrl: "",
    extraLinks: [
      {
        label: "Read the paper",
        href: "https://drive.google.com/file/d/1gxCWUJ1i6X9Yx1X3esNu0Yta-cdeYzE0/view?usp=sharing",
      },
    ],
  },
  {
    slug: "teamian-web",
    order: 6,
    featured: false,
    title: "Teamian Web",
    category: "Full-stack Web Development",
    summary:
      "A responsive school management website for students, teachers and administrators.",
    description:
      "A school portal with role-based access for students, teachers and administrators, secure login, event scheduling and announcements — frontend and backend integrated end to end.",
    highlights: ["Role-based access", "Secure login", "Event scheduling", "Announcements"],
    results: [],
    tags: ["Full-stack", "Auth", "Responsive"],
    preview: "teamian",
    repoUrl: "",
    liveUrl: "",
  },
  {
    slug: "mealconomy",
    order: 7,
    featured: false,
    title: "Mealconomy",
    category: "Mobile Development / Flutter / Firebase",
    summary: "A cross-platform budget recipe finder for discovering affordable meals.",
    description:
      "A Flutter app backed by Firebase that helps people find affordable meals — with authentication, a real-time database, and filters for ingredients, dietary preferences and budget.",
    highlights: [
      "Real-time database integration",
      "Authentication",
      "Ingredient & dietary filtering",
      "Budget-based discovery",
    ],
    results: [],
    tags: ["Flutter", "Dart", "Firebase"],
    preview: "mealconomy",
    repoUrl: "https://github.com/oliverdg-dev/MealconomyRecipeFinder",
    liveUrl: "",
  },
];

export const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
export const featuredProjects = sortedProjects.filter((p) => p.featured);
export const moreProjects = sortedProjects.filter((p) => !p.featured);
