import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../data/portfolioData.js";

const links = [
  { label: "GitHub", href: personal.github, icon: Github, external: true },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin, external: true },
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail, external: false },
];

export default function SocialLinks() {
  return (
    <div className="px-4 pb-16 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            rel={l.external ? "noopener noreferrer" : undefined}
            aria-label={l.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, rotate: i % 2 ? 2 : -2 }}
            className="inline-flex items-center gap-3 rounded-full border-2 border-ink bg-white px-7 py-3 font-semibold text-ink shadow-[4px_4px_0_#202020] transition-colors hover:bg-accent"
          >
            <l.icon size={20} /> {l.label}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
