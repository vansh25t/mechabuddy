"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, LoaderCircle, Send } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const starters = [
  "How does a motor work?",
  "Why won't my line follower turn?",
  "What is a loop in code?",
  "How do ultrasonic sensors see?",
];

export default function AiBuddyPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi! I'm AI Buddy 🤖 Ask me anything about robots, circuits, or code. I'll give you hints so you can figure it out yourself!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai-buddy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply ?? "Hmm, something went wrong. Try again?" }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "I couldn't connect just now. Check your internet and try again!" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="pt-12">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-volt text-ink"><Bot /></span>
        <div>
          <h1 className="text-3xl font-bold">AI Buddy</h1>
          <p className="text-sm text-slate-400">Your robotics mentor: hints, not answers.</p>
        </div>
      </div>

      <div className="card mt-6 flex h-[60vh] flex-col !p-0">
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 ${
                    m.role === "user" ? "bg-volt text-ink" : "border border-line bg-ink/70"
                  }`}
                >
                  {m.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
          {loading && (
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <LoaderCircle size={16} className="animate-spin" /> AI Buddy is thinking…
            </p>
          )}
          <div ref={endRef} />
        </div>

        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 px-6 pb-4">
            {starters.map((s) => (
              <button key={s} onClick={() => send(s)} className="tag !normal-case !tracking-normal hover:border-volt hover:text-volt">
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex gap-2 border-t border-line p-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about motors, sensors, code…"
            className="flex-1 rounded-xl border border-line bg-ink px-4 py-3 outline-none focus:border-volt"
          />
          <button type="submit" disabled={loading || !input.trim()} className="btn-primary disabled:opacity-50" aria-label="Send">
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
