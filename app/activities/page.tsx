import type { Metadata } from "next";
import { ActivityExplorer } from "../components/activity-explorer";
import { Container } from "../components/container";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Activity areas at DBCE Coders Club, including hackathons, technical learning, and industry-focused experiences.",
};

export default function ActivitiesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="px-page py-section">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">
            Activities
          </p>
          <h1 className="mt-5 text-display font-semibold leading-display tracking-[-0.055em] text-foreground">
            Learn, build, and connect.
          </h1>
          <p className="mt-7 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            These are activity areas identified in the Coders Club roadmap,
            not a schedule of upcoming events.
          </p>
        </header>
        <ActivityExplorer />
      </Container>
    </main>
  );
}
