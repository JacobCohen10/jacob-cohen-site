"use client";

import { useEffect, useState } from "react";

const WORDS = ["Builder.", "Student.", "Athlete."];
const HOLD_MS = 900;
const FADE_MS = 350;

interface Props {
  onComplete: () => void;
}

export default function IdentityReveal({ onComplete }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hold = setTimeout(() => setVisible(false), HOLD_MS);
    return () => clearTimeout(hold);
  }, [index]);

  useEffect(() => {
    if (visible) return;
    const next = setTimeout(() => {
      if (index < WORDS.length - 1) {
        setIndex((i) => i + 1);
        setVisible(true);
      } else {
        onComplete();
      }
    }, FADE_MS);
    return () => clearTimeout(next);
  }, [visible, index, onComplete]);

  return (
    <span
      className="font-serif text-5xl font-bold text-ink dark:text-dark-fg md:text-7xl"
      style={{
        display: "inline-block",
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(10px)",
        transform: visible ? "translateY(0px)" : "translateY(-6px)",
        transition: `opacity ${FADE_MS}ms ease, filter ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
        willChange: "opacity, filter, transform",
      }}
    >
      {WORDS[index]}
    </span>
  );
}
