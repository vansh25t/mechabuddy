import { CalendarDays, MapPin, Monitor, User } from "lucide-react";
import PageHeader from "@/components/page-header";
import { workshops } from "@/lib/data";

export const metadata = { title: "Workshops · Mechabuddy" };

export default function WorkshopsPage() {
  return (
    <>
      <PageHeader
        tag="Workshops"
        title="Build alongside expert mentors"
        intro="Small-group, hands-on sessions online and in person. Bring your kit and your questions."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {workshops.map((w) => (
          <article key={w.title} className="card">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 text-sky">
                {w.mode === "Online" ? <Monitor size={16} /> : <MapPin size={16} />} {w.mode}
              </span>
              <span className="font-mono text-volt">{w.seats} seats left</span>
            </div>
            <h2 className="mt-3 text-2xl font-bold">{w.title}</h2>
            <div className="mt-3 flex gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><CalendarDays size={16} /> {w.date}</span>
              <span className="flex items-center gap-1"><User size={16} /> {w.mentor}</span>
            </div>
            <button className="btn-primary mt-5">Reserve a seat</button>
          </article>
        ))}
      </div>
    </>
  );
}
