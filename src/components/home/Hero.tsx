import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

const HERO_IMAGE =
  "https://picsum.photos/seed/shizen-hero-fuji/2000/1300";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[130%]">
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/30 to-ink" />
        <div className="absolute inset-0 bg-linear-to-r from-ink/70 via-transparent to-ink/40" />
      </motion.div>

      {/* Ambient drifting light — restrained, not a particle-system spectacle */}
      <motion.div
        aria-hidden
        className="absolute -top-1/3 right-0 h-[70vh] w-[70vh] rounded-full bg-shu/10 blur-[140px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-[50vh] w-[50vh] rounded-full bg-indigo/30 blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end px-6 md:px-10 pb-24 md:pb-28"
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-wide-lg uppercase text-washi/70">
              A cinematic journey
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium leading-[0.92] text-washi text-[15vw] sm:text-[11vw] md:text-[8.5vw] lg:text-[7.5rem]"
            >
              SHIZEN
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="max-w-lg font-display text-xl sm:text-2xl text-washi/80 leading-snug text-balance">
              Explore the soul of Japan — where a thousand-year-old shrine and
              a bullet train share the same street.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <LinkButton to="/cities" variant="primary">
                Begin Exploring
              </LinkButton>
              <LinkButton to="/about" variant="outline">
                Why Japan
              </LinkButton>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-washi/50"
      >
        <span className="text-[10px] tracking-wide-lg uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
