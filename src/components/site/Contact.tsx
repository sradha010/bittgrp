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
    // UI Fix: Trimmed general layout bounds down from py-28/36 to py-16/24 scale
    <section id="contact" className="relative py-16 md:py-24 bg-[#0a0c14]">

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4.5 py-3 rounded-xl border shadow-xl backdrop-blur-xl max-w-sm w-[calc(100vw-2rem)]"
            style={{
              background: toast.type === "success"
                ? "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(16,185,129,0.06))"
                : "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(220,38,38,0.06))",
              borderColor: toast.type === "success" ? "rgba(6,182,212,0.2)" : "rgba(239,68,68,0.2)",
            }}
          >
            {toast.type === "success"
              ? <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
              : <AlertCircle className="w-4.5 h-4.5 text-red-400 shrink-0" />
            }
            <p className="text-xs text-white font-medium leading-snug flex-1">{toast.message}</p>
            <button
              onClick={() => setToast(null)}
              className="text-slate-400 hover:text-white transition-colors ml-1 shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        {/* UI Fix: Standardized margin layouts down from mb-16 to mb-10 */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.15em] text-slate-400 mb-4">
            Get in touch
          </div>
          {/* UI Fix: Dropped heading metrics from text-4xl/6xl to text-3xl/5xl */}
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            Let's start your{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              journey
            </span>
            .
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-5">

          {/* Left Side Info Blocks */}
          <div className="space-y-3.5">
            <div className="grid sm:grid-cols-2 gap-3.5">
              {contactCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  // UI Fix: Refined card padding tracks downwards from p-5 to p-4 md:p-4.5
                  className="group rounded-xl p-4 md:p-4.5 border border-white/10 bg-[#0d111c]/60 backdrop-blur-md hover:bg-white/5 transition-all duration-300 shadow-lg"
                >
                  {/* UI Fix: Compacted icon box variables from w-10/h-10 to w-8.5/h-8.5 */}
                  <div className="w-8.5 h-8.5 rounded-lg bg-white/5 flex items-center justify-center mb-2.5 group-hover:bg-linear-to-r group-hover:from-cyan-500 group-hover:to-indigo-500 transition-all duration-300">
                    <c.icon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">{c.label}</div>
                  {/* UI Fix: Streamlined text properties from text-base to text-sm */}
                  <div className="font-display text-sm font-semibold text-white">{c.value}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{c.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Embed Map Framework */}
            {/* UI Fix: Shaved down panel height profiles from h-72 to h-64 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d111c]/60 backdrop-blur-md h-64 relative shadow-lg">
              <iframe
                title="BITT Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.30%2C23.34%2C85.34%2C23.38&layer=mapnik"
                className="w-full h-full"
                style={{ filter: "invert(0.92) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-cyan-500/5 to-transparent mix-blend-overlay" />
            </div>
          </div>

          {/* Right Side Input Form */}
          <motion.form
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            // UI Fix: Reduced form block padding properties slightly from p-7/9 to p-6 md:p-7
            className="rounded-2xl border border-white/10 bg-[#0d111c]/80 backdrop-blur-xl p-6 md:p-7 space-y-4 relative overflow-hidden shadow-xl"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

            <div className="relative space-y-4">
              {/* Form Input Row 1 */}
              <div className="grid sm:grid-cols-2 gap-3.5">
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

              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
              />

              {/* Selector Option Block */}
              <div>
                {/* UI Fix: Compacted form typography labels from text-xs to text-[11px] */}
                <label className="text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 block font-semibold">
                  Interested in
                </label>
                {/* UI Fix: Balanced input sizing heights by decreasing standard vertical padding values from py-3 to py-2.5 */}
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-[13px] text-white focus:outline-none focus:border-cyan-500/50 focus:bg-[#0d111c] transition duration-300 cursor-pointer disabled:opacity-50"
                >
                  <option className="bg-[#0a0c14] text-white">BITT Polytechnic</option>
                  <option className="bg-[#0a0c14] text-white">BNYPC</option>
                  <option className="bg-[#0a0c14] text-white">BITT Public School</option>
                  <option className="bg-[#0a0c14] text-white">Bitty Balpan Play School</option>
                  <option className="bg-[#0a0c14] text-white">VGE Jobs</option>
                </select>
              </div>

              {/* Text Area Block */}
              <div>
                <label className="text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 block font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3} // UI Fix: Dropped active row height scale from 4 to 3
                  placeholder="Tell us how we can help…"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-[13px] text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition resize-none placeholder:text-slate-600 disabled:opacity-50"
                />
              </div>

              {/* Action Submit Control */}
              {/* UI Fix: Optimized button box layouts from py-3.5 to py-2.5 */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold text-white shadow-md transition-all duration-300 relative overflow-hidden
                  ${isSuccess
                    ? "bg-linear-to-r from-emerald-500 to-teal-500 shadow-emerald-500/10"
                    : isError
                    ? "bg-linear-to-r from-red-500 to-rose-500 shadow-red-500/10"
                    : "bg-linear-to-r from-cyan-500 via-sky-500 to-indigo-500 shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-[1.01]"
                  }
                  disabled:cursor-not-allowed disabled:opacity-80
                `}
              >
                <AnimatePresence mode="wait">
                  {isLoading && (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Sending…
                    </motion.span>
                  )}
                  {isSuccess && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Message Sent!
                    </motion.span>
                  )}
                  {isError && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2"
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      Failed — Try Again
                    </motion.span>
                  )}
                  {formState === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2"
                    >
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p className="text-center text-[10px] text-slate-600">
                We respect your privacy. No spam, ever.
              </p>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

// Reusable Field Component
function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="w-full">
      {/* UI Fix: Compacted tracking scales here to fit cleanly */}
      <label className="text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 block font-semibold">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-[13px] text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition placeholder:text-slate-600 disabled:opacity-50"
      />
    </div>
  );
}