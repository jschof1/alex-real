import PageHero from "@/components/PageHero.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import { FEES } from "@/data/siteContent.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

export default function FeesPage() {
  return (
    <main>
      <PageHero>
        <PageHeader align="center" eyebrow="Fees" title="Clear pricing, agreed in advance" subtitle={FEES.intro[0]} tone="navy" />
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/78">{FEES.intro[1]}</p>
      </PageHero>

      <section
        className={`${SECTION_TOP_ACCENT} border-b border-[var(--ruby)]/25 bg-gradient-to-r from-[var(--burgundy)]/[0.08] via-white to-[var(--surface-warm)] px-4 py-12 md:px-6 md:py-14`}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-[var(--navy)]">{FEES.travelHeading}</h2>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">{FEES.travel}</p>
        </div>
      </section>

      <section className={`${SECTION_TOP_ACCENT} bg-gradient-to-b from-[var(--surface)] to-white px-4 py-14 md:px-6 md:py-20`}>
        <RevealOnScroll className="mx-auto max-w-6xl space-y-12">
          {FEES.tables.map((table, ti) => (
            <div
              key={table.title}
              data-reveal
              className={`overflow-hidden rounded-2xl border bg-white/95 shadow-md ring-1 ${
                ti % 2 === 0
                  ? "border-[var(--navy)]/15 ring-[var(--navy)]/10"
                  : "border-[var(--ruby)]/30 ring-[var(--burgundy)]/10"
              }`}
            >
              <div
                className={`border-b px-6 py-4 ${
                  ti % 2 === 0
                    ? "border-black/[0.06] bg-[var(--navy)] text-white"
                    : "border-[var(--ruby)]/20 bg-gradient-to-r from-[var(--burgundy)] to-[var(--ruby)] text-white"
                }`}
              >
                <h2 className="font-serif text-2xl">{table.title}</h2>
                {table.note && <p className={`mt-2 text-sm ${ti % 2 === 0 ? "text-white/75" : "text-white/80"}`}>{table.note}</p>}
              </div>
              <ul className="divide-y divide-black/[0.06]">
                {table.rows.map(([label, price]) => (
                  <li key={label} className="flex flex-wrap items-baseline justify-between gap-2 px-6 py-4">
                    <span className="text-[var(--muted)]">{label}</span>
                    <span className="font-semibold text-[var(--navy)]">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealOnScroll>
      </section>
    </main>
  );
}
