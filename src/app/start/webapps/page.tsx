import WaveDivider from "@/components/WaveDivider";

const WA_LINK =
  "https://wa.me/13024482304?text=Hi%2C%20I%27m%20interested%20in%20building%20a%20custom%20web%20app.";

const FEATURES = [
  {
    title: "Built from scratch",
    body: "No templates, no WordPress, no shortcuts. We write every line for your exact use case.",
  },
  {
    title: "Full-stack delivery",
    body: "Backend, frontend, database, auth, payments. Everything production-ready on day one.",
  },
  {
    title: "US company, senior team",
    body: "Delaware LLC. Engineers who've shipped real SaaS products, not juniors learning on your dime.",
  },
  {
    title: "You own it completely",
    body: "Full source code, your servers, your domain. No vendor lock-in, ever.",
  },
];

const INCLUDES = [
  "React or Next.js frontend",
  "Node.js or Ruby on Rails backend",
  "PostgreSQL database",
  "Auth, roles, and permissions",
  "Stripe payments if needed",
  "Deployed to AWS or DigitalOcean",
  "Full source code handoff",
];

const STEPS = [
  { num: "01", label: "Tell us what you need" },
  { num: "02", label: "We scope and quote in 24 hrs" },
  { num: "03", label: "We build, you launch" },
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
      {/* Thumbs up top-left */}
      <svg className="absolute opacity-10 float-slow" style={{ top: "10%", left: "5%", width: 80 }} viewBox="0 0 60 60" fill="none">
        <path d="M20 28 L26 10 C27 7 30 6 32 8 L32 22 L46 22 C49 22 51 25 50 28 L46 44 C45 47 43 48 40 48 L20 48 Z" fill="#ff5f35" />
        <rect x="8" y="28" width="12" height="20" rx="4" fill="#ff5f35" />
        <circle cx="14" cy="26" r="3" fill="#ff5f35" />
      </svg>

      {/* Mobile phone top-right */}
      <svg className="absolute opacity-10 float-medium" style={{ top: "12%", right: "6%", width: 64 }} viewBox="0 0 50 80" fill="none">
        <rect x="8" y="4" width="34" height="72" rx="8" fill="#d4e5f7" />
        <rect x="12" y="12" width="26" height="48" rx="4" fill="#0d0d0d" fillOpacity="0.15" />
        <circle cx="25" cy="68" r="3" fill="#0d0d0d" fillOpacity="0.3" />
        <rect x="18" y="8" width="14" height="3" rx="1.5" fill="#0d0d0d" fillOpacity="0.2" />
        <rect x="16" y="20" width="18" height="2" rx="1" fill="#ff5f35" fillOpacity="0.5" />
        <rect x="16" y="26" width="12" height="2" rx="1" fill="#0d0d0d" fillOpacity="0.2" />
        <rect x="16" y="32" width="16" height="2" rx="1" fill="#0d0d0d" fillOpacity="0.2" />
        <rect x="16" y="42" width="18" height="8" rx="3" fill="#ff5f35" fillOpacity="0.4" />
      </svg>

      {/* Shopping cart bottom-left */}
      <svg className="absolute opacity-9 float-slow" style={{ bottom: "22%", left: "6%", width: 76 }} viewBox="0 0 64 56" fill="none">
        <path d="M4 4 L12 4 L20 36 L52 36 L60 14 L16 14" stroke="#f2e6d0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="46" r="6" fill="#f2e6d0" />
        <circle cx="46" cy="46" r="6" fill="#f2e6d0" />
        <rect x="28" y="20" width="8" height="12" rx="2" fill="#ff5f35" fillOpacity="0.5" />
        <rect x="38" y="20" width="8" height="12" rx="2" fill="#ff5f35" fillOpacity="0.5" />
      </svg>

      {/* Laptop bottom-right */}
      <svg className="absolute opacity-9 float-medium" style={{ bottom: "16%", right: "5%", width: 88 }} viewBox="0 0 80 60" fill="none">
        <rect x="8" y="6" width="64" height="42" rx="6" fill="#2dd4bf" fillOpacity="0.3" stroke="#2dd4bf" strokeWidth="2" />
        <rect x="14" y="12" width="52" height="30" rx="3" fill="#0d0d0d" fillOpacity="0.4" />
        <rect x="2" y="48" width="76" height="8" rx="4" fill="#2dd4bf" fillOpacity="0.2" stroke="#2dd4bf" strokeWidth="1.5" />
        <rect x="28" y="48" width="24" height="4" rx="2" fill="#2dd4bf" fillOpacity="0.4" />
        <rect x="20" y="18" width="22" height="2" rx="1" fill="#2dd4bf" fillOpacity="0.5" />
        <rect x="20" y="24" width="16" height="2" rx="1" fill="#2dd4bf" fillOpacity="0.3" />
        <rect x="20" y="30" width="20" height="2" rx="1" fill="#2dd4bf" fillOpacity="0.3" />
        <rect x="46" y="18" width="14" height="14" rx="3" fill="#ff5f35" fillOpacity="0.4" />
      </svg>

      {/* Rocket top-center */}
      <svg className="absolute opacity-9 float-slow" style={{ top: "8%", left: "43%", width: 50 }} viewBox="0 0 48 64" fill="none">
        <path d="M24 4 C24 4 36 12 36 30 L36 46 L24 52 L12 46 L12 30 C12 12 24 4 24 4Z" fill="#ff5f35" fillOpacity="0.6" />
        <circle cx="24" cy="28" r="6" fill="#0d0d0d" fillOpacity="0.3" />
        <path d="M12 38 L4 46 L12 46 Z" fill="#f2e6d0" fillOpacity="0.5" />
        <path d="M36 38 L44 46 L36 46 Z" fill="#f2e6d0" fillOpacity="0.5" />
        <rect x="20" y="50" width="8" height="10" rx="2" fill="#ff5f35" fillOpacity="0.4" />
      </svg>

      {/* Bar chart center-right */}
      <svg className="absolute opacity-8 float-medium" style={{ top: "45%", right: "9%", width: 60 }} viewBox="0 0 56 48" fill="none">
        <rect x="4" y="28" width="10" height="16" rx="2" fill="#d4e5f7" />
        <rect x="18" y="18" width="10" height="26" rx="2" fill="#d4e5f7" />
        <rect x="32" y="8" width="10" height="36" rx="2" fill="#ff5f35" fillOpacity="0.7" />
        <rect x="46" y="14" width="10" height="30" rx="2" fill="#d4e5f7" />
        <line x1="2" y1="46" x2="54" y2="46" stroke="#d4e5f7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function WebAppsLanding() {
  return (
    <main className="min-h-screen bg-dark text-paper-white">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-4 text-center overflow-hidden">
        <FloatingSVGs />
        <div className="relative z-10">
          <p className="mb-6 text-xs uppercase tracking-widest text-paper-white/35 font-medium">
            Custom Web App Development &nbsp;&middot;&nbsp; Spaceman Tech
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your web app,{" "}
            <span className="text-accent">built right.</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-paper-white/70 sm:text-xl">
            We build custom SaaS tools, internal platforms, and client portals. Production-ready,
            designed to scale, and yours to keep.
          </p>
          <p className="mx-auto mb-10 max-w-lg text-base text-paper-white/40">
            Starting from $3,000. Most MVPs ship in 1 to 2 weeks.
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

      <WaveDivider fillColor="#f5f0eb" bgColor="#0d0d0d" variant={3} />

      {/* Features */}
      <section className="px-6 py-16 bg-paper-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-3xl font-black tracking-tight text-text-dark text-center sm:text-4xl">
            What you get
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

      <WaveDivider fillColor="#ede8e0" bgColor="#f5f0eb" variant={1} />

      {/* Stack */}
      <section className="px-6 py-16 bg-paper-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-2xl font-black tracking-tight text-text-dark sm:text-3xl">
            Everything included
          </h2>
          <ul className="inline-block text-left space-y-3">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-dark/70">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WaveDivider fillColor="#f2e6d0" bgColor="#ede8e0" variant={2} />

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

      <WaveDivider fillColor="#0d0d0d" bgColor="#f2e6d0" variant={1} />

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center bg-dark">
        <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
          Ready to build?
        </h2>
        <p className="mb-8 text-paper-white/50 max-w-md mx-auto">
          Tell us what you have in mind. We&rsquo;ll scope it, price it, and have a quote to you today.
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
