import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { value: 26, suffix: "", label: "UNESCO World Heritage Sites" },
  { value: 6852, suffix: "", label: "Islands, though five make up 97% of the land" },
  { value: 1300, suffix: "+", label: "Years since Kyoto became imperial capital" },
  { value: 3.9, suffix: "M", decimals: 1, label: "Cherry trees bloom in a single spring" },
];

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toLocaleString(undefined, { maximumFractionDigits: decimals })),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <section className="relative py-20 border-y border-ink-line bg-ink-soft/40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="text-center md:text-left"
          >
            <div className="font-display text-4xl md:text-5xl text-gold">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <p className="mt-3 text-xs md:text-sm text-washi/50 leading-snug max-w-[16ch] mx-auto md:mx-0">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
