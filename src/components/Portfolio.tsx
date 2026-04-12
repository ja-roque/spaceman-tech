const projects = [
  {
    name: "dayby.dev",
    url: "https://dayby.dev",
    description: "Developer productivity tool — track daily work, stay focused on what matters.",
    tags: ["Web App", "Productivity", "SaaS"],
    color: "bg-paper-blue",
    rotation: "-rotate-1",
    image: null,
  },
  {
    name: "donarmando.io",
    url: "https://donarmando.io",
    description: "Custom platform solving real-world business needs with a polished experience.",
    tags: ["Platform", "Full-Stack", "Custom"],
    color: "bg-paper-sand",
    rotation: "rotate-1",
    image: null,
  },
  {
    name: "tripalbum.app",
    url: "https://tripalbum.app",
    description: "Organize and share trip photos and memories in stunning albums.",
    tags: ["Mobile", "Travel", "Photo"],
    color: "bg-paper-coral",
    rotation: "rotate-0.5",
    image: null,
  },
  {
    name: "smartprice.app",
    url: "https://smartprice.app",
    description: "Intelligent pricing tool with real-time market data for smarter decisions.",
    tags: ["AI/ML", "Pricing", "Analytics"],
    color: "bg-paper-mint",
    rotation: "-rotate-0.5",
    image: null,
  },
  {
    name: "jrboatliftelectric.com",
    url: "https://jrboatliftelectric.com",
    description: "Marine & dock electrical contractor in Sarasota, FL — full web presence with SEO, lead capture, and WhatsApp integration.",
    tags: ["Website", "Local SEO", "Lead Gen"],
    color: "bg-paper-blue",
    rotation: "-rotate-1",
    image: "/portfolio-jrboatliftelectric.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-paper-cream paper-texture px-6 py-24 relative">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight text-text-dark sm:text-5xl">
            We don&apos;t just talk.
            <br />
            We <span className="accent-underline">ship</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-dark/60">
            Real products, running in production, built by us from the ground up.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`paper-card paper-shadow-deep group rounded-2xl overflow-hidden ${project.color} ${project.rotation}`}
            >
              {project.image && (
                <div className="w-full overflow-hidden border-b border-dark/10">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    style={{ maxHeight: "180px" }}
                  />
                </div>
              )}
              <div className={`p-8`}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-black text-text-dark">
                  {project.name}
                </h3>
                <svg
                  className="h-5 w-5 text-text-dark/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-text-dark/60">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-dark/10 px-3 py-1 text-xs font-bold text-text-dark/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
