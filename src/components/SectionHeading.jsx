import Reveal from "./Reveal.jsx";

export default function SectionHeading({ tag, title, accent, dark = false }) {
  return (
    <Reveal className="mb-12">
      <p
        className={`mb-3 inline-block rounded-full px-4 py-1 text-sm font-bold ${
          dark ? "bg-accent text-ink" : "bg-ink text-accent"
        }`}
      >
        {tag}
      </p>
      <h2 className="font-display text-4xl uppercase leading-tight sm:text-6xl">
        {title} <span className={dark ? "text-accent" : "bg-accent px-2"}>{accent}</span>
      </h2>
    </Reveal>
  );
}
