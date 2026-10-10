import { CalendarDays, MapPin, Trophy } from "lucide-react";
import PageHeader from "@/components/page-header";
import { competitions } from "@/lib/data";

export const metadata = { title: "Competitions · Mechabuddy" };

export default function CompetitionsPage() {
  return (
    <>
      <PageHeader
        tag="Compete"
        title="From your school to the world stage"
        intro="Test your robots against the best young builders at school, local, national, and international events."
      />
      <ol className="space-y-4">
        {competitions.map((c, i) => (
          <li key={c.name} className="card grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <span className="font-mono text-4xl font-bold text-line">0{i + 1}</span>
            <div>
              <span className="tag">{c.tier}</span>
              <h2 className="mt-2 text-xl font-semibold">{c.name}</h2>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1"><CalendarDays size={16} /> {c.date}</span>
                <span className="flex items-center gap-1"><MapPin size={16} /> {c.place}</span>
                <span className="flex items-center gap-1 text-volt"><Trophy size={16} /> {c.prize}</span>
              </div>
            </div>
            <button className="btn-primary">Register</button>
          </li>
        ))}
      </ol>
    </>
  );
}
