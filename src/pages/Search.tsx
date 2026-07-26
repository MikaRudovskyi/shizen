import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { cities } from "@/data/cities";
import { cultureTopics } from "@/data/culture";
import { historyEras } from "@/data/history";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type Result = { type: string; title: string; jp: string; description: string; to: string };

export default function Search() {
  const [query, setQuery] = useState("");

  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const cityResults: Result[] = cities
      .filter((c) => `${c.name} ${c.region} ${c.tagline}`.toLowerCase().includes(q))
      .map((c) => ({ type: "City", title: c.name, jp: c.jp, description: c.tagline, to: `/cities/${c.slug}` }));

    const attractionResults: Result[] = cities.flatMap((c) =>
      c.attractions
        .filter((a) => `${a.name} ${a.description}`.toLowerCase().includes(q))
        .map((a) => ({ type: "Attraction", title: a.name, jp: c.name, description: a.description, to: `/cities/${c.slug}` }))
    );

    const foodResults: Result[] = cities.flatMap((c) =>
      c.food
        .filter((f) => `${f.name} ${f.description}`.toLowerCase().includes(q))
        .map((f) => ({ type: "Food", title: f.name, jp: f.jp, description: f.description, to: `/cities/${c.slug}` }))
    );

    const cultureResults: Result[] = cultureTopics
      .filter((c) => `${c.title} ${c.summary}`.toLowerCase().includes(q))
      .map((c) => ({ type: "Culture", title: c.title, jp: c.jp, description: c.summary, to: `/culture/${c.slug}` }));

    const historyResults: Result[] = historyEras
      .filter((h) => `${h.title} ${h.summary}`.toLowerCase().includes(q))
      .map((h) => ({ type: "History", title: h.title, jp: h.jp, description: h.summary, to: "/history" }));

    return [...cityResults, ...cultureResults, ...historyResults, ...attractionResults, ...foodResults].slice(0, 30);
  }, [query]);

  return (
    <div className="pt-32 md:pt-40 pb-28 min-h-[70vh]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="検索" en="Search" />
        <div className="flex-1 min-w-0">
          <RevealOnScroll>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance leading-[1.02]">
              Search SHIZEN
            </h1>
          </RevealOnScroll>

          <div className="mt-10 relative max-w-2xl">
            <SearchIcon size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-washi/40" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cities, attractions, food, culture, history…"
              className="w-full bg-transparent border-b border-ink-line focus-visible:border-gold pl-8 pb-4 text-xl md:text-2xl font-display text-washi placeholder:text-washi/25 outline-none"
            />
          </div>

          <div className="mt-12">
            {query.trim() === "" ? (
              <p className="text-sm text-washi/35">Start typing to search across the entire site.</p>
            ) : results.length === 0 ? (
              <p className="text-sm text-washi/35">No results for "{query}".</p>
            ) : (
              <ul className="divide-y divide-ink-line max-w-3xl">
                {results.map((r, i) => (
                  <li key={`${r.type}-${r.title}-${i}`}>
                    <Link to={r.to} className="group flex items-start gap-5 py-5">
                      <span className="shrink-0 w-24 text-[10px] tracking-wide-lg uppercase text-gold pt-1">
                        {r.type}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <h3 className="font-display text-lg text-washi group-hover:text-gold transition-colors">
                            {r.title}
                          </h3>
                          <span className="text-xs text-washi/35">{r.jp}</span>
                        </div>
                        <p className="mt-1 text-sm text-washi/50 line-clamp-2">{r.description}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
