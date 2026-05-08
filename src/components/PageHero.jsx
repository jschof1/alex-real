import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackdropVideo from "@/components/HeroBackdropVideo.jsx";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

gsap.registerPlugin(ScrollTrigger);

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Inner-page hero: same looping video backdrop, parallax band, and scrims as the homepage hero.
 */
export default function PageHero({ children, className }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const parallaxBg = hero.querySelector(".hero-parallax-bg");
      if (parallaxBg) {
        gsap.fromTo(
          parallaxBg,
          { y: -42 },
          {
            y: 42,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={cx(
        "relative overflow-hidden border-b border-white/10 bg-[var(--navy)] text-white",
        SECTION_TOP_ACCENT,
        className
      )}
    >
      <div
        className="hero-parallax-bg pointer-events-none absolute inset-0 h-[124%] w-full -top-[12%] min-h-0 will-change-transform"
        aria-hidden
      >
        <HeroBackdropVideo />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[var(--navy)]/42 backdrop-blur-[8px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--navy)]/55 via-transparent to-black/45" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">{children}</div>
    </section>
  );
}
