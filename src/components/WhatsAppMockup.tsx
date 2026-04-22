"use client";

import { useEffect, useRef, useState } from "react";

// step index maps to which messages are visible + which state we're in
// 0 = nothing, 1 = msg1, 2 = msg1+typing, 3 = msg1+msg2, 4 = +msg3(link),
// 5 = browser screen visible, 6 = back to chat + msg4(hearts), 7 = msg5(text)
type Screen = "chat" | "browser";

const CHAT_MESSAGES = [
  // index 0
  { from: "client", text: "Hey can you update the hero text? Make it say \"Summer Sale — 20% off\"", time: "10:41 AM" },
  // index 1
  { from: "dev", text: "On it.", time: "10:42 AM" },
  // index 2 — link message
  { from: "dev", text: "Done. Take a look:", time: "10:44 AM", link: true },
  // index 3 — hearts (appears after browser visit)
  { from: "client", text: "❤️❤️❤️", time: "10:46 AM", emoji: true },
  // index 4
  { from: "client", text: "Perfect!! Thank you so much", time: "10:46 AM" },
];

// Timings (ms from start of each loop)
const TIMINGS = [
  { at: 400,  show: 1 },   // first client message appears
  { at: 1600, typing: true },
  { at: 2800, show: 2, typing: false }, // dev: "On it."
  { at: 4000, typing: true },
  { at: 5600, show: 3, typing: false }, // dev: link
  { at: 7000, screen: "browser" as Screen },  // switch to browser
  { at: 9500, screen: "chat" as Screen },     // back to chat
  { at: 10200, show: 4 },  // hearts
  { at: 11200, show: 5 },  // "Perfect!!"
  { at: 13500, reset: true }, // reset and loop
];

