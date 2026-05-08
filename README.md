# Alex Jeal Celebrant

Marketing site for **Alex Jeal Celebrant** (independent celebrant and wedding DJ, South East England). Stack: **React**, **Vite**, **Tailwind CSS**, **React Router**, **GSAP** (home hero).

## Scripts

```bash
npm install
npm run dev    # local dev server (default http://localhost:5173)
npm run build  # static output in dist/ (Cloudflare Pages)
```

## Content and images

- **Copy and structure:** `src/data/siteContent.js` (navigation, services, fees, FAQs, terms, gallery captions).
- **Alex’s photos:** `public/images/alex/alex-01.jpg` … `alex-09.jpg` (exported from the client wetransfer pack, resized for web).
- **Neutral page textures:** `public/images/stock/` (Unsplash: paper and library, used only on FAQ, fees, terms, and 404 headers).

To refresh Alex’s gallery after new client photos arrive, replace the source JPEGs in the wetransfer folder, re-run your resize step into `public/images/alex/`, and update captions in `ALEX_GALLERY` if needed.

## Routes

`/`, `/about`, `/services`, `/process`, `/fees`, `/faq`, `/links`, `/terms`, `/contact`. Unknown paths show a 404 page.

## Deploy

Build with `npm run build` and deploy the `dist/` folder to **Cloudflare Pages** (see your usual project pipeline).
