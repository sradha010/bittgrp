import { useEffect, useState, useRef } from "react";
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
  
  // Track the scroll position using Framer Motion's hook
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // 1. Check if the user has scrolled down past a threshold
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // 2. Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setVisible(false); // Scrolling Down -> Hide
      setOpen(false);    // Close mobile menu if open
    } else {
      setVisible(true);  // Scrolling Up -> Show
    }
  });

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      // Animates y-axis to seamlessly hide/show based on scroll direction
      animate={{ 
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 md:px-7 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-[#0B1020]/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.28),0_0_25px_rgba(34,211,238,0.08)]"
              : "bg-white/5 backdrop-blur-sm border border-white/5 shadow-none"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={bittLogo}
                alt="BITT Logo"
                className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-bold text-base tracking-tight text-white">
                BITT
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/60">
                Institute · Trust
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group text-white/70 hover:text-white"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Notification */}
            <button
              className="hidden md:flex w-10 h-10 items-center justify-center rounded-xl transition-all duration-300 border bg-white/5 border-white/10 text-white hover:bg-white/10"
              aria-label="Notice"
            >
              <Bell className="w-4 h-4" />
            </button>

            {/* CTA */}
            <a
              href="#institutions"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-violet-500 text-white text-sm font-semibold hover:scale-[1.03] transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
            >
              Explore Institutions
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 bg-white/5 border-white/10 text-white"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-3 rounded-2xl border border-white/10 bg-[#0B1020]/95 backdrop-blur-2xl p-4 shadow-2xl"
            >
              <div className="space-y-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm text-white/75 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {l.label}
                  </a>
                ))}

                <a
                  href="#institutions"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-violet-500 text-white font-medium"
                >
                  Explore Institutions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}