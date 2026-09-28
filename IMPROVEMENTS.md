# Improvements

UI and feature backlog for the book preview. Tick items off as they land.

**Top three:** full-screen reading on phones, page addresses in the URL, and a table-of-contents drawer with search.

## UI

- [x] **Full-screen reading on phones.** The book is a fixed `80vh` box (`--height` in `css/styles.css`) with its own scroll area inside, so a phone shows only about 560px of text. Below about 600px, drop the outer padding and shadow, let the page scroll normally and make the nav sticky at the bottom.
- [x] **Fix the cramped mobile nav.** At 390px, "Назад" and "Съдържание" run together, and their styles don't match (plain vs. small caps). Use icons (‹ ☰ ›) with the page title in the middle, or move "Съдържание" behind a menu.
- [x] **Reading-progress indicator.** Add a thin progress line under the running head for the current page (for example, `ch1-alarm` is about 4,800px tall).
- [x] **Position in the book.** Show "стр. 4 от 50" or "Глава I · 2/12" in the nav.
- [x] **Readable diagrams on mobile.** SVG labels (`svg-label-sm`) come out at about 8–9px, and "амигдала" spills out of its circle in `ch1-two-paths`. Give labels a minimum font size, or add tap-to-enlarge for figures.
- [x] **Favicon.** It's missing, and the console shows a 404 for `/favicon.ico`.
- [x] **Share metadata.** Add `<meta name="description">` and Open Graph title, description and image so shared links get a proper card.
- [x] **"Start reading" hint on the cover.** First-time visitors may not realise that the arrows or "Напред" are how to get in.
- [x] **Swipe left/right on touch devices** to turn pages.
- [x] **Dark mode.** Redefine the colour tokens under `prefers-color-scheme: dark`, with an optional manual toggle.
- [x] **Visible focus styles.** Add `:focus-visible` for `.seesrc`, `.map-item`, `.toc-chapter` and the nav buttons (only `.fnmark` and `.xref` have them today).

## Features

### Must have

- [x] **Addresses for each page.** Put the page in the URL hash (`#ch2-sad`), read it on load and update it in `render()` (`js/book.js`). This makes pages shareable and bookmarkable, and makes the browser back button work.
- [x] **Full table-of-contents drawer.** Add a slide-out panel listing every page from `PAGES`, grouped by chapter, with the current page highlighted.
- [x] **Search.** Client-side search across all pages; they're already fetched into the DOM, so no backend is needed.

### High value

- [x] **Reading settings.** Font size (A− / A+), maybe line spacing, stored in localStorage.
- [x] **Remember scroll position within a page**, not just which page is open.
- [ ] (ignore for now) **"Кога да потърсим специалист" page.** An always-reachable page on when to see a specialist, with Bulgarian helplines.
- [ ] (ignore for now) **Call to action at the end of the preview.** Say that chapters V–VI are coming, with email sign-up or follow links, instead of ending on "Авторите".

### Nice to have

- [ ] **Print stylesheet.** Let readers print or save a single section as a PDF.
- [ ] **Offline support / install as an app (PWA).** Use a service worker to cache the whole book (about 700KB, all static).
- [ ] **Glossary tooltips** for `.term` words (амигдала, кортизол…).

## Technical

- [ ] **Load the current page first and show a loading state.** Right now all 50 pages are fetched in parallel, and a slow target page shows as an empty sheet.
- [ ] **Revisit caching in `edgeone.json`.** CSS, JS and pages are set to `no-cache`. Use versioned file names or a short `max-age` in production.
- [ ] **Search-engine visibility.** Content is injected by JS, so crawlers see an empty shell. Pre-render or generate static HTML per page if discoverability matters.

## Content

- [ ] **Update the intro in `pages/contents.html`.** It says "Първите две глави са готови", but four chapters are ready now.
