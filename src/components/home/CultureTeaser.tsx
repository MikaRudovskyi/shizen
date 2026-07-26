import { Link } from "react-router-dom";
import { cultureTopics } from "@/data/culture";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const accentClass: Record<string, string> = {
  shu: "group-hover:text-shu",
  sakura: "group-hover:text-sakura",
  gold: "group-hover:text-gold",
  indigo: "group-hover:text-washi",
};

const picks = cultureTopics.filter((c) =>
  ["tea-ceremony", "cuisine", "cherry-blossoms", "japanese-gardens", "festivals", "samurai"].includes(c.id)
);

export function CultureTeaser() {
  return (
    <section className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="文化" en="Culture" index="03" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow="Culture, Food & Nature"
              title="The threads that run through everything"
              jp="文化"
            />
            <Link
              to="/culture"
              className="shrink-0 text-xs tracking-wide-lg uppercase text-washi/60 hover:text-gold transition-colors"
            >
              All culture topics →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {picks.map((topic, i) => (
              <RevealOnScroll key={topic.id} delay={i * 0.06}>
                <Link to={`/culture/${topic.slug}`} className="group block relative aspect-square overflow-hidden bg-ink-soft">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:opacity-40 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="font-jp text-sm text-washi/40">{topic.jp}</span>
                    <h3 className={`mt-1 font-display text-xl md:text-2xl text-washi transition-colors ${accentClass[topic.accent]}`}>
                      {topic.title}
                    </h3>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
