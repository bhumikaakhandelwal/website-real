const pillars = [
  {
    title: "Explore",
    description: "Students discover advanced tools and technologies.",
  },
  {
    title: "Build",
    description: "Students build real systems and prototypes.",
  },
  {
    title: "Compete",
    description: "Students participate in national-level hackathons.",
  },
] as const;

export function PillarList() {
  return (
    <ol className="border-y border-border">
      {pillars.map((pillar, index) => (
        <li
          key={pillar.title}
          className="grid gap-5 border-border py-7 not-last:border-b sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8 sm:py-9"
        >
          <span className="font-mono text-xs text-muted" aria-hidden="true">
            0{index + 1}
          </span>
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
              {pillar.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted">
              {pillar.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
