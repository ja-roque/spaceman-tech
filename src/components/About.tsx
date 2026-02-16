export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              About <span className="gradient-text">Spaceman Tech</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Spaceman Tech LLC is a Delaware-registered software consultancy
                with operations in both the United States and Honduras through
                our sister company, Ingenier&iacute;a y Desarrollo &Aacute;gil S de RL.
              </p>
              <p>
                Founded by a hands-on software engineer with deep experience
                across the full stack — from frontend frameworks and mobile apps
                to backend systems, cloud infrastructure, and AI — we bring a
                builder&apos;s mentality to every engagement.
              </p>
              <p>
                We&apos;re not a body shop. We&apos;re a team that ships real products.
                Our portfolio speaks for itself: multiple production apps built
                from the ground up, each solving real problems for real users.
              </p>
              <p>
                Whether you need a technical co-founder, a development partner,
                or a full engineering team — we adapt to what your project needs.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-surface-light bg-surface/50 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm font-semibold text-accent">
                USA Entity
              </div>
              <div className="text-lg font-semibold">Spaceman Tech LLC</div>
              <div className="text-sm text-muted">
                Registered in Delaware, USA
              </div>
            </div>
            <div className="rounded-xl border border-surface-light bg-surface/50 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm font-semibold text-accent">
                Honduras Entity
              </div>
              <div className="text-lg font-semibold">
                Ingenier&iacute;a y Desarrollo &Aacute;gil S de RL
              </div>
              <div className="text-sm text-muted">
                Registered in Honduras
              </div>
            </div>
            <div className="rounded-xl border border-surface-light bg-surface/50 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm font-semibold text-primary-light">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "Python",
                  "React Native",
                  "PostgreSQL",
                  "AWS",
                  "AI/LLMs",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-surface-light bg-background px-3 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
