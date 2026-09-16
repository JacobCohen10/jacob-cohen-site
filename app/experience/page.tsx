import type { Metadata } from "next";
import ExperienceList from "@/components/ExperienceList";

export const metadata: Metadata = {
  title: "Experience — Jacob Cohen",
};

export default function Experience() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-16">
        <h1 className="font-serif text-4xl font-bold text-ink dark:text-dark-fg md:text-5xl">
          Experience
        </h1>
      </header>

      <ExperienceList />
    </div>
  );
}