export default function WhatsAppMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [screen, setScreen] = useState<Screen>("chat");
  const [cycle, setCycle] = useState(0);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Clear any previous timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    // Reset state
    setVisibleCount(0);
    setShowTyping(false);
    setScreen("chat");

    TIMINGS.forEach(({ at, show, typing, screen: scr, reset }) => {
      const t = setTimeout(() => {
        if (reset) {
          setCycle((c) => c + 1);
          return;
        }
        if (show !== undefined) setVisibleCount(show);
        if (typing !== undefined) setShowTyping(typing);
        if (scr !== undefined) setScreen(scr);
      }, at);
      timeoutsRef.current.push(t);
    });

    return () => timeoutsRef.current.forEach(clearTimeout);
  }, [cycle]);

  return (
    <div className="relative mx-auto select-none" style={{ width: 280 }}>
      {/* Phone frame */}
      <div
        className="relative rounded-[44px] overflow-hidden"
        style={{
          background: "#1a1a1a",
          boxShadow: "0 0 0 2px #3a3a3a, 0 0 0 4px #1a1a1a, 0 24px 80px rgba(0,0,0,0.7)",
          padding: "12px 4px",
        }}
      >
        {/* Side buttons */}
        <div className="absolute left-[-3px] top-[100px] w-[3px] h-8 rounded-l bg-[#3a3a3a]" />
        <div className="absolute left-[-3px] top-[148px] w-[3px] h-12 rounded-l bg-[#3a3a3a]" />
        <div className="absolute left-[-3px] top-[208px] w-[3px] h-12 rounded-l bg-[#3a3a3a]" />
        <div className="absolute right-[-3px] top-[148px] w-[3px] h-16 rounded-r bg-[#3a3a3a]" />

        {/* Screen */}
        <div
          className="relative rounded-[36px] overflow-hidden"
          style={{ height: 540 }}
        >
          {/* Dynamic island */}
          <div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 rounded-full bg-black"
            style={{ width: 90, height: 26 }}
          />

          {/* ── CHAT SCREEN ── */}
          <div
            className="absolute inset-0 flex flex-col transition-transform duration-500"
            style={{
              background: "#ECE5DD",
              transform: screen === "chat" ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 flex-shrink-0" style={{ paddingTop: 44, paddingBottom: 4 }}>
              <span className="text-[10px] font-semibold text-black">10:41</span>
              <div className="flex items-center gap-1">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <rect x="0" y="7" width="2" height="3" rx="0.5" fill="black" />
                  <rect x="3" y="5" width="2" height="5" rx="0.5" fill="black" />
                  <rect x="6" y="3" width="2" height="7" rx="0.5" fill="black" />
                  <rect x="9" y="1" width="2" height="9" rx="0.5" fill="black" />
                  <rect x="12" y="0" width="2" height="10" rx="0.5" fill="black" />
                </svg>
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
                  <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="black" strokeOpacity="0.35" />
                  <rect x="1.5" y="1.5" width="15" height="8" rx="1.5" fill="black" />
                  <path d="M19.5 3.5v4c.8-.4 1.3-1.1 1.3-2s-.5-1.6-1.3-2z" fill="black" fillOpacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Chat header */}
            <div className="flex items-center gap-2 px-3 py-2 flex-shrink-0" style={{ background: "#075E54" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.8">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
              <div className="flex items-center justify-center rounded-full text-white text-xs font-bold flex-shrink-0"
                style={{ width: 34, height: 34, background: "#128C7E" }}>
                ST
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-semibold">Spaceman Tech</div>
                <div className="text-white/60 text-[10px]">online</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.7">
                <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" />
              </svg>
            </div>

            {/* Messages area */}
            <div className="flex-1 flex flex-col gap-1.5 px-3 py-3 overflow-hidden">
              <div className="flex justify-center mb-1">
                <span className="text-[10px] px-3 py-0.5 rounded-full text-black/50" style={{ background: "rgba(255,255,255,0.6)" }}>
                  TODAY
                </span>
              </div>

              {CHAT_MESSAGES.map((msg, i) => {
                const isVisible = i < visibleCount;
                const isClient = msg.from === "client";
                return (
                  <div
                    key={i}
                    className={`flex ${isClient ? "justify-end" : "justify-start"} transition-all duration-300`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(6px)",
                    }}
                  >
                    <div
                      className="relative rounded-lg text-[11px] leading-relaxed text-black/85 overflow-hidden"
                      style={{
                        background: isClient ? "#DCF8C6" : "white",
                        boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
                        borderTopRightRadius: isClient ? 2 : undefined,
                        borderTopLeftRadius: isClient ? undefined : 2,
                        maxWidth: msg.link ? "78%" : "82%",
                      }}
                    >
                      {/* Tail */}
                      {isClient ? (
                        <div className="absolute -right-1.5 top-0 w-0 h-0"
                          style={{ borderLeft: "8px solid #DCF8C6", borderBottom: "8px solid transparent" }} />
                      ) : (
                        <div className="absolute -left-1.5 top-0 w-0 h-0"
                          style={{ borderRight: "8px solid white", borderBottom: "8px solid transparent" }} />
                      )}

                      {/* Link preview card */}
                      {msg.link && (
                        <div className="border-b border-black/8" style={{ background: "#f0f0f0" }}>
                          {/* Mini browser bar */}
                          <div className="flex items-center gap-1 px-2 py-1.5 border-b border-black/8" style={{ background: "#e8e8e8" }}>
                            <div className="flex gap-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
                              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
                            </div>
                            <div className="flex-1 rounded text-[8px] text-black/40 px-1.5 py-0.5 truncate" style={{ background: "white" }}>
                              acme.com
                            </div>
                          </div>
                          {/* Page preview */}
                          <div className="px-2 py-2" style={{ background: "#1a1a1a" }}>
                            <div className="text-[9px] font-black text-white/90 mb-1">Summer Sale — 20% off</div>
                            <div className="h-1 rounded bg-white/20 w-3/4 mb-1" />
                            <div className="h-1 rounded bg-white/10 w-1/2" />
                          </div>
                        </div>
                      )}

                      <div className={`px-3 ${msg.link ? "pt-1.5 pb-1.5" : "py-1.5"}`}>
                        {msg.emoji ? (
                          <span className="text-xl">{msg.text}</span>
                        ) : (
                          <span>{msg.text}</span>
                        )}
                        <span className="ml-2 text-[9px] text-black/40 float-right mt-0.5 flex items-center gap-0.5">
                          {msg.time}
                          {isClient && (
                            <svg width="12" height="8" viewBox="0 0 16 11" fill="none">
                              <path d="M1 5.5l3.5 3.5L8 3" stroke="#34B7F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M6 5.5l3.5 3.5L14 2" stroke="#34B7F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {showTyping && (
                <div className="flex justify-start">
                  <div
                    className="rounded-lg px-3 py-2 flex items-center gap-1"
                    style={{ background: "white", boxShadow: "0 1px 1px rgba(0,0,0,0.1)", borderTopLeftRadius: 2 }}
                  >
                    {[0, 1, 2].map((j) => (
                      <div
                        key={j}
                        className="w-1.5 h-1.5 rounded-full bg-black/30 animate-bounce"
                        style={{ animationDelay: `${j * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Chat input */}
            <div className="flex items-center gap-2 px-2 py-2 flex-shrink-0" style={{ background: "#F0F0F0" }}>
              <div className="flex-1 rounded-full px-3 py-1.5 flex items-center text-[10px] text-black/30" style={{ background: "white" }}>
                Message
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── BROWSER SCREEN ── */}
          <div
            className="absolute inset-0 flex flex-col transition-transform duration-500"
            style={{
              background: "#f5f5f5",
              transform: screen === "browser" ? "translateX(0)" : "translateX(100%)",
            }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 flex-shrink-0" style={{ paddingTop: 44, paddingBottom: 4 }}>
              <span className="text-[10px] font-semibold text-black">10:45</span>
              <div className="flex items-center gap-1">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <rect x="0" y="7" width="2" height="3" rx="0.5" fill="black" />
                  <rect x="3" y="5" width="2" height="5" rx="0.5" fill="black" />
                  <rect x="6" y="3" width="2" height="7" rx="0.5" fill="black" />
                  <rect x="9" y="1" width="2" height="9" rx="0.5" fill="black" />
                  <rect x="12" y="0" width="2" height="10" rx="0.5" fill="black" />
                </svg>
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
                  <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="black" strokeOpacity="0.35" />
                  <rect x="1.5" y="1.5" width="15" height="8" rx="1.5" fill="black" />
                  <path d="M19.5 3.5v4c.8-.4 1.3-1.1 1.3-2s-.5-1.6-1.3-2z" fill="black" fillOpacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Safari-style browser bar */}
            <div className="px-3 pb-2 flex-shrink-0" style={{ background: "#f5f5f5" }}>
              <div className="flex items-center gap-2 rounded-[10px] px-3 py-1.5" style={{ background: "#e5e5e5" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#22c55e">
                  <path d="M12 1C8.676 1 6 3.676 6 7v2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V11a2 2 0 00-2-2h-1V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4z" />
                </svg>
                <span className="text-[10px] text-black/60 font-medium flex-1 text-center">acme.com</span>
              </div>
            </div>

            {/* Website content */}
            <div className="flex-1 overflow-hidden flex flex-col" style={{ background: "#0d0d0d" }}>
              {/* Nav */}
              <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-white text-[10px] font-black">ACME CO.</div>
                <div className="flex gap-3">
                  {["Products", "About", "Contact"].map((item) => (
                    <span key={item} className="text-[8px] text-white/40">{item}</span>
                  ))}
                </div>
              </div>

              {/* Hero */}
              <div className="flex-1 flex flex-col items-center justify-center px-5 text-center gap-3">
                <div className="text-[8px] uppercase tracking-widest text-white/30 font-medium">Limited time offer</div>
                <div className="text-white font-black leading-tight" style={{ fontSize: 22 }}>
                  Summer Sale<br />
                  <span style={{ color: "#ff5f35" }}>20% off</span>
                </div>
                <div className="text-white/40 text-[9px] max-w-[140px] leading-relaxed">
                  Shop our full collection at the lowest prices of the year.
                </div>
                <div
                  className="rounded-lg px-4 py-2 text-white text-[9px] font-bold mt-1"
                  style={{ background: "#ff5f35" }}
                >
                  Shop now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
