import { Clock, ListChecks, Wrench } from "lucide-react";
import PageHeader from "@/components/page-header";
import { builds } from "@/lib/data";

export const metadata = { title: "Build · Mechabuddy" };

export default function BuildPage() {
  return (
    <>
      <PageHeader
        tag="Build projects"
        title="Pick a project. Start building."
        intro="Guided builds for every kit level. Stuck on a step? Ask AI Buddy for a hint."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {builds.map((b) => (
          <article key={b.name} className="card">
            <div className="flex items-center justify-between">
              <span className="tag">{b.kit}</span>
              <span className="font-mono text-volt" aria-label={`Difficulty ${b.difficulty} of 4`}>
                {"●".repeat(b.difficulty)}
                <span className="text-line">{"●".repeat(4 - b.difficulty)}</span>
              </span>
            </div>
            <Wrench className="mt-5 text-slate-500" />
            <h2 className="mt-3 text-xl font-semibold">{b.name}</h2>
            <div className="mt-3 flex gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><ListChecks size={16} /> {b.steps} steps</span>
              <span className="flex items-center gap-1"><Clock size={16} /> {b.time}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
