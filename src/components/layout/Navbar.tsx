import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Search, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/cities", label: "Cities", jp: "都市" },
  { to: "/culture", label: "Culture", jp: "文化" },
  { to: "/history", label: "History", jp: "歴史" },
  { to: "/map", label: "Map", jp: "地図" },
  { to: "/planner", label: "Planner", jp: "旅程" },
  { to: "/about", label: "About Japan", jp: "日本" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "bg-ink/90 backdrop-blur-md border-b border-ink-line" : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-[1600px] px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2 shrink-0" onClick={() => setOpen(false)}>
            <span className="font-display text-2xl tracking-[0.15em] text-washi">SHIZEN</span>
            <span className="font-jp text-sm text-gold hidden sm:inline">自然</span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "relative text-[13px] tracking-wideish uppercase text-washi/70 hover:text-washi transition-colors py-2",
                    isActive && "text-washi"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/search"
              aria-label="Search"
              className="text-washi/70 hover:text-gold transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
            </Link>
            <Link
              to="/favorites"
              aria-label="Favorites"
              className="text-washi/70 hover:text-shu transition-colors hidden sm:block"
            >
              <Heart size={18} strokeWidth={1.5} />
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden text-washi"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink lg:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="font-display text-2xl text-washi">SHIZEN</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-washi">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col px-6 mt-6 gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 border-b border-ink-line"
                  >
                    <span className="font-display text-3xl text-washi">{l.label}</span>
                    <span className="font-jp text-lg text-gold">{l.jp}</span>
                  </NavLink>
                </motion.div>
              ))}
              <NavLink
                to="/favorites"
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-4 border-b border-ink-line"
              >
                <span className="font-display text-3xl text-washi">Favorites</span>
                <span className="font-jp text-lg text-gold">お気に入り</span>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
