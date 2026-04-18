import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Spaceman Tech",
  description: "Privacy Policy for Spaceman Tech LLC.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-dark text-paper-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-32">
        <h1 className="mb-4 text-4xl font-black tracking-tight">Privacy Policy</h1>
        <p className="mb-8 text-paper-white/50 text-sm">Last updated: April 17, 2025</p>

        <div className="space-y-8 text-paper-white/70 leading-relaxed">
          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">1. Who We Are</h2>
            <p>
              Spaceman Tech LLC ("Spaceman Tech", "we", "our", or "us") is a software agency incorporated in Delaware, USA.
              We build custom software, web apps, mobile apps, and AI agents for businesses.
              You can reach us at <a href="mailto:hello@spacemantech.ai" className="text-accent hover:underline">hello@spacemantech.ai</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">2. Information We Collect</h2>
            <p>When you submit a lead form or contact us, we may collect:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Your name and email address</li>
              <li>Your phone number (if provided)</li>
              <li>Information about your project or business needs</li>
              <li>Any other details you voluntarily share with us</li>
            </ul>
            <p className="mt-3">
              We also collect standard web analytics data (page views, referral source, browser type) through Google Analytics
              to understand how visitors use our website.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Respond to your inquiry and provide a project quote</li>
              <li>Follow up about your project or service interest</li>
              <li>Send occasional updates about our services (you can opt out at any time)</li>
              <li>Improve our website and marketing</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">4. How We Share Your Information</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your data with trusted
              service providers (such as CRM or email tools) solely to help us respond to your inquiry. These providers
              are contractually obligated to keep your information confidential.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">5. Data Retention</h2>
            <p>
              We retain your contact information for as long as necessary to fulfill the purposes described in this policy,
              or until you request deletion. To request removal of your data, email us at{" "}
              <a href="mailto:hello@spacemantech.ai" className="text-accent hover:underline">hello@spacemantech.ai</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">6. Cookies</h2>
            <p>
              Our website uses cookies for analytics purposes (Google Analytics). You can disable cookies in your
              browser settings at any time without affecting your ability to use the site.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">7. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete your personal data.
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@spacemantech.ai" className="text-accent hover:underline">hello@spacemantech.ai</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page
              reflects the most recent revision.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-paper-white">9. Contact</h2>
            <p>
              Questions? Email us at{" "}
              <a href="mailto:hello@spacemantech.ai" className="text-accent hover:underline">hello@spacemantech.ai</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
