import { Eye, Target, Code2, Sparkles } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { aboutCards, personal } from "../data/portfolioData.js";
import profilePhoto from "../assets/images/rehan.jpg";

const icons = { eye: Eye, target: Target };
const techStack = ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL"];

function Frame({ className, children, label }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center overflow-hidden bg-white/10 text-white/60 transition duration-500 hover:scale-105 hover:rotate-1 ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-3 pb-20 sm:px-6">
      <div className="grid-bg relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-charcoal px-6 py-16 text-white sm:px-12 lg:py-20">
        <div
          aria-hidden="true"
          className="watermark absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[28vw] text-white/[0.04] lg:text-[20vw]"
        >
          REHAN
        </div>

        <div className="relative">
          <Reveal>
            <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold text-ink">
              About Me
            </p>
            <h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">
              Turning ideas into <span className="text-accent">practical software</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                {(Array.isArray(personal.intro) ? personal.intro : [personal.intro]).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-6 grid-rows-2 gap-4">
                <Frame
                  label="Rehan S Nair photo"
                  className="col-span-3 row-span-2 aspect-[3/4] rounded-[2rem] border-4 border-accent p-0"
                >
                  <img
                    src={profilePhoto}
                    alt="Rehan S Nair"
                    className="h-full w-full object-cover object-top"
                  />
                </Frame>
                {/* Box 1: Top-Right (Circular Box) */}
                <div
                  aria-label="Driven by Curiosity"
                  className="grid-bg group relative col-span-3 flex aspect-square flex-col items-center justify-center overflow-hidden rounded-full border-2 sm:border-4 border-accent bg-charcoal p-3 text-center transition duration-500 hover:scale-105 hover:rotate-1 hover:border-accent hover:shadow-[0_0_30px_rgba(255,216,77,0.35)] sm:p-5 lg:p-6"
                >
                  <div className="mb-1 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-accent/15 text-accent transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-ink">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
                  </div>
                  <h4 className="font-display text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-white">
                    Driven by Curiosity
                  </h4>
                  <p className="mt-1 max-w-[170px] sm:max-w-[210px] text-[8.5px] sm:text-[10px] md:text-xs leading-snug sm:leading-relaxed text-[#BDBDBD]">
                    Passionate about exploring new technologies, learning continuously, and transforming creative ideas into meaningful solutions.
                  </p>
                </div>

                {/* Box 2: Bottom-Right (Rounded Rectangular Box) */}
                <div
                  aria-label="Building with Technology"
                  className="grid-bg group relative col-span-3 flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-3xl border-2 sm:border-4 border-accent bg-charcoal p-3 text-center transition duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_30px_rgba(255,216,77,0.35)] sm:p-5"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-accent/15 text-accent transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-ink">
                      <Code2 className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={2} />
                    </div>
                    <h4 className="font-display text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-white">
                      Building with Technology
                    </h4>
                  </div>
                  <div className="mt-2 sm:mt-3 flex flex-wrap justify-center gap-1 sm:gap-1.5 max-w-[250px]">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-lg border border-accent/30 bg-ink/90 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_0_10px_rgba(255,216,77,0.3)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {aboutCards.map((c, i) => {
              const Icon = icons[c.icon];
              return (
                <Reveal key={c.title} delay={i * 0.1}>
                  <article className="group h-full rounded-[2rem] border border-white/10 bg-ink p-8 transition duration-300 hover:-translate-y-2 hover:border-accent">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-ink transition group-hover:rotate-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-display text-2xl uppercase">{c.title}</h3>
                    <p className="mt-3 leading-relaxed text-white/75">{c.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
