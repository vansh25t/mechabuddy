"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bot, Menu, X } from "lucide-react";

const links = [
  { href: "/kits", label: "Kits" },
  { href: "/learn", label: "Learn" },
  { href: "/build", label: "Build" },
  { href: "/challenges", label: "Challenges" },
  { href: "/competitions", label: "Competitions" },
  { href: "/workshops", label: "Workshops" },
  { href: "/scholarships", label: "Scholarships" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-volt text-ink">
            <Bot size={20} />
          </span>
          Mechabuddy
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-lg px-3 py-2 text-sm transition hover:text-volt ${
                  pathname === l.href ? "text-volt" : "text-slate-300"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/ai-buddy" className="btn-ghost !px-4 !py-2 text-sm">
            AI Buddy
          </Link>
          <Link href="/profile" className="btn-primary !px-4 !py-2 text-sm">
            My Profile
          </Link>
        </div>

        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line px-5 py-3 lg:hidden">
          {[...links, { href: "/ai-buddy", label: "AI Buddy" }, { href: "/achievements", label: "Achievements" }, { href: "/profile", label: "Profile" }].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2 ${pathname === l.href ? "text-volt" : "text-slate-300"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
