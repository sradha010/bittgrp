import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  GraduationCap,
  Building2,
  Users,
} from "lucide-react";
import heroBg from "@/assets/hero_bg.png";

const floatingCards = [
  {
    title: "Polytechnic",
    subtitle: "Engineering Excellence",
    icon: GraduationCap,
    delay: 0,
    pos: "top-2 right-4 md:right-8",
  },
  {
    title: "VGE Jobs",
    subtitle: "Career Opportunities",
    icon: Building2,
    delay: 0.2,
    pos: "top-1/2 -translate-y-1/2 right-24 md:right-36",
  },
  {
    title: "Public School",
    subtitle: "Future Foundations",
    icon: Users,
    delay: 0.4,
    pos: "bottom-4 right-2 md:right-10",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      // UX Fix: Increased pt-32 to guarantee clean breathing room below the fixed navbar
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-32 pb-12 bg-[#0a0c14]"
    >
      {/* Background image layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-80"
          width={1920}
          height={1080}
        />
        {/* Subtle bottom fade to blend into page */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0c14]/50 via-transparent to-[#0a0c14]" />
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* UX Fix: Reduced grid gap from gap-12 to gap-8 for a tighter, cohesive feel */}
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-8 items-center relative z-10Loose">
        
        {/* Left Content Column */}
        {/* UX Fix: Decreased content spacing class from space-y-8 to space-y-5 */}
        <div className="lg:col-span-7 space-y-5">

          {/* Heading */}
          {/* UI/UX Fix: Reduced maximum font size scale (e.g., xl:text-8xl changed to xl:text-6xl) to prevent text crowding */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight text-white"
          >
            Shaping Future <br />
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Leaders
            </span>{" "}
            Through <br />
            Innovation & Education
          </motion.h1>

          {/* Subtext */}
          {/* UI Fix: Reduced size from text-lg/xl down to a cleaner text-base/lg */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            A unified ecosystem of six institutions delivering world-class
            education — from early years to engineering, healthcare to careers.
            Built for tomorrow's pioneers.
          </motion.p>

          {/* CTA Buttons */}
          {/* UI Fix: Tightened padding values on buttons for a crisper interface footprint */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3.5"
          >
            <a
              href="#institutions"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-violet-500 text-sm text-white font-medium shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all"
            >
              Explore Institutions
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-sm text-white font-medium transition">
              <div className="w-6 h-6 rounded-full bg-linear-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
              </div>
              Watch Overview
            </button>
          </motion.div>

          {/* Stats */}
          {/* UI Fix: Reduced font scale sizes of data metric tracking labels */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-4 max-w-md"
          >
            {[
              { value: "12K+", label: "Students" },
              { value: "95%", label: "Placements" },
              { value: "6", label: "Institutions" },
            ].map((s) => (
              <div key={s.label} className="space-y-0.5">
                <div className="font-display text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider font-medium text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column (Floating Cards) */}
        {/* UI Fix: Reduced height context from h-125 (500px) down to h-100 (400px) to balance layout scale */}
        <div className="lg:col-span-5 relative h-100 hidden lg:block">
          {floatingCards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + c.delay }}
              className={`absolute ${c.pos} w-56`}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: c.delay,
                  ease: "easeInOut",
                }}
                // UI Fix: Scaled down card inner layout (w-11 reduced to w-9, text scales down-sized)
                className="rounded-xl p-4 border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:scale-102 transition-transform cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-linear-to-r from-cyan-500 to-violet-500 flex items-center justify-center mb-3 shadow-md shadow-cyan-500/10">
                  <c.icon className="w-4 h-4 text-white" />
                </div>
                <div className="font-display font-semibold text-sm mb-0.5 text-white">
                  {c.title}
                </div>
                <div className="text-[11px] text-slate-400">{c.subtitle}</div>
                <div className="mt-2.5 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-2.5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Discover</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-linear-to-r from-cyan-500 to-violet-500" />
        </div>
        
      </div>
    </section>
  );
}