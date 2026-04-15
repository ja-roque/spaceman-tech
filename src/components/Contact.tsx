"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

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
          {status === "sent" ? (
            <div className="py-8">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-black text-text-dark">Message sent!</h3>
              <p className="text-text-dark/60">We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-5" suppressHydrationWarning>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-text-dark">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-dark/15 bg-paper-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-dark/30 focus:border-accent focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-text-dark">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-dark/15 bg-paper-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-dark/30 focus:border-accent focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-bold text-text-dark">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-dark/15 bg-paper-cream px-4 py-3 text-sm text-text-dark placeholder:text-text-dark/30 focus:border-accent focus:outline-none resize-none"
                  suppressHydrationWarning
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500 font-medium">Something went wrong. Try emailing us directly at hello@spacemantech.ai</p>
              )}

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto rounded-lg bg-accent px-8 py-4 text-base font-bold text-white transition-colors hover:bg-accent-hover paper-shadow disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <a
                  href="mailto:hello@spacemantech.ai"
                  className="text-sm text-text-dark/40 hover:text-accent transition-colors"
                >
                  Or email hello@spacemantech.ai
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
