import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle, X, CalendarDays, MessageSquare, GraduationCap } from "lucide-react";
import { useState, useCallback, useRef } from "react";

const C = { navy: "#274C77", navyDark: "#1B3D65", steel: "#6096BA", mist: "#E7ECEF" };

type FormState = "idle" | "loading" | "success" | "error";
interface FormData { name: string; email: string; phone: string; interest: string; message: string; }
const EMPTY: FormData = { name: "", email: "", phone: "", interest: "BITT Polytechnic", message: "" };

async function submitForm(_d: FormData): Promise<void> {
  await new Promise((res, rej) =>
    setTimeout(() => (Math.random() > 0.1 ? res(undefined) : rej(new Error())), 1800)
  );
}

const quickActions = [
  { icon: GraduationCap, label: "Apply Now",          sub: "Start your 2025-26 application", accent: C.navy,  glowRgb: "39,76,119"  },
  { icon: CalendarDays,  label: "Schedule a Visit",   sub: "Tour our campus in person",       accent: C.steel, glowRgb: "96,150,186" },
  { icon: MessageSquare, label: "Talk to a Counselor",sub: "Free 30-min career consultation", accent: "#4E82AC",glowRgb:"78,130,172" },
];

const contactInfo = [
  { icon: Phone, value: "+91 651 000 0000", label: "Call Us" },
  { icon: Mail,  value: "info@bitt.edu.in", label: "Email"   },
  { icon: MapPin,value: "Ranchi, Jharkhand",label: "Campus"  },
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [formState, setFormState] = useState<FormState>("idle");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((type: "success" | "error", message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(() => setToast(null), 4500);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData((p) => ({ ...p, [e.target.name]: e.target.value })), []
  );

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState === "loading") return;
    setFormState("loading");
    try {
      await submitForm(formData);
      setFormState("success");
      setFormData(EMPTY);
      showToast("success", "Message sent! We'll be in touch within 24 hours.");
      setTimeout(() => setFormState("idle"), 3000);
    } catch {
      setFormState("error");
      showToast("error", "Something went wrong. Please try again or call us directly.");
      setTimeout(() => setFormState("idle"), 3000);
    }
  }, [formData, formState, showToast]);

  const isLoading = formState === "loading";
  const isSuccess = formState === "success";
  const isError   = formState === "error";

  const fieldStyle: React.CSSProperties = { background: "#FFFFFF", border: "1px solid rgba(39,76,119,0.15)", color: C.navy };
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    { e.target.style.borderColor = "rgba(96,150,186,0.55)"; };
  const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    { e.target.style.borderColor = "rgba(39,76,119,0.15)"; };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 800px 600px at 50% 100%, rgba(96,150,186,0.07), transparent 60%)" }} />

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div key="toast"
            initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-xl max-w-sm w-[calc(100vw-2rem)]"
            style={{ background: "#FFFFFF", borderColor: toast.type === "success" ? "rgba(96,150,186,0.30)" : "rgba(239,68,68,0.30)" }}
          >
            {toast.type === "success"
              ? <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: C.steel }} />
              : <AlertCircle  className="w-4 h-4 text-red-500 shrink-0" />}
            <p className="text-xs font-medium leading-snug flex-1" style={{ color: C.navy }}>{toast.message}</p>
            <button onClick={() => setToast(null)} style={{ color: "rgba(39,76,119,0.35)" }}><X className="w-3.5 h-3.5" /></button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-widest mb-4"
            style={{ border: "1px solid rgba(96,150,186,0.30)", background: "rgba(39,76,119,0.07)", color: C.navy }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.steel }} />
            Admissions Open
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.08]"
            style={{ color: C.navy }}>
            Begin Your{" "}<span className="gradient-purple-cyan">Story Here.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-base leading-relaxed max-w-lg"
            style={{ color: "rgba(39,76,119,0.58)" }}>
            Take the first step toward a future you'll be proud of. Our admissions team
            is here to guide you every step of the way.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left */}
          <div className="space-y-4">
            {quickActions.map((action, i) => (
              <motion.button key={action.label}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 group"
                style={{ background: "#FFFFFF", border: "1px solid rgba(39,76,119,0.10)", boxShadow: "0 2px 12px rgba(39,76,119,0.06)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 6px 24px rgba(39,76,119,0.10)"; el.style.borderColor = `rgba(${action.glowRgb},0.28)`; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 2px 12px rgba(39,76,119,0.06)"; el.style.borderColor = "rgba(39,76,119,0.10)"; }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: `rgba(${action.glowRgb},0.10)`, border: `1px solid rgba(${action.glowRgb},0.24)` }}>
                  <action.icon className="w-5 h-5" style={{ color: action.accent }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-sm font-bold" style={{ color: C.navy }}>{action.label}</div>
                  <div className="text-[12px] mt-0.5" style={{ color: "rgba(39,76,119,0.50)" }}>{action.sub}</div>
                </div>
                <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  style={{ color: action.accent }} />
              </motion.button>
            ))}

            {/* Contact info */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.28 }}
              className="grid grid-cols-3 gap-3">
              {contactInfo.map((c) => (
                <div key={c.label} className="rounded-xl p-3.5 text-center"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(39,76,119,0.08)" }}>
                  <div className="flex justify-center mb-2">
                    <c.icon className="w-4 h-4" style={{ color: "rgba(96,150,186,0.70)" }} />
                  </div>
                  <div className="text-[9px] uppercase tracking-widest font-semibold mb-1"
                    style={{ color: "rgba(39,76,119,0.38)" }}>{c.label}</div>
                  <div className="text-[11px] font-medium leading-snug"
                    style={{ color: "rgba(39,76,119,0.62)" }}>{c.value}</div>
                </div>
              ))}
            </motion.div>

            {/* Map — NO invert on light theme */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.34 }}
              className="rounded-xl overflow-hidden h-52"
              style={{ border: "1px solid rgba(39,76,119,0.10)" }}>
              <iframe title="BITT Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=85.30%2C23.34%2C85.34%2C23.38&layer=mapnik"
                className="w-full h-full" loading="lazy" />
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            onSubmit={handleSubmit} noValidate
            className="rounded-2xl p-6 md:p-7 space-y-4 relative"
            style={{ background: "#E7ECEF", backgroundImage: "radial-gradient(at 27% 25%, rgba(96,150,186,0.22) 0px, transparent 55%), radial-gradient(at 90% 8%, rgba(39,76,119,0.08) 0px, transparent 50%), radial-gradient(at 5% 75%, rgba(96,150,186,0.16) 0px, transparent 50%), radial-gradient(at 85% 82%, rgba(39,76,119,0.06) 0px, transparent 45%)", border: "1px solid rgba(39,76,119,0.10)", boxShadow: "0 2px 20px rgba(39,76,119,0.06)" }}
          >
            <div className="relative space-y-4">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <Field label="Full Name" name="name" type="text" placeholder="Jane Smith"
                  value={formData.name} onChange={handleChange} disabled={isLoading} required
                  style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
                <Field label="Email" name="email" type="email" placeholder="jane@email.com"
                  value={formData.email} onChange={handleChange} disabled={isLoading} required
                  style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>
              <Field label="Phone" name="phone" type="tel" placeholder="+91 00000 00000"
                value={formData.phone} onChange={handleChange} disabled={isLoading}
                style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />

              <div>
                <label className="text-[10.5px] uppercase tracking-wider font-semibold block mb-1.5"
                  style={{ color: "rgba(39,76,119,0.52)" }}>Interested In</label>
                <select name="interest" value={formData.interest} onChange={handleChange} disabled={isLoading}
                  className="w-full rounded-xl px-4 py-2.5 text-[13px] focus:outline-none transition cursor-pointer disabled:opacity-50"
                  style={fieldStyle} onFocus={onFocus} onBlur={onBlur}>
                  {["BITT Polytechnic","BNYPC","BITT Public School","Bitty Balpan","Devi Darshan","VGE Jobs"].map((o) => (
                    <option key={o} style={{ background: "#FFFFFF", color: C.navy }}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10.5px] uppercase tracking-wider font-semibold block mb-1.5"
                  style={{ color: "rgba(39,76,119,0.52)" }}>Message</label>
                <textarea name="message" rows={3} placeholder="Tell us how we can help…"
                  value={formData.message} onChange={handleChange} disabled={isLoading}
                  className="w-full rounded-xl px-4 py-2.5 text-[13px] focus:outline-none transition resize-none disabled:opacity-50 placeholder:text-slate-400"
                  style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
              </div>

              <motion.button type="submit" disabled={isLoading}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75"
                style={{
                  color: C.mist,
                  background: isSuccess ? "linear-gradient(135deg,#2D7A5E,#1F5C45)"
                    : isError   ? "linear-gradient(135deg,#7A2D2D,#5C1F1F)"
                    : `linear-gradient(135deg, ${C.navy}, ${C.navyDark})`,
                  boxShadow: isLoading ? "none" : "0 4px 20px rgba(39,76,119,0.30)",
                }}
              >
                <AnimatePresence mode="wait">
                  {isLoading && <motion.span key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" />Sending…</motion.span>}
                  {isSuccess && <motion.span key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" />Message Sent!</motion.span>}
                  {isError   && <motion.span key="e" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><AlertCircle className="w-4 h-4" />Failed — Try Again</motion.span>}
                  {formState === "idle" && <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></motion.span>}
                </AnimatePresence>
              </motion.button>

              <p className="text-center text-[10px]" style={{ color: "rgba(39,76,119,0.35)" }}>
                We respect your privacy. No spam — ever.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[10.5px] uppercase tracking-wider font-semibold block mb-1.5"
        style={{ color: "rgba(39,76,119,0.52)" }}>{label}</label>
      <input {...props}
        className="w-full rounded-xl px-4 py-2.5 text-[13px] focus:outline-none transition placeholder:text-slate-400 disabled:opacity-50"
      />
    </div>
  );
}
