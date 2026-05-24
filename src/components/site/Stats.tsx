import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
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
  { value: 12000, suffix: "+", label: "Students Enrolled" },
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 400, suffix: "+", label: "Expert Faculty" },
  { value: 6, suffix: "", label: "Institutions" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

export function Stats() {
  return (
    // UI Fix: Normalized py-24 to py-16 layout wrapper scales
    <section className="relative py-16 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        {/* UI Fix: Compressed container wrapper spacing frames slightly */}
        <div className="glass-strong rounded-2xl p-6 md:p-10 relative overflow-hidden">

          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-brand-cyan/10 blur-[100px]" />

          {/* UI Fix: Compacted gap values safely down from gap-8 to gap-5 */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-center lg:text-left flex flex-col justify-center"
              >
                {/* UI Fix: Refined counter font size weights down from text-4xl/5xl to text-3xl/4xl */}
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                
                {/* UI Fix: Shaved down labels from text-xs/sm to crisp text-[11px]/xs layout properties */}
                <div className="text-[11px] md:text-xs uppercase tracking-wider text-muted-foreground leading-relaxed max-w-40 mx-auto lg:mx-0">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}