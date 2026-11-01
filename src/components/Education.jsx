import { GraduationCap, School, BookOpen } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/portfolioData.js";

const icons = [GraduationCap, School, BookOpen];

export default function Education() {
  return (
    <section id="education" className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading tag="Education" title="My Academic" accent="Journey" />

        <ol className="relative space-y-8 border-l-4 border-ink pl-8 sm:pl-12">
          {education.map((e, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={e.degree} className="relative">
                <span className="absolute -left-[3.15rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-ink bg-accent sm:-left-[4.15rem]">
                  <Icon size={18} />
                </span>
                <Reveal delay={i * 0.08}>
                  <article className="rounded-[2rem] border-2 border-ink bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_#FFD84D] sm:p-8">
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-bold">
                      {e.duration}
                    </span>
                    <h3 className="mt-3 font-display text-xl uppercase leading-tight sm:text-2xl">{e.degree}</h3>
                    <p className="mt-1 text-muted">{e.institution}</p>
                    <p className="mt-4 inline-block rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-accent">
                      {e.scoreLabel}: {e.score}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
