import Link from "next/link";
import {
  ArrowRight,
  Bot,
  GraduationCap,
  Medal,
  Package,
  Trophy,
  Video,
  Wrench,
} from "lucide-react";
import { kits } from "@/lib/data";

const features = [
  { icon: Bot, title: "AI Buddy", href: "/ai-buddy", text: "A patient robotics mentor that gives hints, not answers." },
  { icon: Package, title: "Progressive Kits", href: "/kits", text: "Four levels from first motor to computer vision." },
  { icon: Trophy, title: "Gamified Learning", href: "/achievements", text: "XP, badges, and leaderboards that keep kids building." },
  { icon: Video, title: "Human Tutorials", href: "/learn", text: "Step-by-step videos from expert builders." },
  { icon: Medal, title: "Competitions", href: "/competitions", text: "School, local, national, and international events." },
  { icon: GraduationCap, title: "Scholarships", href: "/scholarships", text: "Free kits, mentorship, and sponsorships." },
  { icon: Wrench, title: "Workshops", href: "/workshops", text: "Hands-on sessions with expert mentors." },
];

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-12 pb-20 pt-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="tag">Robotics education · Ages 7+</span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Build Robots.
            <br />
            <span className="text-volt">Build Futures.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Mechabuddy turns curious kids into confident engineers with hands-on kits, an AI mentor,
            challenges, and real competitions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/kits" className="btn-primary">
              Explore kits <ArrowRight size={18} />
            </Link>
            <Link href="/ai-buddy" className="btn-ghost">
              <Bot size={18} /> Talk to AI Buddy
            </Link>
          </div>
        </div>

        <div className="card relative overflow-hidden font-mono text-sm">
          <div className="mb-4 flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-signal" />
            <span className="h-3 w-3 rounded-full bg-volt" />
            <span className="h-3 w-3 rounded-full bg-circuit" />
          </div>
          <p className="text-slate-500">{"// line_runner.ino"}</p>
          <p><span className="text-sky">void</span> loop() {"{"}</p>
          <p className="pl-4"><span className="text-sky">int</span> left = readSensor(L);</p>
          <p className="pl-4"><span className="text-sky">int</span> right = readSensor(R);</p>
          <p className="pl-4"><span className="text-signal">if</span> (left &gt; right) turnLeft();</p>
          <p className="pl-4"><span className="text-signal">else</span> turnRight();</p>
          <p>{"}"}</p>
          <div className="mt-6 rounded-xl border border-line bg-ink/60 p-4 font-display">
            <p className="text-xs uppercase tracking-wider text-circuit">AI Buddy</p>
            <p className="mt-1 text-slate-200">
              Nice! What do you think happens when both sensors read the same value? 🤔
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold">Everything a young engineer needs</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, href, text }) => (
            <Link key={title} href={href} className="card group transition hover:border-volt">
              <Icon className="text-volt" />
              <h3 className="mt-4 font-semibold group-hover:text-volt">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Four levels. One path.</h2>
          <Link href="/kits" className="text-sm text-volt hover:underline">See all kits →</Link>
        </div>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {kits.map((k) => (
            <li key={k.name} className="card">
              <p className="font-mono text-xs text-slate-500">LEVEL 0{k.level}</p>
              <p className={`mt-2 text-2xl font-bold ${k.color}`}>{k.name}</p>
              <p className="text-sm text-slate-400">Ages {k.ages}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
