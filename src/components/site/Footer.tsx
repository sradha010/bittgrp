import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import bittLogo from "@/assets/logo_bitg.png";

const institutions = [
  "BITT Polytechnic", "BNYPC", "BITT Public School",
  "Bitty Balpan", "Devi Darshan", "VGE Jobs",
];
const links = [
  { label: "Institutions", href: "#institutions" },
];


const quickLinks = [
  "About Trust", "Admissions", "Placements", "Careers",
];

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <img
                src={bittLogo}
                alt="BITT Logo"
                className="w-15 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base text-slate-600">BITT</span>
                <span className="text-[10px] text-slate-500 tracking-wider uppercase">Institute · Trust</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              A unified ecosystem of six institutions shaping future leaders through innovation and modern pedagogy.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2 pt-1">
              {[FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 hover:bg-linear-to-r hover:from-emerald-50 hover:to-indigo-500 hover:border-transparent hover:scale-110 transition-all duration-300 flex items-center justify-center"
                >
                  <Icon className="w-4.5 h-4.5 text-slate-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Institutions */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Institutions
            </div>
            <ul className="space-y-2.5">
              {institutions.map((item) => (
                <li key={item}>
                  <a href="#institutions" className="text-sm text-slate-500 hover:text-zinc-950 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-500 hover:text-zinc-950 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-600">
            © {new Date().getFullYear()} Birsa Institute of Technology Trust. All rights reserved.
          </span>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}