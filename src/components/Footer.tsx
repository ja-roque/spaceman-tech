export default function Footer() {
  return (
    <footer className="border-t border-paper-white/10 bg-dark">
      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Main columns */}
        <div className="grid gap-8 md:grid-cols-4 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center space-x-3">
              <span className="text-xl font-bold text-paper-white">Spaceman Tech</span>
            </div>
            <p className="text-sm text-paper-white/40">
              Full-stack development firm. We build web apps, AI integrations, and everything in between.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 font-semibold text-paper-white">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Nearshore", href: "#nearshore" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-paper-white/40 transition-colors hover:text-paper-white/80">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-paper-white">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-paper-white/40 transition-colors hover:text-paper-white/80">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-paper-white">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@spacemantech.ai" className="text-sm text-paper-white/40 transition-colors hover:text-paper-white/80">
                  hello@spacemantech.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & Security */}
        <div className="border-t border-paper-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* Stripe badge */}
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="text-xs uppercase tracking-wider text-paper-white/30">Secure Payments</span>
              <div className="flex items-center gap-2 rounded-lg bg-paper-white/5 px-3 py-2">
                <img src="/stripe-logo.svg" alt="Stripe" className="h-6" />
                <span className="text-xs text-paper-white/40">Powered by Stripe</span>
              </div>
            </div>

            {/* Card logos */}
            <div className="flex flex-col items-center gap-3 md:items-end">
              <span className="text-xs uppercase tracking-wider text-paper-white/30">We Accept</span>
              <div className="flex items-center gap-3">
                <img src="/visa-credit-card.svg" alt="Visa" className="h-8" />
                <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
                <img src="/amex.svg" alt="American Express" className="h-8" />
                <img src="/discover-credit-card.svg" alt="Discover" className="h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-paper-white/10 pt-8 text-center">
          <p className="text-sm text-paper-white/30">
            &copy; {new Date().getFullYear()} Spaceman Tech LLC. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
