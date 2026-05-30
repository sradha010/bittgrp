import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Heart, BookOpen, Star, Sparkles, Briefcase } from "lucide-react";
import poly   from "@/assets/inst-polytechnic.jpg";
import jobs   from "@/assets/inst-job.png";
import school from "@/assets/inst-school.png";
import play   from "@/assets/inst-playschool.png";
import devi   from "@/assets/inst-devi.png";
import nursing from "@/assets/inst-nursing.png";

const C = { navy: "#274C77", navyDark: "#1B3D65", steel: "#6096BA", mist: "#E7ECEF" };
const INST_COLORS = ["#6096BA","#5A8CB5","#4E82AC","#6BA4C6","#3D6FA0","#5588B0"];

const institutions = [
  { num:"01", name:"BITT Polytechnic",  category:"Engineering & Technology",
    desc:"Industry-aligned diploma programs in mechanical, civil, electrical and CS engineering — backed by world-class labs and 95% placement record.",
    outcomes:["₹6L Avg Package","3,000+ Alumni","Diploma & Advanced"],
    icon:GraduationCap, img:poly,    color:INST_COLORS[0], url:"https://www.bittpolytechnic.com",  featured:true  },
  { num:"02", name:"BNYPC",             category:"Healthcare & Nursing",
    desc:"Rigorous nursing and paramedical programs with hands-on clinical training at affiliated hospitals.",
    outcomes:["Hospital Placements","Clinical Training"],
    icon:Heart,         img:jobs,    color:INST_COLORS[1], url:"https://bnypc.vercel.app/",         featured:false },
  { num:"03", name:"BITT Public School",category:"K-12 Education",
    desc:"Modern pedagogy, smart classrooms, and a nurturing environment for holistic K-12 development.",
    outcomes:["Board Excellence","Sports & Arts"],
    icon:BookOpen,      img:school,  color:INST_COLORS[2], url:"https://www.bittpublicschool.com",  featured:false },
  { num:"04", name:"Bitty Balpan",      category:"Early Childhood",
    desc:"Joyful, structured early learning that builds confidence, creativity, and lifelong curiosity.",
    outcomes:["Age 2–6 Programs","Play-Based Learning"],
    icon:Star,          img:play,    color:INST_COLORS[3], url:"https://bitty-balpan.vercel.app/", featured:false },
  { num:"05", name:"Devi Darshan",      category:"Heritage & Wellness",
    desc:"Cultural heritage, spiritual wellness, and values-based programming anchored in tradition.",
    outcomes:["Cultural Programs","Wellness Retreats"],
    icon:Sparkles,      img:devi,    color:INST_COLORS[4], url:"http://devidarshan.co/",            featured:false },
  { num:"06", name:"VGE Jobs",          category:"Career Platform",
    desc:"Connecting ambitious talent with 200+ employers — internships, placements, and career coaching.",
    outcomes:["200+ Partners","Job Placement"],
    icon:Briefcase,     img:nursing, color:INST_COLORS[5], url:"https://www.vandanamglobal.com/index.php", featured:false },
];

const featured = institutions[0];
const rest      = institutions.slice(1);

const cardShadow      = "0 2px 24px rgba(39,76,119,0.12)";
const cardShadowHover = "0 8px 36px rgba(39,76,119,0.20)";

