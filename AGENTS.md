In any instance where you learn something more about the project and understand where we're at, make sure to always take a note of it and add it to the agents.md so that anytime there's a new chat it understands the context of where things are.

## Repository

- Remote: [github.com/jschof1/alex-real](https://github.com/jschof1/alex-real), default branch `main`. `.cursor/` is gitignored (local IDE state only).

## Section top accent

- Full-width bands use a **4px brand-ruby top stripe** via `SECTION_TOP_ACCENT` in `src/constants/sectionAccent.js` (`border-t-4 border-t-[var(--ruby)]`). Applied in `SectionShell`, `PageHero`, homepage hero + gallery + fees `<section>`s, every major `<section>` on inner pages, each service `<article>` on Services, and the `NotFound` `<main>`.

## Homepage hero

- The first `HomePage` section uses a looping background video at `public/videos/hero-bg.mp4` via shared `HeroBackdropVideo` in `src/components/HeroBackdropVideo.jsx`, with a slightly navy tinted layer plus `backdrop-blur` over the video, then a light gradient vignette for type contrast. Not `HERO_BACKGROUND` from `siteImages.js`.
- Inner routes use the same video + scrim + parallax stack through `PageHero` in `src/components/PageHero.jsx` (with `PageHeader` `tone="navy"` or burgundy on Contact). NotFound keeps its compact card layout without the video hero.
- Scroll-linked motion uses GSAP `ScrollTrigger` with `scrub` (native scroll, no smooth-scroll). The **video** sits in a taller `.hero-parallax-bg` wrapper and translates vertically while the hero is on screen; overlays and copy stay fixed so scrims do not drift from the background. Reduced motion: parallax and hero entrance tweens are skipped; the hero video is paused and hidden.
- The About block photo (`data-parallax-img="about"`) uses a light vertical parallax on the `<img>` only inside its `overflow-hidden` frame.

## Homepage About band (navy)

- Second `HomePage` `SectionShell`: copy column is `lg:items-start` with the media column (no vertical centring), intro uses `max-w-prose`, slightly asymmetric two-column grid. Photo is portrait `aspect-[4/5]`; three “why” lines are a simple gold left-border list under a divider, not stacked glass cards.

## Image mapping

- Home gallery tile **Alex at work** (`ALEX_GALLERY` id `work`) uses the real photo at `/images/alex/alex-07.jpg` via `GALLERY_IMAGE_BY_ID.work` in `src/data/siteImages.js` (not the AI `process-delivery` webp pool).