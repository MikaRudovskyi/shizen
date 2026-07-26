import { SectionHeader } from "@/components/ui/SectionHeader";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const reasons = [
  {
    jp: "対比",
    title: "Contrast, everywhere",
    body: "A 1,300-year-old temple sits a subway stop from the world's busiest pedestrian crossing. Japan doesn't resolve its contradictions — it holds them, deliberately, side by side.",
  },
  {
    jp: "精度",
    title: "Precision as care",
    body: "From a train arriving to the second to a single pleat in a kimono, precision here isn't bureaucratic — it's a way of showing respect for the person on the other end.",
  },
  {
    jp: "季節",
    title: "A calendar built on seasons",
    body: "Menus, festivals, even train announcements shift with the season. Cherry blossoms, fresh snow, autumn maples — the country is genuinely built around noticing time pass.",
  },
];

export function WhyJapan() {
  return (
    <section className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex items-start gap-8">
        <VerticalLabel jp="理由" en="Why Japan" index="01" />
        <div className="flex-1 min-w-0">
          <SectionHeader
            eyebrow="Why Japan"
            title="Not a checklist of landmarks —"
            jp="なぜ日本"
            description="Japan rewards slowness. This is an invitation to look closer at the details that make it unlike anywhere else."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line">
            {reasons.map((r, i) => (
              <RevealOnScroll key={r.title} delay={i * 0.1} className="bg-ink p-8 md:p-10">
                <span className="font-jp text-3xl text-gold/70">{r.jp}</span>
                <h3 className="mt-6 font-display text-2xl text-washi">{r.title}</h3>
                <p className="mt-4 text-sm text-washi/55 leading-relaxed">{r.body}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