export function Institutions() {
  return (
    <section id="institutions" className="relative py-16 md:py-24 overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-[100px] -z-10"
        style={{ background: "rgba(96,150,186,0.06)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px] -z-10"
        style={{ background: "rgba(39,76,119,0.04)" }} />

      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest mb-4"
            style={{ border: "1px solid rgba(96,150,186,0.30)", background: "rgba(39,76,119,0.07)", color: C.navy }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.steel }} />
            Six Institutions
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-display text-3xl md:text-5xl font-bold leading-[1.08] tracking-tight"
            style={{ color: C.navy }}>
            Where Excellence{" "}<span className="gradient-purple-cyan">Lives.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base leading-relaxed max-w-xl"
            style={{ color: "rgba(39,76,119,0.65)" }}>
            Six specialized institutions, one unifying mission — producing graduates
            who are ready, resilient, and remarkable from day one.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* ── Featured card ── */}
          <motion.a
            href={featured.url} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl transition-all duration-500 lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[540px]"
            style={{ background: "#FFFFFF", border: `1px solid rgba(96,150,186,0.28)`, boxShadow: cardShadow }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = cardShadowHover; el.style.borderColor = "rgba(96,150,186,0.45)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = cardShadow; el.style.borderColor = "rgba(96,150,186,0.28)"; }}
          >
            {/* Photo */}
            <img src={featured.img} alt=""
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-700"
              style={{ opacity: 0.85 }}
            />
            {/* Static fade — soft, starts late */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 75%, rgba(255,255,255,0.25) 90%, rgba(255,255,255,0.15) 100%)" }}
            />
            {/* Hover: expand white zone so sliding content stays readable */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.70) 70%, rgba(255,255,255,0.88) 82%, rgba(255,255,255,0.95) 90%)" }}
            />
            {/* Color tint top edge */}
            <div className="absolute top-0 inset-x-0 h-28"
              style={{ background: `linear-gradient(180deg, ${featured.color}28, transparent)` }} />
            <div className="relative z-10 flex flex-col h-full p-7 lg:p-8">
              {/* Top row */}
              <div className="flex items-start justify-between mb-auto">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${featured.color}18`, border: `1px solid ${featured.color}35` }}>
                  <featured.icon className="w-6 h-6" style={{ color: featured.color }} />
                </div>
              </div>

              {/* Bottom content — slides up on hover */}
              <div className="mt-auto translate-y-5 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight mb-1"
                  style={{ color: C.navy }}>{featured.name}</h3>

                {/* Description — expands on hover */}
                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
                  <div className="overflow-hidden">
                    <p className="text-[13px] leading-relaxed max-w-md pt-1.5 pb-4"
                      style={{ color: "rgba(39,76,119,0.62)" }}>{featured.desc}</p>
                  </div>
                </div>

                {/* Outcomes + CTA — fade in on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.outcomes.map((o) => (
                      <span key={o} className="px-3 py-1 rounded-full text-[11px] font-semibold"
                        style={{ background: `${featured.color}12`, border: `1px solid ${featured.color}28`, color: featured.color }}>{o}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold"
                    style={{ color: "rgba(39,76,119,0.55)" }}>
                    Visit Website
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </motion.a>

          {/* ── Standard cards ── */}
          {rest.map((inst, i) => (
            <motion.a
              key={inst.name} href={inst.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i + 1) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 min-h-[240px]"
              style={{ background: "#FFFFFF", border: "1px solid rgba(96,150,186,0.22)", boxShadow: cardShadow }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = cardShadowHover; el.style.borderColor = "rgba(96,150,186,0.40)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = cardShadow; el.style.borderColor = "rgba(96,150,186,0.22)"; }}
            >
              {/* Photo */}
              <img src={inst.img} alt=""
                className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-700"
                style={{ opacity: 0.75 }}
              />
              {/* Static fade — soft, starts late */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.45) 82%, rgba(255,255,255,0.65) 97%, rgba(255,255,255,0.72) 100%)" }}
              />
              {/* Hover: expand white zone */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 38%, rgba(255,255,255,0.65) 58%, rgba(255,255,255,0.88) 72%, rgba(255,255,255,0.94) 82%)" }}
              />
              {/* Color tint top */}
              <div className="absolute top-0 inset-x-0 h-16"
                style={{ background: `linear-gradient(180deg, ${inst.color}22, transparent)` }} />
              <div className="relative z-10 flex flex-col h-full p-5">
                {/* Icon at top */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-auto transition-transform duration-300 group-hover:scale-105"
                  style={{ background: `${inst.color}14`, border: `1px solid ${inst.color}28` }}>
                  <inst.icon className="w-5 h-5" style={{ color: inst.color }} />
                </div>

                {/* Bottom content — slides up on hover */}
                <div className="mt-auto translate-y-7 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] will-change-transform">
                  <h3 className="font-display text-lg font-bold leading-tight"
                    style={{ color: C.navy }}>{inst.name}</h3>

                  {/* Description — expands on hover */}
                  <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
                    <div className="overflow-hidden">
                      <p className="text-[12px] leading-relaxed pt-1.5 pb-2 line-clamp-3"
                        style={{ color: "rgba(39,76,119,0.60)" }}>{inst.desc}</p>
                    </div>
                  </div>

                  {/* CTA — fades in on hover */}
                  <div className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 delay-75 origin-left mt-2">
                    <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold"
                      style={{ color: "rgba(39,76,119,0.55)" }}>
                      Explore
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}