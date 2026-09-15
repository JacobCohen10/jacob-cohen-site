"use client";

import { useState } from "react";

type Course = {
  code: string;
  name: string;
  term: string;
  tag: string;
  note: string;
};

const courses: Course[] = [
  {
    code: "CS 033",
    name: "Foundations of AI and Machine Learning",
    term: "Fall 2026",
    tag: "Technical",
    note:
      "This class covers modern AI including neural networks and machine learning. I took the course to develop a deeper understanding of the AI tools I use every day. ",
  },
  {
    code: "ECON 011",
    name: "Intermediate Microeconomics",
    term: "Fall 2026",
    tag: "Economics",
    note:
      "This class covers microeconomic theory including consumer and firm decision making, market structure, income distribution, government policy, and welfare analysis. I took this course to develop a deeper understanding of economic theory so I have a stronger foundation when applying it to technical and analytical work.",
  },
  {
    code: "FNCE 1000",
    name: "Corporate Finance",
    term: "Fall 2026",
    tag: "Finance",
    note:
      "Cross-registered at Wharton to go deeper on foundations of corporate finance including valuation, investment decisions, capital structure, and financial derivatives. I took this course to learn how companies make financial decisions and improve my technical skills as I pursue a career in investment banking.",
  },
];

const tagStyles: Record<string, string> = {
  Technical: "border-ink/15 text-ink-muted dark:border-dark-fg/15 dark:text-dark-muted",
  Finance: "border-ink/15 text-ink-muted dark:border-dark-fg/15 dark:text-dark-muted",
  "Cross-registered": "border-accent/40 text-accent",
};

export default function CourseCarousel() {
  const [index, setIndex] = useState(0);
  const course = courses[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + courses.length) % courses.length);
  };

  return (
    <div className="rounded-lg border border-ink/10 bg-surface p-8 dark:border-dark-fg/10 dark:bg-dark-surface">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-semibold text-ink dark:text-dark-fg">
              {course.code}
            </span>
            <span
              className={`rounded-full border px-3 py-0.5 text-xs font-medium ${tagStyles[course.tag]}`}
            >
              {course.tag}
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-ink dark:text-dark-fg">
            {course.name}
          </h3>
          <p className="mt-1 text-xs text-ink-subtle dark:text-dark-subtle">
            {course.term}
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous course"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-muted transition-colors hover:border-ink hover:text-ink dark:border-dark-fg/15 dark:text-dark-muted dark:hover:border-dark-fg dark:hover:text-dark-fg"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next course"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-muted transition-colors hover:border-ink hover:text-ink dark:border-dark-fg/15 dark:text-dark-muted dark:hover:border-dark-fg dark:hover:text-dark-fg"
          >
            →
          </button>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
        {course.note}
      </p>

      <div className="mt-8 flex items-center justify-center gap-2">
        {courses.map((c, i) => (
          <button
            key={c.code}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to ${c.code}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index
                ? "bg-accent"
                : "bg-ink/20 hover:bg-ink/40 dark:bg-dark-fg/20 dark:hover:bg-dark-fg/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
