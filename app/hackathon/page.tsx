import type { Metadata } from "next";
import { Container } from "../components/container";

export const metadata: Metadata = {
  title: "Annual Hackathon",
  description:
    "Learn about the DBCE Coders Club Annual Hackathon and its two-phase format.",
};

export default function HackathonPage() {
  return (
    <main id="main-content" tabIndex={-1} className="px-page py-section">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">
            Flagship event
          </p>
          <h1 className="mt-5 text-display font-semibold leading-display tracking-[-0.055em] text-foreground">
            Annual Hackathon.
          </h1>
          <p className="mt-7 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            A two-phase experience that pushes students beyond beginner
            programming and introduces real software architecture.
          </p>
        </header>

        <section aria-labelledby="hackathon-format" className="mt-section">
          <h2
            id="hackathon-format"
            className="text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl"
          >
            Two phases, one progression.
          </h2>
          <ol className="mt-10 border-y border-border">
            <li className="grid gap-5 border-b border-border py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8 sm:py-10">
              <span className="font-mono text-xs text-muted" aria-hidden="true">
                01
              </span>
              <article className="max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
                  In-Campus Challenge
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  Students form teams of 2–3 and work on carefully designed
                  problem statements. Evaluation moves through peer evaluation
                  by ambassadors, internal faculty evaluation, and external
                  experts. The top 15–20 teams qualify for the final phase.
                </p>
              </article>
            </li>
            <li className="grid gap-5 py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8 sm:py-10">
              <span className="font-mono text-xs text-muted" aria-hidden="true">
                02
              </span>
              <article className="max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
                  Offshore Event
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  The final phase is a 24-hour hackathon. Teams select a
                  real-world problem statement track and compete to build the
                  best prototype solution, with campfire coding sessions and
                  technical discussions as part of the experience.
                </p>
              </article>
            </li>
          </ol>
        </section>

        <section aria-labelledby="hackathon-outcomes" className="mt-section border-y border-border py-10 sm:py-14">
          <h2
            id="hackathon-outcomes"
            className="text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl"
          >
            Beyond the prototype.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Winning teams may have the opportunity to continue building their
            solution beyond the hackathon and deploy solutions in real industry
            settings.
          </p>
        </section>
      </Container>
    </main>
  );
}
