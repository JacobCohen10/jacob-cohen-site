"use client";

import { useState } from "react";

type FlipCard = {
  id: string;
  emoji: string;
  prompt: string;
  answer: string;
};

const cards: FlipCard[] = [
  { id: "card-1", emoji: "🌮", prompt: "Favorite Food", answer: "Tacos" },
  { id: "card-2", emoji: "🐶", prompt: "Favorite Pet", answer: "Dog" },
  { id: "card-3", emoji: "📖", prompt: "Favorite Book", answer: "American Dirt by Jeanine Cummins" },
  { id: "card-4", emoji: "🐉", prompt: "Favorite Show", answer: "Game of Thrones" },
  { id: "card-5", emoji: "🍁", prompt: "Favorite Place", answer: "Vermont" },
  { id: "card-6", emoji: "🏖️", prompt: "Something I dislike", answer: "Sand" },
  { id: "card-7", emoji: "♟️", prompt: "Something I want to get better at", answer: "Chess" },
  { id: "card-8", emoji: "✈️", prompt: "Something I want to do", answer: "Travel Abroad" },
];

const pastelPalette = [
  "#FDE2E4",
  "#E2ECE9",
  "#FFF1D5",
  "#DFE7FD",
  "#F6DFEB",
  "#E4F1EE",
];

export default function FlipCards() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {cards.map((card, i) => {
        const isFlipped = flipped.has(card.id);
        const backColor = pastelPalette[i % pastelPalette.length];

        return (
          <div key={card.id} className="aspect-[4/3] [perspective:1000px]">
            <button
              type="button"
              onClick={() => toggle(card.id)}
              aria-pressed={isFlipped}
              className="relative h-full w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-500 ease-in-out"
              style={{ transform: isFlipped ? "rotateY(180deg)" : "none" }}
            >
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg border border-ink/10 bg-surface p-4 text-center [backface-visibility:hidden] dark:border-dark-fg/10 dark:bg-dark-surface">
                <span className="text-2xl">{card.emoji}</span>
                <span className="text-sm font-medium text-ink dark:text-dark-fg">
                  {card.prompt || "[Category]"}
                </span>
                <span className="mt-1 text-xs text-ink-subtle dark:text-dark-subtle">
                  Tap to reveal
                </span>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded-lg p-4 text-center text-sm font-medium text-ink [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ backgroundColor: backColor }}
              >
                {card.answer || "[Answer]"}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
