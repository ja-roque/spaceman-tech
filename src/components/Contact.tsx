export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Build <span className="gradient-text">Together</span>
        </h2>
        <p className="mb-10 text-muted">
          Have a project in mind? Need to scale your engineering team? Want to
          modernize a legacy system? Reach out and let&apos;s talk.
        </p>

        <div className="rounded-xl border border-surface-light bg-surface/50 p-8 backdrop-blur-sm glow-border">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="text-center">
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold">Email Us</h3>
              <a
                href="mailto:hello@spaceman.tech"
                className="text-sm text-primary-light transition-colors hover:text-accent"
              >
                hello@spaceman.tech
              </a>
            </div>

            <div className="text-center">
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold">Location</h3>
              <p className="text-sm text-muted">
                USA (Delaware) & Honduras
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-surface-light pt-8">
            <a
              href="mailto:hello@spaceman.tech?subject=Project%20Inquiry"
              className="inline-block rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
            >
              Send Us a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
