import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/portfolioData.js";

function Screenshot({ project, index }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const tilt = index % 2 === 0 ? -3 : 3;

  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.image
      ? [{ src: project.image, title: project.title }]
      : [];

  const currentImg = images[activeIdx] || (images[0] || null);

  const prev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <motion.div
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ rotate: tilt }}
        className="group relative mx-auto w-full max-w-xl"
      >
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-accent" />
        <div className="absolute inset-0 -translate-x-3 translate-y-8 -rotate-2 rounded-[2rem] border-2 border-ink bg-white" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border-4 border-ink bg-charcoal">
          {currentImg ? (
            <div className="relative h-full w-full">
              <img
                src={currentImg.src}
                alt={currentImg.title || `${project.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-500"
              />

              {/* Title & Index Badge */}
              {images.length > 1 && (
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-ink/40 bg-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <span>{currentImg.title}</span>
                  <span className="rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-bold text-ink">
                    {activeIdx + 1}/{images.length}
                  </span>
                </div>
              )}

              {/* Fullscreen view trigger */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                aria-label="View larger image"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-ink/40 bg-ink/80 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-accent hover:text-ink"
              >
                <Maximize2 size={14} />
              </button>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-ink/30 bg-ink/80 text-white shadow-lg backdrop-blur-sm transition hover:bg-accent hover:text-ink"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-ink/30 bg-ink/80 text-white shadow-lg backdrop-blur-sm transition hover:bg-accent hover:text-ink"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Indicator Dots */}
                  <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIdx(i);
                        }}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeIdx === i ? "w-6 bg-accent" : "w-2 bg-white/60 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div
              role="img"
              aria-label={`${project.title} screenshot placeholder`}
              className="grid-bg flex h-full w-full flex-col items-center justify-center gap-3 text-white/70"
            >
              <ImageIcon size={48} strokeWidth={1.2} />
              <span className="px-4 text-center text-sm font-semibold">{project.short} · screenshot placeholder</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && currentImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border-4 border-ink bg-charcoal shadow-2xl"
            >
              <img
                src={currentImg.src}
                alt={currentImg.title}
                className="max-h-[78vh] w-auto object-contain"
              />
              <div className="flex items-center justify-between border-t border-white/10 bg-ink px-6 py-3 text-white">
                <span className="font-semibold">{currentImg.title}</span>
                <span className="text-sm text-muted">
                  {activeIdx + 1} of {images.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/90 text-white hover:bg-accent hover:text-ink"
              >
                <X size={18} />
              </button>
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-ink/90 text-white hover:bg-accent hover:text-ink"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-ink/90 text-white hover:bg-accent hover:text-ink"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="overflow-hidden px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag="Featured Projects" title="Things I've" accent="Built" />

        <div className="space-y-24 lg:space-y-32">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <Screenshot project={p} index={i} />
                </Reveal>

                <Reveal delay={0.1} className={flip ? "lg:order-1" : ""}>
                  <span className="font-display text-7xl text-ink/10">0{i + 1}</span>
                  <h3 className="-mt-4 font-display text-2xl uppercase leading-tight sm:text-4xl">{p.title}</h3>
                  <p className="mt-4 text-lg text-muted">{p.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-full bg-ink px-3.5 py-1 text-xs font-bold text-accent">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm font-medium">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent ring-1 ring-ink" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {(p.github !== null || p.live !== null) && (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {p.github ? (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
                        >
                          <Github size={16} /> GitHub
                        </a>
                      ) : p.github === null ? null : (
                        <span
                          aria-disabled="true"
                          className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border-2 border-dashed border-ink/30 px-5 py-2.5 text-sm font-semibold text-muted"
                        >
                          <Github size={16} /> GitHub link soon
                        </span>
                      )}
                      {p.live ? (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      ) : p.live === null ? null : (
                        <span
                          aria-disabled="true"
                          className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border-2 border-dashed border-ink/30 px-5 py-2.5 text-sm font-semibold text-muted"
                        >
                          <ExternalLink size={16} /> Live demo soon
                        </span>
                      )}
                    </div>
                  )}
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
