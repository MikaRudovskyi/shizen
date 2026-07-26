import { historyEras } from "@/data/history";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { LinkButton } from "@/components/ui/Button";

const picks = historyEras.filter((e) =>
  ["jomon-yayoi", "kamakura-samurai", "edo-shogunate", "meiji", "postwar-modern"].includes(e.id)
);

export function HistoryTeaser() {
  return (
    <section className="relative py-28 md:py-36 border-t border-ink-line bg-ink-soft/30">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="歴史" en="History" index="04" />
        <div className="flex-1 min-w-0">
          <SectionHeader
            eyebrow="History"
            title="14,000 years, in one line"
            jp="歴史"
            description="From the world's oldest pottery to the world's first bullet train — a timeline of the eras that shaped modern Japan."
          />

          <div className="mt-16 relative">
            <div className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px bg-ink-line md:-translate-x-1/2" />
            <div className="flex flex-col gap-10">
              {picks.map((era, i) => (
                <RevealOnScroll key={era.id} delay={i * 0.08}>
                  <div
                    className={`relative flex items-start gap-6 md:gap-0 md:justify-between ${
                      i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`hidden md:block md:w-[calc(50%-2rem)]`} />
                    <span className="absolute left-0 md:left-1/2 top-1 h-3.5 w-3.5 rounded-full bg-gold md:-translate-x-1/2 ring-4 ring-ink" />
                    <div className="pl-8 md:pl-0 md:w-[calc(50%-2rem)]">
                      <span className="text-xs tracking-wide-lg uppercase text-gold">{era.years}</span>
                      <h3 className="mt-2 font-display text-2xl text-washi">{era.title}</h3>
                      <p className="mt-2 text-sm text-washi/55 leading-relaxed max-w-md">{era.summary}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <LinkButton to="/history" variant="outline">
              Explore the full timeline
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
