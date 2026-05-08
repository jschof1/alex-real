import PageHero from "@/components/PageHero.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import { TERMS_SECTIONS } from "@/data/siteContent.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

export default function TermsPage() {
  return (
    <main>
      <PageHero>
        <PageHeader
          align="center"
          tone="navy"
          eyebrow="Legal"
          title="Celebrant terms and conditions"
          subtitle="Please read these terms before confirming a booking. A signed copy together with your deposit secures the date."
        />
      </PageHero>

      <section
        className={`${SECTION_TOP_ACCENT} bg-gradient-to-b from-white to-[var(--surface-warm)] px-4 py-14 md:px-6 md:py-20`}
      >
        <RevealOnScroll className="mx-auto max-w-6xl space-y-12">
          {TERMS_SECTIONS.map((section, si) => (
            <article
              key={section.title}
              data-reveal
              className={`rounded-2xl border bg-white/90 p-6 shadow-sm md:p-8 ${
                si % 2 === 0 ? "border-l-4 border-l-[var(--navy)] border-y border-r border-black/[0.06]" : "border-l-4 border-l-[var(--ruby)] border-y border-r border-black/[0.06]"
              }`}
            >
              <h2 className="font-serif text-2xl text-[var(--navy)]">{section.title}</h2>
              {section.paragraphs && (
                <div className="mt-4 space-y-4 text-[var(--muted)] leading-relaxed">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-3 pl-5 text-[var(--muted)] leading-relaxed">
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 48)}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </RevealOnScroll>
      </section>
    </main>
  );
}
