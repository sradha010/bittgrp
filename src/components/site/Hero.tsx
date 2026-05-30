import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const C = { navy: "#274C77", navyDark: "#1B3D65", steel: "#6096BA", mist: "#E7ECEF" };

const ECO_NODES = [
  { name: "BITT Polytechnic", short: "POLY",  color: C.steel,   x: 240, y: 90  },
  { name: "BNYPC",            short: "BNYPC", color: "#5A8CB5", x: 370, y: 165 },
  { name: "VGE Jobs",         short: "JOBS",  color: "#4E82AC", x: 370, y: 315 },
  { name: "Devi Darshan",     short: "DEVI",  color: C.navy,    x: 240, y: 390 },
  { name: "Bitty Balpan",     short: "PLAY",  color: "#7AAFC7", x: 110, y: 315 },
  { name: "BITT School",      short: "SCHL",  color: "#5588B0", x: 110, y: 165 },
];

const HERO_STATS = [
  { value: "12K+", label: "Students"    },
  { value: "95%",  label: "Placements"  },
  { value: "₹8L",  label: "Avg Package" },
  { value: "25+",  label: "Years"       },
];

function EcosystemViz() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(39,76,119,0.12)",
        boxShadow: "0 8px 40px rgba(39,76,119,0.10)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Panel header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-0">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{ color: "rgba(39,76,119,0.40)" }}>
          BITT Ecosystem
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.steel }} />
          <span className="text-[10px] font-medium" style={{ color: "rgba(39,76,119,0.35)" }}>6 Active Institutions</span>
        </div>
      </div>

      <svg viewBox="0 0 480 480" className="w-full max-w-sm mx-auto"
        style={{ filter: "drop-shadow(0 0 16px rgba(39,76,119,0.08))" }}>
        {/* Decorative rings */}
        <circle cx={240} cy={240} r={185} fill="none" stroke="rgba(39,76,119,0.05)" strokeWidth="1" />
        <circle cx={240} cy={240} r={155} fill="none" stroke="rgba(96,150,186,0.12)" strokeWidth="1" strokeDasharray="3 7" />

        {/* Connection lines */}
        {ECO_NODES.map((node, i) => (
          <motion.line key={`line-${node.name}`}
            x1={240} y1={240} x2={node.x} y2={node.y}
            stroke={C.navy} strokeOpacity={0.15} strokeWidth="1.5" strokeDasharray="5 4"
            animate={{ strokeDashoffset: [18, 0] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Center pulse */}
        <motion.circle cx={240} cy={240} r={48} fill="none" stroke={C.navy} strokeWidth="1.5"
          animate={{ r: [48, 80], opacity: [0.3, 0] }}
          style={{ originX: "240px", originY: "240px" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Center node */}
        <circle cx={240} cy={240} r={46} fill="url(#centerGradLight)" />
        <defs>
          <radialGradient id="centerGradLight" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor={C.navy} stopOpacity="0.90" />
            <stop offset="100%" stopColor={C.navyDark} stopOpacity="0.85" />
          </radialGradient>
        </defs>
        <text x={240} y={234} textAnchor="middle" fill={C.mist} fontSize="13" fontWeight="800" fontFamily="Space Grotesk, sans-serif">BITT</text>
        <text x={240} y={251} textAnchor="middle" fill="rgba(231,236,239,0.55)" fontSize="7.5" letterSpacing="3" fontFamily="Space Grotesk, sans-serif">ECOSYSTEM</text>

        {/* Institution nodes */}
        {ECO_NODES.map((node, i) => (
          <motion.g key={node.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
          >
            <circle cx={node.x} cy={node.y} r={34} fill={node.color} opacity={0.08} />
            <motion.circle cx={node.x} cy={node.y} r={22} fill="none" stroke={node.color} strokeWidth="1.5"
              animate={{ r: [22, 42], opacity: [0.4, 0] }}
              style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
              transition={{ duration: 2.8, delay: i * 0.45, repeat: Infinity, ease: "easeOut" }}
            />
            <circle cx={node.x} cy={node.y} r={22} fill={node.color} opacity={0.88} />
            <text x={node.x} y={node.y + 4} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
              {node.short}
            </text>
            <text x={node.x} y={node.y + (node.y > 240 ? 42 : -28)} textAnchor="middle"
              fill="rgba(39,76,119,0.45)" fontSize="7.5" fontFamily="Space Grotesk, sans-serif">
              {node.name}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Bottom strip */}
      <div className="grid grid-cols-3 text-center pb-4 pt-3"
        style={{ borderTop: "1px solid rgba(39,76,119,0.08)" }}>
        {[{ v: "6", l: "Institutions" }, { v: "12K+", l: "Students" }, { v: "25+", l: "Years" }].map((s, i) => (
          <div key={s.l} className="py-1 px-2"
            style={{ borderRight: i < 2 ? "1px solid rgba(39,76,119,0.08)" : "none" }}>
            <div className="font-display text-base font-bold" style={{ color: C.navy }}>{s.v}</div>
            <div className="text-[9.5px] uppercase tracking-widest" style={{ color: "rgba(39,76,119,0.35)" }}>{s.l}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen mesh-bg flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 spotlight-hero pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(39,76,119,1) 1px, transparent 1px), linear-gradient(to right, rgba(39,76,119,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span key={i} className="absolute w-0.5 h-0.5 rounded-full"
            style={{ background: C.steel, opacity: 0.25, left: `${(i * 7.3 + 5) % 95}%`, top: `${(i * 11.7 + 8) % 90}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.12, 0.35, 0.12] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center relative z-10">
        {/* Left */}
        <div className="space-y-8 max-w-xl">
      
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold leading-[1.02] tracking-tight"
            style={{ color: C.navy, fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
          >
            Build The{" "}
            <span className="gradient-purple-cyan">Future</span>
            <br />You Imagine.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: "rgba(39,76,119,0.62)" }}
          >
            A unified educational ecosystem spanning engineering, healthcare, school education,
            early learning, and career development — all under one trusted name.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href="#institutions"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
              style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDark})`, color: C.mist, boxShadow: "0 4px 20px rgba(39,76,119,0.30)" }}
            >
              Explore Institutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group"
              style={{ border: "1px solid rgba(39,76,119,0.20)", background: "rgba(255,255,255,0.7)", color: C.navy, backdropFilter: "blur(8px)" }}
            >
              <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.steel})` }}>
                <Play className="w-3 h-3 fill-white text-white ml-0.5" />
              </span>
              Watch Campus Tour
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex flex-wrap items-start gap-x-8 gap-y-4 pt-2"
          >
            {HERO_STATS.map((s) => (
              <div key={s.label} className="space-y-0.5">
                <div className="font-display font-bold leading-none" style={{ fontSize: "1.75rem", color: C.navy }}>{s.value}</div>
                <div className="text-[10.5px] uppercase tracking-[0.16em] font-medium"
                  style={{ color: "rgba(39,76,119,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Ecosystem */}
        <div className="hidden lg:block"><EcosystemViz /></div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5"
        style={{ color: "rgba(39,76,119,0.30)" }}
      >
        <span className="text-[9px] uppercase tracking-[0.22em] font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
