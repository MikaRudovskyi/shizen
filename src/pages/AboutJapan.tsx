import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StatsBand } from "@/components/home/StatsBand";

const img = (seed: string, w = 1600, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const facts = [
  { title: "Geography", jp: "地理", body: "Japan is an archipelago of 6,852 islands stretching over 3,000km north to south, though five main islands — Honshu, Hokkaido, Kyushu, Shikoku and Okinawa — make up 97% of the land. Roughly 73% of the country is mountainous, which is why its population is so densely concentrated along the coastal plains." },
  { title: "Language", jp: "言語", body: "Japanese is written using three scripts simultaneously — kanji (adapted Chinese characters), and two phonetic syllabaries, hiragana and katakana — often mixed within a single sentence. It's considered one of the more challenging languages for English speakers to learn to full fluency, largely due to this writing system." },
  { title: "Seasons", jp: "四季", body: "Japan's four distinct seasons are deeply embedded in daily life — from seasonal menus and seasonal words used in formal letters, to the cherry blossom forecasts that lead national news each spring. Regional climate varies enormously, from subarctic Hokkaido to subtropical Okinawa." },
  { title: "Etiquette", jp: "礼儀", body: "Small customs carry real weight: removing shoes before entering homes and many restaurants, not tipping (it can even cause confusion or offense), and a general preference for quiet, indirect communication in public and professional settings." },
];

export default function AboutJapan() {
  return (
    <div className="pb-28">
      <section className="relative h-[60svh] min-h-[420px] w-full overflow-hidden bg-ink">
        <img src={img("about-japan-hero")} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-10 pb-16">
          <div className="mx-auto w-full max-w-[1600px]">
            <span className="font-jp text-lg text-gold/70">日本について</span>
            <h1 className="mt-3 font-display font-medium leading-[0.95] text-washi text-5xl sm:text-6xl md:text-7xl">
              About Japan
            </h1>
          </div>
        </div>
      </section>

      <StatsBand />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <section className="py-20 flex items-start gap-8">
          <VerticalLabel jp="概要" en="Overview" />
          <div className="flex-1 max-w-3xl">
            <RevealOnScroll>
              <p className="font-display text-2xl md:text-3xl text-washi/85 leading-snug text-balance">
                Japan is an island nation of extraordinary internal contrast —
                ancient and hyper-modern, insular and globally influential,
                rigidly formal and quietly playful, often within the same city block.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <section className="py-20 border-t border-ink-line flex items-start gap-8">
          <VerticalLabel jp="基本" en="The Basics" index="01" />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
            {facts.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 0.06}>
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="font-display text-2xl text-washi">{f.title}</h3>
                  <span className="font-jp text-sm text-gold/70">{f.jp}</span>
                </div>
                <p className="text-sm text-washi/60 leading-relaxed">{f.body}</p>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
