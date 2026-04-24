import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Spaceman Tech",
  description: "Terms of Service for Spaceman Tech LLC.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-dark text-paper-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-32">
        <h1 className="mb-4 text-4xl font-black tracking-tight">Terms of Service</h1>
        <p className="mb-8 text-paper-white/50 text-sm">Last updated: April 24, 2026</p>

        <div className="space-y-8 text-paper-white/70 leading-relaxed">
          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">1. Agreement</h2>
            <p>
              By accessing this website or engaging Spaceman Tech LLC ("Spaceman Tech", "we", "our", or "us") for services,
              you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">2. Services</h2>
            <p>
              Spaceman Tech provides custom software development, web and mobile application development, AI integrations,
              and related consulting services. The specific scope, deliverables, timeline, and pricing for any engagement
              are defined in a separate Statement of Work (SOW) or contract signed by both parties.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">3. Payments</h2>
            <p>
              Payment terms are outlined in the applicable SOW or invoice. Unless otherwise agreed in writing:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Project work requires a deposit before work begins</li>
              <li>Invoices are due within 15 days of the invoice date</li>
              <li>Late payments may incur a 1.5% monthly interest charge</li>
              <li>We reserve the right to pause work on accounts with overdue balances</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">4. Intellectual Property</h2>
            <p>
              Upon receipt of full payment, Spaceman Tech assigns all ownership rights to the custom code and deliverables
              produced specifically for your project. We retain the right to use general methodologies, tools, and
              frameworks developed independently. We may reference your project in our portfolio unless you request
              otherwise in writing.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary information shared during the engagement.
              This includes business strategies, technical specifications, and any non-public information designated
              as confidential. This obligation survives termination of the engagement.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">6. Warranties and Limitations</h2>
            <p>
              Spaceman Tech warrants that work will be performed in a professional manner consistent with industry standards.
              We do not guarantee specific business outcomes, revenue, or search engine rankings. Our liability is limited
              to the amount paid for the specific deliverable in question. We are not liable for indirect, incidental,
              or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">7. Post-Launch Support</h2>
            <p>
              Unless a support agreement is in place, Spaceman Tech provides a 14-day bug-fix warranty after final
              delivery. Issues reported within this window that are directly attributable to our work will be resolved
              at no additional cost. New feature requests or changes in scope are billed separately.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">8. Termination</h2>
            <p>
              Either party may terminate an engagement with 14 days written notice. Upon termination, the client is
              responsible for payment of all work completed up to the termination date. Deposits are non-refundable
              once work has begun.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Delaware, USA. Any disputes will be resolved
              through binding arbitration in Delaware, unless both parties agree otherwise in writing.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">10. Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a href="mailto:hello@spacemantech.ai" className="text-accent hover:underline">hello@spacemantech.ai</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
