import { Building2, CalendarDays, MapPin } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { experiences } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section id="experience" className="px-3 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-ink px-6 py-16 text-white sm:px-12">
        <SectionHeading tag="Professional Experience" title="Where I've" accent="Worked" dark />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 w-0.5 bg-accent/40 md:left-1/2 md:-translate-x-1/2"
          />
          <ol className="space-y-12">
            {experiences.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <li key={e.company} className="relative md:grid md:grid-cols-2 md:gap-14">
                  <span className="absolute left-5 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-ink bg-accent ring-2 ring-accent md:left-1/2" />
                  <Reveal className={`pl-14 md:pl-0 ${left ? "" : "md:col-start-2"}`}>
                    <article
                      className={`rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 ${
                        left ? "bg-white text-ink" : "bg-charcoal text-white ring-1 ring-white/15"
                      }`}
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-ink"
                          aria-label="Company logo placeholder"
                        >
                          <Building2 size={26} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl uppercase leading-tight">{e.role}</h3>
                          <p className={left ? "text-muted" : "text-white/70"}>{e.company}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2 text-sm font-semibold">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-ink">
                          <CalendarDays size={14} /> {e.duration}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ring-1 ${
                            left ? "ring-ink/20" : "ring-white/25"
                          }`}
                        >
                          <MapPin size={14} /> {e.mode}
                        </span>
                      </div>

                      <ul className="space-y-2 text-sm leading-relaxed sm:text-base">
                        {e.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent ring-1 ring-ink/30" />
                            {p}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {e.tech.map((t) => (
                          <li
                            key={t}
                            className={`rounded-full px-3 py-1 text-xs font-bold ${
                              left ? "bg-ink text-accent" : "bg-accent text-ink"
                            }`}
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
