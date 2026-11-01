import { Award, Image as ImageIcon, ExternalLink } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { certifications } from "../data/portfolioData.js";

export default function Certifications() {
  return (
    <section id="certifications" className="px-3 pb-24 sm:px-6">
      <div className="grid-bg mx-auto max-w-7xl rounded-[2.5rem] bg-charcoal px-6 py-16 text-white sm:px-12">
        <SectionHeading tag="Certifications" title="Verified" accent="Learning" dark />

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="group h-full overflow-hidden rounded-[2rem] border-2 border-white/15 bg-ink transition duration-300 hover:-translate-y-2 hover:border-accent flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/9] border-b-2 border-white/10 bg-charcoal">
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={`${c.title} certificate`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={`${c.title} certificate placeholder`}
                        className="flex h-full flex-col items-center justify-center gap-2 text-white/50"
                      >
                        <ImageIcon size={40} strokeWidth={1.2} />
                        <span className="text-sm">Certificate image placeholder</span>
                      </div>
                    )}
                  </div>
                  <div className="p-7 pb-4">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-ink transition group-hover:rotate-6">
                        <Award size={24} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg uppercase leading-tight">{c.title}</h3>
                        <p className="mt-1 text-white/70">{c.provider}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs font-semibold">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-accent px-3 py-1 text-ink">{c.date}</span>
                      {c.id && (
                        <span className="rounded-full px-3 py-1 ring-1 ring-white/30">ID: {c.id}</span>
                      )}
                    </div>
                    {c.verifyUrl && (
                      <a
                        href={c.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent transition hover:bg-accent hover:text-ink"
                      >
                        Verify <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
