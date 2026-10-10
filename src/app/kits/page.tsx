import { Check } from "lucide-react";
import PageHeader from "@/components/page-header";
import { kits } from "@/lib/data";

export const metadata = { title: "Kits · Mechabuddy" };

export default function KitsPage() {
  return (
    <>
      <PageHeader
        tag="Progressive kit system"
        title="Robotics kits that grow with you"
        intro="Four carefully designed levels, from snapping together a first robot to building competition-ready machines."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {kits.map((k) => (
          <article key={k.name} className="card flex flex-col">
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-xs text-slate-500">LEVEL 0{k.level} · AGES {k.ages}</p>
              <p className="text-xl font-bold">{k.price}</p>
            </div>
            <h2 className={`mt-2 text-3xl font-bold ${k.color}`}>{k.name}</h2>
            <p className="mt-3 text-slate-300">{k.blurb}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {k.includes.map((i) => (
                <li key={i} className="flex items-center gap-2 text-slate-300">
                  <Check size={16} className="text-circuit" /> {i}
                </li>
              ))}
            </ul>
            <button className="btn-primary mt-6 self-start">Get the {k.name} kit</button>
          </article>
        ))}
      </div>
    </>
  );
}
