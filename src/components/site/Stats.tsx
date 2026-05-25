import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

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
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 12000, suffix: "+", label: "Students Enrolled",   accent: "#22d3ee" },
  { value: 95,    suffix: "%", label: "Placement Rate",      accent: "#38bdf8" },
  { value: 400,   suffix: "+", label: "Expert Faculty",      accent: "#818cf8" },
  { value: 6,     suffix: "",  label: "Institutions",        accent: "#22d3ee" },
  { value: 25,    suffix: "+", label: "Years of Excellence", accent: "#a78bfa" },
];

export function Stats() {
  return (
    <section className="relative py-12 md:py-16 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0d1525 0%, #0a1020 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.35)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 inset-x-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${s.accent}, transparent 80%)` }}
              />

              {/* Hover glow */}
              <div
                className="absolute top-0 inset-x-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(180deg, ${s.accent}18 0%, transparent 100%)` }}
              />

              {/* Content */}
              <div className="relative px-5 py-7 flex flex-col gap-2">
                <div
                  className="font-bold tabular-nums leading-none tracking-tight"
                  style={{
                    fontSize: "clamp(1.8rem, 2.6vw, 2.5rem)",
                    color: "#f1f5f9",
                  }}
                >
                  <Counter to={s.value} suffix={s.suffix} />
                </div>

                <div
                  className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-semibold leading-snug"
                  style={{ color: "#475569" }}
                >
                  {s.label}
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.45, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[2px] rounded-full mt-1"
                  style={{ background: s.accent, opacity: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}