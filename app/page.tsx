"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import IdentityReveal from "@/components/IdentityReveal";

export default function Home() {
  const [revealed, setRevealed] = useState(false);

  const handleComplete = useCallback(() => setRevealed(true), []);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl flex-col justify-center px-6 pb-20 pt-16">
        <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="max-w-2xl">
            {/* Identity reveal / resolved headline */}
            <div className="relative mb-6 h-[72px] md:h-[96px]">
              <div
                className="absolute top-0 left-0"
                style={{
                  opacity: revealed ? 0 : 1,
                  pointerEvents: revealed ? "none" : "auto",
                  transition: "opacity 300ms ease",
                }}
              >
                {!revealed && <IdentityReveal onComplete={handleComplete} />}
              </div>

              <div
                className="absolute top-0 left-0"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 600ms ease, transform 600ms ease",
                }}
              >
                <h1 className="font-serif text-5xl font-bold text-ink dark:text-dark-fg md:text-7xl">
                  Hi, I&apos;m Jacob.
                </h1>
              </div>
            </div>

            <p
              className="text-lg leading-relaxed text-ink-muted dark:text-dark-muted"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 600ms ease 150ms, transform 600ms ease 150ms",
              }}
            >
              I’m a sophomore at Swarthmore College studying Computer Science and Economics and playing on the varsity lacrosse team. I’m from Fairfield, Connecticut, and enjoy solving puzzles. I initially planned to pursue software engineering, but after working as a data engineer, I realized I wanted to use data and analytical thinking to understand how businesses work and evaluate them. I began exploring finance through informational calls and independent research to learn about different career paths. Additionally I am taking Corporate Finance at the Wharton School at the University of Pennsylvania to build a foundation in finance and my financial modeling skills. While working at a bio-adaptive startup, I spoke with venture partners and became interested in investing because it combines technical experience with the chance to evaluate and learn about other businesses. I would love the opportunity to join Citadel’s Associate Program and learn how its investment teams research companies and use data and technology to support their decisions.
            </p>
          </div>

          {/* Portrait */}
          <div
            className="relative aspect-[4/5] w-40 flex-shrink-0 overflow-hidden rounded-lg border border-ink/10 shadow-sm sm:w-48 md:w-64 dark:border-dark-fg/10"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 600ms ease 150ms, transform 600ms ease 150ms",
            }}
          >
            <Image
              src="/senior-portrait.jpg"
              alt="Portrait of Jacob Cohen"
              fill
              sizes="(min-width: 768px) 256px, 192px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
