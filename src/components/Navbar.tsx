"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_ANCHORS = [
  { anchor: "services", label: "Services" },
  { anchor: "portfolio", label: "Portfolio" },
  { anchor: "nearshore", label: "Nearshore" },
  { anchor: "about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const href = (anchor: string) => isHome ? `#${anchor}` : `/#${anchor}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold tracking-tight text-paper-white">
          Spaceman Tech
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ANCHORS.map((link) => (
            <a
              key={link.anchor}
              href={href(link.anchor)}
              className="text-sm text-paper-white/60 transition-colors hover:text-paper-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={href("contact")}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-hover"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          className="md:hidden text-paper-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="bg-dark/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            {NAV_ANCHORS.map((link) => (
              <a
                key={link.anchor}
                href={href(link.anchor)}
                className="text-sm text-paper-white/60 hover:text-paper-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={href("contact")}
              className="rounded-lg bg-accent px-5 py-2 text-center text-sm font-bold text-white hover:bg-accent-hover"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
