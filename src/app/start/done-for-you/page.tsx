import WaveDivider from "@/components/WaveDivider";
import WhatsAppMockup from "@/components/WhatsAppMockup";

const WA_LINK =
  "https://wa.me/13024482304?text=Hi%2C%20I%27ve%20been%20trying%20to%20build%20an%20app%20with%20a%20no-code%20tool%20and%20I%20need%20a%20real%20developer.";

const PAINS = [
  {
    title: "You hit the logic wall",
    body: "FlutterFlow and Bubble are great until your app needs real logic. Conditional flows, custom APIs, dynamic permissions — no-code tools fall apart fast.",
  },
  {
    title: "It still costs every month",
    body: "You're paying $70 to $200 a month and you still don't own anything. Cancel the subscription and your app disappears.",
  },
  {
    title: "It doesn't scale",
    body: "No-code apps are slow, fragile, and hard to extend. The moment real users show up, cracks appear.",
  },
  {
    title: "You're doing the work anyway",
    body: "No-code was supposed to save time. Instead you're debugging flows, watching tutorials, and still not done.",
  },
];

const WHAT_WE_BUILD = [
  "Custom logic that actually does what your business needs",
  "Real backend — database, auth, roles, API integrations",
  "AI features built in from the start, not bolted on",
  "Payments, subscriptions, and payouts via Stripe",
  "Fast, scalable, and yours to own completely",
];

const PLANS = [
  {
    name: "Monthly",
    price: "$300 / mo",
    desc: "We build and maintain your app. You pay monthly, we handle everything. Cancel anytime.",
    detail: "Setup fee applies. Price scales with complexity.",
  },
  {
    name: "One-time build",
    price: "From $3,000",
    desc: "You get the full source code, deployed and production-ready. Hosting billed separately at cost.",
    detail: "Most MVPs delivered in 1 to 2 weeks.",
  },
];

const MONTHLY_INCLUDES = [
  "Server hosting and infrastructure costs",
  "Uptime monitoring — if it goes down, we fix it",
  "Security and dependency updates",
  "Up to 2 hours of small changes per month (copy, styling, minor UI tweaks)",
  "WhatsApp or email support",
];

const MONTHLY_EXCLUDES = [
  "New features or sections. Those are quoted separately.",
  "Design overhauls",
  "Third-party service fees (Stripe, Twilio, etc.)",
];

const STEPS = [
  { num: "01", label: "Tell us what you tried to build" },
  { num: "02", label: "We scope it and quote in 24 hrs" },
  { num: "03", label: "We build it. You launch." },
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
      {/* Broken puzzle piece top-left */}
      <svg className="absolute opacity-10 float-slow" style={{ top: "8%", left: "4%", width: 80 }} viewBox="0 0 64 64" fill="none">
        <path d="M8 8 L28 8 L28 18 C28 18 32 14 36 18 C40 22 36 26 36 26 L28 26 L28 56 L8 56 Z" fill="#ff5f35" />
        <path d="M36 8 L56 8 L56 28 L46 28 C46 28 50 32 46 36 C42 40 38 36 38 36 L38 56 L56 56 L56 36" fill="#d4e5f7" fillOpacity="0.4" stroke="#d4e5f7" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>

      {/* Lightning bolt top-right — frustration */}
      <svg className="absolute opacity-10 float-medium" style={{ top: "10%", right: "5%", width: 56 }} viewBox="0 0 40 64" fill="none">
        <path d="M28 4 L10 34 L20 34 L12 60 L34 26 L22 26 Z" fill="#ff5f35" />
      </svg>

      {/* Wrench bottom-left */}
      <svg className="absolute opacity-9 float-slow" style={{ bottom: "20%", left: "5%", width: 72 }} viewBox="0 0 64 64" fill="none">
        <path d="M44 4 C36 4 30 10 30 18 C30 20 30 22 31 24 L8 48 C6 50 6 54 8 56 C10 58 14 58 16 56 L40 32 C42 33 44 34 46 34 C54 34 60 28 60 20 C60 18 59 16 58 14 L50 22 L44 22 L42 16 L50 8 C48 6 46 4 44 4Z" fill="#2dd4bf" fillOpacity="0.5" />
        <circle cx="12" cy="52" r="3" fill="#2dd4bf" fillOpacity="0.7" />
      </svg>

      {/* Checkmark / rocket bottom-right */}
      <svg className="absolute opacity-9 float-medium" style={{ bottom: "14%", right: "4%", width: 70 }} viewBox="0 0 60 64" fill="none">
        <path d="M30 4 C30 4 44 12 44 30 L44 46 L30 52 L16 46 L16 30 C16 12 30 4 30 4Z" fill="#ff5f35" fillOpacity="0.6" />
        <circle cx="30" cy="28" r="6" fill="#0d0d0d" fillOpacity="0.3" />
        <path d="M16 38 L8 46 L16 46 Z" fill="#f2e6d0" fillOpacity="0.5" />
        <path d="M44 38 L52 46 L44 46 Z" fill="#f2e6d0" fillOpacity="0.5" />
      </svg>

      {/* Gear top-center */}
      <svg className="absolute opacity-8 float-slow" style={{ top: "6%", left: "44%", width: 52 }} viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="10" fill="none" stroke="#d4e5f7" strokeWidth="3" />
        <circle cx="28" cy="28" r="4" fill="#d4e5f7" fillOpacity="0.5" />
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <rect key={i} x="25.5" y="4" width="5" height="8" rx="2" fill="#d4e5f7" fillOpacity="0.4"
            transform={`rotate(${deg} 28 28)`} />
        ))}
      </svg>
    </div>
  );
}

