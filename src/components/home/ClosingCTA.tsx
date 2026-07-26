import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { LinkButton } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section className="relative py-32 md:py-44 border-t border-ink-line overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-br from-indigo/20 via-ink to-ink"
      />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 text-center">
        <RevealOnScroll>
          <span className="font-jp text-lg text-gold/70">始めましょう</span>
          <h2 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl font-medium text-washi text-balance max-w-4xl mx-auto leading-[1.02]">
            Your Japan starts with one itinerary
          </h2>
          <p className="mt-6 text-washi/60 max-w-lg mx-auto">
            Build a 7, 14 or 21-day route across cities, or start with a single
            city and see where it leads.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <LinkButton to="/planner" variant="primary">
              Plan a trip
            </LinkButton>
            <LinkButton to="/cities" variant="ghost">
              Browse cities
            </LinkButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
