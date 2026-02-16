"use client";

import PaperShape from "./PaperShape";
import { useParallax } from "@/hooks/useParallax";

export default function Hero() {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark flex items-center justify-center px-6 pt-16">
      {/* Floating paper shapes at different parallax speeds */}
      <PaperShape color="#ff5f35" size={120} top="10%" left="5%" speed={-0.15} shape="circle" rotate={12} />
      <PaperShape color="#d4e5f7" size={80} top="20%" right="8%" speed={-0.08} shape="square" rotate={-20} />
      <PaperShape color="#f2e6d0" size={60} top="65%" left="10%" speed={-0.2} shape="blob" rotate={45} />
      <PaperShape color="#2dd4bf" size={90} top="70%" right="12%" speed={-0.12} shape="triangle" rotate={15} />
      <PaperShape color="#f7d4d4" size={50} top="15%" left="40%" speed={-0.05} shape="circle" rotate={0} />
      <PaperShape color="#d4f0e7" size={70} top="55%" right="30%" speed={-0.18} shape="square" rotate={-10} />
      <PaperShape color="#ede8e0" size={40} top="80%" left="25%" speed={-0.1} shape="blob" rotate={30} />
      <PaperShape color="#ff5f35" size={35} top="40%" right="5%" speed={-0.06} shape="square" rotate={60} />

      <div
        className="relative z-10 mx-auto max-w-5xl text-center"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {/* Small tag */}
        <div className="mb-8 inline-block rounded-full bg-dark-soft px-4 py-1.5 text-sm text-paper-white/50 paper-shadow">
          Software Consultancy &middot; Delaware, USA &middot; Honduras
        </div>

        {/* Main headline */}
        <h1 className="mb-8 text-5xl font-black leading-[1.1] tracking-tight text-paper-white sm:text-7xl lg:text-8xl">
          We come from
          <br />
          the future.
        </h1>

        <p className="mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-paper-white/70 sm:text-2xl">
          We already built <span className="accent-underline">your app</span>.
          <br />
          You loved it.
        </p>

        <p className="mx-auto mb-12 max-w-xl text-lg text-paper-white/40">
          This is how it all started...
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-hover paper-shadow"
          >
            Start Your Project
          </a>
          <a
            href="#portfolio"
            className="rounded-lg border-2 border-paper-white/20 px-8 py-4 text-lg font-bold text-paper-white transition-colors hover:border-paper-white/40 hover:bg-paper-white/5"
          >
            See the Proof
          </a>
        </div>
      </div>
    </section>
  );
}
