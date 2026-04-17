const services = [
  {
    title: "AI Agents & Automation",
    description: "Custom AI agents that handle real workflows, not demos. From lead qualification to internal ops, we automate what slows you down.",
    icon: "AI",
  },
  {
    title: "LLM Integration",
    description: "We connect the right model to your data, your tools, and your team. GPT-4, Claude, Gemini. We know the tradeoffs and build what fits.",
    icon: "⚡",
  },
  {
    title: "AI-Powered Products",
    description: "Full products built AI-first. Web apps, mobile apps, internal tools, designed around what AI makes possible, not bolted on after.",
    icon: "</>",
  },
  {
    title: "Data & RAG Pipelines",
    description: "Make your AI actually know your business. We build retrieval systems, fine-tuning pipelines, and knowledge bases from your data.",
    icon: "DB",
  },
  {
    title: "AI Strategy & Consulting",
    description: "Not sure where AI fits in your business? We map it out, prioritize the highest-value use cases, and give you a real roadmap.",
    icon: "?!",
  },
  {
    title: "Nearshore AI Teams",
    description: "English-proficient AI engineers from Honduras. Same timezone as the US. Senior talent, no offshore friction.",
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
            What we <span className="accent-underline">build</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-dark/60">
            Software that works in the real world, not proof-of-concepts that die in a slide deck.
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
