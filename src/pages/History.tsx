import { useState } from "react";
import { historyEras } from "@/data/history";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const periods = ["All", ...Array.from(new Set(historyEras.map((e) => e.period)))];

export default function History() {
  const [filter, setFilter] = useState("All");
  const eras = filter === "All" ? historyEras : historyEras.filter((e) => e.period === filter);

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="歴史" en="History" />
        <div className="flex-1 min-w-0">
          <RevealOnScroll>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs tracking-wide-lg uppercase text-gold">14,000 years</span>
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance leading-[1.02]">
              A History of Japan
            </h1>
            <p className="mt-5 max-w-xl text-washi/60 leading-relaxed">
              From the world's oldest known pottery to a pacifist constitution
              and the world's first bullet train — the eras that built the
              country as it exists today.
            </p>
          </RevealOnScroll>

          <div className="mt-10 flex flex-wrap gap-2">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={cn(
                  "px-4 py-2 text-xs tracking-wideish uppercase border transition-colors",
                  filter === p
                    ? "border-gold text-gold bg-gold/10"
                    : "border-ink-line text-washi/50 hover:text-washi hover:border-washi/30"
                )}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-ink-line md:-translate-x-1/2" />
            <div className="flex flex-col gap-14">
              {eras.map((era, i) => (
                <RevealOnScroll key={era.id} delay={(i % 4) * 0.06}>
                  <div
                    className={cn(
                      "relative flex items-start gap-6 md:gap-0 md:justify-between",
                      i % 2 === 1 && "md:flex-row-reverse"
                    )}
                  >
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                    <span className="absolute left-0 md:left-1/2 top-1 h-3.5 w-3.5 rounded-full bg-gold md:-translate-x-1/2 ring-4 ring-ink" />
                    <div className="pl-8 md:pl-0 md:w-[calc(50%-2.5rem)]">
                      <span className="text-[10px] tracking-wide-lg uppercase text-washi/40">{era.period}</span>
                      <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                        <span className="font-display text-lg text-gold">{era.years}</span>
                      </div>
                      <div className="mt-2 flex items-baseline gap-3">
                        <h3 className="font-display text-2xl md:text-3xl text-washi">{era.title}</h3>
                        <span className="font-jp text-base text-washi/40">{era.jp}</span>
                      </div>
                      <p className="mt-3 text-sm text-washi/60 leading-relaxed max-w-md">{era.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {era.highlights.map((h) => (
                          <li key={h} className="text-xs text-washi/45 leading-relaxed border-l border-ink-line pl-3">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
