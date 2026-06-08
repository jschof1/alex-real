import { useState } from "react";
import PageHero from "@/components/PageHero.jsx";
import PageHeader from "@/components/PageHeader.jsx";
import RevealOnScroll from "@/components/RevealOnScroll.jsx";
import ImagePlaceholder from "@/components/ImagePlaceholder.jsx";
import { SITE } from "@/data/siteContent.js";
import { SECTION_TOP_ACCENT } from "@/constants/sectionAccent.js";

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const mailtoHref = `mailto:${SITE.email}?subject=${encodeURIComponent(subject || "Enquiry from website")}&body=${encodeURIComponent(body)}`;

  return (
    <main>
      <PageHero>
        <PageHeader
          align="center"
          tone="burgundy"
          eyebrow="Contact"
          title="Tell me what you are planning"
          subtitle="Share your ceremony type, preferred dates if you have them and the county or venue area. I will respond as soon as possible."
        />
      </PageHero>

      <section
        className={`${SECTION_TOP_ACCENT} bg-gradient-to-br from-[var(--navy)]/[0.06] via-white to-[var(--surface)] px-4 py-14 md:px-6 md:py-20`}
      >
        <RevealOnScroll className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div
            data-reveal
            className="overflow-hidden rounded-2xl border-2 border-[var(--navy)]/15 bg-white p-8 shadow-md ring-1 ring-[var(--burgundy)]/10"
          >
            <figure className="overflow-hidden rounded-xl border border-black/10">
              <ImagePlaceholder
                src="/images/alex/alex-08.jpg"
                label="Alex Jeal in a ceremony chapel"
                className="aspect-video"
                imgClassName="object-[center_30%]"
              />
            </figure>
            <h2 className="mt-8 font-serif text-2xl text-[var(--navy)]">Direct contact</h2>
            <ul className="mt-6 space-y-4 text-[var(--muted)]">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--navy)]/60">Phone</span>
                <a href={SITE.phoneHref} className="text-lg font-semibold text-[var(--burgundy)] hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--navy)]/60">Email</span>
                <a href={`mailto:${SITE.email}`} className="font-semibold text-[var(--burgundy)] hover:underline">
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--navy)]/60">Instagram</span>
                <a href={SITE.instagramUrl} className="font-semibold text-[var(--burgundy)] hover:underline" target="_blank" rel="noopener noreferrer">
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--navy)]/60">Location</span>
                {SITE.location} · {SITE.areas}
              </li>
            </ul>
          </div>

          <div
            data-reveal
            className="rounded-2xl border-2 border-[var(--ruby)]/30 bg-white p-8 shadow-sm ring-1 ring-[var(--ruby)]/10"
          >
            <h2 className="font-serif text-2xl text-[var(--navy)]">Compose an email</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">Your email app will open with this message. You can edit before sending.</p>
            <label className="mt-6 block text-sm font-medium text-[var(--navy)]">
              Subject
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-[var(--ink)] outline-none ring-[var(--burgundy)] focus:ring-2"
                placeholder="Wedding enquiry, June…"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-[var(--navy)]">
              Message
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={6}
                className="mt-2 w-full resize-y rounded-xl border border-black/10 px-4 py-3 text-[var(--ink)] outline-none ring-[var(--burgundy)] focus:ring-2"
                placeholder="Ceremony type, location, dates, and anything you would like me to know…"
              />
            </label>
            <a
              href={mailtoHref}
              className="mt-6 inline-flex rounded-full bg-[var(--burgundy)] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
            >
              Open in email
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
