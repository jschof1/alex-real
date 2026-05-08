import PageHero from "@/components/PageHero.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import ImagePlaceholder from "@/components/ImagePlaceholder.jsx";
import { LINKS } from "@/data/siteContent.js";
import { LINKS_THUMBNAILS } from "@/data/siteImages.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

export default function LinksPage() {
  return (
    <main>
      <PageHero>
        <PageHeader
          align="center"
          tone="navy"
          eyebrow="Links"
          title="Places to find me and organisations I trust"
          subtitle="Helpful starting points if you want to see more of my work or understand how I trained."
        />
      </PageHero>

      <section
        className={`${SECTION_TOP_ACCENT} bg-gradient-to-br from-[var(--navy)]/[0.07] via-[var(--surface)] to-[var(--burgundy)]/[0.08] px-4 py-14 md:px-6 md:py-20`}
      >
        <RevealOnScroll className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className={`group flex flex-col overflow-hidden rounded-2xl border shadow-sm ring-1 transition hover:-translate-y-0.5 hover:shadow-md ${
                i % 2 === 0
                  ? "border-[var(--navy)]/18 bg-[var(--navy)] text-white ring-[var(--navy)]/20 hover:border-[var(--gold)]/35"
                  : "border-[var(--ruby)]/28 bg-white ring-[var(--burgundy)]/10 hover:border-[var(--burgundy)]/35"
              }`}
            >
              <div className="relative aspect-[21/9] overflow-hidden">
                <ImagePlaceholder
                  label={`${link.label} thumbnail`}
                  tone={i === 0 ? "gold" : "navy"}
                  className="min-h-0"
                  imgClassName={i === 1 ? "object-contain p-8 bg-white" : ""}
                  src={LINKS_THUMBNAILS[i]}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--navy)]/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <span
                  className={`font-serif text-2xl ${
                    i % 2 === 0 ? "text-white group-hover:text-[var(--gold)]" : "text-[var(--navy)] group-hover:text-[var(--burgundy)]"
                  }`}
                >
                  {link.label}
                </span>
                <p className={`mt-3 flex-1 text-sm leading-relaxed ${i % 2 === 0 ? "text-white/78" : "text-[var(--muted)]"}`}>
                  {link.description}
                </p>
                <span className={`mt-6 text-sm font-semibold ${i % 2 === 0 ? "text-[var(--gold)]" : "text-[var(--burgundy)]"}`}>
                  Visit site →
                </span>
              </div>
            </a>
          ))}
        </RevealOnScroll>
      </section>
    </main>
  );
}
