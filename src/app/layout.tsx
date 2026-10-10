import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BackButton from "@/components/back-button";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Mechabuddy — Build Robots. Build Futures.",
  description:
    "Hands-on robotics kits, an AI mentor, gamified learning, workshops, competitions and scholarships for young engineers.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased">
        <Navigation />
        <main className="mx-auto max-w-6xl px-5">
          <BackButton />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
