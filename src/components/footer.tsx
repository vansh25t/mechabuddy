import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold">Mechabuddy</p>
          <p className="mt-2 text-sm text-slate-400">Build Robots. Build Futures.</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-sky">Explore</p>
          <ul className="space-y-2 text-slate-300">
            <li><Link href="/kits" className="hover:text-volt">Kits</Link></li>
            <li><Link href="/learn" className="hover:text-volt">Learn</Link></li>
            <li><Link href="/challenges" className="hover:text-volt">Challenges</Link></li>
            <li><Link href="/ai-buddy" className="hover:text-volt">AI Buddy</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-sky">Opportunities</p>
          <ul className="space-y-2 text-slate-300">
            <li><Link href="/competitions" className="hover:text-volt">Competitions</Link></li>
            <li><Link href="/workshops" className="hover:text-volt">Workshops</Link></li>
            <li><Link href="/scholarships" className="hover:text-volt">Scholarships</Link></li>
          </ul>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-slate-500">Made with ❤️ by the Mechabuddy Team</p>
    </footer>
  );
}
