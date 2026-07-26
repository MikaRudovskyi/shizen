import { Link } from "react-router-dom";
import { cultureTopics } from "@/data/culture";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const accentBorder: Record<string, string> = {
  shu: "group-hover:border-shu/60",
  sakura: "group-hover:border-sakura/60",
  gold: "group-hover:border-gold/60",
  indigo: "group-hover:border-washi/30",
};

export default function Culture() {
  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="文化" en="Culture" />
        <div className="flex-1 min-w-0">
          <RevealOnScroll>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs tracking-wide-lg uppercase text-gold">
                {cultureTopics.length} traditions
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance leading-[1.02]">
              Culture
            </h1>
            <p className="mt-5 max-w-xl text-washi/60 leading-relaxed">
              The customs, beliefs and crafts that shaped Japan long before it
              had cities to hold them — and that still shape it now.
            </p>
          </RevealOnScroll>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-line">
            {cultureTopics.map((topic, i) => (
              <RevealOnScroll key={topic.id} delay={(i % 6) * 0.05} className="bg-ink">
                <Link
                  to={`/culture/${topic.slug}`}
                  className={`group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden border border-transparent p-8 transition-colors ${accentBorder[topic.accent]}`}
                >
                  <img
                    src={topic.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-35"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/20" />
                  <div className="relative">
                    <span className="text-[10px] tracking-wide-lg uppercase text-gold/80">
                      {topic.eyebrow}
                    </span>
                    <div className="mt-2 flex items-baseline gap-3">
                      <h2 className="font-display text-3xl text-washi">{topic.title}</h2>
                      <span className="font-jp text-lg text-washi/40">{topic.jp}</span>
                    </div>
                    <p className="mt-3 text-sm text-washi/55 max-w-md leading-relaxed">
                      {topic.summary}
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
