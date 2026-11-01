import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, personal } from "../data/portfolioData.js";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-ink px-4 py-2.5 shadow-xl sm:px-6"
      >
        <button
          onClick={() => go("home")}
          aria-label="Go to top"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-sm text-ink"
        >
          RN
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id} className="relative">
              <button
                onClick={() => go(l.id)}
                aria-current={active === l.id ? "page" : undefined}
                className={`relative z-10 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? "text-ink" : "text-white/80 hover:text-accent"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={personal.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            <Download size={15} /> Resume
          </a>
          <button
            onClick={() => go("contact")}
            className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-ink transition hover:bg-white"
          >
            Contact
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl bg-ink p-4 shadow-xl lg:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className={`w-full rounded-2xl px-4 py-3 text-left font-medium ${
                      active === l.id ? "bg-accent text-ink" : "text-white/85 hover:bg-white/10"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href={personal.resume}
              download
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-4 py-3 font-semibold text-white"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
