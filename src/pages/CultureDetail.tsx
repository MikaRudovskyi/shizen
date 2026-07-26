import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { cultureTopics, getCultureBySlug } from "@/data/culture";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function CultureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getCultureBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!topic) return <Navigate to="/404" replace />;

  const others = cultureTopics.filter((t) => t.id !== topic.id).slice(0, 3);

  return (
    <div className="pb-28">
      <section className="relative h-[70svh] min-h-[440px] w-full overflow-hidden bg-ink">
        <img src={topic.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-10 pb-16">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/culture" className="text-xs tracking-wide-lg uppercase text-washi/60 hover:text-washi">
                Culture
              </Link>
              <span className="text-washi/30">/</span>
              <span className="text-xs tracking-wide-lg uppercase text-gold">{topic.eyebrow}</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display font-medium leading-[0.95] text-washi text-5xl sm:text-6xl md:text-7xl flex items-baseline gap-4"
            >
              {topic.title}
              <span className="font-jp text-2xl md:text-3xl text-washi/40">{topic.jp}</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <section className="py-20 flex items-start gap-8">
          <VerticalLabel jp={topic.jp} en={topic.title} />
          <div className="flex-1 max-w-3xl space-y-6">
            <RevealOnScroll>
              <p className="font-display text-2xl text-washi/85 leading-snug text-balance">
                {topic.summary}
              </p>
            </RevealOnScroll>
            {topic.body.map((p, i) => (
              <RevealOnScroll key={i} delay={0.06 * (i + 1)}>
                <p className="text-washi/60 leading-relaxed">{p}</p>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className="py-20 border-t border-ink-line">
          <h2 className="font-display text-2xl text-washi mb-8">More culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((t) => (
              <Link
                key={t.id}
                to={`/culture/${t.slug}`}
                className="group block relative aspect-square overflow-hidden bg-ink-soft"
              >
                <img
                  src={t.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="font-jp text-sm text-washi/40">{t.jp}</span>
                  <h3 className="mt-1 font-display text-xl text-washi">{t.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
