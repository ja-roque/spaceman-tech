"use client";

import { useState, useEffect, useCallback } from "react";

interface Message {
  id: string;
  role: string;
  content: string;
  createdAt: string;
}

interface Conversation {
  id: string;
  phone: string;
  name: string | null;
  company: string | null;
  requirements: string | null;
  estimatedCost: string | null;
  estimatedTimeline: string | null;
  email: string | null;
  language: string;
  humanTakeover: boolean;
  blocked: boolean;
  flagPaymentPlan: boolean;
  offerPaymentPlan: boolean;
  notes: string | null;
  messageCount: number;
  createdAt: string;
  updatedAt: string;
  messages: Message[];
}

function timeAgo(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selected, setSelected] = useState<Conversation | null>(null);
  const [view, setView] = useState<"leads" | "chat">("leads");
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  const [reengaging, setReengaging] = useState(false);
  const [notes, setNotes] = useState("");
  const [savingNotes, setSavingNotes] = useState(false);

  const loadConversations = useCallback(async () => {
    const res = await fetch("/api/admin/conversations");
    if (res.ok) setConversations(await res.json());
  }, []);

  const loadConversation = useCallback(async (phone: string) => {
    const res = await fetch(`/api/admin/conversations/${encodeURIComponent(phone)}`);
    if (res.ok) setSelected(await res.json());
  }, []);

  useEffect(() => {
    if (!authed) return;
    loadConversations();
    const interval = setInterval(loadConversations, 8000);
    return () => clearInterval(interval);
  }, [authed, loadConversations]);

  useEffect(() => {
    if (!authed || !selected) return;
    const interval = setInterval(() => loadConversation(selected.phone), 5000);
    return () => clearInterval(interval);
  }, [authed, selected, loadConversation]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) setAuthed(true);
    else setLoginError("Wrong password");
  }

  async function openChat(c: Conversation) {
    const res = await fetch(`/api/admin/conversations/${encodeURIComponent(c.phone)}`);
    if (res.ok) {
      const data = await res.json();
      setSelected(data);
      setNotes(data.notes || "");
    }
    setView("chat");
  }

  async function saveNotes() {
    if (!selected) return;
    setSavingNotes(true);
    await fetch("/api/admin/conversations", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: selected.phone, notes }),
    });
    setSavingNotes(false);
  }

  async function sendReply() {
    if (!selected || !reply.trim()) return;
    setSending(true);
    await fetch("/api/whatsapp/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: selected.phone, message: reply }),
    });
    setReply("");
    setSending(false);
    await loadConversation(selected.phone);
  }

  async function toggleTakeover() {
    if (!selected) return;
    await fetch("/api/admin/conversations", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: selected.phone, humanTakeover: !selected.humanTakeover }),
    });
    await loadConversation(selected.phone);
    await loadConversations();
  }

  async function toggleBlock() {
    if (!selected) return;
    await fetch("/api/admin/conversations", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: selected.phone, blocked: !selected.blocked }),
    });
    await loadConversation(selected.phone);
    await loadConversations();
  }

  async function reengage(lang: "en" | "es") {
    if (!selected) return;
    setReengaging(true);
    await fetch("/api/admin/reengage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: selected.phone, language: lang }),
    });
    setReengaging(false);
    await loadConversation(selected.phone);
  }

  async function triggerPaymentPlan() {
    if (!selected) return;
    await fetch("/api/admin/conversations", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: selected.phone, offerPaymentPlan: true, flagPaymentPlan: false }),
    });
    await loadConversation(selected.phone);
    await loadConversations();
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center px-4">
        <form onSubmit={login} className="bg-paper-white rounded-2xl p-10 paper-shadow-deep w-full max-w-sm">
          <h1 className="mb-2 text-2xl font-black text-text-dark">Spaceman Admin</h1>
          <p className="text-sm text-text-dark/40 mb-6">Lead management dashboard</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-dark/15 bg-paper-cream px-4 py-3 text-sm text-text-dark mb-3 focus:outline-none focus:border-accent"
          />
          {loginError && <p className="text-red-500 text-sm mb-3">{loginError}</p>}
          <button type="submit" className="w-full rounded-lg bg-accent px-4 py-3 font-bold text-white hover:bg-accent-hover">
            Login
          </button>
        </form>
      </div>
    );
  }

  // ── LEADS VIEW ──────────────────────────────────────────────────────────────
  if (view === "leads") {
    const active = conversations.filter((c) => !c.blocked);
    const blocked = conversations.filter((c) => c.blocked);

    return (
      <div className="min-h-screen bg-dark" style={{ fontFamily: "var(--font-geist-sans)" }}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-black text-paper-white">Leads</h1>
              <p className="text-sm text-paper-white/40 mt-0.5">{active.length} active · {blocked.length} blocked</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Total Leads", value: active.length },
              { label: "Human Active", value: active.filter((c) => c.humanTakeover).length },
              { label: "Qualified", value: active.filter((c) => c.estimatedCost).length },
            ].map(({ label, value }) => (
              <div key={label} className="bg-paper-white/5 border border-paper-white/10 rounded-2xl p-5">
                <p className="text-3xl font-black text-paper-white">{value}</p>
                <p className="text-xs text-paper-white/40 mt-1 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          {/* Lead cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {active.map((c) => (
              <button
                key={c.id}
                onClick={() => openChat(c)}
                className="text-left bg-paper-white rounded-2xl p-5 paper-shadow hover:shadow-lg transition-shadow"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-black text-text-dark">{c.name || "Unknown"}</p>
                    <p className="text-xs text-text-dark/50">{c.company || c.phone}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-text-dark/30" title={new Date(c.updatedAt).toLocaleString()}>active {timeAgo(c.updatedAt)}</span>
                    <div className="flex gap-1 flex-wrap justify-end">
                      {c.flagPaymentPlan && !c.offerPaymentPlan && <span className="text-xs bg-yellow-400 text-dark rounded-full px-2 py-0.5 font-bold">$ Plan?</span>}
                      {c.offerPaymentPlan && <span className="text-xs bg-green-500 text-white rounded-full px-2 py-0.5">Plan ON</span>}
                      {c.humanTakeover && <span className="text-xs bg-accent text-white rounded-full px-2 py-0.5">You</span>}
                      {c.language === "es" && <span className="text-xs bg-paper-blue text-text-dark rounded-full px-2 py-0.5">ES</span>}
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                {c.requirements && (
                  <p className="text-xs text-text-dark/60 mb-3 leading-relaxed line-clamp-2">{c.requirements}</p>
                )}

                {/* Last message fallback */}
                {!c.requirements && c.messages[0] && (
                  <p className="text-xs text-text-dark/40 mb-3 truncate">{c.messages[0].content}</p>
                )}

                {/* Cost / Timeline */}
                <div className="flex gap-3 flex-wrap">
                  {c.estimatedCost && (
                    <span className="text-xs bg-paper-mint text-text-dark rounded-full px-2.5 py-1 font-bold">{c.estimatedCost}</span>
                  )}
                  {c.estimatedTimeline && (
                    <span className="text-xs bg-paper-sand text-text-dark rounded-full px-2.5 py-1 font-bold">{c.estimatedTimeline}</span>
                  )}
                  {c.email && (
                    <span className="text-xs bg-paper-cream text-text-dark/60 rounded-full px-2.5 py-1">{c.email}</span>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-3 pt-3 border-t border-dark/5 flex items-center justify-between">
                  <span className="text-xs text-text-dark/30">{c.messageCount} msgs · started {timeAgo(c.createdAt)}</span>
                  <span className="text-xs text-accent font-bold">Open chat →</span>
                </div>
              </button>
            ))}
          </div>

          {active.length === 0 && (
            <div className="text-center py-24 text-paper-white/30">
              <p className="text-lg font-bold mb-2">No leads yet</p>
              <p className="text-sm">Messages to +1 (302) 448-2304 will appear here</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── CHAT VIEW ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-dark flex flex-col" style={{ fontFamily: "var(--font-geist-sans)" }}>
      {/* Top bar */}
      <div className="bg-paper-white border-b border-dark/10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => setView("leads")} className="text-sm text-text-dark/50 hover:text-accent font-bold">
          ← Leads
        </button>
        <span className="text-dark/20">/</span>
        <span className="font-black text-text-dark">{selected?.name || selected?.phone}</span>
        {selected?.company && <span className="text-sm text-text-dark/40">{selected.company}</span>}
        <div className="ml-auto flex gap-2">
          <button
            onClick={toggleTakeover}
            className={`rounded-lg px-4 py-1.5 text-sm font-bold transition-colors ${selected?.humanTakeover ? "bg-accent text-white" : "bg-paper-sand text-text-dark"}`}
          >
            {selected?.humanTakeover ? "AI Paused" : "Take Over"}
          </button>
          {selected?.flagPaymentPlan && !selected?.offerPaymentPlan && (
            <button
              onClick={triggerPaymentPlan}
              className="rounded-lg px-4 py-1.5 text-sm font-bold bg-yellow-400 text-dark hover:bg-yellow-300 transition-colors"
            >
              Offer Payment Plan
            </button>
          )}
          {selected?.offerPaymentPlan && (
            <span className="rounded-lg px-4 py-1.5 text-sm font-bold bg-green-500 text-white">Plan Active</span>
          )}
          <div className="flex gap-1">
            <button
              onClick={() => reengage(selected?.language === "es" ? "es" : "en")}
              disabled={reengaging}
              title="Send cold lead re-engagement template"
              className="rounded-l-lg px-3 py-1.5 text-sm font-bold bg-paper-sand text-text-dark hover:bg-paper-mint transition-colors disabled:opacity-50"
            >
              {reengaging ? "..." : "Re-engage"}
            </button>
            <button
              onClick={() => reengage(selected?.language === "es" ? "en" : "es")}
              disabled={reengaging}
              title={`Send in ${selected?.language === "es" ? "English" : "Spanish"}`}
              className="rounded-r-lg px-2 py-1.5 text-xs font-bold bg-paper-sand/60 text-text-dark/60 hover:bg-paper-mint transition-colors disabled:opacity-50 border-l border-dark/10"
            >
              {selected?.language === "es" ? "EN" : "ES"}
            </button>
          </div>
          <button
            onClick={toggleBlock}
            className={`rounded-lg px-4 py-1.5 text-sm font-bold transition-colors ${selected?.blocked ? "bg-dark text-paper-white" : "bg-paper-cream text-text-dark"}`}
          >
            {selected?.blocked ? "Unblock" : "Block"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Messages */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 bg-paper-cream">
            {selected?.messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-sm rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-paper-white text-text-dark" : "bg-accent text-white"}`}>
                  {m.content}
                  <p className={`text-xs mt-1 ${m.role === "user" ? "text-text-dark/30" : "text-white/50"}`}>
                    {new Date(m.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-paper-white border-t border-dark/10 px-6 py-4 flex gap-3">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendReply(); } }}
              placeholder="Reply as Spaceman Tech..."
              rows={2}
              className="flex-1 rounded-lg border border-dark/15 bg-paper-cream px-4 py-2.5 text-sm text-text-dark resize-none focus:outline-none focus:border-accent"
            />
            <button
              onClick={sendReply}
              disabled={sending || !reply.trim()}
              className="rounded-lg bg-accent px-6 py-2 font-bold text-white hover:bg-accent-hover disabled:opacity-50 self-end"
            >
              {sending ? "..." : "Send"}
            </button>
          </div>
        </div>

        {/* Lead detail panel */}
        <div className="w-64 bg-paper-white border-l border-dark/10 overflow-y-auto flex-shrink-0">
          <div className="p-4 border-b border-dark/10">
            <h3 className="font-black text-sm text-text-dark">Lead Summary</h3>
          </div>
          <div className="p-4 space-y-4 text-sm">
            {[
              { label: "Phone", value: selected?.phone },
              { label: "Name", value: selected?.name },
              { label: "Company", value: selected?.company },
              { label: "Email", value: selected?.email },
              { label: "Language", value: selected?.language === "es" ? "Spanish" : "English" },
              { label: "Est. Cost", value: selected?.estimatedCost },
              { label: "Timeline", value: selected?.estimatedTimeline },
              { label: "Messages", value: String(selected?.messageCount ?? 0) },
              { label: "Started", value: selected ? new Date(selected.createdAt).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" }) : null },
              { label: "Last Active", value: selected ? `${timeAgo(selected.updatedAt)} · ${new Date(selected.updatedAt).toLocaleDateString([], { month: "short", day: "numeric" })}` : null },
            ].map(({ label, value }) => value ? (
              <div key={label}>
                <p className="text-xs font-bold text-text-dark/40 uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-text-dark break-words">{value}</p>
              </div>
            ) : null)}

            {selected?.requirements && (
              <div>
                <p className="text-xs font-bold text-text-dark/40 uppercase tracking-wider mb-1">Requirements</p>
                <p className="text-text-dark/80 leading-relaxed text-xs">{selected.requirements}</p>
              </div>
            )}

            <div className="pt-2 border-t border-dark/10">
              <div className={`rounded-lg px-3 py-1.5 text-xs font-bold text-center ${selected?.humanTakeover ? "bg-accent text-white" : "bg-paper-sand text-text-dark"}`}>
                {selected?.humanTakeover ? "Human mode" : "AI active"}
              </div>
            </div>

            <div className="pt-2 border-t border-dark/10">
              <p className="text-xs font-bold text-text-dark/40 uppercase tracking-wider mb-1.5">Notes</p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                onBlur={saveNotes}
                placeholder="Call notes, context, follow-up reminders..."
                rows={5}
                className="w-full rounded-lg border border-dark/15 bg-paper-cream px-3 py-2 text-xs text-text-dark placeholder:text-text-dark/30 focus:outline-none focus:border-accent resize-none"
              />
              <button
                onClick={saveNotes}
                disabled={savingNotes}
                className="mt-1.5 w-full rounded-lg bg-paper-sand px-3 py-1.5 text-xs font-bold text-text-dark hover:bg-paper-mint transition-colors disabled:opacity-50"
              >
                {savingNotes ? "Saving..." : "Save notes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
