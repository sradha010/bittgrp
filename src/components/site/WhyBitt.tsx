import { motion } from "framer-motion";
import {
  Briefcase,
  Handshake,
  Sparkles,
  Network,
  Lightbulb,
  Users2,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Placement Support",
    desc: "Dedicated career cell connecting students with industry leaders through systematic mentorship pipelines.",
    glow: "rgba(6, 182, 212, 0.15)",
    accent: "from-cyan-500 to-sky-500",
    iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    hoverText: "group-hover:text-cyan-300",
  },
  {
    icon: Handshake,
    title: "Industry Partnerships",
    desc: "Live projects, internships and robust structural tie-ups with top regional and national employers.",
    glow: "rgba(99, 102, 241, 0.15)",
    accent: "from-indigo-500 to-violet-500",
    iconBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    hoverText: "group-hover:text-indigo-300",
  },
  {
    icon: Sparkles,
    title: "Modern Learning",
    desc: "Smart classrooms, advanced sandbox testing labs and digital-first structural pedagogy for every student.",
    glow: "rgba(168, 85, 247, 0.15)",
    accent: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    hoverText: "group-hover:text-violet-300",
  },
  {
    icon: Network,
    title: "Digital Ecosystem",
    desc: "A unified cloud platform across all six institutions for synchronous material, grading analytics, and remote learning.",
    glow: "rgba(236, 72, 153, 0.15)",
    accent: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-500/10 border-pink-500/20 text-pink-400",
    hoverText: "group-hover:text-pink-300",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    desc: "Maker labs, rapid prototyping setups, and institutional incubation assets supporting student startups.",
    glow: "rgba(234, 179, 8, 0.15)",
    accent: "from-yellow-500 to-amber-500",
    iconBg: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    hoverText: "group-hover:text-yellow-300",
  },
  {
    icon: Users2,
    title: "Experienced Faculty",
    desc: "Mentors recruited directly from leading global academic structures and deep commercial industry roles.",
    glow: "rgba(20, 184, 166, 0.15)",
    accent: "from-teal-500 to-emerald-500",
    iconBg: "bg-teal-500/10 border-teal-500/20 text-teal-400",
    hoverText: "group-hover:text-teal-300",
  },
];

export function WhyBitt() {
  return (
    <section
      id="why"
      className="relative py-28 md:py-36 bg-[#0a0c14] overflow-hidden"
    >
      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-cyan-500/30 bg-cyan-950/30 text-xs uppercase font-semibold tracking-widest text-cyan-400 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              Institutional Edge
            </motion.div>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-white leading-none antialiased">
              An ecosystem built for <br />
              <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                your ultimate future
              </span>
              .
            </h2>
          </div>
          <div className="text-slate-400 max-w-sm text-sm font-normal leading-relaxed border-l-2 border-cyan-500/30 pl-4 py-1">
            We reject standard methodologies. BITT structures technical
            education to match real-world execution velocity.
          </div>
        </div>

        {/* Uniform 3×2 Grid — no col-span, all cards equal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl bg-linear-to-b from-[#111422] to-[#0c0f1a] border border-white/6 p-7 transition-all duration-500 hover:border-white/14 hover:-translate-y-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              {/* Per-card glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(400px circle at 50% 0%, ${f.glow}, transparent 70%)`,
                }}
              />

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-8 right-8 h-px bg-linear-to-r ${f.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border ${f.iconBg} mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <f.icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3
                  className={`font-display text-lg font-bold text-white tracking-tight mb-2.5 transition-colors duration-300 ${f.hoverText}`}
                >
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed font-light flex-1">
                  {f.desc}
                </p>

                {/* Footer action */}
                <div className="mt-6 pt-4 border-t border-white/4 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors duration-300">
                    Node 0{i + 1}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/3 border border-white/6 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/6 transition-all duration-300">
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}