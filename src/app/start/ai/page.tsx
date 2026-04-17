import WaveDivider from "@/components/WaveDivider";

const WA_LINK =
  "https://wa.me/13024482304?text=Hi%2C%20I%27m%20interested%20in%20building%20an%20AI%20agent%20or%20automation%20for%20my%20business.";

const FEATURES = [
  {
    title: "AI that does real work",
    body: "Lead qualification, appointment booking, internal ops, customer support. We build agents that actually close tasks, not just chat.",
  },
  {
    title: "Connected to your data",
    body: "Your CRM, your docs, your product. We integrate AI with the tools and data your business already runs on.",
  },
  {
    title: "Custom, not off-the-shelf",
    body: "No Zapier duct tape. We build purpose-built AI systems that do exactly what you need and nothing you don't.",
  },
  {
    title: "Built to last",
    body: "Proper architecture, real error handling, monitoring in place. This isn't a prototype, it's production software.",
  },
];

const USE_CASES = [
  "WhatsApp or SMS lead capture bot",
  "AI sales assistant that qualifies and closes",
  "Automated document processing",
  "Internal knowledge base agent",
  "Customer support automation",
  "LLM connected to your database",
];

const STEPS = [
  { num: "01", label: "Describe the workflow you want automated" },
  { num: "02", label: "We design the agent and quote the build" },
  { num: "03", label: "We ship it, you save hours every week" },
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#ff5f35" fillOpacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke="#ff5f35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FloatingSVGs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Robot head top-left */}
      <svg className="absolute opacity-10 float-slow" style={{ top: "8%", left: "4%", width: 90 }} viewBox="0 0 80 80" fill="none">
        <rect x="16" y="20" width="48" height="38" rx="8" fill="#ff5f35" />
        <rect x="28" y="8" width="24" height="14" rx="4" fill="#ff5f35" />
        <rect x="36" y="8" width="8" height="6" rx="2" fill="#0d0d0d" fillOpacity="0.4" />
        <circle cx="30" cy="36" r="6" fill="#0d0d0d" fillOpacity="0.5" />
        <circle cx="50" cy="36" r="6" fill="#0d0d0d" fillOpacity="0.5" />
        <rect x="28" y="48" width="24" height="5" rx="2.5" fill="#0d0d0d" fillOpacity="0.3" />
        <rect x="10" y="30" width="6" height="16" rx="3" fill="#ff5f35" />
        <rect x="64" y="30" width="6" height="16" rx="3" fill="#ff5f35" />
      </svg>

      {/* Circuit lines top-right */}
      <svg className="absolute opacity-8 float-medium" style={{ top: "14%", right: "6%", width: 100 }} viewBox="0 0 100 80" fill="none">
        <path d="M10 40 H35 V20 H65 V40 H90" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 60 H25 V40" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
        <path d="M90 20 V60 H75" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
        <circle cx="35" cy="40" r="3" fill="#2dd4bf" />
        <circle cx="65" cy="40" r="3" fill="#2dd4bf" />
        <circle cx="25" cy="40" r="3" fill="#2dd4bf" />
        <circle cx="75" cy="60" r="3" fill="#2dd4bf" />
        <rect x="42" y="14" width="16" height="12" rx="2" fill="#2dd4bf" fillOpacity="0.3" stroke="#2dd4bf" strokeWidth="1.5" />
      </svg>

      {/* Chat bubble bot bottom-left */}
      <svg className="absolute opacity-10 float-slow" style={{ bottom: "22%", left: "8%", width: 72 }} viewBox="0 0 64 64" fill="none">
        <rect x="4" y="4" width="48" height="36" rx="10" fill="#d4e5f7" />
        <path d="M14 40 L8 52 L24 44" fill="#d4e5f7" />
        <circle cx="18" cy="22" r="4" fill="#0d0d0d" fillOpacity="0.3" />
        <circle cx="32" cy="22" r="4" fill="#0d0d0d" fillOpacity="0.3" />
        <circle cx="46" cy="22" r="4" fill="#0d0d0d" fillOpacity="0.3" />
      </svg>

      {/* Small robot bottom-right */}
      <svg className="absolute opacity-8 float-medium" style={{ bottom: "18%", right: "5%", width: 64 }} viewBox="0 0 60 70" fill="none">
        <rect x="12" y="16" width="36" height="30" rx="6" fill="#f2e6d0" />
        <rect x="20" y="6" width="20" height="12" rx="4" fill="#f2e6d0" />
        <circle cx="22" cy="28" r="5" fill="#0d0d0d" fillOpacity="0.4" />
        <circle cx="38" cy="28" r="5" fill="#0d0d0d" fillOpacity="0.4" />
        <rect x="22" y="36" width="16" height="4" rx="2" fill="#0d0d0d" fillOpacity="0.25" />
        <rect x="6" y="22" width="6" height="12" rx="3" fill="#f2e6d0" />
        <rect x="48" y="22" width="6" height="12" rx="3" fill="#f2e6d0" />
        <rect x="18" y="46" width="8" height="14" rx="4" fill="#f2e6d0" />
        <rect x="34" y="46" width="8" height="14" rx="4" fill="#f2e6d0" />
      </svg>

      {/* Gear / cog center-right */}
      <svg className="absolute opacity-7 float-slow" style={{ top: "48%", right: "10%", width: 56 }} viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="10" stroke="#ff5f35" strokeWidth="3" fill="none" />
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <rect
            key={i}
            x="25" y="4"
            width="6" height="10"
            rx="2"
            fill="#ff5f35"
            transform={`rotate(${deg} 28 28)`}
          />
        ))}
      </svg>

      {/* Antenna / signal top-center */}
      <svg className="absolute opacity-8 float-medium" style={{ top: "6%", left: "45%", width: 48 }} viewBox="0 0 48 48" fill="none">
        <line x1="24" y1="40" x2="24" y2="20" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="16" r="4" fill="#2dd4bf" />
        <path d="M10 28 A16 16 0 0 1 38 28" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M4 34 A24 24 0 0 1 44 34" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function AILanding() {
  return (
    <main className="min-h-screen bg-dark text-paper-white">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-4 text-center overflow-hidden">
        <FloatingSVGs />
        <div className="relative z-10">
          <p className="mb-6 text-xs uppercase tracking-widest text-paper-white/35 font-medium">
            AI Agents &amp; Automation &nbsp;&middot;&nbsp; Spaceman Tech
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Put your business{" "}
            <span className="text-accent">on autopilot.</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-paper-white/70 sm:text-xl">
            We build custom AI agents that qualify leads, answer customers, process documents, and
            handle workflows, so you don&rsquo;t have to.
          </p>
          <p className="mx-auto mb-10 max-w-lg text-base text-paper-white/40">
            Most agents are live in 1 to 2 weeks.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-hover"
            style={{ boxShadow: "0 4px 24px rgba(255,95,53,0.35)" }}
          >
            Get a Quote Now
          </a>
          <p className="mt-3 text-sm text-paper-white/25">Opens WhatsApp. No forms, no waiting.</p>
        </div>
      </section>

      <WaveDivider fillColor="#f5f0eb" bgColor="#0d0d0d" variant={1} />

      {/* Features */}
      <section className="px-6 py-16 bg-paper-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-3xl font-black tracking-tight text-text-dark text-center sm:text-4xl">
            What we build
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-text-dark/8 bg-paper-cream p-6 paper-shadow">
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">{f.title}</div>
                <p className="text-text-dark/65 leading-relaxed text-sm">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#ede8e0" bgColor="#f5f0eb" variant={2} />

      {/* Use cases */}
      <section className="px-6 py-16 bg-paper-cream">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-black tracking-tight text-text-dark text-center sm:text-3xl">
            Common use cases
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {USE_CASES.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-paper-white border border-text-dark/8 px-4 py-3 paper-shadow">
                <CheckIcon />
                <span className="text-sm text-text-dark/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#f2e6d0" bgColor="#ede8e0" variant={3} />

      {/* How it works */}
      <section className="px-6 py-16 bg-paper-sand">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-10 text-2xl font-black tracking-tight text-text-dark sm:text-3xl">How it works</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {STEPS.map((s) => (
              <div key={s.num} className="flex-1 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent text-accent font-black text-sm">
                  {s.num}
                </div>
                <p className="text-sm font-semibold text-text-dark/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#1a1a1a" bgColor="#f2e6d0" variant={2} />

      {/* Beyond the chatbot */}
      <section className="px-6 py-16 bg-dark-soft">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Not just a chatbot</p>
          <h2 className="mb-4 text-2xl font-black tracking-tight text-paper-white sm:text-3xl">
            Need something more technical?
          </h2>
          <p className="text-paper-white/60 leading-relaxed max-w-xl mx-auto mb-8">
            Chatbots are the simple end of what we do. If you need AI embedded into your product,
            a pipeline that processes thousands of documents, a model fine-tuned on your data,
            or a system that makes decisions on your behalf, we build that too.
            Tell us what you&rsquo;re trying to solve and we&rsquo;ll figure out the right approach together.
          </p>
          <div className="grid gap-3 sm:grid-cols-3 text-left">
            {[
              { label: "LLM fine-tuning", desc: "Train models on your domain data for better, faster results." },
              { label: "AI pipelines", desc: "Ingest, classify, enrich, and act on data at scale." },
              { label: "Embedded AI", desc: "AI features built directly into your product or internal tools." },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-paper-white/10 p-4">
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-teal">{item.label}</div>
                <p className="text-xs text-paper-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#0d0d0d" bgColor="#1a1a1a" variant={2} />

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center bg-dark">
        <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
          What would you automate first?
        </h2>
        <p className="mb-8 text-paper-white/50 max-w-md mx-auto">
          Tell us the workflow. We&rsquo;ll design the agent, scope the build, and send you a quote today.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-hover"
          style={{ boxShadow: "0 4px 24px rgba(255,95,53,0.35)" }}
        >
          Get a Quote Now
        </a>
        <p className="mt-4 text-xs text-paper-white/20">
          Spaceman Tech LLC &nbsp;&middot;&nbsp; Delaware, USA &nbsp;&middot;&nbsp;{" "}
          <a href="/" className="underline underline-offset-2 hover:text-paper-white/40 transition-colors">
            Visit our full site
          </a>
        </p>
      </section>
    </main>
  );
}
