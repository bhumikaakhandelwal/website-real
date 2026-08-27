import type { Metadata } from "next";
import { Container } from "../components/container";
import { XPVisual } from "../components/xp-visual";
import { Reveal } from "../components/reveal";
import {
  leaderboardNote,
  leaderboardTypes,
  rewards,
  xpActivities,
  xpActivityFootnote,
  xpIntro,
  xpLevels,
  xpPenalties,
} from "../content/xp-content";

export const metadata: Metadata = {
  title: "XP System",
  description:
    "How XP works at DBCE Coders Club — how members earn experience points, level titles, leaderboards, rewards, and penalties.",
};

export default function XpSystemPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero ---------------------------------------------------- */}
      <section className="border-b border-border px-page py-section">
        <Container>
          <div className="flex items-center justify-between border-b border-border pb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            <span>Community framework</span>
            <span className="text-accent-text">XP / 01</span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-12">
            <Reveal>
              <h1 className="text-display font-display font-bold leading-display tracking-[-0.045em] text-foreground">
                XP
                <br />
                <span className="text-accent-text">System.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                A simple way to recognize the time, energy, and care members
                put into the community. {xpIntro}
              </p>
            </Reveal>
            <Reveal delay={120} className="mx-auto w-full max-w-xs">
              <XPVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* How you earn XP ------------------------------------------ */}
      <section
        aria-labelledby="earn-xp"
        className="border-b border-border px-page py-section"
      >
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-accent-text">01</span>
                <h2
                  id="earn-xp"
                  className="text-3xl font-display font-bold tracking-[-0.04em] text-foreground sm:text-4xl"
                >
                  How you earn XP
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted">
                Show up, share what you know, and keep building. Every
                contribution counts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 overflow-hidden rounded-panel border border-border">
              <div className="flex items-center justify-between bg-surface px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted sm:px-7">
                <span>Activity</span>
                <span>XP awarded</span>
              </div>
              <ul>
                {xpActivities.map((row, index) => (
                  <li
                    key={row.activity}
                    className={`flex items-center justify-between border-t border-border px-5 py-4 sm:px-7 ${
                      index % 2 === 1 ? "bg-surface/60" : ""
                    }`}
                  >
                    <span className="text-sm text-foreground sm:text-base">
                      {row.activity}
                      {row.starred && (
                        <span
                          className="ml-1 text-accent-text"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-sm font-semibold text-foreground sm:text-base">
                      +{row.xp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 max-w-none whitespace-nowrap text-xs leading-6 text-muted">
              <span className="text-accent-text">*</span> {xpActivityFootnote}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Levels and titles ----------------------------------------- */}
      <section
        aria-labelledby="levels-titles"
        className="border-b border-border px-page py-section"
      >
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-accent-text">02</span>
                <h2
                  id="levels-titles"
                  className="text-3xl font-display font-bold tracking-[-0.04em] text-foreground sm:text-4xl"
                >
                  Levels and titles
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted">
                Keep moving forward. Your XP unlocks a title that reflects the
                way you contribute.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 overflow-x-auto rounded-panel border border-border">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <thead>
                  <tr className="bg-surface text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                    <th scope="col" className="px-5 py-3 sm:px-7">
                      Level
                    </th>
                    <th scope="col" className="px-5 py-3 sm:px-7">
                      XP required
                    </th>
                    <th scope="col" className="px-5 py-3 text-right sm:px-7">
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {xpLevels.map((level) => (
                    <tr
                      key={level.level}
                      className="border-t border-border transition-colors hover:bg-surface/60"
                    >
                      <td className="px-5 py-4 text-sm text-foreground sm:px-7 sm:text-base">
                        Level {level.level}
                      </td>
                      <td className="px-5 py-4 text-sm text-muted sm:px-7 sm:text-base">
                        {level.xpRequired} XP
                      </td>
                      <td className="px-5 py-4 text-right text-sm font-semibold text-accent-text sm:px-7 sm:text-base">
                        {level.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Leaderboards ------------------------------------------------ */}
      <section
        aria-labelledby="leaderboards"
        className="border-b border-border px-page py-section"
      >
        <Container>
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-accent-text">03</span>
              <h2
                id="leaderboards"
                className="text-3xl font-display font-bold tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                Leaderboards
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              {leaderboardNote}
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {leaderboardTypes.map((board, index) => (
              <Reveal key={board.title} delay={index * 80} as="li">
                <div className="h-full rounded-panel border border-border p-6">
                  <span className="font-mono text-xs text-muted">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-foreground">
                    {board.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {board.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Rewards ------------------------------------------------------ */}
      <section
        aria-labelledby="rewards"
        className="border-b border-border px-page py-section"
      >
        <Container>
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-accent-text">04</span>
              <h2
                id="rewards"
                className="text-3xl font-display font-bold tracking-[-0.04em] text-foreground sm:text-4xl"
              >
                Rewards &amp; recognition
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {rewards.map((reward) => (
                <li
                  key={reward}
                  className="flex items-center gap-4 rounded-panel border border-border bg-surface p-6"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium text-foreground">
                    {reward}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Penalties — on ink to signal "the other side" of the ledger */}
      <section aria-labelledby="penalties" className="bg-ink px-page py-section text-ink-foreground">
        <Container>
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-accent">05</span>
              <h2
                id="penalties"
                className="text-3xl font-display font-bold tracking-[-0.04em] text-ink-foreground sm:text-4xl"
              >
                XP penalties
              </h2>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
              XP is a record of trust as much as effort. These deductions
              keep the system fair for everyone building in good faith.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 overflow-hidden rounded-panel border border-ink-border">
              <div className="flex items-center justify-between bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted sm:px-7">
                <span>Violation</span>
                <span>Penalty</span>
              </div>
              <ul>
                {xpPenalties.map((row, index) => (
                  <li
                    key={row.violation}
                    className={`flex items-center justify-between border-t border-ink-border px-5 py-4 sm:px-7 ${
                      index % 2 === 1 ? "bg-white/[0.03]" : ""
                    }`}
                  >
                    <span className="text-sm text-ink-foreground sm:text-base">
                      {row.violation}
                    </span>
                    <span className="font-mono text-sm font-semibold text-accent sm:text-base">
                      {row.penalty} XP
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
