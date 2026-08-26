import { Container } from "./components/container";
import { PillarList } from "./components/pillar-list";

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-[calc(100svh-var(--nav-height))] px-page py-page"
    >
      <Container>
        <section
          aria-labelledby="club-title"
          className="flex min-h-[calc(100svh-var(--nav-height)-var(--space-page)-var(--space-page))] flex-col rounded-panel border border-border bg-surface px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16"
        >
          <p className="text-sm font-medium tracking-tight text-foreground">
            DBCE Coders Club
          </p>

          <div className="flex flex-1 items-center">
            <div className="max-w-4xl py-section">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">
                Official website
              </p>
              <h1
                id="club-title"
                className="max-w-3xl text-display font-semibold leading-display tracking-[-0.055em] text-foreground"
              >
                A home for the DBCE coding community.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The official website of Coders Club at Don Bosco College of
                Engineering.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="pillars-title" className="py-section">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <h2
                id="pillars-title"
                className="text-4xl font-semibold leading-none tracking-[-0.05em] text-foreground sm:text-5xl"
              >
                Three pillars.
              </h2>
            </div>
            <PillarList />
          </div>
        </section>

        <section
          aria-labelledby="hackathon-title"
          className="rounded-panel bg-foreground px-6 py-10 text-background sm:px-10 sm:py-14 lg:px-16 lg:py-20"
        >
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/65">
                Flagship event
              </p>
              <h2
                id="hackathon-title"
                className="mt-5 text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-5xl"
              >
                Annual Hackathon.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-background/70 sm:text-lg sm:leading-8">
                An experience designed to take students beyond beginner
                programming and introduce real software architecture.
              </p>
            </div>

            <ol className="border-y border-background/20">
              <li className="grid gap-5 border-b border-background/20 py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8 sm:py-10">
                <span
                  className="font-mono text-xs text-background/60"
                  aria-hidden="true"
                >
                  01
                </span>
                <article>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    Phase One — In-Campus Challenge
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-background/70">
                    Teams of 2–3 work on carefully designed problem statements.
                    Their work is evaluated by ambassadors, internal faculty,
                    and external experts, with the top 15–20 teams qualifying
                    for the final phase.
                  </p>
                </article>
              </li>
              <li className="grid gap-5 py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8 sm:py-10">
                <span
                  className="font-mono text-xs text-background/60"
                  aria-hidden="true"
                >
                  02
                </span>
                <article>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    Phase Two — Offshore Event
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-7 text-background/70">
                    A 24-hour hackathon where teams select real-world problem
                    statement tracks and compete to build the best prototype
                    solution. Campfire coding sessions and technical chats
                    support the experience, while winning teams may have the
                    opportunity to continue building toward real industry
                    deployment.
                  </p>
                </article>
              </li>
            </ol>
          </div>
        </section>

        <section aria-labelledby="initiatives-title" className="py-section">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <h2
                id="initiatives-title"
                className="text-4xl font-semibold leading-none tracking-[-0.05em] text-foreground sm:text-5xl"
              >
                Beyond the Hackathon.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The roadmap also includes panel discussions, industry field
                visits, and opportunities connected to developer and AI
                conferences.
              </p>
            </div>

            <ul className="border-y border-border">
              <li className="grid gap-3 border-b border-border py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-9">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                  Panel Discussions
                </h3>
                <p className="text-base leading-7 text-muted">
                  Engineers share insights into how real systems are built and
                  maintained.
                </p>
              </li>
              <li className="grid gap-3 border-b border-border py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-9">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                  Industry Field Visits
                </h3>
                <p className="text-base leading-7 text-muted">
                  Students get direct exposure to R&D teams.
                </p>
              </li>
              <li className="grid gap-3 py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-9">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                  Conference Participation
                </h3>
                <p className="text-base leading-7 text-muted">
                  Opportunities connected to developer and AI conferences.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="activities-title" className="pb-section">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <h2
                id="activities-title"
                className="text-4xl font-semibold leading-none tracking-[-0.05em] text-foreground sm:text-5xl"
              >
                Activities.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
                The roadmap also identifies a range of learning and community
                activities.
              </p>
            </div>

            <ul className="border-y border-border">
              <li className="grid gap-3 border-b border-border py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-8">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                  Hackathons
                </h3>
                <p className="text-base leading-7 text-muted">
                  Team-based challenges centered on real-world problem
                  statements and prototype building.
                </p>
              </li>
              <li className="grid gap-3 border-b border-border py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-8">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                  Workshops and Technical Learning Activities
                </h3>
                <p className="text-base leading-7 text-muted">
                  Opportunities to explore tools, technologies, and technical
                  learning.
                </p>
              </li>
              <li className="grid gap-3 border-b border-border py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-8">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                  Panel Discussions
                </h3>
                <p className="text-base leading-7 text-muted">
                  Conversations with engineers about how real systems are built
                  and maintained.
                </p>
              </li>
              <li className="grid gap-3 border-b border-border py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-8">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                  Industry Field Visits
                </h3>
                <p className="text-base leading-7 text-muted">
                  Direct exposure to R&D teams.
                </p>
              </li>
              <li className="grid gap-3 py-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-8">
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-foreground sm:text-2xl">
                  Conference Participation
                </h3>
                <p className="text-base leading-7 text-muted">
                  Opportunities connected to developer and AI conferences.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="community-title"
          className="border-y border-border py-section"
        >
          <div className="max-w-3xl">
            <h2
              id="community-title"
              className="text-4xl font-semibold leading-none tracking-[-0.05em] text-foreground sm:text-5xl"
            >
              Take part in the community.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              DBCE Coders Club is a student technology community centered on
              learning, building, collaboration, projects, events, and
              innovation.
            </p>
          </div>
        </section>
      </Container>
    </main>
  );
}
