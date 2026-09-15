import type { Metadata } from "next";
import Image from "next/image";
import CourseCarousel from "@/components/CourseCarousel";

export const metadata: Metadata = {
  title: "Swarthmore — Jacob Cohen",
};

export default function Swarthmore() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Hero */}
      <header className="mb-20">
        <h1 className="font-serif text-4xl font-bold text-ink dark:text-dark-fg md:text-5xl">
          Swarthmore College
        </h1>
        <p className="mt-4 text-ink-muted dark:text-dark-muted">
          Class of 2029, B.A. Computer Science &amp; Economics
        </p>
      </header>

      {/* Why Swarthmore */}
      <section className="mb-20 border-t border-ink/10 pt-12 dark:border-dark-fg/10">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-ink-subtle dark:text-dark-subtle">
          Why Swarthmore
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-ink-muted dark:text-dark-muted">
            I chose to attend Swarthmore because I wanted to be in a community of people who are intellectually curious and genuinely excited to learn. While touring Swarthmore, I had the opportunity to speak with a professor in the Engineering Department. Even though I was not yet a student, he took the time to explain a project one of his students was working on involving a kite designed to generate wind energy. He even gave me his number and encouraged me to reach out if I had any questions. That interaction showed me that I want to be apart of a community with strong academic rigor, but also a culture of collaboration where people are willing to share ideas, work together, and build things that can make a positive impact on the world.
          </p>

          <div className="relative aspect-[1284/850] w-full overflow-hidden rounded-lg border border-ink/10 shadow-sm dark:border-dark-fg/10">
            <Image
              src="/swarthmore.jpg"
              alt="Jacob Cohen moving into Swarthmore"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Academics */}
      <section className="mb-20 border-t border-ink/10 pt-12 dark:border-dark-fg/10">
        <h2 className="mb-2 font-serif text-2xl font-bold text-ink dark:text-dark-fg">
          Academics
        </h2>
        <p className="mb-8 max-w-lg text-sm text-ink-muted dark:text-dark-muted">
          Course I am taking this semster
        </p>
        <CourseCarousel />
      </section>

      {/* Athletics */}
      <section className="border-t border-ink/10 pt-12 dark:border-dark-fg/10">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink-subtle dark:text-dark-subtle">
          NCAA D3
        </span>
        <h2 className="mt-2 font-serif text-2xl font-bold text-ink dark:text-dark-fg">
          Varsity Lacrosse
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
            I am a defender on the Swarthmore varsity lacrosse team. Each practice consists of a lift, film session, and field session. Being a student-athlete has taught me how to manage my time between my academic and athletic commitments while taking responsibility for my performance and development. During my freshman season, I started 6 games and played in 14 games.
          </p>

          <div className="relative aspect-[1206/1301] w-full max-w-sm overflow-hidden rounded-lg border border-ink/10 shadow-sm dark:border-dark-fg/10">
            <Image
              src="/lacrosse.jpg"
              alt="Jacob Cohen playing lacrosse for Swarthmore"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
