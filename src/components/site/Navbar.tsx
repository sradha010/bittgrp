import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import bittLogo from "@/assets/logo_bitg.png";

const C = { navy: "#274C77", navyDark: "#1B3D65", steel: "#6096BA", mist: "#E7ECEF" };

const links = [
  { label: "Home",         href: "#home"         },
  { label: "Institutions", href: "#institutions"  },
  { label: "Why BITT",     href: "#why"           },
  { label: "Contact",      href: "#contact"       },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    if (latest > previous && latest > 100) { setVisible(false); setOpen(false); }
    else setVisible(true);
  });

  return (
    <motion.header
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <div className="w-full max-w-5xl">
        <nav
          className="flex items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-all duration-500"
          style={
            scrolled
              ? { background: "rgba(255,255,255,0.96)", backdropFilter: "blur(24px)", border: "1px solid rgba(39,76,119,0.12)", boxShadow: "0 4px 32px rgba(39,76,119,0.10)" }
              : { background: "rgba(231,236,239,0.55)", backdropFilter: "blur(12px)", border: "1px solid rgba(39,76,119,0.08)" }
          }
        >
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300"
              style={{ background: "rgba(39,76,119,0.08)", border: "1px solid rgba(96,150,186,0.22)" }}>
              <img src={bittLogo} alt="BITT" className="w-6 h-6 object-contain" />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="font-display font-bold text-[13px] tracking-tight" style={{ color: C.navy }}>BITT</div>
              <div className="text-[8.5px] tracking-[0.22em] uppercase mt-0.5" style={{ color: "rgba(39,76,119,0.85)" }}>Institute · Trust</div>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}
                  className="relative px-4 py-2 text-[12.5px] font-medium transition-colors duration-200 rounded-lg block group"
                  style={{ color: "rgba(39,76,119,0.75)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.navy; (e.currentTarget as HTMLElement).style.background = "rgba(39,76,119,0.06)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(39,76,119,0.75)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  {l.label}
                  <span className="absolute bottom-1.5 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                    style={{ background: `linear-gradient(90deg, ${C.navy}, ${C.steel})` }} />
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-2.5">
            <a href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-bold hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
              style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDark})`, color: C.mist, boxShadow: `0 4px 16px rgba(39,76,119,0.28)` }}
            >
              Apply Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button onClick={() => setOpen(p => !p)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-all"
              style={{ border: "1px solid rgba(39,76,119,0.15)", background: "rgba(39,76,119,0.06)", color: C.navy }}
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden mt-2 rounded-2xl overflow-hidden shadow-xl"
              style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(24px)", border: "1px solid rgba(39,76,119,0.12)" }}
            >
              <div className="p-3 space-y-0.5">
                {links.map((l, i) => (
                  <motion.a key={l.href} href={l.href}
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all group"
                    style={{ color: "rgba(39,76,119,0.65)" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = C.navy; el.style.background = "rgba(39,76,119,0.05)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(39,76,119,0.65)"; el.style.background = "transparent"; }}
                  >
                    {l.label}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                ))}
              </div>
              <div className="px-3 pb-3">
                <a href="#contact" onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[12.5px] font-bold"
                  style={{ background: `linear-gradient(135deg, ${C.navy}, ${C.navyDark})`, color: C.mist }}
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
