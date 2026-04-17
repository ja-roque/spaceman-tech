import WaveDivider from "@/components/WaveDivider";

const WA_LINK =
  "https://wa.me/13024482304?text=Hi%2C%20I%27m%20interested%20in%20a%20custom%20website%20for%20my%20business.";

const FEATURES = [
  {
    title: "Built for your business",
    body: "Not a Wix template. Not a WordPress theme. A site designed and coded specifically for who you are and what you sell.",
  },
  {
    title: "Fast and clean",
    body: "Optimized for Core Web Vitals. Your site loads fast, ranks well, and looks great on every device.",
  },
  {
    title: "Copywriting included",
    body: "We help you figure out what to say and how to say it. Clear messaging that converts visitors into leads.",
  },
  {
    title: "Easy to update",
    body: "We hand off something you can actually manage. No proprietary CMS you'll need us for every time.",
  },
];

const INCLUDES = [
  "Custom design (no templates)",
  "Mobile-first, fully responsive",
  "Contact form with email delivery",
  "Google Analytics setup",
  "Basic SEO: sitemap, meta tags, schema",
  "Fast hosting on your own server",
  "Source code, yours to keep",
];

const STEPS = [
  { num: "01", label: "Tell us about your business and goals" },
  { num: "02", label: "We design, build, and review with you" },
  { num: "03", label: "You launch with a site that converts" },
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
      {/* Paint brush top-left */}
      <svg className="absolute opacity-10 float-slow" style={{ top: "10%", left: "5%", width: 80 }} viewBox="0 0 60 80" fill="none">
        <rect x="26" y="8" width="8" height="40" rx="3" fill="#f2e6d0" />
        <rect x="22" y="44" width="16" height="6" rx="2" fill="#8a8580" />
        <ellipse cx="30" cy="60" rx="8" ry="12" fill="#ff5f35" />
        <ellipse cx="30" cy="68" rx="5" ry="6" fill="#e8532d" />
      </svg>

      {/* Color palette top-right */}
      <svg className="absolute opacity-10 float-medium" style={{ top: "12%", right: "6%", width: 90 }} viewBox="0 0 80 70" fill="none">
        <path d="M40 8 C18 8 6 22 6 38 C6 54 18 64 34 62 C40 61 42 56 40 50 C38 44 42 40 48 42 C60 46 74 38 74 26 C74 16 58 8 40 8Z" fill="#ede8e0" />
        <circle cx="24" cy="28" r="6" fill="#ff5f35" />
        <circle cx="40" cy="20" r="6" fill="#2dd4bf" />
        <circle cx="56" cy="26" r="6" fill="#d4e5f7" />
        <circle cx="22" cy="44" r="6" fill="#f2e6d0" />
        <circle cx="36" cy="52" r="5" fill="#0d0d0d" fillOpacity="0.4" />
      </svg>

      {/* Pencil bottom-left */}
      <svg className="absolute opacity-9 float-slow" style={{ bottom: "20%", left: "7%", width: 60 }} viewBox="0 0 40 80" fill="none">
        <rect x="14" y="8" width="12" height="52" rx="3" fill="#f2e6d0" />
        <polygon points="14,60 26,60 20,74" fill="#ff5f35" />
        <rect x="14" y="8" width="12" height="10" rx="3" fill="#d4e5f7" />
        <rect x="16" y="20" width="8" height="2" rx="1" fill="#8a8580" fillOpacity="0.4" />
        <rect x="16" y="25" width="8" height="2" rx="1" fill="#8a8580" fillOpacity="0.4" />
        <rect x="16" y="30" width="8" height="2" rx="1" fill="#8a8580" fillOpacity="0.4" />
      </svg>

      {/* Ruler center-right */}
      <svg className="absolute opacity-8 float-medium" style={{ top: "50%", right: "8%", width: 70 }} viewBox="0 0 100 28" fill="none">
        <rect x="2" y="4" width="96" height="20" rx="4" fill="#d4e5f7" />
        {[10,20,30,40,50,60,70,80,90].map((x, i) => (
          <line key={i} x1={x} y1="4" x2={x} y2={i % 2 === 0 ? "14" : "10"} stroke="#0d0d0d" strokeWidth="1.5" strokeOpacity="0.3" />
        ))}
      </svg>

      {/* Sparkle / star top-center */}
      <svg className="absolute opacity-9 float-slow" style={{ top: "7%", left: "42%", width: 44 }} viewBox="0 0 44 44" fill="none">
        <path d="M22 4 L24.5 18 L38 16 L27 24 L32 38 L22 30 L12 38 L17 24 L6 16 L19.5 18 Z" fill="#ff5f35" fillOpacity="0.6" />
      </svg>

      {/* Color swatches bottom-right */}
      <svg className="absolute opacity-9 float-medium" style={{ bottom: "15%", right: "5%", width: 72 }} viewBox="0 0 64 48" fill="none">
        <rect x="2" y="2" width="18" height="44" rx="4" fill="#ff5f35" />
        <rect x="24" y="2" width="18" height="44" rx="4" fill="#2dd4bf" />
        <rect x="46" y="2" width="18" height="44" rx="4" fill="#d4e5f7" />
        <rect x="2" y="34" width="18" height="12" rx="4" fill="#e8532d" />
        <rect x="24" y="34" width="18" height="12" rx="4" fill="#1fb5a2" />
        <rect x="46" y="34" width="18" height="12" rx="4" fill="#a8c8e8" />
      </svg>
    </div>
  );
}

export default function WebsitesLanding() {
  return (
    <main className="min-h-screen bg-dark text-paper-white">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-4 text-center overflow-hidden">
        <FloatingSVGs />
        <div className="relative z-10">
          <p className="mb-6 text-xs uppercase tracking-widest text-paper-white/35 font-medium">
            Custom Website Development &nbsp;&middot;&nbsp; Spaceman Tech
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            A website that{" "}
            <span className="text-accent">actually works.</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-paper-white/70 sm:text-xl">
            We build custom websites for businesses that are done with generic templates and want
            something that represents them, loads fast, and brings in leads.
          </p>
          <p className="mx-auto mb-10 max-w-lg text-base text-paper-white/40">
            Starting from $1,500. Most sites are live in 1 to 2 weeks.
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

      <WaveDivider fillColor="#f5f0eb" bgColor="#0d0d0d" variant={2} />

      {/* Features */}
      <section className="px-6 py-16 bg-paper-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-3xl font-black tracking-tight text-text-dark text-center sm:text-4xl">
            Why custom beats templates
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

      <WaveDivider fillColor="#ede8e0" bgColor="#f5f0eb" variant={3} />

      {/* What's included */}
      <section className="px-6 py-16 bg-paper-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-2xl font-black tracking-tight text-text-dark sm:text-3xl">
            What&rsquo;s included
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

      <WaveDivider fillColor="#f2e6d0" bgColor="#ede8e0" variant={1} />

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

      <WaveDivider fillColor="#0d0d0d" bgColor="#f2e6d0" variant={3} />

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center bg-dark">
        <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
          Time for a real website.
        </h2>
        <p className="mb-8 text-paper-white/50 max-w-md mx-auto">
          Tell us about your business. We&rsquo;ll put a quote together and have it over to you today.
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
