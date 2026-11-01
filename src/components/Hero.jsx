import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { personal } from "../data/portfolioData.js";
import profilePhoto from "../assets/images/rehan.jpg";

function useTyping(words, speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((n) => n + 1);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

export default function Hero() {
  const typed = useTyping(personal.titles);

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:pt-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent2/20 blur-3xl" />
      <div
        aria-hidden="true"
        className="watermark absolute inset-x-0 top-10 select-none text-center text-[34vw] text-ink/[0.04] lg:text-[26vw]"
      >
        REHAN
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          {...fade(0.05)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-semibold"
        >
          <span className="h-2 w-2 rounded-full bg-accent ring-2 ring-ink" />
          Open to opportunities
        </motion.p>

        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <motion.h1
              {...fade(0.15)}
              className="font-display text-[clamp(1.75rem,5.2vw,4.75rem)] uppercase leading-none tracking-tight whitespace-nowrap"
            >
              Rehan{" "}
              <span className="relative inline-block">
                <span className="relative z-10">S</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-[35%] bg-accent" />
              </span>{" "}
              Nair
            </motion.h1>

            <motion.h2
              {...fade(0.3)}
              className="mt-6 font-display text-[clamp(1.4rem,3.6vw,2.8rem)] uppercase leading-tight"
            >
              Full-Stack Developer &amp;
              <br />
              Software Developer
            </motion.h2>

            <motion.p
              {...fade(0.4)}
              className="mt-5 h-8 text-lg font-semibold text-ink sm:text-xl"
              aria-label={personal.titles.join(", ")}
            >
              <span className="rounded-md bg-ink px-2 py-0.5 text-accent">{typed}</span>
              <span className="ml-0.5 inline-block animate-blink">|</span>
            </motion.p>

            <motion.p {...fade(0.5)} className="mt-5 max-w-xl text-lg text-muted">
              {personal.tagline}
            </motion.p>

            <motion.div {...fade(0.6)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
              >
                Explore My Work
                <ArrowDownRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href={personal.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:bg-white"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:bg-ink hover:text-white"
              >
                <Mail size={18} /> Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-sm animate-floaty"
          >
            <div className="absolute -right-3 -top-3 h-full w-full rounded-[2.5rem] bg-accent" />
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-4 border-ink bg-charcoal shadow-2xl"
            >
              <img
                src={profilePhoto}
                alt="Rehan S Nair"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border-2 border-ink bg-white px-4 py-2 text-sm font-bold shadow-lg">
              Integrated MCA · 2027
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
