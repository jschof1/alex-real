import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import PageHeader from "@/components/PageHeader.jsx";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

export default function NotFound() {
  const root = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".nf-pop", { autoAlpha: 0, y: 18, duration: 0.75, ease: "power3.out", stagger: 0.08 });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={root}
      className={`min-h-[55vh] bg-gradient-to-br from-[var(--navy)] via-[var(--navy-soft)] to-[var(--burgundy)]/[0.35] px-4 py-16 md:px-6 md:py-20 ${SECTION_TOP_ACCENT}`}
    >
      <div className="mx-auto max-w-lg overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/95 shadow-2xl shadow-black/35 ring-1 ring-white/25 backdrop-blur">
        <PageHeader
          align="center"
          eyebrow="404"
          title="This page could not be found"
          subtitle="The link may be out of date, or the page may have moved."
        />
        <div className="nf-pop px-4 pb-10 text-center">
          <Link
            to="/"
            className="inline-flex rounded-full bg-[var(--burgundy)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:brightness-110"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
