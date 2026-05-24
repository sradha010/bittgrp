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
    <section className="relative py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        {/* Switched from glass-strong to manual inline glassmorphic styling to prevent broken styles */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">

          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-[100px]" />

          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-brand-cyan/20 blur-[100px]" />


          {/* Fixed Responsiveness: grid-cols-1 for mobile, sm:grid-cols-2 or sm:grid-cols-3, and lg:grid-cols-5 for clean layout */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                // Kept standard center text on mobile, responsive left alignment on desktop screens
                className="text-center lg:text-left flex flex-col justify-center"
              >
                {/* Restored your exact 'gradient-text' utility classes */}
                <div className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                
                {/* Restored your exact text-muted-foreground layout styles */}
                <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground leading-relaxed max-w-[180px] mx-auto lg:mx-0">
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