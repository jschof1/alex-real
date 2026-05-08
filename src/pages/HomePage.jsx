import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import SectionShell from "@/components/SectionShell.jsx";
import HeroBackdropVideo from "@/components/HeroBackdropVideo.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import HeroPortraitImg from "@/components/HeroPortraitImg.jsx";
import ImagePlaceholder from "@/components/ImagePlaceholder.jsx";
import ProcessTimeline from "@/components/ProcessTimeline.jsx";
import { ABOUT, FEES, PROCESS_STEPS, SERVICES, SITE } from "@/data/siteContent.js";
import { serviceImageAt } from "@/data/siteImages.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

const SERVICE_TONES = ["gold", "burgundy", "navy", "warm", "muted"];

function cx(...p) {
  return p.filter(Boolean).join(" ");
}

export default function HomePage() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const page = pageRef.current;
    const hero = heroRef.current;
    if (!page || !hero) return;

    const ctx = gsap.context(() => {
      gsap.from(hero.querySelectorAll(".hero-pop"), {
        autoAlpha: 0,
        y: 28,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.11,
      });

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

      const aboutWrap = page.querySelector('[data-parallax-img="about"]');
      const aboutImg = aboutWrap?.querySelector("img");
      if (aboutImg && aboutWrap) {
        gsap.fromTo(
          aboutImg,
          { y: "-6%" },
          {
            y: "6%",
            ease: "none",
            scrollTrigger: {
              trigger: aboutWrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.55,
            },
          }
        );
      }
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef}>
      <section ref={heroRef} className={`relative overflow-hidden bg-[var(--navy)] text-white ${SECTION_TOP_ACCENT}`}>
        <div
          className="hero-parallax-bg pointer-events-none absolute inset-0 h-[124%] w-full -top-[12%] min-h-0 will-change-transform"
          aria-hidden
        >
          <HeroBackdropVideo />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[var(--navy)]/42 backdrop-blur-[8px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--navy)]/55 via-transparent to-black/45" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-6 md:py-20 lg:py-24">
          <div>
            <p className="hero-pop text-sm font-semibold uppercase tracking-[0.22em] text-[var(--gold)] md:text-base">
              Alex Jeal
            </p>
            <h1 className="hero-pop mt-4 font-serif text-5xl leading-[1.06] tracking-tight md:text-6xl lg:text-7xl">
              Ceremonies that sound like{" "}
              <span className="text-[var(--gold)] italic">you</span>, delivered with calm and care
            </h1>
            <p className="hero-pop mt-6 max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
              {SITE.tagline}
            </p>
            <div className="hero-pop mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--burgundy)] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110"
              >
                Plan a ceremony
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View services
              </Link>
            </div>
          </div>
          <div className="hero-pop relative w-full md:ml-auto md:max-w-md md:translate-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/10 md:aspect-[3/4]">
              <HeroPortraitImg className="h-full w-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 -left-2 max-w-xs rounded-xl border border-white/15 bg-[var(--navy-soft)]/95 p-4 text-sm text-white/85 shadow-xl backdrop-blur md:-left-6">
              <p className="font-serif text-lg text-white">Independent celebrant and wedding DJ</p>
              <p className="mt-1 text-xs text-white/70">Kent, Sussex, Surrey, and beyond</p>
            </div>
          </div>
        </div>
      </section>

      <SectionShell className="bg-[var(--navy)] px-4 py-20 text-white md:px-6 md:py-24">
        <RevealOnScroll className="relative mx-auto grid max-w-6xl gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-x-14 lg:gap-y-0">
          <div className="flex min-w-0 flex-col lg:max-w-xl lg:pr-2" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">About Alex</p>
            <h2 className="mt-2 font-serif text-4xl leading-[1.12] tracking-tight md:text-5xl">People first, always</h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-white/82 md:text-xl">
              {ABOUT.intro[0]}
            </p>
            <ul className="mt-8 space-y-5 border-t border-white/10 pt-8 md:mt-10 md:space-y-6 md:pt-10">
              {ABOUT.why.slice(0, 3).map((line) => (
                <li
                  key={line.slice(0, 24)}
                  className="border-l-2 border-[var(--gold)]/55 pl-5 text-base leading-relaxed text-white/88"
                >
                  {line}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex self-start rounded-full border border-white/35 bg-white/10 px-6 py-3 text-base font-semibold text-white shadow-sm backdrop-blur transition hover:border-white/55 hover:bg-white/15"
            >
              Full about page
            </Link>
          </div>
          <aside className="flex min-w-0 flex-col" data-reveal>
            <div
              data-parallax-img="about"
              className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 shadow-xl shadow-black/30 ring-1 ring-white/10 sm:max-w-md lg:mx-0 lg:max-w-none"
            >
              <ImagePlaceholder
                src="/images/alex/alex-06.jpg"
                label="Alex Jeal in front of a Japanese maple"
                className="aspect-[4/5]"
                imgClassName="object-top"
              />
            </div>
          </aside>
        </RevealOnScroll>
      </SectionShell>

      <SectionShell className="border-b border-[var(--ruby)]/25 bg-gradient-to-b from-[var(--surface-warm)] via-white to-[var(--surface)] px-4 py-16 md:px-6 md:py-20">
        <RevealOnScroll className="mx-auto max-w-6xl">
          <div className="max-w-2xl" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ruby)]">What I offer</p>
            <h2 className="mt-2 font-serif text-3xl text-[var(--navy)] md:text-4xl">Ceremonies and celebrations for every chapter</h2>
            <p className="mt-4 text-[var(--muted)] leading-relaxed">
              From weddings and vow renewals to funerals, naming days, and DJ hire, everything is built around your story and your pace.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-5">
            {SERVICES.map((s, i) => {
              const dark = i % 2 === 1;
              return (
                <article
                  key={s.slug}
                  data-reveal
                  className={cx(
                    "group flex flex-col overflow-hidden rounded-2xl shadow-md ring-1 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg",
                    "flex-grow w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]",
                    dark
                      ? "border border-white/12 bg-[var(--navy)] text-white ring-white/10"
                      : "border border-black/[0.08] bg-white/90 ring-black/[0.04]",
                    i === 0 && !dark && "lg:ring-2 lg:ring-[var(--burgundy)]/25"
                  )}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImagePlaceholder
                    label={s.title}
                    tone={SERVICE_TONES[i % SERVICE_TONES.length]}
                    src={serviceImageAt(s.slug, i)}
                  />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--navy)]/55 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className={cx("font-serif text-2xl", dark ? "text-white" : "text-[var(--navy)]")}>{s.title}</h3>
                    <p className={cx("mt-3 flex-1 text-sm leading-relaxed", dark ? "text-white/78" : "text-[var(--muted)]")}>
                      {s.summary}
                    </p>
                    <Link
                      to="/services"
                      className={cx(
                        "mt-5 inline-flex text-sm font-semibold group-hover:underline",
                        dark ? "text-[var(--gold)]" : "text-[var(--burgundy)]"
                      )}
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </RevealOnScroll>
      </SectionShell>

      <SectionShell className="border-y border-[var(--navy)]/10 bg-gradient-to-r from-[var(--burgundy)]/[0.06] via-white to-[var(--navy-soft)]/[0.08] px-4 py-16 md:px-6 md:py-24">
        <RevealOnScroll className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 text-center md:items-center" data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--burgundy)]">How it works</p>
            <h2 className="mt-2 font-serif text-4xl text-[var(--navy)] md:text-5xl lg:text-6xl">Clear steps from first chat to the day itself</h2>
            <Link to="/process" className="mt-4 inline-flex text-sm font-semibold text-[var(--burgundy)] hover:underline">
              See the full process
            </Link>
          </div>
          
          <ProcessTimeline />
        </RevealOnScroll>
      </SectionShell>

      <section
        className={`relative overflow-hidden border-y border-black/5 bg-[var(--navy)] px-4 py-16 text-white md:px-6 md:py-20 ${SECTION_TOP_ACCENT}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-soft)] to-black/55" />
        <RevealOnScroll className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Fees</p>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl">Straightforward packages</h2>
              <p className="mt-3 max-w-xl text-sm text-white/75">
                {FEES.intro[0]}
              </p>
            </div>
            <Link
              to="/fees"
              className="inline-flex w-fit rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[var(--navy)] hover:brightness-105"
            >
              Full fee guide
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEES.tables.slice(0, 4).map((t, fi) => (
              <div
                key={t.title}
                data-reveal
                className={cx(
                  "rounded-2xl border bg-white/5 p-5 backdrop-blur-sm",
                  fi % 2 === 0 ? "border-[var(--gold)]/35 ring-1 ring-[var(--gold)]/20" : "border-[var(--ruby)]/40 ring-1 ring-white/10"
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--gold)]">{t.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/85">
                  {t.rows.slice(0, 2).map(([label, price]) => (
                    <li key={label} className="flex justify-between gap-2 border-b border-white/10 pb-2 last:border-0">
                      <span className="text-white/70">{label}</span>
                      <span className="font-semibold text-white">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <SectionShell className="bg-gradient-to-r from-[var(--burgundy)] via-[var(--burgundy)] to-[var(--burgundy-soft)] px-4 py-14 md:px-6 md:py-16">
        <RevealOnScroll className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div data-reveal>
            <h2 className="font-serif text-2xl text-white md:text-3xl">Ready to talk through your plans?</h2>
            <p className="mt-2 text-sm text-white/85">
              Share your date, location, and the kind of ceremony you are imagining. I will come back with clear next steps.
            </p>
          </div>
          <div className="flex flex-wrap gap-3" data-reveal>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--burgundy)] shadow-md transition hover:bg-white/95"
            >
              Contact Alex
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </RevealOnScroll>
      </SectionShell>
    </main>
  );
}
