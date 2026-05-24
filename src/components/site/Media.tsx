import { motion } from "framer-motion";
import { Play, ImageIcon } from "lucide-react";
import poly from "@/assets/inst-polytechnic.jpg";
import nursing from "@/assets/inst-nursing.png";
import school from "@/assets/inst-school.png";
import jobs from "@/assets/inst-job.png";

const items = [
  { type: "video", img: poly, title: "Inside BITT Polytechnic", duration: "2:34", span: "md:col-span-2 md:row-span-2" },
  { type: "image", img: nursing, title: "Convocation 2025", span: "" },
  { type: "image", img: school, title: "Annual Day Highlights", span: "" },
  { type: "video", img: jobs, title: "VGE Jobs Career Fair", duration: "1:48", span: "md:col-span-2" },
];

export function Media() {
  return (
    <section id="media" className="relative py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground mb-6">
              Featured Media
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Moments from <span className="gradient-text">our campuses</span>.
            </h2>
          </div>
          <a href="#" className="text-sm text-brand-cyan hover:underline">View all media →</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl glass cursor-pointer ${it.span}`}
            >
              <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />

              {it.type === "video" ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center group-hover:scale-110 group-hover:gradient-brand-bg transition-all duration-300 shadow-glow">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              ) : (
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full glass-strong flex items-center justify-center">
                  <ImageIcon className="w-4 h-4" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <div className="font-display text-lg font-semibold">{it.title}</div>
                  {it.duration && <div className="text-xs text-muted-foreground mt-1">{it.duration}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
