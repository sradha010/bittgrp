import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";
import { useState, useCallback, useRef } from "react";

const contactCards = [
  { icon: Phone, label: "Call us", value: "+91 651 000 0000", sub: "Mon–Sat, 9am–6pm" },
  { icon: Mail, label: "Email", value: "info@bitt.edu.in", sub: "We reply within 24 hours" },
  { icon: MapPin, label: "Visit", value: "Ranchi, Jharkhand", sub: "BITT Campus, India" },
  { icon: Clock, label: "Hours", value: "9:00 – 18:00", sub: "Open Monday to Saturday" },
];

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  interest: "BITT Polytechnic",
  message: "",
};

// Simulates an API call — replace with your real endpoint
async function submitForm(data: FormData): Promise<void> {
  await new Promise((res, rej) =>
    setTimeout(() => (Math.random() > 0.15 ? res(undefined) : rej(new Error("Network error"))), 1800)
  );
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [formState, setFormState] = useState<FormState>("idle");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((type: "success" | "error", message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(() => setToast(null), 4500);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (formState === "loading") return;

      setFormState("loading");
      try {
        await submitForm(formData);
        setFormState("success");
        setFormData(EMPTY_FORM);
        showToast("success", "Message sent! We'll get back to you within 24 hours.");
        // Reset back to idle after showing success state in button
        setTimeout(() => setFormState("idle"), 3000);
      } catch {
        setFormState("error");
        showToast("error", "Something went wrong. Please try again or email us directly.");
        setTimeout(() => setFormState("idle"), 3000);
      }
    },
    [formData, formState, showToast]
  );

  const isLoading = formState === "loading";
  const isSuccess = formState === "success";
  const isError = formState === "error";

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#0a0c14]">

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-9999 flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-2xl backdrop-blur-xl max-w-sm w-[calc(100vw-2rem)]"
            style={{
              background: toast.type === "success"
                ? "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(16,185,129,0.08))"
                : "linear-gradient(135deg, rgba(239,68,68,0.12), rgba(220,38,38,0.08))",
              borderColor: toast.type === "success" ? "rgba(6,182,212,0.25)" : "rgba(239,68,68,0.25)",
            }}
          >
            {toast.type === "success"
              ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              : <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            }
            <p className="text-sm text-white font-medium leading-snug flex-1">{toast.message}</p>
            <button
              onClick={() => setToast(null)}
              className="text-slate-400 hover:text-white transition-colors ml-1 shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wider text-slate-400 mb-6">
            Get in touch
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            Let's start your{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              journey
            </span>
            .
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Left: Info Cards + Map */}
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl p-5 border border-white/10 bg-[#0d111c]/60 backdrop-blur-md hover:bg-white/6 transition-all duration-300 shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 group-hover:bg-linear-to-r group-hover:from-cyan-500 group-hover:to-indigo-500 transition-all duration-300">
                    <c.icon className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{c.label}</div>
                  <div className="font-display text-base font-semibold text-white">{c.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{c.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d111c]/60 backdrop-blur-md h-72 relative shadow-xl">
              <iframe
                title="BITT Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.30%2C23.34%2C85.34%2C23.38&layer=mapnik"
                className="w-full h-full"
                style={{ filter: "invert(0.92) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-cyan-500/10 to-transparent mix-blend-overlay" />
            </div>
          </div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-white/10 bg-[#0d111c]/80 backdrop-blur-xl p-7 md:p-9 space-y-5 relative overflow-hidden shadow-2xl"
          >
            {/* Ambient glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

            <div className="relative space-y-5">

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Full name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Phone */}
              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
              />

              {/* Interest select */}
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-400 mb-2 block font-semibold">
                  Interested in
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/60 focus:bg-[#0d111c] transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option className="bg-[#0a0c14] text-white">BITT Polytechnic</option>
                  <option className="bg-[#0a0c14] text-white">BNYPC</option>
                  <option className="bg-[#0a0c14] text-white">BITT Public School</option>
                  <option className="bg-[#0a0c14] text-white">Bitty Balpan Play School</option>
                  <option className="bg-[#0a0c14] text-white">VGE Jobs</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-400 mb-2 block font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help…"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition resize-none placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 relative overflow-hidden
                  ${isSuccess
                    ? "bg-linear-to-r from-emerald-500 to-teal-500 shadow-emerald-500/20"
                    : isError
                    ? "bg-linear-to-r from-red-500 to-rose-500 shadow-red-500/20"
                    : "bg-linear-to-r from-cyan-500 via-sky-500 to-indigo-500 shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01]"
                  }
                  disabled:cursor-not-allowed disabled:opacity-80
                `}
              >
                <AnimatePresence mode="wait">
                  {isLoading && (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2.5"
                    >
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </motion.span>
                  )}
                  {isSuccess && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Message Sent!
                    </motion.span>
                  )}
                  {isError && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4" />
                      Failed — Try Again
                    </motion.span>
                  )}
                  {formState === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2.5"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Subtle privacy note */}
              <p className="text-center text-xs text-slate-600">
                We respect your privacy. No spam, ever.
              </p>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

// Reusable Field component
function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full">
      <label className="text-xs uppercase tracking-wider text-slate-400 mb-2 block font-semibold">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/60 focus:bg-white/10 transition placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
}