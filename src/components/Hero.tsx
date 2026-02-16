export default function Hero() {
  return (
    <section className="stars relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block rounded-full border border-surface-light bg-surface/50 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
          Software Consultancy &bull; Custom Development &bull; AI Agents
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          We Build Software
          <br />
          <span className="gradient-text">That Matters</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          From custom web apps and AI agents to legacy system modernization —
          Spaceman Tech turns your ideas into production-ready software.
          Based in the USA with engineering talent in Honduras.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
          >
            Start a Project
          </a>
          <a
            href="#portfolio"
            className="rounded-lg border border-surface-light px-8 py-3 text-base font-medium text-foreground transition-colors hover:border-muted hover:bg-surface"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
