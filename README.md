# Oliver Garcia — Portfolio

Personal portfolio for **Oliver Deniel C. Garcia**, a software developer working across full-stack engineering, AI integrations and workflow automation.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Motion for React** and **Lucide**. The site is a single statically generated page, and almost all of it is Server Components. Only the nav, hero animation, scroll reveals, pointer spotlight and copy-email button run on the client.

## Local setup

Requires Node 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (static) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next core-web-vitals + TypeScript rules) |
| `npm run typecheck` | `tsc --noEmit` |

## Editing content

All content lives in typed files in `src/content/`, so there's no need to touch components.

| File | Contents |
| --- | --- |
| `site.ts` | Name, headline, intro, email, **GitHub / LinkedIn / résumé URLs**, availability badge, production URL |
| `projects.ts` | Every project: title, category, description, highlights, verified results, tags, repo/live URLs, screenshot, featured flag, display order |
| `experience.ts` | Roles, education and achievements |
| `skills.ts` | Skill groups and their icons (from [simple-icons](https://simpleicons.org)) |

### Content rules this site follows

- **Unknown links stay empty (`""`)** and are not rendered, so there are no fake destinations. Currently set:
  - GitHub profile: `github.com/oliverdg-dev` (verified from the authenticated GitHub account).
  - Repos linked: `assistant-agency` (recruitment platform), `vetting-pipeline`, `MealconomyRecipeFinder`. I checked each against its README.
  - LinkedIn: `linkedin.com/in/oliver-deniel-garcia`.
  - Shopify imagery, Teamian Web and the Amdocs project have no public repo, so they show no repo link.
- `results` holds only documented outcomes. Don't add star counts, user numbers or percentages unless they're verifiable.
- `featured: true` projects get the large case-study layout. The rest go in the compact "More projects" grid. `order` controls numbering.

### Adding real screenshots

Each project falls back to an **illustrative, code-drawn preview** labelled "Illustrative preview", so nobody mistakes it for the production UI. To use a real screenshot:

1. Put the image in `public/projects/`, e.g. `public/projects/recruitment.png` (about 1600×1100 works well).
2. Add it to the project in `projects.ts`:
   ```ts
   image: { src: "/projects/recruitment.png", alt: "Admin request inbox of the recruitment platform" },
   ```
   `next/image` optimizes it (AVIF/WebP), and the "illustrative" label is removed automatically.

**Only use client or employer screenshots when you have permission.** The Amdocs entry deliberately uses an abstract visualization.

### Toggling availability

`site.availability.enabled` in `site.ts` shows or hides the green "open to work" indicator. `label` sets its text.

## Design system

- **Color:** ink `#0a0a0b` surfaces, paper `#edece7` type, one lime accent `#c6f35a`, 1px white-alpha hairlines. The tokens live in `@theme` in `src/app/globals.css`.
- **Themes:** dark by default, plus a light theme. The nav toggle saves the visitor's choice in `localStorage`; with no saved choice the OS setting is used. Both themes swap the same tokens (`:root[data-theme="light"]` in `globals.css`), so components never branch. Use `bg-tint/…` rather than `bg-white/…` for subtle overlays so they work in both themes.
- **Type:** Geist (UI and display), Geist Mono (labels and metadata), Instrument Serif italic (accent words only). All are self-hosted via `next/font`.
- **Layout:** a 12-column grid inside `.shell` (max 1440px, fluid gutters). Asymmetric splits are 7/5, 3/9 and 4/8.
- **Motion:** one easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`). The hero uses masked word reveals, and sections use reveal-once on scroll. Project visuals zoom gently on hover, and the pointer spotlight runs only on fine pointers. `MotionConfig reducedMotion="user"` and a global CSS rule honour `prefers-reduced-motion`.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repo. The framework is detected as Next.js, so no config is needed.
3. Under **Settings → Environment Variables**, set `NEXT_PUBLIC_SITE_URL` to your final domain (e.g. `https://olivergarcia.dev`). Canonical URLs, Open Graph, `robots.txt` and `sitemap.xml` use it.
4. Deploy. Open Graph images (`/opengraph-image`) and the favicon (`src/app/icon.svg`) are generated at build time.

Or from the CLI:

```bash
npx vercel        # preview
npx vercel --prod # production
```

## Project structure

```
src/
  app/            layout, page, metadata routes (OG image, icon, robots, sitemap), error/404
  components/     sections (hero, work, about, experience, skills, contact) + UI primitives
    previews/     illustrative, code-drawn project previews
  content/        all editable content (typed)
```
