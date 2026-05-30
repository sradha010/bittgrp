import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import bittLogo from "@/assets/logo_bitg.png";

const C = { navy: "#274C77", navyDark: "#1B3D65", steel: "#6096BA", mist: "#E7ECEF" };

const institutions = [
  { name: "BITT Polytechnic",  url: "https://www.bittpolytechnic.com" },
  { name: "BNYPC",             url: "https://bnypc.vercel.app/" },
  { name: "BITT Public School",url: "https://www.bittpublicschool.com" },
  { name: "Bitty Balpan",      url: "https://bitty-balpan.vercel.app/" },
  { name: "Devi Darshan",      url: "http://devidarshan.co/" },
  { name: "VGE Jobs",          url: "https://www.vandanamglobal.com/" },
];

const quickLinks = ["About Trust","Admissions","Placements","Careers","Media"];

const socials = [
  { Icon: FaFacebook, label: "Facebook" },
  { Icon: FaInstagram,label: "Instagram"},
  { Icon: FaXTwitter, label: "X / Twitter"},
  { Icon: FaLinkedin, label: "LinkedIn" },
  { Icon: FaYoutube,  label: "YouTube"  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: C.navy }}>
      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(231,236,239,0.20), transparent)` }} />

      {/* Pre-footer CTA strip */}
      <div style={{ borderBottom: "1px solid rgba(231,236,239,0.10)", background: "rgba(255,255,255,0.04)" }}>
        <div className="container mx-auto px-4 md:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-base" style={{ color: C.mist }}>
              Applications open for 2025–26 admissions.
            </p>
            <p className="text-[13px] mt-0.5" style={{ color: "rgba(231,236,239,0.50)" }}>
              Limited seats across all six institutions. Apply early.
            </p>
          </div>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold shrink-0 transition-all duration-200 hover:scale-[1.02]"
            style={{ background: C.mist, color: C.navy, boxShadow: "0 4px 16px rgba(0,0,0,0.20)" }}
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-8 pt-14 pb-6">
        {/* Brand statement */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-14">
          <h2 className="font-display font-black leading-none tracking-tight"
            style={{ color: "rgba(231,236,239,0.90)", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Building Tomorrow's
            <br />
            <span style={{ color: C.steel }}>Leaders.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: "rgba(231,236,239,0.12)", border: "1px solid rgba(231,236,239,0.18)" }}>
                <img src={bittLogo} alt="BITT" className="w-6 h-6 object-contain" />
              </div>
              <div className="leading-none">
                <div className="font-display font-bold text-sm tracking-tight" style={{ color: C.mist }}>BITT</div>
                <div className="text-[8.5px] tracking-[0.22em] uppercase mt-0.5" style={{ color: "rgba(231,236,239,0.35)" }}>
                  Institute · Trust
                </div>
              </div>
            </a>
            <p className="text-[13px] leading-relaxed max-w-xs" style={{ color: "rgba(231,236,239,0.48)" }}>
              A unified ecosystem of six institutions shaping future leaders through
              innovation, excellence, and purpose-driven education.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(231,236,239,0.08)", border: "1px solid rgba(231,236,239,0.14)", color: "rgba(231,236,239,0.45)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(231,236,239,0.15)"; el.style.color = C.mist; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(231,236,239,0.08)"; el.style.color = "rgba(231,236,239,0.45)"; }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Institutions */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: "rgba(231,236,239,0.30)" }}>Institutions</div>
            <ul className="space-y-2.5">
              {institutions.map((item) => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] transition-colors duration-200 group"
                    style={{ color: "rgba(231,236,239,0.48)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.mist; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(231,236,239,0.48)"; }}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0 transition-colors duration-200 group-hover:bg-[#6096BA]"
                      style={{ background: "rgba(231,236,239,0.22)" }} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: "rgba(231,236,239,0.30)" }}>Quick Links</div>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#"
                    className="flex items-center gap-2 text-[13px] transition-colors duration-200 group"
                    style={{ color: "rgba(231,236,239,0.48)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.mist; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(231,236,239,0.48)"; }}
                  >
                    <span className="w-1 h-1 rounded-full shrink-0 transition-colors duration-200 group-hover:bg-[#6096BA]"
                      style={{ background: "rgba(231,236,239,0.22)" }} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: "rgba(231,236,239,0.30)" }}>Contact</div>
            <ul className="space-y-4">
              {[
                { heading:"Phone",    value:"+91 651 000 0000"        },
                { heading:"Email",    value:"info@bitt.edu.in"        },
                { heading:"Location", value:"Ranchi, Jharkhand, India"},
                { heading:"Hours",    value:"Mon–Sat, 9am–6pm"        },
              ].map((c) => (
                <li key={c.heading}>
                  <div className="text-[9.5px] uppercase tracking-widest font-semibold mb-0.5"
                    style={{ color: "rgba(231,236,239,0.25)" }}>{c.heading}</div>
                  <div className="text-[13px]" style={{ color: "rgba(231,236,239,0.50)" }}>{c.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
          style={{ borderTop: "1px solid rgba(231,236,239,0.08)" }}>
          <span className="text-[11px]" style={{ color: "rgba(231,236,239,0.30)" }}>
            © {new Date().getFullYear()} Birsa Institute of Technology Trust. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {["Privacy Policy","Terms","Cookies"].map((l) => (
              <a key={l} href="#" className="text-[11px] transition-colors duration-200"
                style={{ color: "rgba(231,236,239,0.30)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(231,236,239,0.70)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(231,236,239,0.30)"; }}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
