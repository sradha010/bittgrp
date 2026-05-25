import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import bittLogo from "@/assets/logo_bitg.png";

const institutions = [
  "BITT Polytechnic",
  "BNYPC",
  "BITT Public School",
  "Bitty Balpan",
  "Devi Darshan",
  "VGE Jobs",
];

const quickLinks = [
  "About Trust",
  "Admissions",
  "Placements",
  "Careers",
];

export function Footer() {
  return (
    <footer className="relative pt-12 pb-6 border-t border-white/5 overflow-hidden">

      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8">

        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand Section */}
          <div className="space-y-4">

            <a
              href="#home"
              className="flex items-center gap-3 group w-fit"
            >
              <img
                src={bittLogo}
                alt="BITT Logo"
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-sm text-zinc-900">
                  BITT
                </span>

                <span className="text-[9px] text-slate-600 tracking-[0.2em] uppercase">
                  Institute · Trust
                </span>
              </div>
            </a>

            <p className="text-[13px] text-slate-500 leading-relaxed max-w-sm font-light">
              A unified ecosystem of six institutions shaping future leaders
              through innovation and modern pedagogy.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">

              {[FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="
                      w-9 h-9
                      rounded-lg
                      border border-slate-200
                      bg-white
                      hover:bg-gradient-to-r
                      hover:from-slate-800
                      hover:to-slate-600
                      hover:border-transparent
                      transition-all duration-300
                      flex items-center justify-center
                      group
                      shadow-sm hover:shadow-md
                    "
                  >
                    <Icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors duration-300" />
                  </a>
                )
              )}

            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 sm:gap-12 md:gap-16">

            {/* Institutions */}
            <div>

              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 mb-4">
                Institutions
              </div>

              <ul className="space-y-3">
                {institutions.map((item) => (
                  <li key={item}>
                    <a
                      href="#institutions"
                      className="
                        text-[13px]
                        text-slate-500
                        hover:text-zinc-900
                        transition-colors duration-200
                        inline-block
                        hover:translate-x-1
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            {/* Quick Links */}
            <div>

              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700 mb-4">
                Quick Links
              </div>

              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        text-[13px]
                        text-slate-500
                        hover:text-zinc-900
                        transition-colors duration-200
                        inline-block
                        hover:translate-x-1
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="
          pt-5
          border-t border-white/5
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-4
          text-center md:text-left
        ">

          <span className="text-[11px] text-slate-600">
            © {new Date().getFullYear()} Birsa Institute of Technology Trust.
            All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-[11px] text-slate-600">

            <a
              href="#"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-slate-900 transition-colors duration-200"
            >
              Cookies
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}