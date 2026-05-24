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
    pos: "top-4 right-8 md:right-12",
  },
  {
    title: "VGE Jobs",
    subtitle: "Career Opportunities",
    icon: Building2,
    delay: 0.2,
    pos: "top-1/2 -translate-y-1/2 right-32 md:right-48",
  },
  {
    title: "Public School",
    subtitle: "Future Foundations",
    icon: Users,
    delay: 0.4,
    pos: "bottom-8 right-4 md:right-16",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-[#0a0c14]"
    >
      {/* Background image layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        {/* Subtle bottom fade to blend into page */}
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0c14]/30 via-transparent to-[#0a0c14]" />
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
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

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8">

          

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-white"
          >
            Shaping Future <br />
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Leaders
            </span>{" "}
            Through <br />
            Innovation & Education
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            A unified ecosystem of six institutions delivering world-class
            education — from early years to engineering, healthcare to careers.
            Built for tomorrow's pioneers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#institutions"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-linear-to-r from-cyan-500 to-violet-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all"
            >
              Explore Institutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-medium transition">
                <div className="w-7 h-7 rounded-full bg-linear-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-white ml-0.5" />
              </div>
              Watch Overview
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-3 gap-4 pt-6 max-w-xl"
          >
            {[
              { value: "12K+", label: "Students" },
              { value: "95%", label: "Placements" },
              { value: "6", label: "Institutions" },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="font-display text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating cards */}
        <div className="lg:col-span-5 relative h-125 hidden lg:block">
          {floatingCards.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + c.delay }}
              className={`absolute ${c.pos} w-64`}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: c.delay,
                  ease: "easeInOut",
                }}
                className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="w-11 h-11 rounded-xl bg-linear-to-r from-cyan-500 to-violet-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-semibold text-base mb-1 text-white">
                  {c.title}
                </div>
                <div className="text-xs text-slate-400">{c.subtitle}</div>
                <div className="mt-3 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Discover</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-linear-to-r from-cyan-500/20 to-violet-500/20" />
        </div>
      </div>
    </section>
  );
}