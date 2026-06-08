import PageHero from "@/components/PageHero.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import ImagePlaceholder from "@/components/ImagePlaceholder.jsx";
import { SERVICES } from "@/data/siteContent.js";
import { serviceImageAt } from "@/data/siteImages.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

const TONES = ["gold", "burgundy", "navy", "warm", "muted"];

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero>
        <PageHeader
          align="center"
          tone="navy"
          eyebrow="Services"
          title="Ceremonies and music tailored to you"
          subtitle="Every service is written from scratch. Nothing is copied from a template and nothing is imposed that does not feel right for you."
        />
      </PageHero>

      <div className="space-y-0">
        {SERVICES.map((s, i) => {
          const mod = i % 3;
          const navyBlock = mod === 1;
          const accentWarm = mod === 2;
          return (
            <article
              key={s.slug}
              className={cx(
                SECTION_TOP_ACCENT,
                "px-5 py-14 sm:px-6 md:px-8 md:py-20 lg:px-12",
                !navyBlock && "border-b border-black/5",
                mod === 0 && "bg-white",
                navyBlock && "bg-[var(--navy)] text-white",
                accentWarm && "border-l-4 border-l-[var(--ruby)] bg-[var(--surface-warm)]"
              )}
            >
              <RevealOnScroll className="mx-auto max-w-6xl">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
                  <div data-reveal>
                    <figure
                      className={cx(
                        "overflow-hidden rounded-2xl shadow-xl ring-1",
                        navyBlock
                          ? "border border-white/15 ring-white/10"
                          : "border border-black/10 ring-black/[0.05]"
                      )}
                    >
                      <ImagePlaceholder
                        label={s.title}
                        tone={TONES[i % TONES.length]}
                        className="aspect-[16/10]"
                        src={serviceImageAt(s.slug, i + 1)}
                      />
                    </figure>
                  </div>
                  <div data-reveal>
                    <p
                      className={cx(
                        "text-xs font-semibold uppercase tracking-[0.2em]",
                        navyBlock ? "text-[var(--gold)]" : "text-[var(--burgundy)]"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className={cx("mt-2 font-serif text-3xl md:text-4xl", navyBlock ? "text-white" : "text-[var(--navy)]")}>
                      {s.title}
                    </h2>
                    <p className={cx("mt-4 leading-relaxed", navyBlock ? "text-white/80" : "text-[var(--muted)]")}>{s.summary}</p>
                    <div className={cx("mt-6 space-y-4 leading-relaxed", navyBlock ? "text-white/78" : "text-[var(--muted)]")}>
                      {s.body.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </article>
          );
        })}
      </div>
    </main>
  );
}
