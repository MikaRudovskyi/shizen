import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import type { City } from "@/types";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

interface CityCardProps {
  city: City;
  index?: number;
  size?: "default" | "large";
}

export function CityCard({ city, index = 0, size = "default" }: CityCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(city.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link
        to={`/cities/${city.slug}`}
        className={cn(
          "relative block overflow-hidden bg-ink-soft",
          size === "large" ? "aspect-[4/5]" : "aspect-[3/4]"
        )}
      >
        <img
          src={city.heroImage}
          alt={city.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/10 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-indigo/0 group-hover:bg-indigo/20 transition-colors duration-500" />

        <span className="absolute top-4 left-4 text-[10px] tracking-wide-lg uppercase text-washi/60">
          {city.region}
        </span>

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(city.id);
          }}
          aria-label={fav ? `Remove ${city.name} from favorites` : `Add ${city.name} to favorites`}
          aria-pressed={fav}
          className="absolute top-4 right-4 p-1.5 text-washi/80 hover:text-shu transition-colors"
        >
          <Heart size={18} strokeWidth={1.5} fill={fav ? "var(--color-shu)" : "none"} color={fav ? "var(--color-shu)" : "currentColor"} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-baseline gap-2">
            <h3 className="font-display text-2xl text-washi">{city.name}</h3>
            <span className="font-jp text-sm text-washi/50">{city.jp}</span>
          </div>
          <p className="mt-1.5 text-xs text-washi/50 line-clamp-1">{city.tagline}</p>
        </div>
      </Link>
    </motion.div>
  );
}
