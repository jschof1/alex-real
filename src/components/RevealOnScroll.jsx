import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Animates descendants with [data-reveal] on first scroll into view.
 * Respects prefers-reduced-motion (no motion).
 */
export default function RevealOnScroll({
  children,
  className,
  as: Comp = "div",
  stagger = 0.08,
  y = 32,
  duration = 0.85,
  ease = "power3.out",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = gsap.utils.toArray(root.querySelectorAll("[data-reveal]"));
    if (!targets.length) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    gsap.set(targets, { autoAlpha: 0, y });

    const ob = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          ob.disconnect();
          gsap.to(targets, {
            autoAlpha: 1,
            y: 0,
            duration,
            ease,
            stagger,
          });
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    ob.observe(root);

    return () => {
      ob.disconnect();
      gsap.killTweensOf(targets);
    };
  }, [duration, ease, stagger, y]);

  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
