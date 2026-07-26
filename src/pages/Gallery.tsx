import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cities } from "@/data/cities";

const extra = [
  "gallery-a", "gallery-b", "gallery-c", "gallery-d", "gallery-e", "gallery-f",
  "gallery-g", "gallery-h", "gallery-i", "gallery-j", "gallery-k", "gallery-l",
];

const img = (seed: string, w = 1200, h = 1500) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export default function Gallery() {
  const cityShots = cities.flatMap((c) => c.galleryImages.slice(0, 1).map((src) => ({ src, caption: c.name })));
  const extraShots = extra.map((seed) => ({ src: img(seed), caption: undefined }));
  const shots = [...cityShots, ...extraShots];

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="写真" en="Gallery" />
        <div className="flex-1 min-w-0">
          <RevealOnScroll>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs tracking-wide-lg uppercase text-gold">The full collection</span>
            </div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance leading-[1.02]">
              Gallery
            </h1>
          </RevealOnScroll>

          <div className="mt-14 columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {shots.map((s, i) => (
              <RevealOnScroll key={i} delay={(i % 8) * 0.04} className="break-inside-avoid">
                <div className="group relative overflow-hidden bg-ink-soft">
                  <img
                    src={s.src}
                    alt={s.caption ?? "Japan"}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {s.caption && (
                    <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3">
                      <span className="text-xs text-washi">{s.caption}</span>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
