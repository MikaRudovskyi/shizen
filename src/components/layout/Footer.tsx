import { Link } from "react-router-dom";
import { cities } from "@/data/cities";

const featured = cities.slice(0, 6);

export function Footer() {
  return (
    <footer className="relative border-t border-ink-line bg-ink pt-20 pb-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-washi">SHIZEN</span>
              <span className="font-jp text-base text-gold">自然</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-washi/50 leading-relaxed">
              An independent, non-commercial exploration of Japan — its cities,
              its history and the culture that connects them. Built as a
              portfolio piece; not affiliated with any tourism board.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="text-xs tracking-wide-lg uppercase text-gold">Cities</span>
            <ul className="mt-5 space-y-3">
              {featured.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/cities/${c.slug}`}
                    className="text-sm text-washi/60 hover:text-washi transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="text-xs tracking-wide-lg uppercase text-gold">Explore</span>
            <ul className="mt-5 space-y-3">
              {[
                ["Culture", "/culture"],
                ["History", "/history"],
                ["Map", "/map"],
                ["Gallery", "/gallery"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-washi/60 hover:text-washi transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="text-xs tracking-wide-lg uppercase text-gold">Plan</span>
            <ul className="mt-5 space-y-3">
              {[
                ["Travel Planner", "/planner"],
                ["Favorites", "/favorites"],
                ["Search", "/search"],
                ["About Japan", "/about"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-washi/60 hover:text-washi transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-washi/30">
            SHIZEN — Explore the Soul of Japan. A portfolio project.
          </p>
          <p className="text-xs text-washi/30 font-jp">
            自然 — 「あるがままの姿」
          </p>
        </div>
      </div>
    </footer>
  );
}
