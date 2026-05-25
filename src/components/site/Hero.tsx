import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
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
    pos: "top-4 right-6 xl:right-10",
  },
  {
    title: "VGE Jobs",
    subtitle: "Career Opportunities",
    icon: Building2,
    delay: 0.2,
    pos: "top-1/2 -translate-y-1/2 right-20 xl:right-28",
  },
  {
    title: "Public School",
    subtitle: "Future Foundations",
    icon: Users,
    delay: 0.4,
    pos: "bottom-6 right-4 xl:right-12",
  },
];

const stats = [
  { value: "12K+", label: "Students" },
  { value: "95%", label: "Placements" },
  { value: "6", label: "Institutions" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-32 pb-14 bg-[#0a0c14]"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c14]/45 via-[#0a0c14]/20 to-[#0a0c14]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/35"
            style={{
              left: `${(i * 7 + 13) % 100}%`,
              top: `${(i * 11 + 9) % 100}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.75, 0.15] }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-10 xl:gap-12 items-center relative z-10">
        <div className="lg:col-span-7 max-w-2xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight text-white"
          >
            Shaping Future{" "}
            <span className="block">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Leaders
              </span>{" "}
              Through
            </span>
            Innovation & Education
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            A unified ecosystem of six institutions delivering world-class education
            — from early years to engineering, healthcare to careers. Built for
            tomorrow&apos;s pioneers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap gap-3.5"
          >
            <a
              href="#institutions"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-sm text-white font-medium shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all"
            >
              Explore Institutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-sm text-white font-medium transition">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
              </span>
              Watch Overview
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-3 gap-4 pt-4 max-w-md"
          >
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider font-medium text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[420px] xl:h-[480px] hidden lg:block">
          {floatingCards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + c.delay }}
              className={`absolute ${c.pos} w-56 xl:w-60`}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: c.delay,
                  ease: "easeInOut",
                }}
                className="rounded-xl p-4 border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.02] transition-transform cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center mb-3 shadow-md shadow-cyan-500/10">
                  <c.icon className="w-4 h-4 text-white" />
                </div>
                <div className="font-display font-semibold text-sm mb-0.5 text-white">
                  {c.title}
                </div>
                <div className="text-[11px] text-slate-400">{c.subtitle}</div>
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-2.5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Discover</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>
      </div>
    </section>
  );
}