import type { Metadata } from "next";
import { Container } from "../components/container";
import { PillarList } from "../components/pillar-list";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DBCE Coders Club, a student technology community at Don Bosco College of Engineering.",
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className="px-page py-section">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">
            About the club
          </p>
          <h1 className="mt-5 text-display font-semibold leading-display tracking-[-0.055em] text-foreground">
            A student technology community.
          </h1>
          <p className="mt-7 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            DBCE Coders Club brings together students around learning,
            building, collaboration, projects, events, and innovation at Don
            Bosco College of Engineering.
          </p>
        </header>

        <section aria-labelledby="about-pillars" className="mt-section grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <h2
              id="about-pillars"
              className="text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl"
            >
              How we focus.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted">
              The club’s roadmap is organized around three established pillars.
            </p>
          </div>
          <PillarList />
        </section>
      </Container>
    </main>
  );
}
