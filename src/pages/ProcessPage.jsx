import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import ImagePlaceholder from "@/components/ImagePlaceholder.jsx";
import { FEES, INCLUDED, PROCESS_STEP_PLACEHOLDER_LABELS, PROCESS_STEPS } from "@/data/siteContent.js";
import { PROCESS_IMAGES } from "@/data/siteImages.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

const TONES = ["warm", "gold", "navy", "burgundy", "muted"];

export default function ProcessPage() {
  return (
    <main>
      <PageHero>
        <PageHeader
          align="center"
          tone="navy"
          eyebrow="How it works"
          title="From first conversation to the moment you walk down the aisle, scatter ashes or welcome a child"
          subtitle="You do not need every answer on day one. I will guide the process, keep things organised and support the planning."
        />
      </PageHero>

      <section className={`${SECTION_TOP_ACCENT} relative overflow-hidden bg-white px-4 py-20 md:px-6 md:py-28`}>
        {/* Soft background accents */}
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[var(--surface-warm)] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[var(--burgundy)]/5 blur-3xl" />

        <RevealOnScroll className="relative mx-auto max-w-6xl">
          <div className="mb-16 md:mb-20 text-center" data-reveal>
            <span className="block font-serif text-[var(--ruby)] text-sm tracking-[0.2em] uppercase mb-4">
              Comprehensive Support
            </span>
            <h2 className="font-serif text-4xl text-[var(--navy)] md:text-5xl">
              {FEES.includedHeading}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[var(--ruby)]/30" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, index) => (
              <div
                key={item}
                data-reveal
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-[var(--navy)] bg-[var(--burgundy)] p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0_var(--navy)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--ruby)] to-[var(--burgundy)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--navy)] bg-white text-[var(--navy)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed text-white/90 group-hover:text-white transition-colors duration-500">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className={`relative overflow-hidden bg-[var(--navy-deep)] px-4 py-20 text-white md:px-6 md:py-32 ${SECTION_TOP_ACCENT}`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--navy-soft)_0%,transparent_70%)] opacity-60" />
        
        <RevealOnScroll className="relative mx-auto max-w-5xl">
          <div className="mb-20 md:mb-32 text-center" data-reveal>
            <span className="block font-serif text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4">
              The Process
            </span>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              The journey, step by step
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
          </div>
          
          <div className="relative">
            {/* Central glowing timeline line - desktop only */}
            <div className="absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent lg:block" />

            <ol className="relative space-y-20 lg:space-y-32">
              {PROCESS_STEPS.map((step, index) => {
                const label = PROCESS_STEP_PLACEHOLDER_LABELS[index] ?? `Step ${index + 1} image`;
                const isEven = index % 2 !== 0; // 1, 3 are visual right-side
                
                return (
                  <li
                    key={step}
                    data-reveal
                    className={`relative grid gap-8 lg:grid-cols-2 lg:items-center ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    {/* Timeline Node - desktop only */}
                    <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[var(--navy-deep)] bg-[var(--gold)] shadow-[0_0_20px_rgba(201,162,39,0.6)] lg:block" />

                    {/* Image Block */}
                    <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="group relative overflow-hidden rounded-2xl border-4 border-white/5 bg-white/5 shadow-2xl ring-1 ring-black/50">
                        <div className="absolute inset-0 z-10 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                        <ImagePlaceholder
                          label={label}
                          tone={TONES[index % TONES.length]}
                          className="aspect-[4/3] w-full md:aspect-video lg:aspect-[4/3]"
                          imgClassName="transition-transform duration-1000 ease-out group-hover:scale-105"
                          src={PROCESS_IMAGES[index]}
                        />
                      </div>
                      
                      {/* Massive decorative numeral overlaid on image */}
                      <div className={`absolute -bottom-6 text-8xl font-serif font-light text-[var(--ruby)]/30 select-none pointer-events-none md:text-[150px] md:-bottom-12 ${isEven ? "-left-4 md:-left-8 lg:-left-12" : "-right-4 md:-right-8 lg:-right-12"}`}>
                        0{index + 1}
                      </div>
                    </div>

                    {/* Text Block */}
                    <div className={`relative z-10 ${isEven ? "lg:order-1 lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                      <div className="flex items-center gap-4 mb-6 lg:hidden">
                        <span className="font-serif text-3xl text-[var(--ruby)]">
                          0{index + 1}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[var(--gold)]/30 to-transparent" />
                      </div>
                      
                      <h3 className="font-serif text-2xl text-white mb-4 hidden lg:block tracking-wide">
                        {label}
                      </h3>
                      <p className="text-lg leading-relaxed text-white/70 md:text-xl">
                        {step}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          
          <div className="mt-24 text-center lg:mt-40" data-reveal>
            <div className="inline-block relative group">
              <div className="absolute -inset-3 rounded-full bg-[var(--ruby)]/20 blur-xl transition-all duration-500 group-hover:bg-[var(--ruby)]/40 group-hover:blur-2xl" />
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-4 rounded-full bg-[var(--ruby)] px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition-transform duration-300 hover:-translate-y-1"
              >
                Start with a conversation
                <span className="text-[var(--gold)] text-lg">→</span>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
