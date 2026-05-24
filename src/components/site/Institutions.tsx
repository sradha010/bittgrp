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
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "BNYPC",
    desc: "Healthcare professionals trained with modern clinical exposure.",
    img: jobs,
    url: "https://bnypc.vercel.app/",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "BITT Public School",
    desc: "Holistic schooling rooted in modern pedagogy.",
    img: school,
    url: "https://www.bittpublicschool.com",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Bitty Balpan",
    desc: "Joyful early-years learning that builds curiosity.",
    img: play,
    url: "https://bitty-balpan.vercel.app/",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Devi Darshan",
    desc: "Heritage, values and spiritual wellness initiatives.",
    img: devi,
    url: "http://devidarshan.co/",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    name: "VGE Jobs",
    desc: "Career launchpad connecting talent with leading employers.",
    img: nursing,
    url: "https://www.vandanamglobal.com/index.php",
    span: "md:col-span-2 md:row-span-1",
  },
];

export function Institutions() {
  return (
    <section
      id="institutions"
      className="relative py-24 md:py-32 overflow-hidden bg-transparent"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px] -z-10" />
      <div className="absolute bottom-0 right-0 w-120 h-120 rounded-full bg-violet-500/10 blur-[160px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Our Ecosystem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            Six institutions.
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              One unified vision.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-400 leading-relaxed"
          >
            Each institution under the BITT Trust delivers focused excellence
            in its domain — connected by a shared commitment to innovation,
            learning, and student success.
          </motion.p>
        </div>

        {/* Institution Grid Base Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[340px] gap-6">
          {institutions.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/20 ${inst.span}`}
            >
              {/* Background Cover Image with Fine Hardware-Accelerated Zoom */}
              <img
                src={inst.img}
                alt={inst.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transform scale-100 will-change-transform transition-transform duration-800 ease-[0.16,1,0.3,1] group-hover:scale-[1.06]"
              />

              {/* Dynamic Overlay Darkening Gradient Sheet */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-black/20 transition-opacity duration-500 group-hover:via-black/70" />

              {/* Seamless Vignette Tint Mesh */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />

              {/* Content Suite Shield Wrapper */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 overflow-hidden">
<div className="transform translate-y-11 md:translate-y-13 group-hover:translate-y-0 transition-transform duration-600 ease-[0.16,1,0.3,1] will-change-transform">
                  
                  {/* Card Title Block */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    {inst.name}
                  </h3>

                  {/* Description Reveal Segment with CSS Grid Height Mapping */}
                  <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
                    <div className="overflow-hidden">
                      <p className="text-sm md:text-base leading-relaxed text-white/70 max-w-md pt-1">
                        {inst.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA Link Action Bar */}
                  <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 delay-[50ms] ease-[0.16,1,0.3,1] origin-left">
                    <a
                      href={inst.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
                    >
                      Visit Website
                      <ArrowUpRight className="w-4.5 h-4.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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