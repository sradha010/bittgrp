import { useState } from "react";
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
    setScrolled(latest > 24);

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
      animate={{ y: visible ? 0 : -110, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-3"
    >
      <div className="w-full max-w-6xl">
        <nav
          className={`flex items-center justify-between gap-3 rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-[#0B1020]/88 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
              : "bg-white/5 backdrop-blur-md border border-white/5"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <img
                src={bittLogo}
                alt="BITT Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-bold text-[13px] tracking-tight text-white">
                BITT
              </span>
              <span className="text-[8px] tracking-[0.22em] uppercase text-white/50">
                Institute · Trust
              </span>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-3 py-2 text-[12px] font-medium text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  {l.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
            </button>

            <a
              href="#institutions"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-[12px] font-semibold hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(59,130,246,0.25)]"
            >
              Explore
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-200"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-xl border border-white/10 bg-[#0B1020]/95 backdrop-blur-2xl p-3 shadow-xl"
            >
              <div className="space-y-1">
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
                  className="flex items-center justify-center gap-1.5 mt-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-xs font-semibold text-white"
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