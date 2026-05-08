import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS, PROCESS_STEP_PLACEHOLDER_LABELS } from "@/data/siteContent.js";
import { PROCESS_IMAGES } from "@/data/siteImages.js";
import ImagePlaceholder from "@/components/ImagePlaceholder.jsx";

gsap.registerPlugin(ScrollTrigger);

const TONES = ["navy", "burgundy", "warm", "gold", "muted"];

function cx(...p) {
  return p.filter(Boolean).join(" ");
}

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const lineFillRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      // Animate the central line filling up
      gsap.fromTo(
        lineFillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Animate each step
      const steps = gsap.utils.toArray(".timeline-step");
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative mx-auto mt-16 max-w-5xl md:mt-24">
      {/* Central Line Container */}
      <div ref={containerRef} className="absolute bottom-8 left-6 top-8 w-0.5 -ml-[1px] bg-[var(--navy)]/10 md:bottom-0 md:left-1/2 md:top-0">
        <div 
          ref={lineFillRef}
          className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-[var(--burgundy)] to-[var(--ruby)] h-full"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-8 md:gap-12">
        {PROCESS_STEPS.slice(0, 5).map((step, index) => {
          const isEven = index % 2 === 0;
          const title = PROCESS_STEP_PLACEHOLDER_LABELS[index] || `Step ${index + 1}`;
          const tone = TONES[index % TONES.length];
          
          return (
            <div 
              key={index}
              className="timeline-step relative flex flex-col md:flex-row items-start md:items-center gap-0"
            >
              {/* Timeline Dot */}
              <div className={cx(
                "absolute left-6 top-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white text-xs font-bold text-white shadow-sm md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:h-12 md:w-12 md:text-sm md:border-[6px] z-10",
                isEven ? "bg-[var(--navy)]" : "bg-[var(--burgundy)]"
              )}>
                {index + 1}
              </div>

              {/* Image Block */}
              <div className={cx(
                "ml-16 md:ml-0 md:w-1/2",
                isEven ? "md:pr-12 lg:pr-16 md:order-1" : "md:pl-12 lg:pl-16 md:order-2"
              )}>
                <div className="overflow-hidden rounded-2xl border border-[var(--navy)]/5 shadow-sm h-48 md:h-64 w-full">
                  <ImagePlaceholder label={title} tone={tone} src={PROCESS_IMAGES[index]} />
                </div>
              </div>

              {/* Card Block */}
              <div className={cx(
                "ml-16 mt-6 md:mt-0 md:ml-0 md:w-1/2",
                isEven ? "md:pl-12 lg:pl-16 md:order-2" : "md:pr-12 lg:pr-16 md:order-1"
              )}>
                <div className="group relative overflow-hidden rounded-2xl border border-[var(--navy)]/5 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-[var(--burgundy)]/20">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-3xl transition-transform group-hover:scale-150" />
                  <h3 className="font-serif text-2xl text-[var(--navy)] md:text-3xl mb-4">
                    {title}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed md:text-lg">
                    {step}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
