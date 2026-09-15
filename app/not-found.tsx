import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-serif text-8xl font-bold text-accent opacity-40">
        404
      </span>
      <h1 className="mt-4 font-serif text-2xl font-bold text-ink dark:text-dark-fg">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ink-muted dark:text-dark-muted">
        Like most good ideas, it might still be in progress.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-ink/20 px-6 py-2.5 text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent dark:border-dark-fg/20 dark:text-dark-muted"
      >
        ← Back home
      </Link>
    </div>
  );
}
