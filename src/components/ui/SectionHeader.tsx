import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  jp?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  jp,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <RevealOnScroll className={cn(align === "center" && "text-center mx-auto", className)}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs tracking-wide-lg uppercase text-gold font-body">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-medium text-washi text-balance leading-[1.05]">
        {title}
        {jp && (
          <span className="ml-4 font-jp text-2xl sm:text-3xl text-washi/40 align-middle">
            {jp}
          </span>
        )}
      </h2>
      {description && (
        <p className={cn("mt-5 max-w-xl text-washi/60 leading-relaxed", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
