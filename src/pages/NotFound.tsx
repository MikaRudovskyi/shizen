import { LinkButton } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex items-center justify-center px-6 text-center">
      <RevealOnScroll>
        <span className="font-jp text-2xl text-gold/70">迷子</span>
        <h1 className="mt-4 font-display text-7xl sm:text-8xl md:text-9xl text-washi">404</h1>
        <p className="mt-4 text-washi/50 max-w-sm mx-auto">
          This path doesn't exist — even the most detailed map has its edges.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <LinkButton to="/" variant="primary">
            Return home
          </LinkButton>
          <LinkButton to="/cities" variant="outline">
            Browse cities
          </LinkButton>
        </div>
      </RevealOnScroll>
    </div>
  );
}
