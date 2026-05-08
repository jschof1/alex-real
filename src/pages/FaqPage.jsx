import PageHero from "@/components/PageHero.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import { FAQ_GROUPS } from "@/data/siteContent.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

export default function FaqPage() {
  return (
    <main>
      <PageHero>
        <PageHeader
          align="center"
          tone="navy"
          eyebrow="FAQ"
          title="Questions people often ask"
          subtitle="If something is not covered here, send a message and I will reply with honest, practical guidance."
        />
      </PageHero>

      <section
        className={`${SECTION_TOP_ACCENT} bg-gradient-to-b from-[var(--surface)] via-white to-[var(--navy)]/[0.04] px-4 py-14 md:px-6 md:py-20`}
      >
        <RevealOnScroll className="mx-auto max-w-6xl space-y-16">
          {FAQ_GROUPS.map((group, gi) => (
            <div key={group.title} className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12" data-reveal>
              <h2
                className={`font-serif text-2xl rounded-2xl border px-4 py-3 shadow-sm lg:sticky lg:top-28 lg:self-start lg:px-5 lg:py-4 ${
                  gi % 2 === 0
                    ? "border-white/10 bg-[var(--navy)] text-white lg:shadow-md"
                    : "border-[var(--ruby)]/30 bg-white text-[var(--navy)] lg:shadow-sm"
                }`}
              >
                {group.title}
              </h2>
              <div
                className={`divide-y divide-black/10 overflow-hidden rounded-2xl border-2 bg-[var(--surface)] shadow-sm ${
                  gi % 2 === 0 ? "border-[var(--burgundy)]/25 ring-1 ring-[var(--burgundy)]/10" : "border-[var(--navy)]/15 ring-1 ring-[var(--navy)]/8"
                }`}
              >
                {group.items.map(([q, a]) => (
                  <div key={q} className="bg-white/90 px-5 py-6 md:px-8">
                    <h3 className="font-serif text-xl text-[var(--navy)]">{q}</h3>
                    <p className="mt-3 text-[var(--muted)] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </section>
    </main>
  );
}
