import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Building2, Award } from "lucide-react";

/* Dark section uses the deep navy palette */
const D = {
  bg:      "#1A3354",
  bgCard:  "rgba(255,255,255,0.06)",
  border:  "rgba(231,236,239,0.10)",
  text:    "#E7ECEF",
  textSub: "rgba(231,236,239,0.60)",
  textMuted:"rgba(231,236,239,0.38)",
  steel:   "#6096BA",
  navy:    "#274C77",
  mist:    "#E7ECEF",
};

const row1 = [
  "TCS","Infosys","Wipro","HCL Technologies","L&T Engineering",
  "Apollo Hospitals","Fortis Healthcare","AIIMS Affiliated",
  "Amazon India","Flipkart","Meesho","Zomato","Swiggy",
  "HDFC Bank","SBI","ICICI Bank","Axis Bank",
  "TCS","Infosys","Wipro","HCL Technologies","L&T Engineering",
  "Apollo Hospitals","Fortis Healthcare","AIIMS Affiliated",
  "Amazon India","Flipkart","Meesho","Zomato","Swiggy",
  "HDFC Bank","SBI","ICICI Bank","Axis Bank",
];

const row2 = [
  "Coal India","BHEL","SAIL","ONGC","NTPC","BCCL",
  "Tata Motors","JSW Steel","Vedanta","Hindalco","JSPL",
  "Byju's","Unacademy","upGrad","Simplilearn",
  "State Bank","Jharkhand Govt.","DRDO","ISRO Contractors",
  "Coal India","BHEL","SAIL","ONGC","NTPC","BCCL",
  "Tata Motors","JSW Steel","Vedanta","Hindalco","JSPL",
  "Byju's","Unacademy","upGrad","Simplilearn",
  "State Bank","Jharkhand Govt.","DRDO","ISRO Contractors",
];

const placementStats = [
  { icon: TrendingUp, value: "₹8L+",  label: "Average CTC",        sub: "Top packages up to ₹18L",   accent: D.steel    },
  { icon: Building2,  value: "200+",  label: "Recruiting Partners", sub: "Across sectors and regions", accent: "#7AAFC7"  },
  { icon: Award,      value: "1,200+",label: "Offers in 2024",      sub: "95% placement rate",         accent: "#A8C8E0"  },
];

export function Recruiters() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: D.bg }}>
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(96,150,186,0.12), transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(39,76,119,0.30)" }} />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(96,150,186,0.08)" }} />

      {/* Top divider line */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(96,150,186,0.30), transparent)" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-widest mb-4"
            style={{ border: `1px solid rgba(231,236,239,0.18)`, background: "rgba(231,236,239,0.08)", color: D.steel }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: D.steel }} />
            Placement Ecosystem
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.07 }}
            className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
            style={{ color: D.text }}>
            200+ Partners.{" "}
            <span className="gradient-purple-cyan">Real Opportunities.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.13 }}
            className="text-base leading-relaxed"
            style={{ color: D.textSub }}>
            Our placement cell connects graduates with India's top companies — from
            healthcare giants to tech unicorns, PSUs to global MNCs.
          </motion.p>
        </div>

        {/* Marquee rows */}
        <div className="pause-on-hover overflow-hidden space-y-3 mb-12">
          <div className="flex gap-3">
            <div className="animate-marquee flex gap-3 shrink-0">
              {row1.map((company, i) => (
                <CompanyBadge key={`r1-${i}`} name={company} variant="primary" />
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="animate-marquee-reverse flex gap-3 shrink-0">
              {row2.map((company, i) => (
                <CompanyBadge key={`r2-${i}`} name={company} variant="secondary" />
              ))}
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {placementStats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative rounded-2xl p-6 text-center overflow-hidden group transition-all duration-300"
              style={{ background: D.bgCard, border: `1px solid ${D.border}`, backdropFilter: "blur(8px)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(231,236,239,0.20)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = D.bgCard; (e.currentTarget as HTMLElement).style.borderColor = D.border; }}
            >
              {/* Accent top line */}
              <div className="absolute top-0 inset-x-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${s.accent}90, transparent)` }} />

              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}30` }}>
                <s.icon className="w-5 h-5" style={{ color: s.accent }} />
              </div>
              <div className="font-display text-3xl font-bold mb-1" style={{ color: s.accent }}>{s.value}</div>
              <div className="text-sm font-semibold mb-1" style={{ color: D.text }}>{s.label}</div>
              <div className="text-[11px]" style={{ color: D.textMuted }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(96,150,186,0.25), transparent)" }} />
    </section>
  );
}

function CompanyBadge({ name, variant }: { name: string; variant: "primary" | "secondary" }) {
  return (
    <span
      className="inline-flex items-center px-4 py-2 rounded-full text-[12px] font-semibold whitespace-nowrap shrink-0"
      style={
        variant === "primary"
          ? { background: "rgba(231,236,239,0.10)", border: "1px solid rgba(231,236,239,0.18)", color: "rgba(231,236,239,0.80)" }
          : { background: "rgba(96,150,186,0.10)", border: "1px solid rgba(96,150,186,0.20)", color: "rgba(231,236,239,0.58)" }
      }
    >
      {name}
    </span>
  );
}
