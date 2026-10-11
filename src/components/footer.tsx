import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-8 font-mono text-[11px] text-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js, Tailwind CSS &amp; Motion</p>
        <a href="#top" className="link-underline w-fit text-mute hover:text-paper">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
