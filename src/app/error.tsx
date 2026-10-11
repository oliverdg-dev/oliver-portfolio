"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="shell flex min-h-svh flex-col justify-center py-24">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="display mt-6 text-5xl sm:text-7xl">An unexpected error occurred.</h1>
      <button
        type="button"
        onClick={reset}
        className="mt-10 w-fit rounded-full border border-line-strong px-6 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
      >
        Try again
      </button>
    </main>
  );
}
