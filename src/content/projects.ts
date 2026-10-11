/**
 * Project data: the single source of truth for the "Selected work" section.
 *
 * Content rules (keep the portfolio honest):
 * - `results` must only contain verified, documented outcomes.
 * - `repoUrl` / `liveUrl`: leave "" when unknown. Empty links are not rendered.
 *   Never point a project at the generic GitHub profile.
 * - `flow`: the project's real workflow stages, rendered as a type-led panel.
 *   It is a diagram of how the system works, never a fake screenshot.
 * - `screens`: REAL screenshots in /public. When present they replace the
 *   type-led panel. Only use images you have the right to show.
 *
 * Layout: `featured` projects get large case-study rows (a project with
 * `screens` gets the full-width layout); the rest go in the bento grid.
 */

export type Project = {
  slug: string;
  order: number;
  featured: boolean;
  title: string;
  /** Kept for metadata and future filtering; not rendered as a label. */
  category: string;
  /** One-line summary used in compact layouts. */
  summary: string;
  /** Longer case-study description. */
  description: string;
  /** Concrete, verified capabilities. */
  highlights: string[];
  /** Verified outcomes, shown as emphasised metrics. */
  results: { value: string; label: string }[];
  /** Real workflow stages of the system, shown in the project panel. */
  flow: string[];
  tags: string[];
  /** Context line, e.g. where the work was done. One separator dot max. */
  context?: string;
  /** Prominent label shown above the title, e.g. "Undergraduate thesis". */
  badge?: string;
  /** Optional legal/confidentiality note rendered with the project. */
  note?: string;
  /** Real screenshots shown as a layered composition (first = main, second = overlay). */
  screens?: { src: string; alt: string; width: number; height: number }[];
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
      "A recruitment agency platform that moves job requests from intake to a private, consent-aware candidate shortlist and back again with client feedback. It includes a staff area, admin dashboards and a production rollout guarded by feature flags.",
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
    flow: ["Job request", "Staff review", "Private shortlist", "Client feedback"],
    tags: ["TypeScript", "React", "Vite", "Vercel Functions", "Neon Postgres", "Resend"],
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
      "A Python pipeline that discovers candidate channels, uses Claude and OpenAI to assist with evaluation, and centralises every creator in Airtable, where the team reviews and decides. It replaced a daily manual process that previously took four people.",
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
    flow: ["Discover", "Screen", "LLM evaluation", "Airtable", "Human review"],
    tags: ["Python", "Airtable", "Claude", "OpenAI", "YouTube Data API"],
    repoUrl: "https://github.com/oliverdg-dev/vetting-pipeline",
    liveUrl: "",
  },
  {
    slug: "speakup",
    order: 3,
    featured: true,
    title: "SpeakUP",
    category: "Game Development / Reinforcement Learning",
    badge: "Our undergraduate thesis",
    context: "University of Santo Tomas · A.Y. 2025-2026",
    summary:
      "A job interview training game where reinforcement learning agents drive real-time, adaptive feedback.",
    description:
      "Our undergraduate thesis: a job interview training simulation that makes practice feel less like a test and more like a game. I trained two reinforcement learning algorithms, Deep Q-Network and Proximal Policy Optimization, to simulate the job interview environment. Our research compares how each one delivers personalised, real-time feedback.",
    highlights: [
      "Trained DQN and PPO agents to simulate the interview environment",
      "Real-time feedback on confidence, clarity, pace and tone",
      "Speech recognition for spoken answers",
      "Behavioural and technical interview scenarios",
    ],
    results: [],
    flow: ["Spoken answer", "Speech recognition", "DQN / PPO agent", "Real-time feedback"],
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
    slug: "amdocs-voice-ai",
    order: 4,
    featured: false,
    title: "Voice AI Agent Pipeline",
    category: "AI Engineering / Automation",
    context: "Internship · Amdocs Philippines",
    summary:
      "Contributions to an automated voice AI agent pipeline for a telecommunications company: automation workflows, integrations, testing and documentation.",
    description:
      "As a Software Development Intern, I contributed to an automated voice AI agent pipeline for a telecommunications client, helping on automation workflows and integrations, testing and documentation within an agile team.",
    highlights: [
      "Voice AI agent pipeline development",
      "Automation workflows and integrations",
      "Testing, documentation and agile delivery",
    ],
    results: [{ value: "+35%", label: "documented operational efficiency" }],
    flow: ["Voice input", "AI agent", "Workflows", "Integrations"],
    tags: ["Voice AI", "Automation", "Integrations", "Agile"],
    note: "Team project. No internal systems, data or architecture are shown.",
    repoUrl: "https://github.com/Jaelih/N8N-Agent-Workflow",
    repoLabel: "Team repository",
    liveUrl: "",
  },
  {
    slug: "shopify-ai-imagery",
    order: 5,
    featured: false,
    title: "Shopify AI Product Imagery",
    category: "E-commerce / Generative AI / Automation",
    context: "Dences LLC",
    summary:
      "Product data in, generated images and variants out, published straight to Shopify listings with no manual upload step.",
    description:
      "Product data goes in; generated images and variants come out and are published to the matching Shopify listings. The documented workflow no longer needs manual image creation or manual uploads.",
    highlights: [
      "Generative models including Gemini and OpenAI",
      "Product images and multiple variants",
      "Generation pipeline connected to Shopify",
      "Automated publishing to product listings",
    ],
    results: [],
    flow: ["Product data", "Gemini / OpenAI", "Image variants", "Shopify listing"],
    tags: ["Shopify", "Gemini", "OpenAI", "Automation"],
    repoUrl: "",
    liveUrl: "",
  },
  {
    slug: "teamian-web",
    order: 6,
    featured: false,
    title: "Teamian Web",
    category: "Full-stack Web Development",
    summary:
      "A responsive school portal with role-based access, secure login, event scheduling and announcements.",
    description:
      "A school portal with role-based access for students, teachers and administrators, secure login, event scheduling and announcements, with the frontend and backend integrated end to end.",
    highlights: ["Role-based access", "Secure login", "Event scheduling", "Announcements"],
    results: [],
    flow: ["Students", "Teachers", "Administrators"],
    tags: ["Full-stack", "Auth", "Responsive"],
    repoUrl: "",
    liveUrl: "",
  },
  {
    slug: "mealconomy",
    order: 7,
    featured: false,
    title: "Mealconomy",
    category: "Mobile Development / Flutter / Firebase",
    summary:
      "A Flutter and Firebase recipe finder that filters by ingredients, diet and budget to surface affordable meals.",
    description:
      "A Flutter app backed by Firebase that helps people find affordable meals, with authentication, a real-time database, and filters for ingredients, dietary preferences and budget.",
    highlights: [
      "Real-time database integration",
      "Authentication",
      "Ingredient & dietary filtering",
      "Budget-based discovery",
    ],
    results: [],
    flow: ["Ingredients", "Diet", "Budget", "Recipes"],
    tags: ["Flutter", "Dart", "Firebase"],
    repoUrl: "https://github.com/oliverdg-dev/MealconomyRecipeFinder",
    liveUrl: "",
  },
];

export const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
export const featuredProjects = sortedProjects.filter((p) => p.featured);
export const moreProjects = sortedProjects.filter((p) => !p.featured);
