import { Award, Lock } from "lucide-react";
import PageHeader from "@/components/page-header";
import { badges, leaderboard } from "@/lib/data";

export const metadata = { title: "Achievements · Mechabuddy" };

export default function AchievementsPage() {
  const earned = badges.filter((b) => b.earned).length;

  return (
    <>
      <PageHeader
        tag="Gamified learning"
        title="Achievements"
        intro={`You've earned ${earned} of ${badges.length} badges. Keep building to unlock the rest!`}
      />
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {badges.map((b) => (
            <div key={b.name} className={`card text-center ${b.earned ? "" : "opacity-50"}`}>
              <div
                className={`mx-auto grid h-16 w-16 place-items-center rounded-full ${
                  b.earned ? "bg-volt text-ink" : "bg-ink text-slate-500"
                }`}
              >
                {b.earned ? <Award size={28} /> : <Lock size={24} />}
              </div>
              <p className="mt-4 font-semibold">{b.name}</p>
              <p className="mt-1 text-xs text-slate-400">{b.desc}</p>
            </div>
          ))}
        </section>

        <section className="card">
          <h2 className="text-xl font-bold">Leaderboard</h2>
          <ol className="mt-4 space-y-2">
            {leaderboard.map((p, i) => (
              <li
                key={p.name}
                className={`flex items-center justify-between rounded-xl px-3 py-2 ${
                  p.name === "You" ? "bg-volt/15 text-volt" : ""
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="w-5 font-mono text-slate-500">{i + 1}</span>
                  {p.name}
                </span>
                <span className="font-mono text-sm">{p.xp.toLocaleString("en-IN")} XP</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
