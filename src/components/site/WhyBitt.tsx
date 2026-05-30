import { motion } from "framer-motion";
import { Briefcase, Handshake, Sparkles, Network, Lightbulb, Users2 } from "lucide-react";

const C = { navy: "#274C77", steel: "#6096BA", mist: "#E7ECEF" };

const features = [
  { icon: Briefcase, title: "Placement Support",        accent: C.steel,   glowRgb: "96,150,186",  size: "large",
    desc: "A dedicated career cell with systematic pipelines connecting every graduate to the right opportunity — before they leave campus." },
  { icon: Sparkles,  title: "Modern Learning",          accent: "#5A8CB5",  glowRgb: "90,140,181",  size: "small",
    desc: "Smart classrooms, advanced labs, and digital-first pedagogy that makes complex concepts approachable and applied." },
  { icon: Handshake, title: "Industry Partnerships",    accent: "#4E82AC",  glowRgb: "78,130,172",  size: "small",
    desc: "Live projects, internships, and structural tie-ups with top employers that keep curriculum market-relevant." },
  { icon: Network,   title: "Unified Digital Ecosystem",accent: C.navy,    glowRgb: "39,76,119",   size: "large",
    desc: "A cloud platform across all six institutions — synced learning materials, grading analytics, and remote access for every student." },
  { icon: Lightbulb, title: "Innovation Labs",          accent: "#7AAFC7",  glowRgb: "122,175,199", size: "small",
    desc: "Maker spaces, rapid-prototyping setups, and incubation support turning student ideas into startups." },
  { icon: Users2,    title: "Expert Faculty",           accent: "#5588B0",  glowRgb: "85,136,176",  size: "small",
    desc: "Mentors from industry and academia who bring real-world context into every lecture and project." },
];

export function WhyBitt() {
  return (
    <section id="why" className="relative py-16 md:py-24 overflow-hidden" style={{ background: "#FFFFFF" }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(39,76,119,1) 1px, transparent 1px), linear-gradient(to right, rgba(39,76,119,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(96,150,186,0.08)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(39,76,119,0.05)" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest mb-4"
              style={{ border: "1px solid rgba(96,150,186,0.30)", background: "rgba(39,76,119,0.07)", color: C.navy }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.steel }} />
              Why Choose BITT
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]"
              style={{ color: C.navy }}>
              Built{" "}<span className="gradient-purple-cyan">Different.</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-[13px] leading-relaxed border-l pl-4 py-0.5 hidden md:block max-w-xs"
            style={{ color: "rgba(39,76,119,0.55)", borderColor: "rgba(96,150,186,0.30)" }}>
            BITT structures education to match industry velocity — graduating
            professionals who contribute from their very first day.
          </motion.p>
        </div>

        {/* Asymmetric Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature: f, index: i }: { feature: (typeof features)[0]; index: number }) {
  const isLarge = f.size === "large";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 ${isLarge ? "lg:col-span-2" : "lg:col-span-1"}`}
      style={{ background: "#FFFFFF", border: "1px solid rgba(39,76,119,0.08)", boxShadow: "0 2px 16px rgba(39,76,119,0.06)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(39,76,119,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = `rgba(${f.glowRgb},0.30)`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(39,76,119,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(39,76,119,0.08)"; }}
    >
      {/* Top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-70 transition-opacity duration-500 rounded-t-xl"
        style={{ background: `linear-gradient(90deg, ${f.accent}90, transparent 60%)` }} />

      <div className={`relative z-10 p-6 ${isLarge ? "md:p-8 flex flex-col md:flex-row md:items-start gap-6" : ""}`}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
          style={{ background: `rgba(${f.glowRgb},0.12)`, border: `1px solid rgba(${f.glowRgb},0.24)` }}>
          <f.icon className="w-5 h-5" style={{ color: f.accent }} />
        </div>
        <div className={isLarge ? "flex-1" : "mt-4"}>
          <h3 className="font-display text-[15px] md:text-base font-bold tracking-tight mb-2"
            style={{ color: C.navy }}>{f.title}</h3>
          <p className="text-[13px] leading-relaxed" style={{ color: "rgba(39,76,119,0.58)" }}>{f.desc}</p>
          <div className="mt-5">
            <motion.div initial={{ width: 16 }} whileInView={{ width: 28 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 + 0.4, duration: 0.5 }}
              className="h-px rounded-full" style={{ background: f.accent, opacity: 0.5 }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
