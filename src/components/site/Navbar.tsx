import { useEffect, useState } from "react";
import { Menu, Search, Bell, X, ArrowRight } from "lucide-react";
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
    
    if (latest > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

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
      animate={{ 
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0 
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      // UI Fix: Reduced outer vertical padding layers slightly (py-3/5 down to py-2.5/4)
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav
          // UI Fix: Compacted padding specs from py-3 to py-2.5
          className={`flex items-center justify-between rounded-xl px-4 md:px-6 py-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-[#0B1020]/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.25),0_0_20px_rgba(34,211,238,0.06)]"
              : "bg-white/5 backdrop-blur-sm border border-white/5 shadow-none"
          }`}
        >
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative">
              {/* UI Fix: Scaled logo dimensions down from w-11/h-11 to w-9.5/h-9.5 */}
              <img
                src={bittLogo}
                alt="BITT Logo"
                className="w-9.5 h-9.5 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              {/* UI Fix: Downsized typography components slightly */}
              <span className="font-display font-bold text-sm tracking-tight text-white">
                BITT
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-white/50">
                Institute · Trust
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                {/* UI Fix: Changed font weight/size bounds from text-sm to text-[13px] */}
                <a
                  href={l.href}
                  className="relative px-3.5 py-1.5 text-[13px] font-medium transition-all duration-300 group text-white/70 hover:text-white"
                >
                  {l.label}
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Actions Block */}
          <div className="flex items-center gap-2">
            {/* Notification Button */}
            {/* UI Fix: Decreased sizing framework from w-10/h-10 to w-8.5/h-8.5 */}
            <button
              className="hidden md:flex w-8.5 h-8.5 items-center justify-center rounded-lg transition-all duration-300 border bg-white/5 border-white/10 text-white hover:bg-white/10"
              aria-label="Notice"
            >
              <Bell className="w-3.5 h-3.5" />
            </button>

            {/* CTA Button */}
            {/* UI Fix: Tightened padding vectors (px-5 py-2.5 -> px-4 py-2) and text sizes to match layout */}
            <a
              href="#institutions"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-violet-500 text-white text-xs font-semibold hover:scale-[1.02] transition-all duration-300 shadow-[0_6px_20px_rgba(59,130,246,0.25)]"
            >
              Explore Institutions
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-8.5 h-8.5 flex items-center justify-center rounded-lg border transition-all duration-300 bg-white/5 border-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-xl border border-white/10 bg-[#0B1020]/95 backdrop-blur-2xl p-3.5 shadow-xl"
            >
              <div className="space-y-0.5">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3.5 py-2 rounded-lg text-[13px] text-white/75 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {l.label}
                  </a>
                ))}

                <a
                  href="#institutions"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 mt-2.5 px-3.5 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-violet-500 text-xs font-medium text-white"
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