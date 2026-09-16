import type { Metadata } from "next";
import BikeRoute from "@/components/BikeRoute";
import FlipCards from "@/components/FlipCards";
import PhotoGallery from "@/components/PhotoGallery";
import { stats as bikeStats } from "@/components/bikeRouteData";

export const metadata: Metadata = {
  title: "Personal — Jacob Cohen",
};

export default function Personal() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-16">
        <h1 className="font-serif text-4xl font-bold text-ink dark:text-dark-fg md:text-5xl">
          Personal
        </h1>
        <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-accent">
          A Little About Me
        </span>
        <p className="mt-3 text-base leading-relaxed text-ink-muted dark:text-dark-muted">
          I love to be active with my friends. I'm usually outside either hiking, biking, or playing pickleball. At home, I&apos;m usually deeply involved in a board game or building something new. I am excited with what&apos;s possible to create now with AI and try to make new projects that come to mind. Most mornings I read the Exec Sum newsletter to stay on top of the markets and listen financial podcasts to stay up to date. When I need a break there&apos;s nothing better than a long walk with some music on.
        </p>
      </header>

      {/* Snapshots */}
      <section className="mb-24">
        <PhotoGallery />
      </section>

      {/* Bike tour */}
      <section className="mb-24 border-t border-ink/10 pt-12 dark:border-dark-fg/10">
        <span className="text-xs font-semibold uppercase tracking-widest text-ink-subtle dark:text-dark-subtle">
          Summer 2026
        </span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-ink dark:text-dark-fg">
          Fairfield → Rutland
        </h2>
        <p className="mt-2 text-base leading-relaxed text-ink-muted dark:text-dark-muted">
          This summer, I biked 240 miles from Fairfield, Connecticut, to Rutland, Vermont, with a friend. Looking for an adventure, we planned a three day bike trip where we carried all of the supplies we needed on our bikes. This trip challenged us to map out the route and be strategic so we could make it in three days with our supplies.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            { label: "Miles", value: `~${bikeStats.miles}` },
            { label: "Days", value: `${bikeStats.days}` },
            { label: "Elevation gain", value: `~${bikeStats.elevationFt.toLocaleString()} ft` },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="rounded-lg bg-surface p-5 dark:bg-dark-surface"
            >
              <div className="font-serif text-2xl font-bold text-ink dark:text-dark-fg">
                {value}
              </div>
              <div className="mt-1 text-xs text-ink-muted dark:text-dark-muted">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <BikeRoute />
        </div>

        <div className="mt-8 max-w-2xl">
          <h3 className="mb-3 text-sm font-semibold text-ink dark:text-dark-fg">
            Stops
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-ink-muted dark:text-dark-muted">
            {[
              "Taconic State Park, NY",
              "Clarksburg State Park, MA",
              "Rutland, VT",
            ].map((stop) => (
              <li key={stop} className="flex items-center gap-3">
                <span className="h-px w-4 bg-accent flex-shrink-0" />
                {stop}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Favorite Projects */}
      <section className="mt-24 border-t border-ink/10 pt-12 dark:border-dark-fg/10">
        <h2 className="font-serif text-3xl font-bold text-ink dark:text-dark-fg">
          Favorite Projects
        </h2>

        <div className="mt-8 flex flex-col gap-8">
          {[
            {
              id: "recall",
              category: "iOS App",
              name: "Recall",
              tagline:
                "An iOS app that turns your screenshots into an organized collection.",
              problem:
                "I'd see something interesting on LinkedIn or posted by Swarthmore, so I'd screenshot it to save for later. Then I completely forget it existed. My camera roll became a mess of good ideas that I'd never revisit.",
              fix: "I built Recall to automatically sort every screenshot into categories that I define myself such as Swarthmore, LinkedIn, Athletics.",
              steps: [
                "Take a screenshot as usual",
                "Tap a button to send it to the app",
                "The app identifies what's in the image and drops it into the correct self-created folder automatically",
              ],
            },
            {
              id: "price-drop",
              category: "Browser Extension",
              name: "Price Drop",
              tagline: "A browser extension that watches prices for you.",
              problem:
                "I was tired of manually checking the same product pages over and over just to find out when an item went on sale.",
              fix: "I built an google extension that does the checking for you. You set a target price on any item and it checks the listing every hour. The moment it drops below your threshold, you get an email.",
              steps: [
                "Go to the product page on the site",
                "Open the extension and set your desired price",
                "The extension checks the listing automatically once per hour",
                "If the price drops below your target, you get an email notification",
              ],
            },
          ].map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-ink/10 bg-surface p-8 dark:border-dark-fg/10 dark:bg-dark-surface"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {project.category}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-ink dark:text-dark-fg">
                {project.name}
              </h3>
              <p className="mt-2 max-w-2xl text-ink-muted dark:text-dark-muted">
                {project.tagline}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-subtle dark:text-dark-subtle">
                    The problem
                  </h4>
                  <p className="text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                    The fix
                  </h4>
                  <p className="text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                    {project.fix}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-subtle dark:text-dark-subtle">
                  How it works
                </h4>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {project.steps.map((step, i) => (
                    <div key={step} className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-accent/40 text-xs font-semibold text-accent">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-ink-muted dark:text-dark-muted">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get to Know Me */}
      <section className="mt-24 border-t border-ink/10 pt-12 dark:border-dark-fg/10">
        <h2 className="font-serif text-3xl font-bold text-ink dark:text-dark-fg">
          Get to Know Me
        </h2>
        <p className="mt-2 max-w-lg text-sm text-ink-muted dark:text-dark-muted">
          Tap a card to flip it.
        </p>
        <div className="mt-8">
          <FlipCards />
        </div>
      </section>
    </div>
  );
}
