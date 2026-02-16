const services = [
  {
    title: "Custom Software",
    description: "Web apps, mobile apps, platforms — designed and built from scratch for your business.",
    icon: "</>"
  },
  {
    title: "AI Agents",
    description: "Custom AI agents, workflow automation, and intelligent integrations that actually work.",
    icon: "AI",
  },
  {
    title: "Web & Mobile Apps",
    description: "Modern, responsive applications built with the frameworks that fit your needs.",
    icon: "[]",
  },
  {
    title: "Legacy Systems",
    description: "We modernize aging systems — migrate, refactor, or rebuild without breaking your business.",
    icon: ">>",
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, technology selection, and strategic guidance for your tech decisions.",
    icon: "?!",
  },
  {
    title: "Nearshore Teams",
    description: "English-proficient developers from Honduras. Same timezone. No friction.",
    icon: "HN",
  },
];

const cardColors = [
  "bg-paper-white",
  "bg-paper-cream",
  "bg-paper-blue",
  "bg-paper-sand",
  "bg-paper-coral",
  "bg-paper-mint",
];

const cardRotations = [
  "-rotate-1",
  "rotate-1",
  "-rotate-0.5",
  "rotate-0.5",
  "-rotate-1",
  "rotate-1",
];

export default function Services() {
  return (
    <section id="services" className="bg-paper-white paper-texture px-6 py-24 relative">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-text-dark sm:text-5xl">
            What we <span className="accent-underline">do</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-dark/60">
            End-to-end software services. From concept to deployment and beyond.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`paper-card paper-shadow rounded-2xl p-8 ${cardColors[i]} ${cardRotations[i]}`}
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-dark text-paper-white font-mono font-bold text-sm">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-dark">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-dark/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
