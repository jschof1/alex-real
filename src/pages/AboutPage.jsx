import PageHero from "@/components/PageHero.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import ImagePlaceholder from "@/components/ImagePlaceholder.jsx";
import { ABOUT } from "@/data/siteContent.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

export default function AboutPage() {
  return (
    <main>
      <PageHero>
        <PageHeader
          align="center"
          tone="navy"
          eyebrow="About"
          title="Alex Jeal"
          subtitle="Independent celebrant and wedding DJ, based in the South East."
        />
      </PageHero>

      <section
        className={`${SECTION_TOP_ACCENT} relative overflow-hidden bg-white border-b border-[var(--ruby)]/20 px-4 py-20 md:px-6 md:py-32`}
      >
        {/* Soft atmospheric gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--burgundy)_0%,transparent_35%)] opacity-5 mix-blend-multiply" />
        <div className="pointer-events-none absolute -left-1/4 top-0 h-[800px] w-[800px] rounded-full bg-[var(--gold)] opacity-[0.03] blur-3xl" />

        <RevealOnScroll className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:items-center">
            {/* Left: Magazine-style typography */}
            <div className="relative z-10" data-reveal>
              <div className="mb-12">
                <span className="block font-serif text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                  The Celebrant
                </span>
                <h2 className="font-serif text-4xl text-[var(--navy)] leading-tight md:text-5xl lg:text-6xl">
                  Ceremonies with <br className="hidden md:block" />
                  <span className="italic text-[var(--ruby)] font-light">personality</span> & warmth.
                </h2>
              </div>
              
              <div className="relative">
                <div className="absolute -left-6 top-2 h-full w-px bg-gradient-to-b from-[var(--ruby)]/40 to-transparent hidden md:block" />
                
                <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                  {ABOUT.intro.map((p, i) => (
                    <p key={p.slice(0, 40)} className={i === 0 ? "font-medium text-[var(--navy)]" : ""}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="h-px w-16 bg-[var(--gold)]" />
                <p className="font-serif text-[var(--navy)] italic tracking-wide">Based in the South East</p>
              </div>
            </div>

            {/* Right: Editorial Image Composition */}
            <div className="relative" data-reveal>
              {/* Background architectural frame */}
              <div className="absolute -inset-8 z-0 rounded-t-full border border-[var(--ruby)]/10 bg-[var(--surface-warm)]/50 hidden md:block" />
              
              <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
                {/* Main Portrait */}
                <div className="col-span-8 md:col-span-7">
                  <figure className="group relative overflow-hidden rounded-t-full rounded-b-2xl border-8 border-white bg-white shadow-2xl ring-1 ring-black/5">
                    <div className="absolute inset-0 z-10 rounded-t-full rounded-b-xl ring-1 ring-inset ring-black/10 pointer-events-none" />
                    <ImagePlaceholder
                      src="/images/alex/alex-04.jpg"
                      label="Alex Jeal at a chapel garden of remembrance"
                      className="aspect-[3/4] w-full"
                      imgClassName="object-[center_30%] transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </figure>
                </div>
                
                {/* Secondary Image - Offset */}
                <div className="col-span-10 col-start-3 md:col-span-7 md:col-start-6 -mt-32 md:-mt-48 relative z-20">
                  <figure className="group relative overflow-hidden rounded-2xl border-[12px] border-white bg-white shadow-xl ring-1 ring-black/5 md:-ml-12">
                    <div className="absolute inset-0 z-10 rounded-xl ring-1 ring-inset ring-black/10 pointer-events-none" />
                    <ImagePlaceholder
                      src="/images/alex/alex-07.jpg"
                      label="Alex Jeal at the lectern of a funeral chapel"
                      className="aspect-[4/3] w-full"
                      imgClassName="object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </figure>
                </div>
              </div>
              
              {/* Floating accent dot */}
              <div className="absolute bottom-12 right-0 md:-right-8 z-30 h-4 w-4 rounded-full bg-[var(--ruby)] shadow-[0_0_20px_rgba(185,28,60,0.4)]" />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className={`${SECTION_TOP_ACCENT} relative overflow-hidden bg-[var(--navy)] text-white px-4 py-20 md:px-6 md:py-32`}>
        {/* Deep atmospheric glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[var(--burgundy)] opacity-20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[var(--gold)] opacity-[0.08] blur-[100px]" />

        <RevealOnScroll className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8" data-reveal>
            <div className="max-w-2xl">
              <span className="block font-serif text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
                The Difference
              </span>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                {ABOUT.whyTitle}
              </h2>
            </div>
            <div className="hidden md:block h-px w-32 bg-gradient-to-r from-[var(--gold)] to-transparent" />
          </div>

          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-x-24">
            {ABOUT.why.map((p, wi) => (
              <div
                key={p.slice(0, 32)}
                data-reveal
                className={`group relative flex gap-6 md:gap-8 ${wi % 2 !== 0 ? "md:mt-24" : ""}`}
              >
                {/* Large elegant numeral */}
                <div className="font-serif text-5xl md:text-7xl font-light leading-none text-white/10 transition-colors duration-700 group-hover:text-[var(--gold)] select-none">
                  0{wi + 1}
                </div>
                
                {/* Text content with animated border */}
                <div className="relative pt-2 md:pt-4">
                  <div className="absolute -left-4 top-2 bottom-0 w-px bg-white/10 transition-colors duration-700 group-hover:bg-[var(--gold)]/50" />
                  <p className="text-lg leading-relaxed text-white/60 transition-colors duration-700 group-hover:text-white md:text-xl">
                    {p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
