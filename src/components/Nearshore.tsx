const advantages = [
  {
    stat: "CST/EST",
    label: "Time Zone Aligned",
    description: "Honduras is in CST. Real-time collaboration with US teams, no late-night standups.",
  },
  {
    stat: "Top 3",
    label: "English in LATAM",
    description: "Honduras ranks among the highest English proficiency scores in all of Latin America.",
  },
  {
    stat: "40-60%",
    label: "Cost Savings",
    description: "Senior-level talent at a fraction of US rates. Quality stays. Budget breathes.",
  },
  {
    stat: "1",
    label: "Point of Contact",
    description: "We handle hiring, management, and quality. You get a team that just works.",
  },
];

export default function Nearshore() {
  return (
    <section id="nearshore" className="bg-paper-sand paper-texture px-6 py-24 relative">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-text-dark sm:text-5xl">
            Your team in <span className="accent-underline">Central America</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-dark/60">
            Scale your engineering team with skilled developers who speak your language
            and share your timezone.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => {
            const colors = ["bg-paper-white", "bg-paper-blue", "bg-paper-mint", "bg-paper-cream"];
            const rotations = ["-rotate-1", "rotate-1", "-rotate-0.5", "rotate-0.5"];
            return (
              <div
                key={item.label}
                className={`paper-card paper-shadow rounded-2xl p-6 text-center ${colors[i]} ${rotations[i]}`}
              >
                <div className="mb-2 text-3xl font-black text-accent">
                  {item.stat}
                </div>
                <div className="mb-3 text-sm font-bold text-text-dark">
                  {item.label}
                </div>
                <p className="text-sm leading-relaxed text-text-dark/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* How it works */}
        <div className="mt-16 rounded-2xl bg-paper-white p-10 paper-shadow-deep">
          <h3 className="mb-8 text-center text-2xl font-black text-text-dark">
            How it works
          </h3>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", text: "Tell us what roles and skills you need." },
              { step: "02", text: "We source, vet, and match top Honduran engineers." },
              { step: "03", text: "Your new team integrates into your workflow. We manage the rest." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white font-mono font-bold text-sm">
                  {item.step}
                </div>
                <p className="text-sm leading-relaxed text-text-dark/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
