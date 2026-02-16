const projects = [
  {
    name: "Dayby.Dev",
    url: "https://dayby.dev",
    description:
      "A developer productivity tool designed to help engineers track their daily work and stay focused on what matters.",
    tags: ["Web App", "Productivity", "SaaS"],
  },
  {
    name: "DonArmando.io",
    url: "https://donarmando.io",
    description:
      "A custom-built platform solving real-world business needs with a polished user experience and robust backend.",
    tags: ["Platform", "Full-Stack", "Custom"],
  },
  {
    name: "TripAlbum.app",
    url: "https://tripalbum.app",
    description:
      "A beautiful app for travelers to organize and share their trip photos and memories in stunning albums.",
    tags: ["Mobile", "Travel", "Photo"],
  },
  {
    name: "SmartPrice.app",
    url: "https://smartprice.app",
    description:
      "An intelligent pricing tool that helps businesses and consumers make smarter decisions with real-time market data.",
    tags: ["AI/ML", "Pricing", "Analytics"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Products We&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted">
            Real products, shipped and running in production. We don&apos;t just consult
            — we build.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group rounded-xl border border-surface-light bg-surface/50 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <svg
                  className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
