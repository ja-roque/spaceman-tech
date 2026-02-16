export default function Contact() {
  return (
    <section id="contact" className="bg-dark px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-black tracking-tight text-paper-white sm:text-5xl">
          Let&apos;s <span className="accent-underline">build</span> something
        </h2>
        <p className="mb-12 text-lg text-paper-white/50">
          Have a project in mind? Need to scale your engineering team?
          Want to modernize a legacy system? Let&apos;s talk.
        </p>

        <div className="rounded-2xl bg-paper-white p-10 paper-shadow-deep">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="mb-1 font-bold text-text-dark">Email Us</h3>
              <a
                href="mailto:hello@spaceman.tech"
                className="text-sm text-accent font-bold hover:text-accent-hover transition-colors"
              >
                hello@spaceman.tech
              </a>
            </div>

            <div className="text-center">
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-dark text-paper-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="mb-1 font-bold text-text-dark">Location</h3>
              <p className="text-sm text-text-dark/50">
                USA (Delaware) &amp; Honduras
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-dark/10 pt-8">
            <a
              href="mailto:hello@spaceman.tech?subject=Project%20Inquiry"
              className="inline-block rounded-lg bg-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-accent-hover paper-shadow"
            >
              Send Us a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
