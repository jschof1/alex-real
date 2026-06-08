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
- Libby's 20 May 2026 update requested that Services **01 Weddings** avoid stand-in celebrants; the `weddings` service image pool in `src/data/siteImages.js` is ordered so the Services page's `serviceImageAt(s.slug, i + 1)` call resolves to `wedding-woodland.webp`, a generic empty ceremony setup.
- Libby's attached "how it works" replacement photos are saved as `public/images/photo/process-consult-libby.jpeg` and `public/images/photo/process-delivery-libby.jpeg`; `PROCESS_IMAGES` uses them for steps 01 and 03.

## Client copy updates

- Libby's 20 May 2026 wording updates changed "DJ hire and dancefloors/dance floors" to **"DJ hire"** across website gallery labels and print prompt/profile sources. Libby's 24 May 2026 follow-up changed the print DJ service description to **"bringing my events experience"**.
- The "What to expect" language should use: **"I work with countryside barns, private homes, outdoor spaces and both licensed and non-licensed locations"**, **"You do not need every answer on day one. I will guide the process, keep things organised and support the planning"**, and booking/contact copy should say **"I will respond as soon as possible"**.
- Print brochure outside heading should be **"Beautiful, personal ceremonies"**, not "Beautifully personal ceremonies".

## ImagePlaceholder

- Real `src` images default to **`object-cover`** unless `imgClassName` includes an object-**fit** utility (`object-contain`, `object-cover`, `object-fill`, `object-none`, `object-scale-down`). Position-only classes like `object-top` or arbitrary `object-[center_30%]` do **not** suppress the default, otherwise the browser uses `fill` and stretches the photo.

## Print collateral (`celebrant-print-generator`)

- Local tool path: `/Users/jack/tools/celebrant-print-generator`. Generated assets land in `print-output/` (run from repo root with `--root` pointing at this project).
- Preferred simple command from any celebrant project root: `celebrant-print brochure` for brochure only, `celebrant-print all` for cards + brochure, `celebrant-print prompts` for dry-run prompts/profile, and `celebrant-print qc --out print-output` for checks. The wrapper is `/Users/jack/tools/celebrant-print-generator/bin/celebrant-print`, symlinked at `/opt/homebrew/bin/celebrant-print`.
- For brochures, the full-bleed artwork is exactly `303mm x 216mm` with `3mm` bleed, finished size `297mm x 210mm`, PDF page size `858.898 x 612.283 pt`, and rendered size `3579 x 2551 px` at 300 DPI. Never use the old `3579 x 2550 px` assumption. Finished trim panel widths are Side A/outside `97mm / 99mm / 101mm` and Side B/inside `101mm / 99mm / 97mm`; do **not** replace those with bleed-added panel widths.
- The generator now composes brochure sides from three separate panel images at exact trim panel widths, then adds the outer bleed strips. Use `npm run verify:geometry` in `/Users/jack/tools/celebrant-print-generator` after any generator change; it checks Side A panel pixels `1146/1170/1193`, Side B `1193/1170/1146`, output PNGs `3579 x 2551`, and PDF MediaBox `858.8976377952756 x 612.2834645669292 pt`.
- Current corrected outputs include `print-output/brochure.pdf`, `print-output/brochure-side-a-outside.png`, `print-output/brochure-side-b-inside.png`, and copied `print-output/alex-jeal-brochure.pdf`. The crop-proof PDF uses the brochure-generator reference template and places the native `3579 x 2551 px` brochure inside the detected grey box.
- **Business card back** passes portrait reference images (same as brochures) and prompts require **one celebrant photo on the back**, sourced **only** from those references—no invented faces; strong logo/text contrast rules remain. Ensure `celebrant-profile.json` lists real portrait paths under `assets.portraits` or generation cannot attach them.
- **`--profile print-output/celebrant-profile.json`** skips scanning the repo and uses that JSON only. **`--reuse-references`** skips re-running Sharp on reference PNGs when `_prepared-references/` already has matching files (still refreshes a prepared file if the source asset or QR is newer).
- Prompts include explicit **3mm bleed** plus generous safe inset from trim (`specs.ts`): card critical content **≥9mm** from image edge (3+6); brochure **≥15mm** from image edge (3+12), plus 12mm fold clearance. Native brochure artwork is **303mm x 216mm**; trim panels are Side A **97mm / 99mm / 101mm** and Side B **101mm / 99mm / 97mm**. Regenerate print assets after tool updates.
- 29 May 2026 print proof: the business card back already uses **"DJ hire"** only; the brochure cover visibly reads **"Beautiful, personal ceremonies"** with the comma.
- 1 June 2026 email asks to remove remaining comma instances in **"Ceremonies with personality, warmth and a fresh approach"** and **"preferred dates if you have them and the county or venue area"**.
- Gmail review on 8 June 2026 found the Alex-specific Libby requests in emails dated 20 May, 24 May, and 1 June 2026: brochure + business cards should use **"DJ hire"** only; DJ copy should say **"bringing my events experience"**; the slogan should be **"Ceremonies with personality, warmth and a fresh approach"** everywhere; the booking line should remove the comma in **"preferred dates if you have them and the county or venue area"**. A separate 1 June email titled **"susan Stevens last minor changes"** mentions a wrong business-card phone number, wedding photo diversity replacement, and business-card tooth-gap photo issue; do not apply those to Alex Real without confirming the client.
- 8 June 2026 brochure sizing correction: the deliverable brochure must remain the full-bleed `303mm x 216mm` PDF (`858.898 x 612.283 pt`, 2 pages) with trim panel widths Side A `97/99/101mm` and Side B `101/99/97mm`, rendered `3579 x 2551 px` at 300 DPI. Do not generate or send an A4/cropped/scaled substitute unless explicitly requested again.
- 8 June 2026 follow-up fix: an attempted separate-panel PDF writer produced blank/invalid PDFs in renderers. The working generator path uses PyMuPDF to embed the verified nonblank `3579 x 2551 px` full-side PNGs into exact `858.898 x 612.283 pt` pages, and `npm run verify:geometry` now renders the PDF to confirm it is nonblank as well as checking geometry.
- 8 June 2026 visual rollback: Libby/user rejected the regenerated brochure look as too different from the original. Keep the brochure raster sides visually based on `print-output/brochure-side-a-outside.imagegen-before-panel-fix.png` and `print-output/brochure-side-b-inside.imagegen-before-panel-fix.png`; only remap their column widths and stretch height from `2550` to `2551px`. After checking `/Users/jack/Desktop/celebrants-brochure-card-gen/printing-rules-guide/DL Leaflet Artwork Guidelines (4).pdf`, use the guideline-rendered full-bleed columns: outside/Side A `1182/1169/1228px` (folds around x `1182` and `2351`) and inside/Side B `1229/1169/1181px` (folds around x `1229` and `2398`). Do not redesign the artwork unless explicitly requested.
