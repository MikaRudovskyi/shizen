import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { cities } from "@/data/cities";
import { useFavorites } from "@/hooks/useFavorites";
import { CityCard } from "@/components/cities/CityCard";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { LinkButton } from "@/components/ui/Button";

export default function Favorites() {
  const { favorites } = useFavorites();
  const savedCities = cities.filter((c) => favorites.includes(c.id));

  return (
    <div className="pt-32 md:pt-40 pb-28 min-h-[70vh]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="お気に入り" en="Favorites" />
        <div className="flex-1 min-w-0">
          <RevealOnScroll>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs tracking-wide-lg uppercase text-gold">
                Saved on this device
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance leading-[1.02]">
              Your Favorites
            </h1>
            <p className="mt-5 max-w-xl text-washi/60 leading-relaxed">
              Saved with the heart icon on any city card. Stored locally in
              this browser — nothing is sent anywhere.
            </p>
          </RevealOnScroll>

          {savedCities.length === 0 ? (
            <RevealOnScroll delay={0.1} className="mt-20 flex flex-col items-center text-center gap-5 py-16 border border-dashed border-ink-line">
              <Heart size={32} strokeWidth={1.2} className="text-washi/20" />
              <p className="text-washi/40 max-w-xs">
                No cities saved yet. Tap the heart on any city to add it here.
              </p>
              <LinkButton to="/cities" variant="outline">
                Browse cities
              </LinkButton>
            </RevealOnScroll>
          ) : (
            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {savedCities.map((city, i) => (
                <CityCard key={city.id} city={city} index={i} />
              ))}
            </div>
          )}

          <div className="mt-16">
            <Link to="/planner" className="text-xs tracking-wide-lg uppercase text-washi/50 hover:text-gold transition-colors">
              Turn favorites into a route →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
