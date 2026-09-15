export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 py-8 dark:border-dark-fg/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="font-serif text-base text-ink dark:text-dark-fg">
          Jacob Cohen
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:jcohen7@swarthmore.edu"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-accent dark:text-dark-muted dark:hover:text-accent"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-cohen-145442371/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-accent dark:text-dark-muted dark:hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
