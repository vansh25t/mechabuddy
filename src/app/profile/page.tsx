import Link from "next/link";
import { Award, Flame, Wrench, Zap } from "lucide-react";
import XpChart from "@/components/xp-chart";
import { badges } from "@/lib/data";

export const metadata = { title: "Profile · Mechabuddy" };

const stats = [
  { icon: Zap, label: "Total XP", value: "3,260" },
  { icon: Flame, label: "Day streak", value: "12" },
  { icon: Wrench, label: "Builds done", value: "5" },
  { icon: Award, label: "Badges", value: String(badges.filter((b) => b.earned).length) },
];

export default function ProfilePage() {
  const level = 2;
  const progress = 64;

  return (
    <>
      <section className="flex flex-col gap-6 pb-10 pt-16 sm:flex-row sm:items-center">
        <div className="grid h-24 w-24 place-items-center rounded-3xl bg-volt text-4xl font-bold text-ink">Y</div>
        <div className="flex-1">
          <span className="tag">Level {level} · Explorer</span>
          <h1 className="mt-3 text-4xl font-bold">Young Builder</h1>
          <div className="mt-4 max-w-md">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Progress to Builder</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-ink">
              <div className="h-2 rounded-full bg-circuit" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
        <Link href="/achievements" className="btn-ghost">View achievements</Link>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="card">
            <Icon className="text-volt" size={20} />
            <p className="mt-3 text-3xl font-bold">{value}</p>
            <p className="text-sm text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      <section className="card mt-6">
        <h2 className="text-xl font-bold">XP this week</h2>
        <div className="mt-4">
          <XpChart />
        </div>
      </section>
    </>
  );
}
