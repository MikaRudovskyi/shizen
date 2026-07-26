import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin, Users, Calendar, Cloud } from "lucide-react";
import { cities, getCityBySlug } from "@/data/cities";
import { useFavorites } from "@/hooks/useFavorites";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { CityCard } from "@/components/cities/CityCard";
import { cn } from "@/lib/utils";

const categoryLabel: Record<string, string> = {
  temple: "Temple",
  shrine: "Shrine",
  museum: "Museum",
  nature: "Nature",
  landmark: "Landmark",
  district: "District",
  castle: "Castle",
};

export default function CityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const city = slug ? getCityBySlug(slug) : undefined;
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!city) return <Navigate to="/404" replace />;

  const fav = isFavorite(city.id);
  const nearbyCities = city.nearby.map((id) => cities.find((c) => c.id === id)).filter(Boolean);

  return (
    <div className="pb-28">
      {/* Hero */}
      <section className="relative h-[85svh] min-h-[520px] w-full overflow-hidden bg-ink">
        <img src={city.heroImage} alt={city.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/10" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/60 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-10 pb-16">
          <div className="mx-auto w-full max-w-[1600px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-4"
            >
              <Link to="/cities" className="text-xs tracking-wide-lg uppercase text-washi/60 hover:text-washi">
                Cities
              </Link>
              <span className="text-washi/30">/</span>
              <span className="text-xs tracking-wide-lg uppercase text-gold">{city.region}</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-medium leading-[0.92] text-washi text-[16vw] sm:text-6xl md:text-7xl lg:text-8xl flex items-baseline gap-4"
              >
                {city.name}
                <span className="font-jp text-2xl md:text-4xl text-washi/40">{city.jp}</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-5 flex items-end justify-between gap-6"
            >
              <p className="max-w-xl text-washi/70 leading-relaxed">{city.tagline}</p>
              <button
                onClick={() => toggleFavorite(city.id)}
                aria-pressed={fav}
                className={cn(
                  "shrink-0 flex items-center gap-2 px-5 py-2.5 border text-xs tracking-wideish uppercase transition-colors",
                  fav ? "border-shu bg-shu/10 text-shu" : "border-washi/30 text-washi hover:border-gold hover:text-gold"
                )}
              >
                <Heart size={14} strokeWidth={1.5} fill={fav ? "currentColor" : "none"} />
                {fav ? "Saved" : "Save city"}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="border-b border-ink-line bg-ink-soft/40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Founded", value: city.founded },
            { icon: Users, label: "Population", value: city.population },
            { icon: MapPin, label: "Best season", value: city.bestSeason.join(" · ") },
            { icon: Cloud, label: "Weather", value: "Live forecast — coming soon" },
          ].map((f) => (
            <div key={f.label} className="flex items-start gap-3">
              <f.icon size={16} strokeWidth={1.5} className="mt-1 text-gold shrink-0" />
              <div>
                <p className="text-[10px] tracking-wide-lg uppercase text-washi/40">{f.label}</p>
                <p className="mt-1 text-sm text-washi capitalize">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Intro */}
        <section className="py-20 flex items-start gap-8">
          <VerticalLabel jp="紹介" en="Introduction" />
          <RevealOnScroll className="flex-1 max-w-3xl">
            <p className="font-display text-2xl md:text-3xl text-washi/90 leading-snug text-balance">
              {city.intro}
            </p>
          </RevealOnScroll>
        </section>

        {/* History / Architecture / Culture */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="歴史" en="History & Culture" index="01" />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { title: "History", jp: "歴史", body: city.history },
              { title: "Architecture", jp: "建築", body: city.architecture },
              { title: "Traditional Culture", jp: "伝統文化", body: city.traditionalCulture },
              { title: "Modern Culture", jp: "現代文化", body: city.modernCulture },
            ].map((block, i) => (
              <RevealOnScroll key={block.title} delay={i * 0.05}>
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="font-display text-2xl text-washi">{block.title}</h3>
                  <span className="font-jp text-sm text-gold/70">{block.jp}</span>
                </div>
                <p className="text-sm text-washi/60 leading-relaxed">{block.body}</p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Facts */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="事実" en="Facts" index="02" />
          <div className="flex-1">
            <h2 className="font-display text-3xl text-washi mb-8">Interesting facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.facts.map((fact, i) => (
                <RevealOnScroll key={fact} delay={i * 0.05} className="flex gap-4 border-t border-ink-line pt-4">
                  <span className="font-jp text-gold/60 text-sm shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-washi/65 leading-relaxed">{fact}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Attractions */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="観光" en="Attractions" index="03" />
          <div className="flex-1">
            <h2 className="font-display text-3xl text-washi mb-8">Places to visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {city.attractions.map((a, i) => (
                <RevealOnScroll
                  key={a.id}
                  delay={i * 0.06}
                  className="group border border-ink-line p-6 hover:border-gold/50 transition-colors"
                >
                  <span className="text-[10px] tracking-wide-lg uppercase text-gold">
                    {categoryLabel[a.category]}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-washi">{a.name}</h3>
                  <p className="mt-3 text-sm text-washi/55 leading-relaxed">{a.description}</p>
                  <p className="mt-4 text-xs text-washi/40 leading-relaxed border-t border-ink-line pt-4">
                    <span className="text-gold/80">Tip — </span>
                    {a.tip}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Food */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="食" en="Food" index="04" />
          <div className="flex-1">
            <h2 className="font-display text-3xl text-washi mb-8">Local food to try</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {city.food.map((f, i) => (
                <RevealOnScroll key={f.id} delay={i * 0.06}>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-display text-lg text-washi">{f.name}</h3>
                    <span className="font-jp text-sm text-gold/70">{f.jp}</span>
                  </div>
                  <p className="mt-2 text-sm text-washi/55 leading-relaxed">{f.description}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="写真" en="Gallery" index="05" />
          <div className="flex-1">
            <h2 className="font-display text-3xl text-washi mb-8">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {city.galleryImages.map((src, i) => (
                <RevealOnScroll key={src} delay={i * 0.05} className="aspect-[3/4] overflow-hidden bg-ink-soft">
                  <img src={src} alt={`${city.name} ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden gems / photo spots / tips */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="秘密" en="Insider" index="06" />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Hidden gems", jp: "穴場", items: city.hiddenGems },
              { title: "Photography spots", jp: "撮影地", items: city.photographySpots },
              { title: "Travel tips", jp: "旅のコツ", items: city.travelTips },
            ].map((col, i) => (
              <RevealOnScroll key={col.title} delay={i * 0.06}>
                <div className="flex items-baseline gap-2 mb-4">
                  <h3 className="font-display text-xl text-washi">{col.title}</h3>
                  <span className="font-jp text-sm text-gold/70">{col.jp}</span>
                </div>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-washi/55 leading-relaxed border-l border-ink-line pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="旅程" en="Itinerary" index="07" />
          <div className="flex-1">
            <h2 className="font-display text-3xl text-washi mb-2">Recommended itinerary</h2>
            <p className="text-sm text-washi/45 mb-8">A suggested pace — adjust freely.</p>
            <div className="space-y-6">
              {city.itinerary.map((day, i) => (
                <RevealOnScroll
                  key={day.day}
                  delay={i * 0.08}
                  className="flex gap-6 border-t border-ink-line pt-6"
                >
                  <span className="font-display text-3xl text-gold/60 shrink-0 w-20">
                    Day {day.day}
                  </span>
                  <p className="text-sm text-washi/65 leading-relaxed">{day.plan}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation & nightlife */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="移動" en="Practical" index="08" />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealOnScroll>
              <h3 className="font-display text-xl text-washi mb-3">Getting around</h3>
              <p className="text-sm text-washi/60 leading-relaxed">{city.transportation}</p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.06}>
              <h3 className="font-display text-xl text-washi mb-3">Nightlife</h3>
              <p className="text-sm text-washi/60 leading-relaxed">{city.nightlife}</p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="地図" en="Location" index="09" />
          <div className="flex-1">
            <h2 className="font-display text-3xl text-washi mb-8">Where it sits</h2>
            <Link
              to="/map"
              className="relative block aspect-[21/9] w-full overflow-hidden border border-ink-line bg-ink-soft group"
            >
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 text-washi/40 group-hover:text-gold transition-colors">
                <MapPin size={28} strokeWidth={1.2} />
                <span className="text-xs tracking-wide-lg uppercase">
                  View {city.name} on the interactive map →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Nearby */}
        {nearbyCities.length > 0 && (
          <section className="py-20 border-t border-ink-line flex items-start gap-8">
            <VerticalLabel jp="周辺" en="Nearby" index="10" />
            <div className="flex-1">
              <h2 className="font-display text-3xl text-washi mb-8">Nearby destinations</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {nearbyCities.map((c, i) => c && <CityCard key={c.id} city={c} index={i} />)}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
