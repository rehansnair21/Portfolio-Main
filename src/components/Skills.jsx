import { Code2, LayoutTemplate, Server, Database, Plug, Wrench, Brain } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { skillCategories } from "../data/portfolioData.js";

const icons = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  plug: Plug,
  wrench: Wrench,
  brain: Brain,
};

export default function Skills() {
  return (
    <section id="skills" className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Technical Skills" title="My" accent="Toolbox" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon];
            const dark = i % 2 === 0;
            return (
              <Reveal key={cat.title} delay={(i % 3) * 0.08}>
                <article
                  className={`group h-full rounded-[2rem] border-2 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[6px_6px_0_#FFD84D] ${
                    dark ? "border-ink bg-ink text-white" : "border-ink bg-white text-ink"
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-ink transition group-hover:rotate-6">
                      <Icon size={24} />
                    </span>
                    <h3 className="font-display text-lg uppercase leading-tight">{cat.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((s) => (
                      <li
                        key={s}
                        className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                          dark
                            ? "bg-white/10 text-white hover:bg-accent hover:text-ink"
                            : "bg-cream text-ink ring-1 ring-ink/15 hover:bg-accent"
                        }`}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
