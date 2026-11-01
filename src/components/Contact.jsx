import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { personal } from "../data/portfolioData.js";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const inputCls =
  "w-full rounded-2xl border-2 border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition focus:border-accent focus:bg-white/10 focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", text: "" });

    // EmailJS not configured: fall back to the visitor's mail app so nothing is lost.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus({ type: "success", text: "Opening your email app to send the message." });
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: personal.email,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus({ type: "success", text: "Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ type: "error", text: "Something went wrong. Please email me directly." });
    }
  };

  const info = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: MapPin, label: "Location", value: personal.location },
    { icon: Github, label: "GitHub", value: personal.githubLabel, href: personal.github },
    { icon: Linkedin, label: "LinkedIn", value: personal.linkedinLabel, href: personal.linkedin },
  ];

  return (
    <section id="contact" className="px-3 pb-10 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-white sm:px-12 lg:py-20">
        <div
          aria-hidden="true"
          className="watermark absolute -top-4 right-0 text-[22vw] text-white/[0.04] lg:text-[14vw]"
        >
          HELLO
        </div>

        <div className="relative grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-ink">
              Contact
            </p>
            <h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">
              Ready to build something <span className="text-accent">amazing?</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/75">
              I'm open to software development opportunities, internships, innovative projects, and professional
              collaborations. Feel free to connect with me.
            </p>

            <ul className="mt-8 space-y-4">
              {info.map((i) => (
                <li key={i.label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-ink">
                    <i.icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{i.label}</p>
                    {i.href ? (
                      <a
                        href={i.href}
                        target={i.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="break-words font-semibold transition hover:text-accent"
                      >
                        {i.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{i.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-[2rem] border border-white/10 bg-charcoal p-6 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                  Full Name
                </label>
                <input id="name" name="name" required value={form.name} onChange={onChange} className={inputCls} placeholder="Your name" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                  Email Address
                </label>
                <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className={inputCls} placeholder="you@example.com" autoComplete="email" />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold">
                  Subject
                </label>
                <input id="subject" name="subject" required value={form.subject} onChange={onChange} className={inputCls} placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                  Message
                </label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} className={`${inputCls} resize-y`} placeholder="Tell me about your project or opportunity..." />
              </div>

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white disabled:opacity-60"
              >
                <Send size={18} /> {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>

              <p role="status" aria-live="polite" className="min-h-6 text-sm">
                {status.type === "success" && (
                  <span className="flex items-center gap-2 text-accent">
                    <CheckCircle2 size={16} /> {status.text}
                  </span>
                )}
                {status.type === "error" && (
                  <span className="flex items-center gap-2 text-red-300">
                    <AlertCircle size={16} /> {status.text}
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
