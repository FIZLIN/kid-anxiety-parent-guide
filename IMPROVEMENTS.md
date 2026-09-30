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
- [x] **"Кога да потърсим специалист" page.** An always-reachable page on when to see a specialist, with Bulgarian helplines. Added as `pages/help.html` with the green ribbon; follow-ups are under "Chapters V–VI and the help page" below.
- [ ] (ignore for now) **Call to action at the end of the preview.** Chapters V–VI are in now, but the introduction ("Увод") is still coming. Say so, with email sign-up or follow links, instead of ending on "Авторите".

### Nice to have

- [ ] **Print stylesheet.** Let readers print or save a single section as a PDF.
- [ ] **Offline support / install as an app (PWA).** Use a service worker to cache the whole book (about 700KB, all static).
- [ ] **Glossary tooltips** for `.term` words (амигдала, кортизол…).

## Accessibility

Already in place: `lang="bg"`, `:focus-visible` rings, a `prefers-reduced-motion` rule for the page fade, `role="img"` with `aria-label` on the page SVGs, the contents `<dialog>`, and hidden text labels on the icon-only nav buttons.

### High impact

- [x] **Hide collapsed content from screen readers and Tab.** `.note-body`, `.deepen-body` and `.def` collapse with only `max-height: 0; overflow: hidden` (`css/styles.css`). Screen readers still read the hidden text, and Tab stops on invisible `.seesrc` links inside it. Add `visibility: hidden` while closed (it still animates).
- [x] **Stop open notes from clipping at large text sizes.** Open blocks use fixed limits (`320px`, `460px`, `2400px`, plus per-note overrides like `#sad-n3`). At the 135% text setting, on narrow screens or with browser zoom, the end of a note gets cut off. Animate with `grid-template-rows: 0fr → 1fr` instead, and drop the per-note overrides.
- [x] **Say whether toggles are open.** `note-head`, `deepen-head` and `.fnmark` buttons have no `aria-expanded` or `aria-controls`. Set `aria-expanded` in `toggleNote()`/`toggleFn()`, and put `aria-hidden="true"` on the `.tog` span (it's read as "plus").
- [x] **Announce page turns.** After Next/Prev or a contents link, focus stays put and nothing is announced, and `document.title` is the same on all 50 pages. In `render()`, set the title to "<page> · Смелост на малки глътки" and move focus to the new page's heading (`tabindex="-1"`), or announce it in a polite live region.
- [x] **Turn fake-button spans into real links.** There are 238 `<span role="button" tabindex="0" onclick>` elements (183 `.seesrc`, 55 `.xref`). Space doesn't activate them, and Enter only works through the keydown handler in `js/book.js`. They're jumps, so use `<a href="#src3">` / `<a href="#ch2-sad">`. That also gives open in a new tab and the screen-reader link list.

### Medium

- [ ] **Fix the heading structure.** Only the cover has an `<h1>`. 36 pages open with `<h3 class="sub">` and no `<h2>`, and only 13 pages have an `<h2>`. Make each page's title an `<h2>` (an `<h1>` for the book in the shell) and subsections `<h3>`. The styles can stay the same.
- [ ] **Add landmarks.** Wrap the stage in `<main>` and make the `.nav` div a `<nav aria-label="…">`.
- [ ] **Raise text contrast.** `--lilac` (#7e7f9a) on the page is 3.73:1 and is used for about 20 small labels (12–13px: running head, kicker, hints). Small text needs 4.5:1, so darken it to about `#6b6c87`. `--faint` (#b9b8c4) is 1.88:1 (2.47:1 in dark mode) on the "coming soon" chapters. Raise it to at least 3:1 and don't rely on colour alone to show they aren't out yet.
- [ ] **Fix the dead "soon" button.** `<button class="toc-chapter soon">` in `pages/contents.html` does nothing and isn't disabled. Use a non-interactive element or `aria-disabled="true"`, with text like "(предстои)".
- [ ] **Keyboard scrolling of the page box on desktop.** Each `.page` scrolls inside its own box, and Safari doesn't make such boxes keyboard-focusable. Give the active page `tabindex="0"` and an `aria-label`.
- [ ] **Mark English source titles and new-tab links.** Wrap the `.ttl` spans on source cards in `lang="en"` so they aren't read with Bulgarian pronunciation, and add hidden text "(отваря се в нов раздел)" to the `target="_blank"` links.

### Smaller

- [ ] **Don't turn pages with ←/→ while focus is in a scrollable figure or a form control.**
- [ ] **Extend reduced motion.** Cover the note expand animation, the smooth scrolling in `toBottom()` and the `.flash` highlight, not just the page fade.
- [ ] **Reliable search-count announcement.** `#toc-count` sits inside `#toc-results`, which starts `hidden`, and some screen readers ignore live regions that were hidden when they appeared. Keep the live region in the DOM at all times.
- [ ] (optional) **Expose reading progress.** The progress line is decorative today; optionally give it `role="progressbar"`.

## Technical

- [ ] **Load the current page first and show a loading state.** Right now all 50 pages are fetched in parallel, and a slow target page shows as an empty sheet.
- [ ] **Revisit caching in `edgeone.json`.** CSS, JS and pages are set to `no-cache`. Use versioned file names or a short `max-age` in production.
- [ ] **Search-engine visibility.** Content is injected by JS, so crawlers see an empty shell. Pre-render or generate static HTML per page if discoverability matters.

## Content

- [x] **Update the intro in `pages/contents.html`.** It says "Първите две глави са готови", but four chapters are ready now.

## Chapters V–VI and the help page

Found while merging the sister's copy: the chapter I rework, chapters V (`ch5-*`) and VI (`ch6-map`, `js/ch6-map.js`, `css/ch6-map.css`) and the help page (`pages/help.html`, the ribbon in `index.html`, the help code in `js/book.js`).

### Help CTA

- [x] **Move the help entry point into the bottom nav.** The ribbon (`.ribbon`) has three problems:
  - It crowds the running head: 3.6px from the header text on desktop, and it covers the right side of the header on phones.
  - Its label is unreadable: "помощ" in 12px sideways small caps (11px on phones).
  - On phones it scrolls away with the page, so the help page isn't "always at hand" as it promises.

  The nav is sticky on every device and holds the other controls. Add a lifebuoy or phone icon with "Помощ" there (icon only on phones, like the other nav buttons). Optionally keep a quieter bookmark on desktop as decoration. This also gives more help CTAs a consistent home.

### Bugs

- [x] **Invisible link in the dark `.practice` box.** On `ch5-shelf`, "шеста глава" in "Накъде оттук" is the same colour as the box (both #4c4d64). `ch5-help` works around the same problem with an inline `style` on its source link. Add a `.practice a` rule for light link colours and drop the inline style.
- [x] **Duplicate ID `k6-src1`.** It's on both `ch4-evidence` and `ch6-map`, and all pages share one DOM. "(виж Източник 1)" on the map finds chapter IV's card first and scrolls to a hidden page. Rename the chapter VI one (in the page and in `js/ch6-map.js`). Consider a check for duplicate IDs across `pages/`.
- [x] **The map loses keyboard focus.** "Намерихме го", "Отмени" and "Към ден N" rebuild the whole list with `innerHTML` (`drawList()` in `js/ch6-map.js`), so focus drops to `<body>`. Move focus back to the day's button after the re-render, or update just that row.
- [x] **Book search goes stale on dynamic pages.** `textIndex` in `js/book.js` caches each page's text nodes on the first search. Once the map list or the help-page summary (`#verdict`) re-renders, results point at detached nodes, so clicking one neither scrolls nor highlights. Clear the page's cache on re-render (e.g. from the `book:pageload` event or a new "book:pagechange" event), or index lazily per search.
- [x] **Search doesn't open collapsed map days or checklist items.** `showHit()` only opens `.note, .deepen, .def`, so a match inside a closed `.k6-dd` day or a `.ck` checklist item stays hidden. Give them a shared way to open, or add them to the list.

### UI

- [ ] **One-off accent colour.** Chapter VI adds a chartreuse (#D1E231) for the "next step" marker that isn't in the palette, and it's the one SVG colour without a dark-mode mapping. Make it a token with a dark value, or use moss.
- [ ] **Wide gap after "Ден 1" on phones.** `.k6-head .dn` is a fixed `3.6em`, which leaves a big gap before the day title at 390px.
- [ ] **Native confirm dialog.** "Започни картата отначало" uses `confirm()`, which clashes with the book's look. Use an inline confirm step instead ("Сигурни ли сте? Да / Не").

### Technical

- [ ] **Move the help-page code out of `book.js`.** About 120 lines (`openHelp`, `helpTo`, `ckToggle`, the summary builder) are written in a compressed one-line style with Bulgarian comments, unlike the rest of the file. Move them to `js/help.js` next to `js/ch6-map.js` and format them like the rest.
- [ ] **Tidy the new CSS.** The chapter V/help rules at the end of `css/styles.css` and `css/ch6-map.css` are one-line rules with Bulgarian comments, unlike the rest of the stylesheet. Some are unused, e.g. `.k6-dd.locked` (the map has no locked state). Reformat and remove dead rules.
- [ ] **Storage key naming.** The map saves progress under `smelost-karta-v1`; other keys use `book:…` (`book:page`, `book:theme`). Rename, migrating the old key so progress isn't lost.
- [ ] **Unused claude.ai sync.** `connectCloud()` in `js/ch6-map.js` saves progress through `window.claude`, which only exists when the page is published as a Claude artifact. It does nothing on our hosting. Remove it, or keep it deliberately.

### For the author to check

- [ ] **Two overlapping "when to see a specialist" lists.** `ch5-help` has 6 points and the help page's checklist has 26, and they'll drift apart. Consider keeping the narrative in `ch5-help` and linking to the help page for the list.
- [ ] **Citations to double-check.**
  - `ch5-help`: "when fear becomes a problem" cites the parent-modelling meta-analysis (Nimphy 2023), which doesn't seem to cover that.
  - `ch5-shelf`: the claim about parents working from written materials cites the children's-books review (Crane 2025).
- [ ] **Sources for the map days.** 27 of the 30 days show "Източник за този ден предстои да бъде добавен." Only days 6, 13 and 22 have one (all SPACE). Adding more needs more source cards on `ch6-map` and a per-day source field in `js/ch6-map.js`, since every day now links to Източник 1. Or drop the placeholder line.
