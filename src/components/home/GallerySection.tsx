import { Link } from "react-router-dom";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const img = (seed: string, w = 1200, h = 1500) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const shots = [
  { seed: "gallery-1", span: "row-span-2", caption: "Torii gates, Fushimi Inari" },
  { seed: "gallery-2", span: "", caption: "Shinkansen, Kanto plain" },
  { seed: "gallery-3", span: "", caption: "Snow monkeys, Nagano" },
  { seed: "gallery-4", span: "row-span-2", caption: "Neon, Shinjuku" },
  { seed: "gallery-5", span: "", caption: "Autumn maple, Nikko" },
  { seed: "gallery-6", span: "", caption: "Machiya lane, Kyoto" },
];

export function GallerySection() {
  return (
    <section className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="景色" en="Gallery" index="05" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader eyebrow="Gallery" title="A country in fragments" jp="景色" />
            <Link
              to="/gallery"
              className="shrink-0 text-xs tracking-wide-lg uppercase text-washi/60 hover:text-gold transition-colors"
            >
              Full gallery →
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
            {shots.map((s, i) => (
              <RevealOnScroll key={s.seed} delay={i * 0.05} className={s.span}>
                <div className="group relative h-full w-full overflow-hidden bg-ink-soft">
                  <img
                    src={img(s.seed)}
                    alt={s.caption}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-3 left-3 text-xs text-washi opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {s.caption}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
