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
      // UI Fix: Tightened padding contexts down from py-24/32 to a cohesive py-16/24 scale
      className="relative py-16 md:py-24 overflow-hidden bg-transparent"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-500/5 blur-[140px] -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        {/* UI Fix: Reduced margin bottom from mb-16/20 to mb-10/12 */}
        <div className="max-w-2xl mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // UI Fix: Standardized small tag layout properties to match the Hero header
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Our Ecosystem
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // UI Fix: Scaled header typography frame down from text-4xl/6xl to text-3xl/5xl
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
            // UI Fix: Tightened body sizing from text-lg to text-base and adjusted top margin
            className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl"
          >
            Each institution under the BITT Trust delivers focused excellence
            in its domain — connected by a shared commitment to innovation,
            learning, and student success.
          </motion.p>
        </div>

        {/* Institution Grid Layout */}
        {/* UI/UX Fix: Reduced auto-rows from 340px to 280px, and gap from 6 to 4 (16px) for a sharper layout pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4">
          {institutions.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              // UI Fix: Adjusted outer layout corners slightly from rounded-[28px] to rounded-2xl
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-white/20 ${inst.span}`}
            >
              {/* Background Cover Image with Fine Hardware-Accelerated Zoom */}
              <img
                src={inst.img}
                alt={inst.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transform scale-100 will-change-transform transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.04]"
              />

              {/* Dynamic Overlay Darkening Gradient Sheet */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/10 transition-opacity duration-500 group-hover:via-black/60" />

              {/* Seamless Vignette Tint Mesh */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />

              {/* Content Suite Shield Wrapper */}
              {/* UI Fix: Reduced layout container padding variables down from p-6/8 to p-5/6 */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6 overflow-hidden">
                {/* UX/Animation Fix: Reduced translate height from y-11/13 to y-7/9 to perfectly fit the shorter card wrapper bounds */}
                <div className="transform translate-y-7 md:translate-y-9 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] will-change-transform">
                  
                  {/* Card Title Block */}
                  {/* UI Fix: Scaled typography sizes down from text-2xl/3xl to text-xl/2xl */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                    {inst.name}
                  </h3>

                  {/* Description Reveal Segment with CSS Grid Height Mapping */}
                  <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
                    <div className="overflow-hidden">
                      {/* UI Fix: Refined font sizing rules down from text-sm/base to text-[13px]/sm */}
                      <p className="text-[13px] md:text-sm leading-relaxed text-white/60 max-w-sm pt-0.5">
                        {inst.desc}
                      </p>
                    </div>
                  </div>

                  {/* CTA Link Action Bar */}
                  <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 delay-[30ms] ease-[0.16,1,0.3,1] origin-left">
                    {/* UI Fix: Downsized utility layout margin properties to ensure elements scale elegantly */}
                    <a
                      href={inst.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
                    >
                      Visit Website
                      <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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