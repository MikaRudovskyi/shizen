import { cn } from "@/lib/utils";

interface VerticalLabelProps {
  jp: string;
  en: string;
  index?: string;
  className?: string;
  align?: "left" | "right";
}

/**
 * Signature structural element for SHIZEN: a tategaki-style (vertical,
 * right-to-left reading) bilingual marker that behaves like a museum wall
 * tag running down the edge of a section. Echoes traditional vertical
 * Japanese typesetting rather than decorating with arbitrary kanji.
 */
export function VerticalLabel({ jp, en, index, className, align = "left" }: VerticalLabelProps) {
  return (
    <div
      className={cn(
        "hidden md:flex flex-col items-center gap-4 select-none",
        align === "right" && "items-center",
        className
      )}
      aria-hidden="true"
    >
      <span className="h-16 w-px bg-linear-to-b from-transparent to-gold/60" />
      <span className="writing-vertical font-jp text-lg tracking-[0.3em] text-washi/80">
        {jp}
      </span>
      <span className="writing-vertical text-[10px] tracking-[0.25em] uppercase text-washi/40">
        {en}
      </span>
      {index && (
        <span className="text-[10px] tracking-[0.2em] text-gold/70 font-body">{index}</span>
      )}
      <span className="h-16 w-px bg-linear-to-t from-transparent to-gold/60" />
    </div>
  );
}
