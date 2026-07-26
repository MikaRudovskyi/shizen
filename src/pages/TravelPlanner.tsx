import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { X, GripVertical, ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const durations = [
  { days: 7, label: "7 Days", suggestion: ["tokyo", "hakone", "kyoto"] },
  { days: 14, label: "14 Days", suggestion: ["tokyo", "nikko", "hakone", "kyoto", "nara", "osaka"] },
  { days: 21, label: "21 Days", suggestion: ["tokyo", "nikko", "kamakura", "hakone", "kanazawa", "kyoto", "nara", "osaka", "hiroshima", "fukuoka"] },
];

export default function TravelPlanner() {
  const [durationIdx, setDurationIdx] = useState(0);
  const [route, setRoute] = useState<string[]>(durations[0].suggestion);

  const duration = durations[durationIdx];
  const daysPerCity = useMemo(
    () => (route.length ? Math.max(1, Math.floor(duration.days / route.length)) : 0),
    [route.length, duration.days]
  );

  const applySuggestion = (idx: number) => {
    setDurationIdx(idx);
    setRoute(durations[idx].suggestion);
  };

  const addCity = (id: string) => {
    if (!route.includes(id)) setRoute((r) => [...r, id]);
  };

  const removeCity = (id: string) => setRoute((r) => r.filter((c) => c !== id));

  const move = (index: number, dir: -1 | 1) => {
    setRoute((r) => {
      const next = [...r];
      const target = index + dir;
      if (target < 0 || target >= next.length) return r;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="旅程" en="Travel Planner" />
        <div className="flex-1 min-w-0">
          <RevealOnScroll>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs tracking-wide-lg uppercase text-gold">Build your route</span>
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance leading-[1.02]">
              Travel Planner
            </h1>
            <p className="mt-5 max-w-xl text-washi/60 leading-relaxed">
              Pick a trip length, start from a suggested route, then add,
              remove or reorder cities to match your pace.
            </p>
          </RevealOnScroll>

          <div className="mt-10 flex flex-wrap gap-3">
            {durations.map((d, i) => (
              <button
                key={d.days}
                onClick={() => applySuggestion(i)}
                className={cn(
                  "px-6 py-3 text-sm tracking-wideish uppercase border transition-colors",
                  durationIdx === i
                    ? "border-gold text-gold bg-gold/10"
                    : "border-ink-line text-washi/50 hover:text-washi hover:border-washi/30"
                )}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
            {/* Route builder */}
            <div>
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="font-display text-2xl text-washi">Your route</h2>
                <span className="text-xs text-washi/40">
                  ≈ {daysPerCity} day{daysPerCity !== 1 ? "s" : ""} per stop across {duration.days} days
                </span>
              </div>

              {route.length === 0 ? (
                <div className="border border-dashed border-ink-line p-10 text-center text-sm text-washi/40">
                  Add a city below to start building your route.
                </div>
              ) : (
                <ol className="space-y-3">
                  {route.map((id, i) => {
                    const city = cities.find((c) => c.id === id);
                    if (!city) return null;
                    return (
                      <li
                        key={id}
                        className="flex items-center gap-4 border border-ink-line bg-ink-soft/30 p-4"
                      >
                        <GripVertical size={16} className="text-washi/25 shrink-0" />
                        <span className="font-display text-xl text-gold/70 w-8 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <img src={city.heroImage} alt="" className="h-12 w-12 object-cover shrink-0" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className="font-display text-lg text-washi">{city.name}</span>
                            <span className="font-jp text-xs text-washi/40">{city.jp}</span>
                          </div>
                          <p className="text-xs text-washi/40 truncate">{city.region}</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => move(i, -1)}
                            disabled={i === 0}
                            aria-label="Move up"
                            className="p-1.5 text-washi/40 hover:text-gold disabled:opacity-20 disabled:pointer-events-none"
                          >
                            ↑
                          </button>
                          <button
                            onClick={() => move(i, 1)}
                            disabled={i === route.length - 1}
                            aria-label="Move down"
                            className="p-1.5 text-washi/40 hover:text-gold disabled:opacity-20 disabled:pointer-events-none"
                          >
                            ↓
                          </button>
                          <button
                            onClick={() => removeCity(id)}
                            aria-label={`Remove ${city.name}`}
                            className="p-1.5 text-washi/40 hover:text-shu"
                          >
                            <X size={15} />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>

            {/* Add cities */}
            <div>
              <h2 className="font-display text-2xl text-washi mb-6">Add a city</h2>
              <div className="space-y-2 max-h-[560px] overflow-y-auto pr-2">
                {cities.map((city) => {
                  const added = route.includes(city.id);
                  return (
                    <button
                      key={city.id}
                      onClick={() => (added ? removeCity(city.id) : addCity(city.id))}
                      className={cn(
                        "w-full flex items-center gap-3 p-3 border text-left transition-colors",
                        added
                          ? "border-gold/50 bg-gold/5"
                          : "border-ink-line hover:border-washi/30"
                      )}
                    >
                      <img src={city.heroImage} alt="" className="h-10 w-10 object-cover shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-washi">{city.name}</p>
                        <p className="text-xs text-washi/40 truncate">{city.region}</p>
                      </div>
                      <span className={cn("text-xs shrink-0", added ? "text-gold" : "text-washi/30")}>
                        {added ? "Added" : "Add"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {route.length > 0 && (
            <div className="mt-16 border-t border-ink-line pt-10">
              <Link
                to={`/cities/${route[0]}`}
                className="inline-flex items-center gap-2 text-xs tracking-wideish uppercase text-gold hover:text-shu transition-colors"
              >
                Start with {cities.find((c) => c.id === route[0])?.name} <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
