import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const notes = [
  {
    quote:
      "I planned a two-week trip around this site's city guides and didn't have a single wasted day. The hidden gems sections alone were worth it.",
    name: "Elena R.",
    detail: "First-time visitor, Tokyo & Kyoto",
  },
  {
    quote:
      "The history timeline finally made sense of things I'd read a dozen times before — the eras, the samurai era in particular, just clicked.",
    name: "Marcus T.",
    detail: "Return visitor, five trips since 2016",
  },
  {
    quote:
      "Kanazawa was our favorite stop and we almost skipped it. Glad we didn't — exactly as described, and far quieter than Kyoto.",
    name: "Aiko & Ben",
    detail: "Two-week Honshu loop",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 border-t border-ink-line bg-ink-soft/30">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="声" en="Traveler Notes" index="06" />
        <div className="flex-1 min-w-0">
          <SectionHeader eyebrow="Traveler Notes" title="From people who went and came back" jp="声" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {notes.map((n, i) => (
              <RevealOnScroll key={n.name} delay={i * 0.08}>
                <span className="font-display text-6xl text-gold/30 leading-none">"</span>
                <p className="mt-2 font-display text-xl text-washi/85 leading-snug text-balance">
                  {n.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-ink-line" />
                  <div>
                    <p className="text-sm text-washi">{n.name}</p>
                    <p className="text-xs text-washi/40">{n.detail}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
