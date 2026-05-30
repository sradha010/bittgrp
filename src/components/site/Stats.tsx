import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, TrendingUp, BookOpen, Building2, Award } from "lucide-react";

const C = { navy: "#274C77", steel: "#6096BA", mist: "#E7ECEF" };

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    to >= 1000 ? Math.floor(v).toLocaleString() : Math.floor(v).toString()
  );
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);
  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span><span>{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 12000, suffix: "+", label: "Students Enrolled",   icon: Users,      accent: C.steel   },
  { value: 95,    suffix: "%", label: "Placement Rate",      icon: TrendingUp, accent: C.navy    },
  { value: 400,   suffix: "+", label: "Expert Faculty",      icon: BookOpen,   accent: "#4E82AC" },
  { value: 6,     suffix: "",  label: "Institutions",        icon: Building2,  accent: C.steel   },
  { value: 25,    suffix: "+", label: "Years of Excellence", icon: Award,      accent: "#7AAFC7" },
];

export function Stats() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden" style={{ background: "#E7ECEF" }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(96,150,186,0.25), rgba(39,76,119,0.15), transparent)" }} />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-xl overflow-hidden transition-all duration-300"
              style={{ background: "#FFFFFF", border: "1px solid rgba(39,76,119,0.08)", boxShadow: "0 2px 16px rgba(39,76,119,0.06)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(39,76,119,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(39,76,119,0.06)"; }}
            >
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-px"
                style={{ background: `linear-gradient(90deg, ${s.accent}, transparent 75%)` }} />

              <div className="relative px-5 py-6 flex flex-col gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}28` }}>
                  <s.icon className="w-4 h-4" style={{ color: s.accent }} />
                </div>
                <div className="font-display font-bold tabular-nums leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.65rem, 2.4vw, 2.2rem)", color: C.navy }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.16em] font-semibold leading-snug"
                  style={{ color: "rgba(39,76,119,0.45)" }}>
                  {s.label}
                </div>
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: 24 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.45, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-px rounded-full" style={{ background: s.accent, opacity: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(96,150,186,0.18), rgba(39,76,119,0.10), transparent)" }} />
    </section>
  );
}
