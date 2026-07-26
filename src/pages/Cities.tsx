import { useMemo, useState } from "react";
import { cities } from "@/data/cities";
import { CityCard } from "@/components/cities/CityCard";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const regions = ["All", ...Array.from(new Set(cities.map((c) => c.region)))];

export default function Cities() {
  const [region, setRegion] = useState("All");

  const filtered = useMemo(
    () => (region === "All" ? cities : cities.filter((c) => c.region === region)),
    [region]
  );

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="都市" en="All Cities" />
        <div className="flex-1 min-w-0">
          <RevealOnScroll>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs tracking-wide-lg uppercase text-gold">
                {cities.length} destinations
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance leading-[1.02]">
              Cities of Japan
            </h1>
            <p className="mt-5 max-w-xl text-washi/60 leading-relaxed">
              From the neon density of Tokyo to Kanazawa's gold-leafed calm —
              every city here has its own history, architecture and rhythm.
            </p>
          </RevealOnScroll>

          <div className="mt-10 flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={cn(
                  "px-4 py-2 text-xs tracking-wideish uppercase border transition-colors",
                  region === r
                    ? "border-gold text-gold bg-gold/10"
                    : "border-ink-line text-washi/50 hover:text-washi hover:border-washi/30"
                )}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((city, i) => (
              <CityCard key={city.id} city={city} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
