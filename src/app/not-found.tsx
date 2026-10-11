import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell flex min-h-svh flex-col justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-6 text-6xl sm:text-8xl">
        This page <span className="text-accent">wandered off.</span>
      </h1>
      <Link href="/" className="link-underline mt-10 w-fit text-lg text-paper">
        Back to the portfolio →
      </Link>
    </main>
  );
}
