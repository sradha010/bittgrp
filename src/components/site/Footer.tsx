import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import bittLogo from "@/assets/logo_bitg.png";

const institutions = [
  "BITT Polytechnic", "BNYPC", "BITT Public School",
  "Bitty Balpan", "Devi Darshan", "VGE Jobs",
];

const quickLinks = [
  "About Trust", "Admissions", "Placements", "Careers",
];

export function Footer() {
  return (
    // UI Fix: Standardized vertical layout bounds down to py-12 for a compact signature line
    <footer className="relative pt-12 pb-6 border-t border-white/5">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">

        {/* Main row */}
        {/* UI Fix: Compressed column spacing rules from gap-10 down to gap-6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div className="space-y-3">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <img
                src={bittLogo}
                alt="BITT Logo"
                className="w-12 h-8 object-contain group-hover:scale-102 transition-transform duration-300"
              />
              <div className="flex flex-col leading-tight">
                {/* UI Fix: Reduced brand size rule down to text-sm */}
                <span className="font-display font-bold text-sm text-white">BITT</span>
                <span className="text-[9px] text-slate-500 tracking-wider uppercase">Institute · Trust</span>
              </div>
            </a>
            {/* UI Fix: Normalized description font dimensions down from text-sm to text-[13px] */}
            <p className="text-[13px] text-slate-400 leading-relaxed max-w-xs font-light">
              A unified ecosystem of six institutions shaping future leaders through innovation and modern pedagogy.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-1.5 pt-1">
              {[FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  // UI Fix: Adjusted bounding box dimensions to an ultra-clean w-7.5 h-7.5 context
                  // Syntax Bugfix: Swapped out broken hover:from-emerald-50 color scale for hover:from-emerald-500
                  className="w-7.5 h-7.5 rounded-md border border-white/5 bg-white/5 hover:bg-linear-to-r hover:from-emerald-500 hover:to-indigo-500 hover:border-transparent transition-all duration-300 flex items-center justify-center group/icon"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 group-hover/icon:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Institutions Links */}
          <div>
            {/* UI Fix: Tightened header structure metrics to match page elements */}
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Institutions
            </div>
            <ul className="space-y-2">
              {institutions.map((item) => (
                <li key={item}>
                  {/* Contrast Bugfix: Shifted color tags from dark text-zinc-950 to an aesthetic hover:text-white dark mode behavior */}
                  <a href="#institutions" className="text-[13px] text-slate-500 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            {/* UI Fix: Standardized tracking constraints on utility navigation elements */}
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Quick Links
            </div>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  {/* Contrast Bugfix: Swapped out high-contrast text-zinc-950 target defaults for a clean hover state */}
                  <a href="#" className="text-[13px] text-slate-500 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        {/* UI Fix: Scaled footer credit details down safely to a clear text-[11px] format */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} Birsa Institute of Technology Trust. All rights reserved.
          </span>
          <div className="flex items-center gap-4 text-[11px] text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}