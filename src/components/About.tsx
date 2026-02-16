export default function About() {
  return (
    <section id="about" className="bg-paper-blue paper-texture px-6 py-24 relative">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-text-dark sm:text-5xl">
              About <span className="accent-underline">us</span>
            </h2>
            <div className="space-y-4 text-text-dark/70 leading-relaxed">
              <p>
                Spaceman Tech LLC is a Delaware-registered software consultancy
                with operations in both the United States and Honduras through
                our sister company, Ingenier&iacute;a y Desarrollo &Aacute;gil S de RL.
              </p>
              <p>
                Founded by a hands-on software engineer with deep experience
                across the full stack — frontend, mobile, backend, cloud, and AI
                — we bring a builder&apos;s mentality to every engagement.
              </p>
              <p>
                We&apos;re not a body shop. We ship real products. Our portfolio
                is proof. Whether you need a technical co-founder, a dev
                partner, or a full engineering team — we adapt.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="paper-card paper-shadow rounded-2xl bg-paper-white p-6 -rotate-1">
              <div className="mb-1 text-xs font-bold text-accent uppercase tracking-wider">
                USA Entity
              </div>
              <div className="text-lg font-bold text-text-dark">Spaceman Tech LLC</div>
              <div className="text-sm text-text-dark/50">Delaware, USA</div>
            </div>
            <div className="paper-card paper-shadow rounded-2xl bg-paper-cream p-6 rotate-1">
              <div className="mb-1 text-xs font-bold text-teal uppercase tracking-wider">
                Honduras Entity
              </div>
              <div className="text-lg font-bold text-text-dark">
                Ingenier&iacute;a y Desarrollo &Aacute;gil S de RL
              </div>
              <div className="text-sm text-text-dark/50">Honduras</div>
            </div>
            <div className="paper-card paper-shadow rounded-2xl bg-paper-sand p-6 -rotate-0.5">
              <div className="mb-1 text-xs font-bold text-text-dark/40 uppercase tracking-wider">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "React", "Next.js", "Node.js", "TypeScript",
                  "Python", "React Native", "PostgreSQL",
                  "AWS", "AI/LLMs", "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-dark px-3 py-1 text-xs font-bold text-paper-white"
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
