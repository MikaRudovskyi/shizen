import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = cities.find((c) => c.id === activeId);

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="地図" en="Interactive Map" />
        <div className="flex-1 min-w-0">
          <RevealOnScroll>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs tracking-wide-lg uppercase text-gold">Schematic, not to scale</span>
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance leading-[1.02]">
              Find your route
            </h1>
            <p className="mt-5 max-w-xl text-washi/60 leading-relaxed">
              Click any city to preview it. This is a stylized layout for
              orientation — for real distances, see each city's transportation notes.
            </p>
          </RevealOnScroll>

          <div className="mt-16 relative w-full aspect-[4/5] sm:aspect-[16/10] max-w-4xl mx-auto border border-ink-line bg-ink-soft/40 overflow-hidden">
            {/* Ambient markers of longitude/latitude-style grid, purely decorative */}
            <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-washi" style={{ left: `${(i + 1) * 10}%` }} />
              ))}
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-washi" style={{ top: `${(i + 1) * 10}%` }} />
              ))}
            </div>

            <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden>
              {cities.map((c) =>
                c.nearby.map((nid) => {
                  const n = cities.find((x) => x.id === nid);
                  if (!n) return null;
                  return (
                    <line
                      key={`${c.id}-${nid}`}
                      x1={`${c.coordinates.x}%`}
                      y1={`${c.coordinates.y}%`}
                      x2={`${n.coordinates.x}%`}
                      y2={`${n.coordinates.y}%`}
                      stroke="var(--color-gold)"
                      strokeOpacity={0.18}
                      strokeWidth={1}
                    />
                  );
                })
              )}
            </svg>

            {cities.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                aria-label={`Preview ${c.name}`}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${c.coordinates.x}%`, top: `${c.coordinates.y}%` }}
              >
                <span
                  className={`block h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    activeId === c.id ? "bg-shu scale-150" : "bg-gold group-hover:scale-150 group-hover:bg-shu"
                  }`}
                />
                <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-wideish uppercase text-washi/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  {c.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[420px] z-50 bg-ink border border-ink-line overflow-hidden"
            >
              <div className="relative h-48">
                <img src={active.heroImage} alt={active.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-ink to-transparent" />
                <button
                  onClick={() => setActiveId(null)}
                  aria-label="Close"
                  className="absolute top-3 right-3 p-1.5 bg-ink/70 text-washi hover:text-gold"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-5">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display text-2xl text-washi">{active.name}</h3>
                    <span className="font-jp text-sm text-washi/50">{active.jp}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-washi/55 leading-relaxed">{active.tagline}</p>
                <Link
                  to={`/cities/${active.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs tracking-wideish uppercase text-gold hover:text-shu transition-colors"
                >
                  Explore {active.name} <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
