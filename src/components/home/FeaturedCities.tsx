import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { cities } from "@/data/cities";
import { VerticalLabel } from "@/components/ui/VerticalLabel";

const featured = cities.filter((c) =>
  ["tokyo", "kyoto", "osaka", "hiroshima", "kanazawa", "hakone"].includes(c.id)
);

export function FeaturedCities() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-38%"]);

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="都市" en="Featured Cities" index="02" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs tracking-wide-lg uppercase text-gold">Featured Cities</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-washi max-w-2xl leading-[1.05] text-balance">
            Twelve cities. One country, told differently in every street.
          </h2>
        </div>
      </div>

      <motion.div style={{ x }} className="mt-16 flex gap-5 md:gap-7 pl-6 md:pl-10 will-change-transform">
        {featured.map((city, i) => (
          <Link
            key={city.id}
            to={`/cities/${city.slug}`}
            className="group relative shrink-0 w-[78vw] sm:w-[48vw] md:w-[32vw] lg:w-[26vw] aspect-[4/5] overflow-hidden bg-ink-soft"
          >
            <img
              src={city.heroImage}
              alt={city.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/5 to-transparent" />
            <span className="absolute top-5 left-5 font-jp text-3xl text-washi/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-baseline gap-2">
                <h3 className="font-display text-3xl text-washi">{city.name}</h3>
                <span className="font-jp text-base text-gold">{city.jp}</span>
              </div>
              <p className="mt-2 text-sm text-washi/50 max-w-xs line-clamp-2">{city.tagline}</p>
            </div>
          </Link>
        ))}
        <Link
          to="/cities"
          className="group shrink-0 w-[78vw] sm:w-[48vw] md:w-[32vw] lg:w-[26vw] aspect-[4/5] flex flex-col items-center justify-center gap-4 border border-ink-line hover:border-gold/50 transition-colors"
        >
          <span className="font-display text-3xl text-washi group-hover:text-gold transition-colors">
            View all 12
          </span>
          <span className="text-xs tracking-wide-lg uppercase text-washi/40">Cities →</span>
        </Link>
      </motion.div>
    </section>
  );
}
