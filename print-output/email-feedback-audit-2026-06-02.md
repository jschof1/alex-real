# Alex Jeal Email Feedback Audit - 2 June 2026

Scope checked: Gmail messages matching `Alex Jeal`, `Alex Jeal Celebrant`, `alexjealcelebrant`, and `Libby` from the last 90 days, excluding spam/trash.

## Latest Action Items

| Date | Sender | Request | Current status | Verification |
| --- | --- | --- | --- | --- |
| 1 Jun 2026 | Libby Veitch | Brochure PDF was seen as `318 x 231mm`; sizing needed checking against the real print spec. | Corrected output is the native full-bleed brochure only: `303mm x 216mm`, finished `297mm x 210mm`, with Side A panels `97/99/101mm` and Side B panels `101/99/97mm`. | `pdfinfo` reports `858.898 x 612.283 pts`, 2 pages; side PNGs are `3579 x 2551px`. |
| 1 Jun 2026 | Libby Veitch | Remove remaining comma before `and` in slogan/copy, including website. | Source appears fixed. | `rg` found no `warmth, and` or `have them, and` in `src` or print source. |
| 24 May 2026 | Libby Veitch | Change DJ wording from `event background` to `events experience`. | Updated in print source and rendered brochure artwork via deterministic text overlay. | `rg` shows source uses `events experience`; OCR on `brochure-side-b-inside.png` now detects `experience into` in the DJ block and no longer detects `background`. |
| 20 May 2026 | Libby Veitch | Replace Services 01 Weddings image with generic wedding image, no stand-in celebrant. | Implemented in website source. | `src/data/siteImages.js` orders `wedding-woodland.webp` for Services page index 01. |
| 20 May 2026 | Libby Veitch | Replace How it works images 01 and 03 with attached photos. | Implemented in website source. | `PROCESS_IMAGES` uses `process-consult-libby.jpeg` and `process-delivery-libby.jpeg`. |
| 20 May 2026 | Libby Veitch | Change `DJ hire and dance floors` / `dancefloors` to `DJ hire`, including business cards. | Source and business card artwork appear fixed. | `rg` found no active print/source instance; OCR on business-card back detects `DJ hire`. |
| 20 May 2026 | Libby Veitch | Update What to expect and booking copy. | Implemented in source. | `rg` confirms requested phrases in `src` and print source. |

## Feedback Loop Used

1. Read relevant Gmail messages and sorted by latest request date.
2. Mapped each request to website source, print profile/prompts, and rendered print outputs.
3. Ran source sweeps with `rg` for rejected and accepted wording.
4. Ran print checks with `identify`, `pdfinfo`, and OCR via `tesseract`.
5. Separated source-fixed items from rendered-artwork items that still need proof/regeneration.

## Final Print Files

- Native full-bleed PDF: `print-output/alex-jeal-brochure.pdf`

QC still warns that the business card PNGs are only `1075px` wide, which is lower than ideal for final print but does not affect the brochure PDFs.
