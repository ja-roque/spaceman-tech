const advantages = [
  {
    stat: "CST/EST",
    label: "Time Zone Aligned",
    description: "Honduras is in CST — overlapping directly with US business hours. Real-time collaboration, no late-night standups.",
  },
  {
    stat: "Top 3",
    label: "English Proficiency in LATAM",
    description: "Honduras ranks among the highest English proficiency scores in Latin America, ensuring smooth communication.",
  },
  {
    stat: "40-60%",
    label: "Cost Savings",
    description: "Get senior-level engineering talent at a fraction of US rates without compromising on quality or communication.",
  },
  {
    stat: "1",
    label: "Point of Contact",
    description: "We handle hiring, management, and quality. You get a dedicated team that integrates seamlessly with yours.",
  },
];

export default function Nearshore() {
  return (
    <section id="nearshore" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Nearshore Talent from{" "}
            <span className="gradient-text">Honduras</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Scale your engineering team with skilled developers who speak your
            language, share your timezone, and deliver at the highest level.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.label}
              className="card-hover rounded-xl border border-surface-light bg-surface/50 p-6 text-center backdrop-blur-sm"
            >
              <div className="mb-2 text-3xl font-bold gradient-text">
                {item.stat}
              </div>
              <div className="mb-3 text-sm font-semibold text-foreground">
                {item.label}
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-surface-light bg-surface/50 p-8 backdrop-blur-sm glow-border">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-4 text-xl font-semibold">
              How It Works
            </h3>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  1
                </div>
                <p className="text-sm text-muted">
                  Tell us what roles and skills you need for your team.
                </p>
              </div>
              <div>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  2
                </div>
                <p className="text-sm text-muted">
                  We source, vet, and match top Honduran engineers to your project.
                </p>
              </div>
              <div>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  3
                </div>
                <p className="text-sm text-muted">
                  Your new team integrates directly into your workflow — managed by us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
