import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, personal } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-charcoal px-6 py-10 text-white sm:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-ink">
                RN
              </span>
              <span className="font-display text-xl uppercase">{personal.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-white/65">{personal.titles.join(" · ")}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm font-medium">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-white/70 transition hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-3 md:justify-end">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition hover:border-accent hover:bg-accent hover:text-ink">
              <Github size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition hover:border-accent hover:bg-accent hover:text-ink">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition hover:border-accent hover:bg-accent hover:text-ink">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 font-semibold text-ink transition hover:bg-white"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
