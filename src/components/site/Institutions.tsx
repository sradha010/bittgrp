import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import poly from "@/assets/inst-polytechnic.jpg";
import nursing from "@/assets/inst-nursing.png";
import school from "@/assets/inst-school.png";
import play from "@/assets/inst-playschool.png";
import devi from "@/assets/inst-devi.png";
import jobs from "@/assets/inst-job.png";

const institutions = [
  {
    name: "BITT Polytechnic",
    desc: "Industry-aligned diploma programs in engineering and technology.",
    img: poly,
    url: "https://www.bittpolytechnic.com",
  },
  {
    name: "BNYPC",
    desc: "Healthcare professionals trained with modern clinical exposure.",
    img: jobs,
    url: "https://bnypc.vercel.app/",
  },
  {
    name: "BITT Public School",
    desc: "Holistic schooling rooted in modern pedagogy.",
    img: school,
    url: "https://www.bittpublicschool.com",
  },
  {
    name: "Bitty Balpan",
    desc: "Joyful early-years learning that builds curiosity.",
    img: play,
    url: "https://bitty-balpan.vercel.app/",
  },
  {
    name: "Devi Darshan",
    desc: "Heritage, values and spiritual wellness initiatives.",
    img: devi,
    url: "http://devidarshan.co/",
  },
  {
    name: "VGE Jobs",
    desc: "Career launchpad connecting talent with leading employers.",
    img: nursing,
    url: "https://www.vandanamglobal.com/index.php",
  },
];

export function Institutions() {
  return (
    <section
      id="institutions"
      className="relative py-16 md:py-24 overflow-hidden bg-transparent"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-500/5 blur-[140px] -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-white"
          >
            Six institutions.
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              One unified vision.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl"
          >
            Each institution under the BITT Trust delivers focused excellence
            in its domain — connected by a shared commitment to innovation,
            learning, and student success.
          </motion.p>
        </div>

        {/* 3 cols × 2 rows — all 6 cells perfectly equal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[300px] gap-4">
          {institutions.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-white/25 hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.15)]"
            >
              {/* Background Image */}
              <img
                src={inst.img}
                alt={inst.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover scale-100 will-change-transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.06]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-all duration-500 group-hover:via-black/55" />

              {/* Cyan-violet tint on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/8 via-transparent to-violet-500/8 pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 overflow-hidden">
                <div className="transform translate-y-7 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] will-change-transform">

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-1.5">
                    {inst.name}
                  </h3>

                  {/* Description — CSS grid height expand */}
                  <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
                    <div className="overflow-hidden">
                      <p className="text-[13px] leading-relaxed text-white/60 max-w-[260px] pt-0.5">
                        {inst.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-[40ms] ease-[0.16,1,0.3,1] origin-left">
                    <a
                      href={inst.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      Visit Website
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
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