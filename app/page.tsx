import { constants } from "buffer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "The official website of DBCE Coders Club at Don Bosco College of Engineering.",
};

const council = [
  ["01", "President", "Rituraj Patil"],
  ["02", "Vice President", "Basil Shaikh"],
  ["03", "Secretary", "Aryan Vishwakarma"],
  ["04", "Treasurer", "Angelica Pereira"],
  ["05", "Internal Affairs", "Bhumika Khandelwal"],
];

const leaderboard = [
  ["01", "Sania Suleman", "7,500 XP"],
  ["02", "Bhumika Khandelwal", "7,480 XP"],
  ["03", "Akhil Nair", "6,480 XP"],
];

const faqs = [
  [
    "Who can join the club?",
    "Anyone at DBCE with curiosity and a willingness to contribute.",
  ],
  [
    "What happens at a workshop?",
    "Members learn a practical technology and build something together.",
  ],
  [
    "How do I get involved?",
    "Join an event, solve a challenge, contribute to a project, or reach out to the council.",
  ],
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">DBCE CODERS CLUB · GOA</p>
          <h1>
            Build. Break.
            <span>Learn.</span>
            <span>Deploy.</span>
          </h1>
          <br></br>
          <p className="hero-description">
            A student technology community for curious minds who learn by
            building.
          </p>

          <div className="hero-actions">
            <Link className="dark-button" href="#mission">
              Explore the club ↗
            </Link>
            <Link className="underlined-link" href="#join">
              Become a member →
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit orbit-c" />
          <div className="hero-device">
            <div className="device-top">
              <span>DBCE</span>
              <span>01</span>
            </div>
            <div className="device-code">
              <span>const</span> future = <b>build()</b>;
              <br />
              <span>while</span> (learning) {"{"}
              <br />
              &nbsp;&nbsp;ship();
              <br />
              {"}"}
            </div>
            <div className="device-bottom">CODERS CLUB</div>
          </div>
        </div>
      </section>


 <div className="overflow-hidden py-5">
  <div className="animate-marquee flex w-max whitespace-nowrap">
    {Array.from({ length: 4 }).map((_, repeat) => (
      <div
        key={repeat}
        className="flex shrink-0 items-center"
      >
        <span className="px-8 text-2xl font-bold tracking-wide md:text-4xl">
          BUILD
        </span>

        <span className="text-accent">✦</span>

        <span className="px-8 text-2xl font-bold tracking-wide md:text-4xl">
          BREAK
        </span>

        <span className="text-accent">✦</span>

        <span className="px-8 text-2xl font-bold tracking-wide md:text-4xl">
          LEARN
        </span>

        <span className="text-accent">✦</span>

        <span className="px-8 text-2xl font-bold tracking-wide md:text-4xl">
          DEPLOY
        </span>

        <span className="text-accent px-8">✦</span>
      </div>
    ))}
  </div>
</div>
  

      {/* MISSION */}
      <section id="mission" className="editorial-section two-column-section">
        <div>
          <p className="eyebrow">WHO WE ARE</p>
          <h2>
            Mission.
            <span>Build together.</span>
          </h2>
        </div>

        <div className="editorial-copy">
          <p className="large-statement">
            To build a vibrant community of programmers, innovators and
            problem-solvers by promoting coding culture, hackathons,
            open-source development and technical excellence.
          </p>
          <p>
            DBCE Coders Club brings together students who want to learn,
            create and make a mark beyond the classroom.
          </p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="editorial-section pillars-section">
        <div className="section-label">
          <p className="eyebrow">THE APPROACH</p>
          <h2>Four pillars.</h2>
        </div>

        <div className="editorial-list">
          <article>
            <small>01</small>
            <div>
              <h3>Build</h3>
              <p>Turn ideas into real projects, systems, and working prototypes.</p>
            </div>
          </article>
          <article>
            <small>02</small>
            <div>
              <h3>Break</h3>
              <p>Challenge assumptions, experiment boldly, and solve problems creatively.</p>
            </div>
          </article>
          <article>
            <small>03</small>
            <div>
              <h3>Learn</h3>
              <p>Explore new technologies, skills, and concepts through hands-on learning.</p>
            </div>
          </article>
          <article>
            <small>04</small>
            <div>
              <h3>Deploy</h3>
              <p>Take projects beyond development and bring them into the real world.</p>
            </div>
          </article>
        </div>
      </section>

      {/* HACKATHON */}
      <section className="dark-panel two-column-section">
        <div>
          <p className="eyebrow light-eyebrow">FLAGSHIP EVENT</p>
          <h2>
            Annual
            <span>Hackathon.</span>
          </h2>
          <p className="dark-copy">
            A two-phase experience designed to push students beyond beginner
            programming and introduce real software architecture.
          </p>
        </div>

        <div className="dark-list">
          <article>
            <small>01</small>
            <div>
              <h3>In-Campus Challenge</h3>
              <p>
                Teams of 2–3 work on carefully designed problem statements.
                Their work is evaluated by ambassadors, internal faculty, and
                external experts.
              </p>
            </div>
          </article>
          <article>
            <small>02</small>
            <div>
              <h3>Offshore Event</h3>
              <p>
                A 24-hour hackathon where teams select real-world problem
                tracks and compete to build the best prototype solution.
              </p>
            </div>
          </article>
          <Link className="lime-button" href="/hackathon">
            Explore the hackathon ↗
          </Link>
        </div>
      </section>

      {/* BEYOND */}
      <section className="editorial-section two-column-section">
        <div>
          <p className="eyebrow">WHAT COMES NEXT</p>
          <h2>
            Beyond the
            <span>Hackathon.</span>
          </h2>
          <p className="section-description">
            The roadmap also includes panel discussions, industry field
            visits, and opportunities connected to developer and AI
            conferences.
          </p>
        </div>

        <div className="editorial-list compact">
          <article>
            <small>01</small>
            <div>
              <h3>Panel Discussions</h3>
              <p>Engineers share insights into how real systems are built.</p>
            </div>
          </article>
          <article>
            <small>02</small>
            <div>
              <h3>Industry Field Visits</h3>
              <p>Students get direct exposure to R&amp;D teams.</p>
            </div>
          </article>
          <article>
            <small>03</small>
            <div>
              <h3>Conference Participation</h3>
              <p>Opportunities connected to developer and AI conferences.</p>
            </div>
          </article>
        </div>
      </section>

      {/* COUNCIL */}
      <section className="editorial-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PEOPLE BEHIND IT</p>
            <h2>
              Current
              <span>Council.</span>
            </h2>
          </div>
          <p>
            Organisers, enablers and fellow students building the conditions
            for good work.
          </p>
        </div>

        <div className="council-grid">
          {council.map(([number, role, name]) => (
            <article key={name}>
              <small>{number}</small>
              <span>{role}</span>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* XP */}
      <section className="dark-panel xp-panel">
        <div className="section-heading">
          <div>
            <p className="eyebrow light-eyebrow">GAMIFIED LEARNING</p>
            <h2>
              Earn your
              <span className="lime-text">place.</span>
            </h2>
          </div>
          <p>
            Learn, build, ship and earn points for your contribution to the
            club.
          </p>
        </div>

        <div className="xp-cards">
          {leaderboard.map(([rank, name, xp], index) => (
            <article className={index === 0 ? "xp-card active" : "xp-card"} key={name}>
              <small>{rank}</small>
              <strong>{name}</strong>
              <span>Club member</span>
              <b>{xp}</b>
            </article>
          ))}
        </div>

        
      </section>

      {/* FAQ */}
      <section className="editorial-section two-column-section">
        <div>
          <p className="eyebrow">GOOD TO KNOW</p>
          <h2>
            Questions,
            <span>answered.</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="orange-panel">
        <div>
          <p className="eyebrow dark-eyebrow">READY?</p>
          <h2>Let&apos;s build.</h2>
        </div>
        <Link className="dark-button" href="mailto:codersclub@dbce.edu.in">
          Join the movement ↗
        </Link>
      </section>
    </main>
  );
}
