import { Megaphone } from "lucide-react";

const notices = [
  "Admissions Open 2026 — Apply now for BITT Polytechnic",
  "Scholarship Program launched for meritorious students",
  "BNYPC Annual Convocation on 15th December",
  "Industry Connect Summit — Register today",
  "VGE Jobs Career Fair — 200+ recruiters confirmed",
  "Bitty Balpan now accepting Pre-Nursery admissions",
];

export function NoticeMarquee() {
  return (
    <section className="relative py-6 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex items-center gap-6">
        <div className="shrink-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full gradient-brand-bg text-white text-xs font-medium shadow-lg shadow-primary/30">
          <Megaphone className="w-3.5 h-3.5" />
          LIVE
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap will-change-transform">
            {[...notices, ...notices].map((n, i) => (
              <span key={i} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-brand-cyan" />
                {n}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
