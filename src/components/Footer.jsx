import { Link } from "react-router-dom";
import { NAV_LINKS, SITE } from "@/data/siteContent.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";
import apcCertifiedSeal from "@/assets/apc-certified-celebrant-seal.png";

export default function Footer() {
  return (
    <footer className={`bg-[var(--navy)] text-white ${SECTION_TOP_ACCENT}`}>
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl tracking-tight text-white">{SITE.businessName}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">{SITE.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/80">
              <a href={SITE.phoneHref} className="hover:text-[var(--gold)]">
                {SITE.phoneDisplay}
              </a>
              <span className="text-white/40">·</span>
              <a href={`mailto:${SITE.email}`} className="hover:text-[var(--gold)]">
                {SITE.email}
              </a>
            </div>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-[var(--gold)] hover:underline"
            >
              {SITE.instagramHandle} on Instagram
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Coverage</p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">{SITE.location}</p>
            <p className="mt-2 text-sm text-white/70">{SITE.areas}</p>

            <a
              href="https://www.funeralcelebrantacademy.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex max-w-[14rem] items-start gap-3 rounded-lg border border-white/15 bg-white/5 p-3 text-left transition hover:bg-white/10"
            >
              <span className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white ring-1 ring-black/10">
                <img
                  src={apcCertifiedSeal}
                  alt="Certified celebrant, Academy of Professional Celebrants"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="text-xs leading-snug text-white/85">
                Trained and certified by the Academy of Professional Celebrants
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} {SITE.businessName}. All rights reserved.
            </p>
            <p className="text-white/70">
              Website made by the{" "}
              <a
                href="https://www.funeralcelebrantacademy.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold)] underline decoration-[var(--gold)]/50 underline-offset-2 hover:decoration-[var(--gold)]"
              >
                Academy of Professional Celebrants
              </a>
            </p>
          </div>
          <p className="text-center text-[10px] leading-relaxed text-white/35 md:text-left">
            Neutral header textures on FAQ, fees, terms, and the 404 page are from{" "}
            <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50">
              Unsplash
            </a>
            . All ceremony and portrait photography is from Alex&apos;s own supplied images.
          </p>
        </div>
      </div>
    </footer>
  );
}
