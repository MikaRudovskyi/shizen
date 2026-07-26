import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const Home = lazy(() => import("@/pages/Home"));
const Cities = lazy(() => import("@/pages/Cities"));
const CityDetail = lazy(() => import("@/pages/CityDetail"));
const Culture = lazy(() => import("@/pages/Culture"));
const CultureDetail = lazy(() => import("@/pages/CultureDetail"));
const History = lazy(() => import("@/pages/History"));
const InteractiveMap = lazy(() => import("@/pages/InteractiveMap"));
const TravelPlanner = lazy(() => import("@/pages/TravelPlanner"));
const AboutJapan = lazy(() => import("@/pages/AboutJapan"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Favorites = lazy(() => import("@/pages/Favorites"));
const Search = lazy(() => import("@/pages/Search"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-shu focus:text-washi focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollToTop />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/cities" element={<PageTransition><Cities /></PageTransition>} />
              <Route path="/cities/:slug" element={<PageTransition><CityDetail /></PageTransition>} />
              <Route path="/culture" element={<PageTransition><Culture /></PageTransition>} />
              <Route path="/culture/:slug" element={<PageTransition><CultureDetail /></PageTransition>} />
              <Route path="/history" element={<PageTransition><History /></PageTransition>} />
              <Route path="/map" element={<PageTransition><InteractiveMap /></PageTransition>} />
              <Route path="/planner" element={<PageTransition><TravelPlanner /></PageTransition>} />
              <Route path="/about" element={<PageTransition><AboutJapan /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/favorites" element={<PageTransition><Favorites /></PageTransition>} />
              <Route path="/search" element={<PageTransition><Search /></PageTransition>} />
              <Route path="/404" element={<PageTransition><NotFound /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function RouteFallback() {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <span className="font-jp text-sm tracking-[0.3em] text-gold/60 animate-pulse">
        しばらくお待ちください
      </span>
    </div>
  );
}
