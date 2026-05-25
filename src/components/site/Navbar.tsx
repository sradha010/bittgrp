import { useEffect, useState } from "react";
import { Menu, Bell, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import bittLogo from "@/assets/logo_bitg.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Institutions", href: "#institutions" },
  { label: "Why BITT", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    if (latest > previous && latest > 120) {
      setVisible(false);
      setOpen(false);
    } else {
      setVisible(true);
    }
  });

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3"
    >
      {/* Constrained pill — max-w keeps it narrow, not full-bleed */}
      <div className="w-full max-w-3xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-500 ${
            scrolled
              ? "bg-[#0B1020]/85 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3),0_0_16px_rgba(34,211,238,0.06)]"
              : "bg-white/5 backdrop-blur-sm border border-white/5"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <img
                src={bittLogo}
                alt="BITT Logo"
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-bold text-[13px] tracking-tight text-white">BITT</span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-white/50">Institute · Trust</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-3 py-1.5 text-[12px] font-medium transition-all duration-300 group text-white/70 hover:text-white"
                >
                  {l.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg transition-all duration-300 border bg-white/5 border-white/10 text-white hover:bg-white/10"
              aria-label="Notice"
            >
              <Bell className="w-3.5 h-3.5" />
            </button>

            <a
              href="#institutions"
              className="hidden md:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-[11px] font-semibold hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(59,130,246,0.25)]"
            >
              Explore
              <ArrowRight className="w-3 h-3" />
            </a>

            <button
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg border transition-all duration-300 bg-white/5 border-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-xl border border-white/10 bg-[#0B1020]/95 backdrop-blur-2xl p-3 shadow-xl"
            >
              <div className="space-y-0.5">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-lg text-[13px] text-white/75 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#institutions"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-xs font-medium text-white"
                >
                  Explore Institutions
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}