export default function DoneForYouLanding() {
  return (
    <main className="min-h-screen bg-dark text-paper-white">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-20 pb-4 text-center overflow-hidden">
        <FloatingSVGs />
        <div className="relative z-10">
          <p className="mb-6 text-xs uppercase tracking-widest text-paper-white/35 font-medium">
            Done-for-you app development &nbsp;&middot;&nbsp; Spaceman Tech
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Done fighting<br />
            <span className="text-accent">your no-code tool?</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-paper-white/70 sm:text-xl">
            FlutterFlow, Bubble, and Webflow are great until they are not.
            When your app needs real logic, real data, or real scale, you need a real developer.
          </p>
          <p className="mx-auto mb-10 max-w-lg text-base text-paper-white/40">
            We build it for you. Monthly plans from $300. One-time builds from $3,000.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-hover"
            style={{ boxShadow: "0 4px 24px rgba(255,95,53,0.35)" }}
          >
            Let us build it instead
          </a>
          <p className="mt-3 text-sm text-paper-white/25">Opens WhatsApp. No forms, no waiting.</p>
        </div>
      </section>

      <WaveDivider fillColor="#f5f0eb" bgColor="#0d0d0d" variant={3} />

      {/* Pain points */}
      <section className="px-6 py-16 bg-paper-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 text-3xl font-black tracking-tight text-text-dark text-center sm:text-4xl">
            Sound familiar?
          </h2>
          <p className="text-center text-text-dark/50 mb-10 text-sm">You are not alone. Most no-code projects hit the same wall.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {PAINS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-text-dark/8 bg-paper-cream p-6 paper-shadow">
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">{p.title}</div>
                <p className="text-text-dark/65 leading-relaxed text-sm">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#ede8e0" bgColor="#f5f0eb" variant={1} />

      {/* What we build */}
      <section className="px-6 py-16 bg-paper-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-2xl font-black tracking-tight text-text-dark sm:text-3xl">
            We build what no-code cannot
          </h2>
          <p className="text-text-dark/50 mb-8 text-sm">Real apps, real code, built by experienced developers.</p>
          <ul className="inline-block text-left space-y-3">
            {WHAT_WE_BUILD.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-dark/70">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WaveDivider fillColor="#f2e6d0" bgColor="#ede8e0" variant={2} />

      {/* Pricing */}
      <section className="px-6 py-16 bg-paper-sand">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-2xl font-black tracking-tight text-text-dark text-center sm:text-3xl">
            Two ways to work with us
          </h2>
          <p className="text-center text-text-dark/50 mb-10 text-sm">Pick what works for your budget.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {PLANS.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-text-dark/8 bg-paper-white p-6 paper-shadow">
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-accent">{plan.name}</div>
                <div className="mb-3 text-3xl font-black tracking-tight text-text-dark">{plan.price}</div>
                <p className="text-text-dark/65 leading-relaxed text-sm mb-2">{plan.desc}</p>
                <p className="text-text-dark/35 text-xs">{plan.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#f5f0eb" bgColor="#f2e6d0" variant={2} />

      {/* Monthly plan breakdown */}
      <section className="px-6 py-16 bg-paper-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-2xl font-black tracking-tight text-text-dark text-center sm:text-3xl">
            What the monthly plan includes
          </h2>
          <p className="text-center text-text-dark/50 mb-10 text-sm">No surprises. Here is exactly what you get.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-text-dark/8 bg-paper-cream p-6 paper-shadow">
              <div className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">Included</div>
              <ul className="space-y-3">
                {MONTHLY_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-dark/70">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-text-dark/8 bg-paper-cream p-6 paper-shadow">
              <div className="mb-4 text-xs font-bold uppercase tracking-wider text-text-dark/30">Not included</div>
              <ul className="space-y-3">
                {MONTHLY_EXCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-dark/40">
                    <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#0d0d0d" fillOpacity="0.06" />
                      <path d="M5 5l6 6M11 5l-6 6" stroke="#0d0d0d" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#ede8e0" bgColor="#f5f0eb" variant={3} />

      {/* How communication works */}
      <section className="px-6 py-16 bg-paper-cream">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-2xl font-black tracking-tight text-text-dark text-center sm:text-3xl">
            You message us. We handle it.
          </h2>
          <p className="text-center text-text-dark/50 mb-10 text-sm">
            Small changes via WhatsApp. No tickets, no calls, no waiting.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            <div className="flex-shrink-0">
              <WhatsAppMockup />
            </div>
            <div className="max-w-sm text-center lg:text-left">
              <ul className="space-y-4">
                {[
                  { heading: "Send us a message", body: "Text us on WhatsApp like you would a teammate. No forms, no tickets." },
                  { heading: "We confirm and do it", body: "If it is in scope, it is done — usually within a few hours." },
                  { heading: "You stay focused", body: "Your site stays healthy. You build your business." },
                ].map((item) => (
                  <li key={item.heading} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(255,95,53,0.15)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#ff5f35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-text-dark">{item.heading}</span>
                      <p className="text-sm text-text-dark/55 mt-0.5">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#0d0d0d" bgColor="#ede8e0" variant={1} />

      {/* How it works */}
      <section className="px-6 py-16 bg-dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-10 text-2xl font-black tracking-tight sm:text-3xl">How it works</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {STEPS.map((s) => (
              <div key={s.num} className="flex-1 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent text-accent font-black text-sm">
                  {s.num}
                </div>
                <p className="text-sm font-semibold text-paper-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillColor="#0d0d0d" bgColor="#0d0d0d" variant={2} />

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center bg-dark">
        <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
          Stop building it yourself.
        </h2>
        <p className="mb-8 text-paper-white/50 max-w-md mx-auto">
          Tell us what you tried to build. We will scope it, price it, and have a quote to you today.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-hover"
          style={{ boxShadow: "0 4px 24px rgba(255,95,53,0.35)" }}
        >
          Let us build it instead
        </a>
        <p className="mt-4 text-xs text-paper-white/20">
          Spaceman Tech LLC &nbsp;&middot;&nbsp; Delaware, USA &nbsp;&middot;&nbsp; Serving clients worldwide &nbsp;&middot;&nbsp;{" "}
          <a href="/" className="underline underline-offset-2 hover:text-paper-white/40 transition-colors">
            Visit our full site
          </a>
        </p>
      </section>
    </main>
  );
}
