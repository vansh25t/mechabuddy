import { CalendarDays, GraduationCap, Users } from "lucide-react";
import PageHeader from "@/components/page-header";
import { scholarships } from "@/lib/data";

export const metadata = { title: "Scholarships · Mechabuddy" };

export default function ScholarshipsPage() {
  return (
    <>
      <PageHeader
        tag="Scholarships"
        title="Talent is everywhere. Opportunity should be too."
        intro="Free kits, mentorship, and sponsorships for promising students, regardless of background."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {scholarships.map((s) => (
          <article key={s.name} className="card">
            <GraduationCap className="text-volt" />
            <h2 className="mt-4 text-xl font-semibold">{s.name}</h2>
            <p className="mt-1 text-lg text-circuit">{s.award}</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-slate-300"><Users size={16} className="mt-0.5 shrink-0" /> {s.who}</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-400"><CalendarDays size={16} /> Deadline: {s.deadline}</p>
            <button className="btn-ghost mt-5 w-full">Apply</button>
          </article>
        ))}
      </div>
    </>
  );
}
