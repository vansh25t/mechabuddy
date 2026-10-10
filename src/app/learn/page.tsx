import { Clock, PlayCircle, Zap } from "lucide-react";
import PageHeader from "@/components/page-header";
import { lessons } from "@/lib/data";

export const metadata = { title: "Learn · Mechabuddy" };

export default function LearnPage() {
  return (
    <>
      <PageHeader
        tag="Human tutorials"
        title="Learn robotics, one bite at a time"
        intro="Short, step-by-step video lessons from expert builders. Every lesson earns XP."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {lessons.map((l, i) => (
          <article key={l.title} className="card group transition hover:border-volt">
            <div className="grid aspect-video place-items-center rounded-xl bg-ink">
              <PlayCircle size={40} className="text-slate-500 transition group-hover:text-volt" />
            </div>
            <p className="mt-4 font-mono text-xs text-sky">
              {String(i + 1).padStart(2, "0")} · {l.track}
            </p>
            <h2 className="mt-1 font-semibold">{l.title}</h2>
            <div className="mt-3 flex gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1"><Clock size={14} /> {l.minutes} min</span>
              <span className="flex items-center gap-1 text-volt"><Zap size={14} /> {l.xp} XP</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
