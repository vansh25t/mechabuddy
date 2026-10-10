import { CalendarDays, CircleCheck, Zap } from "lucide-react";
import PageHeader from "@/components/page-header";
import { challenges } from "@/lib/data";

export const metadata = { title: "Challenges · Mechabuddy" };

export default function ChallengesPage() {
  return (
    <>
      <PageHeader
        tag="Weekly challenges"
        title="Take on a challenge"
        intro="Solve real robotics problems, earn XP, and climb the leaderboard."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {challenges.map((c) => (
          <article key={c.title} className={`card ${c.done ? "opacity-70" : ""}`}>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 font-mono text-sm text-volt"><Zap size={16} /> {c.xp} XP</span>
              {c.done ? (
                <span className="flex items-center gap-1 text-sm text-circuit"><CircleCheck size={16} /> Completed</span>
              ) : (
                <span className="flex items-center gap-1 text-sm text-slate-400"><CalendarDays size={16} /> {c.days} days left</span>
              )}
            </div>
            <h2 className="mt-4 text-2xl font-bold">{c.title}</h2>
            <p className="mt-2 text-slate-300">{c.desc}</p>
            {!c.done && <button className="btn-ghost mt-5">Accept challenge</button>}
          </article>
        ))}
      </div>
    </>
  );
}
