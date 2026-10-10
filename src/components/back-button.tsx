"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  function goBack() {
    // Visitors who landed directly on this page have no history to go back to
    if (window.history.length > 1) router.back();
    else router.push("/");
  }

  return (
    <button
      onClick={goBack}
      className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-sm text-slate-300 transition hover:border-volt hover:text-volt"
    >
      <ArrowLeft size={16} /> Back
    </button>
  );
}
