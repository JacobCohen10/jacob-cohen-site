"use client";

import { useState } from "react";

type Experience = {
  id: string;
  org: string;
  role: string;
  dates: string;
  description: string;
  did: string[];
  learned: string;
};

const experiences: Experience[] = [
  {
    id: "Bio-Adaptive",
    org: "Bio-Adaptive AI Research Initiative",
    role: "Business & Strategy",
    dates: "May 2026 – Present",
    description:
      "I worked with a Swarthmore alum who was building an early stage startup and needed support on the business and strategy side. I helped with research, strategic planning, and other business initiatives to support the company’s growth.",
    did: [
      "Led direct outreach to venture capital partners to support company fundraising efforts",
      "Built an investor pipeline CRM to organize and track VC relationships and fundraising progress",
      "Wrote competitive positioning analysis for pitch materials and investor communications",
      "Defined marketing and outreach strategy for acquiring beta users"
    ],
    learned:
      "Working at an early-stage startup gave me firsthand experience with how companies think about funding and growth. Through researching different funding opportunities, I learned how accelerators and non-dilutive grants can support a company at different stages as well as the tradeoffs that come with each option. I also strengthened my communication skills through outreach to venture capital firms and learning how to adapt my pitch depending on the audience. Writing grant and accelerator applications taught me how to explain technical aspects of the business in a clear and accessible way. Lastly, helping build a beta user pipeline and waitlist showed me how important early customer outreach is to turning an idea into a product people are willing to use.",
  },
  {
    id: "lightbox",
    org: "LightBox",
    role: "Data Engineering Intern",
    dates: "Summers 2025 & 2026",
    description:
      "Lightbox is a  environmental and property data company. I worked in the Shelton office on the data engineering team contributing to projects involving data acquisition and geospatial processing. ",
    did: [
      "Processed event geometries and published mapping services using Python and ArcGIS to support environmental response efforts during the Spokane, WA wildfires",
      "Developed and deployed a Python Command Line Interface (CLI) to download, extract, and validate historical city directory files, using file size and MD5 checks to catch corrupted downloads while handling invalid identifiers without halting the workflow.",
      "Created a React website that was used as an internal tool to access and analyze sanborn maps",
    ],
    learned:
      "I learned how to take a project from start to finish and work through challenges independently. I became more comfortable using AI as a tool to help me solve problems while learning the importance of reviewing and understanding the work myself. I also learned how to communicate effectively in a technical environment and collaborate with others on projects. Along the way, I strengthened my skills in Python and React while gaining a better understanding of how technology and data can be used to solve real-world problems. Overall, the experience helped me grow both technically and professionally and gave me a better sense of how technology teams work together to tackle challenging problems.",
  },
  {
    id: "lsu",
    org: "LSU Lattin Lab",
    role: "Data Science Intern",
    dates: "Dec 2025 – Jan 2026",
    description:
      "As part of the Micro-intership program offered by Parker Dewey, I was able to work with Swat alum Christine Lattin team at the LSU Lattin Lab",
    did: [
      "Used Python and pandas to develop a script analyzing RFID data for a Louisiana State University research project investigating the effects of ectoparasites on maternal feeding behavior and chick fledging dates",
    ],
    learned:
      "I learned how to work with unfamiliar datasets, organize and clean the information, and turn it into clear CSV files that could be easily examined by researchers. I also learned how to communicate technical ideas in a simple, accessible way so that researchers without a technical background could understand my work and iterate on my code. This experience strengthened both my ability to work with data and my understanding of how to make technical work useful to a broader team.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 flex-shrink-0 text-ink-subtle transition-transform dark:text-dark-subtle ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function ExperienceList() {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(experiences.map((e) => e.id))
  );

  const toggle = (id: string) => {
    setOpenIds((prev) => {
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
    <div className="flex flex-col gap-6">
      {experiences.map((exp) => {
        const isOpen = openIds.has(exp.id);
        return (
          <div
            key={exp.id}
            className="rounded-lg border border-ink/10 bg-surface dark:border-dark-fg/10 dark:bg-dark-surface"
          >
            <button
              type="button"
              onClick={() => toggle(exp.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <div>
                <div className="font-serif text-lg font-semibold text-ink dark:text-dark-fg">
                  {exp.org}
                </div>
                <div className="mt-1 text-sm text-ink-muted dark:text-dark-muted">
                  {exp.role}
                </div>
                <div className="mt-1 text-xs text-ink-subtle dark:text-dark-subtle">
                  {exp.dates}
                </div>
              </div>
              <ChevronIcon open={isOpen} />
            </button>

            {isOpen && (
              <div className="border-t border-ink/10 px-6 py-6 dark:border-dark-fg/10">
                <div className="mb-6">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-subtle dark:text-dark-subtle">
                    Description
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                    {exp.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-subtle dark:text-dark-subtle">
                    What I did
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {exp.did.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-ink-muted dark:text-dark-muted"
                      >
                        <span className="mt-2 h-px w-4 flex-shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-subtle dark:text-dark-subtle">
                    What I learned
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                    {exp.learned}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
