import { Hero } from "@/components/home/Hero";
import { WhyJapan } from "@/components/home/WhyJapan";
import { FeaturedCities } from "@/components/home/FeaturedCities";
import { StatsBand } from "@/components/home/StatsBand";
import { CultureTeaser } from "@/components/home/CultureTeaser";
import { HistoryTeaser } from "@/components/home/HistoryTeaser";
import { GallerySection } from "@/components/home/GallerySection";
import { Testimonials } from "@/components/home/Testimonials";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyJapan />
      <FeaturedCities />
      <StatsBand />
      <CultureTeaser />
      <HistoryTeaser />
      <GallerySection />
      <Testimonials />
      <ClosingCTA />
    </>
  );
}
