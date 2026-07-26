# SHIZEN — Explore the Soul of Japan

A React + TypeScript + Tailwind CSS v4 site exploring Japan's cities, culture
and history, built with Vite, React Router 7 and Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Design system

- **Palette**: ink black (`--color-ink`), warm washi white, shu (torii) red,
  sakura pink, gold leaf, and aizome indigo, each with a deliberate role
  (see `src/index.css`'s `@theme` block). Not a single-accent look: red,
  gold and sakura are each used for a different kind of content.
- **Type**: Fraunces (display) + Shippori Mincho (JP-aware display/serif) +
  Zen Kaku Gothic New (body, JP + Latin). Loaded via Google Fonts in
  `index.html`.
- **Signature element**: the vertical, tategaki-style bilingual labels
  (`src/components/ui/VerticalLabel.tsx`) that run down the edge of major
  sections, echoing traditional Japanese vertical typesetting and museum
  wall tags, used as real navigation/structure, not decoration.

## What's fully built out

- Design system, routing, layout (Navbar/Footer/PageTransition), and all
  reusable components.
- **Home** — full cinematic build: hero, Why Japan, featured-cities
  filmstrip, animated stats, culture teaser, history teaser, gallery,
  testimonials, closing CTA.
- **Cities list + City detail** — all 12 cities (Tokyo, Kyoto, Osaka, Nara,
  Hiroshima, Sapporo, Fukuoka, Kanazawa, Hakone, Nikko, Kamakura, Yokohama)
  have real, researched content: history, architecture, traditional/modern
  culture, facts, attractions, food, hidden gems, photo spots, travel tips,
  a day-by-day itinerary and nearby-city links. One shared template
  (`CityDetail.tsx`) renders all of them.
- **Culture** — 12 real topics (samurai, bushido, tea ceremony, Shinto,
  Buddhism, kimono, gardens, anime/manga, cuisine, architecture, sakura,
  matsuri) with list + detail pages.
- **History** — a full, filterable era-by-era timeline from the Jomon
  period to contemporary Japan.
- Favorites (localStorage), global Search, Travel Planner (reorderable
  route builder for 7/14/21-day trips), and a stylized Interactive Map
  are all functional.

## What's intentionally lighter, and why

This was a very large brief (12 fully detailed cities, a dozen page types,
3D, etc.) for one pass. To keep everything that shipped genuinely solid
rather than spreading thin everywhere, a few things were simplified:

- **Images are seeded picsum.photos placeholders**, not real Japan
  photography — hotlinking real copyrighted photos wasn't safe to do here.
  Swap `heroImage` / `galleryImages` in `src/data/cities.ts` (and the
  `img()` calls in `src/data/culture.ts` and the gallery/home components)
  for a licensed or your-own photo set before shipping publicly.
- **No React Three Fiber / WebGL.** The brief allowed 3D "whenever it
  genuinely improves the experience" — for this pass, CSS/SVG parallax and
  Framer Motion cover the cinematic feel without the added complexity and
  bundle weight. A 3D moment (e.g. a torii gate or Fuji silhouette on the
  hero) is a reasonable next addition if you want it.
- **Interactive Map is schematic, not geographically accurate** — it plots
  cities on a stylized grid using approximate relative positions, labeled
  as such, rather than a real map projection or a maps API integration.
- **Weather is a labeled placeholder** on city pages (no live API wired
  up yet).
- Gallery/Testimonials use generic extra shots and fictional traveler
  quotes rather than a real photo/review database.

## Suggested next passes

1. Swap in licensed photography.
2. Wire a real weather API (e.g. Open-Meteo) into the city page's weather
   card.
3. Replace the schematic map with a real projection or a maps SDK if you
   want accurate geography.
4. Add a 3D hero moment with React Three Fiber if you want the extra
   spectacle the original brief described.
5. Add more cities/regions if you want to go beyond the 12.

## Structure

```
src/
  components/   layout/ ui/ cities/ home/
  data/         cities.ts culture.ts history.ts
  hooks/        useFavorites.ts
  pages/        Home, Cities, CityDetail, Culture, CultureDetail,
                History, InteractiveMap, TravelPlanner, AboutJapan,
                Gallery, Favorites, Search, NotFound
  types/        index.ts
```
