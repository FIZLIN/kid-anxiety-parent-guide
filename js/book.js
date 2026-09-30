// Running-head titles (left side of the header above each page).
const BOOK = "Смелост на малки глътки";
const CH1 = "I. Тялото на страха";
const CH2 = "II. Лицата на страха";
const CH3 = "III. Знаците на повърхността";
const CH4 = "IV. Истории от кабинета";
const CH5 = "V. Какво можем да направим ние";
const CH6 = "VI. Трийсет малки глътки смелост";

// Book pages in reading order.
//   file:    pages/<file>.html
//   nav:     label shown in the bottom nav
//   runhead: [left, right] text of the header above the page, or null for none
const PAGES = [
  { file: "cover", nav: "Корица", runhead: null },
  { file: "contents", nav: "Съдържание", runhead: [BOOK, "Съдържание"] },
  { file: "ch1-map", nav: "Тялото на страха", runhead: [BOOK, "Глава първа"] },
  { file: "ch1-alarm", nav: "Алармата", runhead: [CH1, "Алармата в мозъка"] },
  { file: "ch1-brake", nav: "Спирачката", runhead: [CH1, "Спирачката, която още не е узряла"] },
  { file: "ch1-stress-axis", nav: "Оста на стреса", runhead: [CH1, "Бавната вълна на стреса"] },
  { file: "ch1-three-gears", nav: "Трите предавки", runhead: [CH1, "Трите предавки на тялото"] },
  { file: "ch1-freeze", nav: "Замирането", runhead: [CH1, "Когато тялото замръзва"] },
  { file: "ch1-gut", nav: "Коремът", runhead: [CH1, "Когато коремът говори"] },
  { file: "ch2-intro", nav: "Лицата на страха", runhead: [BOOK, "Глава втора"] },
  { file: "ch2-map", nav: "Карта на втора глава", runhead: [CH2, "Карта на главата"] },
  { file: "ch2-sm", nav: "Селективен мутизъм", runhead: [CH2, "Селективен мутизъм"] },
  { file: "ch2-sad", nav: "Тревожност при раздяла", runhead: [CH2, "Тревожност при раздяла"] },
  { file: "ch2-adapt", nav: "Адаптационен синдром", runhead: [CH2, "Адаптационен синдром"] },
  { file: "ch2-social", nav: "Социална тревожност", runhead: [CH2, "Социална тревожност"] },
  { file: "ch2-phobia", nav: "Специфични фобии", runhead: [CH2, "Специфични фобии"] },
  { file: "ch2-night", nav: "Нощните страхове", runhead: [CH2, "Кошмари и нощни ужаси"] },
  { file: "ch2-gad", nav: "„Ами ако…“", runhead: [CH2, "Генерализирана тревожност"] },
  { file: "ch2-emeto", nav: "Еметофобия", runhead: [CH2, "Еметофобия"] },
  { file: "ch2-arfid", nav: "Когато чинията плаши", runhead: [CH2, "Когато чинията плаши"] },
  { file: "ch2-comorb", nav: "Коморбидност", runhead: [CH2, "Коморбидност"] },
  { file: "ch3-intro", nav: "Знаците на повърхността", runhead: [BOOK, "Глава трета"] },
  { file: "ch3-map", nav: "Карта на трета глава", runhead: [CH3, "Карта на главата"] },
  { file: "ch3-body1", nav: "Коремът", runhead: [CH3, "Коремът, който боли"] },
  { file: "ch3-body2", nav: "Тялото на нокти", runhead: [CH3, "Тялото на нокти"] },
  { file: "ch3-body3", nav: "Нощта и чинията", runhead: [CH3, "Нощта и чинията"] },
  { file: "ch3-avoid", nav: "Избягването", runhead: [CH3, "Изкуството да избягваш"] },
  { file: "ch3-freeze", nav: "Застиването", runhead: [CH3, "Когато детето застине"] },
  { file: "ch3-shadow", nav: "Сянката", runhead: [CH3, "Сянката"] },
  { file: "ch3-questions", nav: "Безкрайните въпроси", runhead: [CH3, "Безкрайните въпроси"] },
  { file: "ch3-anger", nav: "Страх с лице на гняв", runhead: [CH3, "Страх с лице на гняв"] },
  { file: "ch3-tears", nav: "Сълзи на тънък конец", runhead: [CH3, "Сълзи на тънък конец"] },
  { file: "ch3-whatif", nav: "„Ами ако…“", runhead: [CH3, "„Ами ако…“"] },
  { file: "ch3-context", nav: "Едно дете, много места", runhead: [CH3, "Едно дете, много места"] },
  { file: "ch3-ages", nav: "Знаците и възрастта", runhead: [CH3, "Знаците според възрастта"] },
  { file: "ch4-intro", nav: "Истории от кабинета", runhead: [BOOK, "Глава четвърта"] },
  { file: "ch4-map", nav: "Карта на четвърта глава", runhead: [CH4, "Карта на главата"] },
  { file: "ch4-play", nav: "Игрова терапия", runhead: [CH4, "Игрова терапия"] },
  { file: "ch4-art", nav: "Арт терапия", runhead: [CH4, "Арт терапия"] },
  { file: "ch4-calm", nav: "Родителят като треньор", runhead: [CH4, "Родителят като треньор"] },
  { file: "ch4-ladder", nav: "Стълбата на страха", runhead: [CH4, "Стълбата на страха"] },
  { file: "ch4-act", nav: "Приемане и ангажираност", runhead: [CH4, "Приемане и ангажираност"] },
  { file: "ch4-evidence", nav: "Големите изследвания", runhead: [CH4, "Големите изследвания"] },
  { file: "ch5-intro", nav: "Какво можем да направим ние", runhead: [BOOK, "Глава пета"] },
  { file: "ch5-map", nav: "Карта на пета глава", runhead: [CH5, "Карта на главата"] },
  { file: "ch5-calm", nav: "Вашето спокойствие", runhead: [CH5, "Първо вашето спокойствие"] },
  { file: "ch5-words", nav: "Изречението, което лекува", runhead: [CH5, "Изречението, което лекува"] },
  { file: "ch5-accom", nav: "Невидимата клетка", runhead: [CH5, "Невидимата клетка"] },
  { file: "ch5-reassure", nav: "Отговор веднъж", runhead: [CH5, "Отговор веднъж"] },
  { file: "ch5-autonomy", nav: "Нека детето да може", runhead: [CH5, "Нека детето да може"] },
  { file: "ch5-ladder", nav: "Стълбата у дома", runhead: [CH5, "Стълбата у дома"] },
  { file: "ch5-night", nav: "Когато се стъмни", runhead: [CH5, "Когато се стъмни"] },
  { file: "ch5-help", nav: "Кога да потърсим помощ", runhead: [CH5, "Кога да потърсим помощ"] },
  { file: "ch5-shelf", nav: "Рафтът", runhead: [CH5, "Рафтът"] },
  { file: "ch6-map", nav: "Трийсет малки глътки", runhead: [BOOK, "Глава шеста"] },
  { file: "help", nav: "Специалист и помощ", runhead: [BOOK, "Помощ и специалисти"] },
  { file: "about-project", nav: "За проекта", runhead: [BOOK, "За проекта"] },
  { file: "about-authors", nav: "Авторите", runhead: [BOOK, "Авторите"] },
];
const total = PAGES.length;

// Where each page sits in its chapter, from the chN- file prefix, e.g.
// "Глава I · 2/12" for ch1-alarm. Empty outside the chapters.
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const chapterOf = (file) => +(/^ch(\d+)-/.exec(file) || [])[1] || 0;
const POSITION = PAGES.map(({ file }) => {
  const ch = chapterOf(file);
  if (!ch) return "";
  const inCh = PAGES.filter((p) => chapterOf(p.file) === ch);
  const n = inCh.findIndex((p) => p.file === file) + 1;
  return "Глава " + ROMAN[ch - 1] + " · " + n + "/" + inCh.length;
});

// Remember the open page (by file name, so it survives reordering) across reloads.
// Storage can be unavailable (private mode, blocked site data), so failures are ignored.
const STORAGE_KEY = "book:page";
function loadSavedPage() {
  try {
    return Math.max(0, pageIndex(localStorage.getItem(STORAGE_KEY)));
  } catch (e) {
    return 0;
  }
}
function savePage() {
  try {
    localStorage.setItem(STORAGE_KEY, PAGES[cur].file);
  } catch (e) {}
}
// Each page has its own address, #<file> (the cover is the bare URL). A page
// in the URL wins over the remembered one.
function pageFromHash() {
  return pageIndex(decodeURIComponent(location.hash.slice(1)));
}
function pageHash(i) {
  return i === 0 ? "" : "#" + PAGES[i].file;
}
function pageUrl(i) {
  return pageHash(i) || location.pathname + location.search;
}
let cur = location.hash ? pageFromHash() : -1;
if (cur < 0) cur = loadSavedPage();
history.replaceState(null, "", pageUrl(cur));

// Each page starts as an empty placeholder and is swapped for pages/<file>.html once fetched.
const stage = document.getElementById("stage");
const pages = PAGES.map(({ file }) => {
  const s = document.createElement("section");
  s.className = "page scroll";
  s.dataset.page = file;
  stage.insertBefore(s, stage.querySelector(".nav"));
  return s;
});
PAGES.forEach(({ file }, i) => {
  fetch("pages/" + file + ".html")
    .then((r) => {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    })
    .then((html) => {
      const t = document.createElement("template");
      t.innerHTML = html.trim();
      const el = t.content.firstElementChild;
      el.classList.toggle("active", i === cur);
      pages[i].replaceWith(el);
      pages[i] = el;
      // Pages with interactive parts (the map in chapter six) start from this event.
      document.dispatchEvent(new CustomEvent("book:pageload", { detail: { file: file, el: el } }));
      if (i === cur) {
        updateProgress();
        restoreSavedScroll();
      }
    })
    .catch((e) => {
      console.log("Failed to load page " + file + ": " + e);
      pages[i].innerHTML =
        '<p class="load-error">Страницата не можа да се зареди. Опитайте да презаредите.</p>';
    });
});
// On phones the window scrolls rather than the page (see styles.css).
const PHONE = matchMedia("(max-width: 600px)");
function scroller() {
  return PHONE.matches ? document.scrollingElement : pages[cur];
}
const progress = document.getElementById("progress");
function updateProgress() {
  const s = scroller(),
    max = s.scrollHeight - s.clientHeight;
  progress.style.transform =
    "scaleX(" + (max > 0 ? Math.min(1, s.scrollTop / max) : 0) + ")";
}
// Scroll events don't bubble, so listen in the capture phase to catch the pages' own scrolling.
document.addEventListener("scroll", updateProgress, {
  capture: true,
  passive: true,
});
window.addEventListener("resize", updateProgress);

// Where the reader is within the page: the page's top-level block at the top
// of the view and how far into it, as a fraction of its height. Unlike a pixel
// offset, this survives a different text size or screen width and images
// loading above. Kept in the history entry (for Back/Forward) and in storage
// (for the next visit); null means the top of the page.
history.scrollRestoration = "manual";
const SCROLL_KEY = "book:scroll";
const savedScroll = (() => {
  try {
    const v = JSON.parse(localStorage.getItem(SCROLL_KEY));
    return v && v.page === PAGES[cur].file ? v.at : null;
  } catch (e) {
    return null;
  }
})();
// Position of a block within the scroller's content.
function blockTop(s, el) {
  const base = s === document.scrollingElement ? 0 : s.getBoundingClientRect().top;
  return el.getBoundingClientRect().top - base + s.scrollTop;
}
function scrollAt() {
  const s = scroller(),
    blocks = pages[cur].children;
  if (!s.scrollTop) return null;
  for (let k = 0; k < blocks.length; k++) {
    const y = blockTop(s, blocks[k]),
      h = blocks[k].getBoundingClientRect().height;
    if (h && y + h > s.scrollTop) return [k, (s.scrollTop - y) / h];
  }
  return null;
}
function scrollToAt(at) {
  const s = scroller(),
    block = at && pages[cur].children[at[0]];
  const top = block
    ? blockTop(s, block) + at[1] * block.getBoundingClientRect().height
    : 0;
  s.scrollTo({ top: top, behavior: "instant" });
}
let scrollSaveTimer = 0;
function saveScroll() {
  scrollSaveTimer = 0;
  const v = { page: PAGES[cur].file, at: scrollAt() };
  history.replaceState(v, "");
  try {
    localStorage.setItem(SCROLL_KEY, JSON.stringify(v));
  } catch (e) {}
}
document.addEventListener(
  "scroll",
  () => {
    if (!scrollSaveTimer && !toc.open) scrollSaveTimer = setTimeout(saveScroll, 250);
  },
  { capture: true, passive: true },
);
// Once, when the open page first loads: back to where the last visit left off,
// after the web fonts are in so the page has its final height. Skipped if the
// reader has already scrolled or moved on.
function restoreSavedScroll() {
  const page = cur;
  document.fonts.ready.then(() => {
    if (cur === page && savedScroll && !scroller().scrollTop) {
      scrollToAt(savedScroll);
      updateProgress();
    }
  });
}
function pageIndex(p) {
  return typeof p === "number" ? p : PAGES.findIndex((x) => x.file === p);
}
// Each page turn is a browser history entry, so Back/Forward move through the
// pages read; popstate passes push = false so the entry isn't added twice.
// Screen readers hear the new page's title: from the live region, or, when
// focus was on the old page (a cross-reference), by moving focus to the new
// one, since it would otherwise be left on a hidden element.
let rendered = false;
function render(push = true) {
  savePage();
  if (push && location.hash !== pageHash(cur))
    history.pushState(null, "", pageUrl(cur));
  clearSearchHighlight();
  const focusOnPage = pages.some((p) => p.contains(document.activeElement));
  pages.forEach((p, i) => p.classList.toggle("active", i === cur));
  const page = pages[cur];
  page.tabIndex = -1;
  page.setAttribute("aria-label", PAGES[cur].nav);
  document.title = cur ? PAGES[cur].nav + " · " + BOOK : BOOK;
  document.getElementById("prev").disabled = cur === 0;
  document.getElementById("next").disabled = cur === total - 1;
  document.getElementById("pageno").textContent = PAGES[cur].nav;
  document.getElementById("pagepos").textContent = POSITION[cur];
  const rh = document.getElementById("runhead"),
    head = PAGES[cur].runhead;
  rh.hidden = !head;
  if (head) {
    rh.querySelector(".l").textContent = head[0];
    rh.querySelector(".r").textContent = head[1];
  }
  scroller().scrollTop = 0;
  const ribbon = document.getElementById("ribbon");
  if (PAGES[cur].file === "help") ribbon.setAttribute("aria-current", "page");
  else ribbon.removeAttribute("aria-current");
  document.getElementById("stage").scrollIntoView({ block: "nearest" });
  updateProgress();
  // no scroll event when the new page is already at the top
  saveScroll();
  const announce = document.getElementById("announce");
  if (focusOnPage) {
    announce.textContent = "";
    page.focus({ preventScroll: true });
  } else if (rendered) {
    announce.textContent = [PAGES[cur].nav, POSITION[cur]].filter(Boolean).join(", ");
  }
  rendered = true;
}
function next() {
  if (cur < total - 1) {
    cur++;
    render();
  }
}
function prev() {
  if (cur > 0) {
    cur--;
    render();
  }
}
function goTo(p, push = true) {
  const i = pageIndex(p);
  if (i < 0) return;
  cur = i;
  render(push);
}
let backStack = null;
function showBack() {
  const b = document.getElementById("back"),
    pn = document.getElementById("pageno"),
    pos = document.getElementById("pagepos");
  if (backStack) {
    b.textContent = "Обратно към " + backStack.who;
    b.hidden = false;
    pn.hidden = pos.hidden = true;
  } else {
    b.hidden = true;
    pn.hidden = pos.hidden = false;
  }
}
// A cross-reference: turn to page i, with a way back to the link followed.
function jump(i, who, from) {
  backStack = { page: cur, scroll: scroller().scrollTop, who: who, from: from };
  goTo(i);
  showBack();
  document.getElementById("stage").scrollIntoView({ block: "start" });
}
function goBack(push = true) {
  if (!backStack) return;
  const t = backStack,
    back = document.getElementById("back"),
    onBack = document.activeElement === back;
  backStack = null;
  goTo(t.page, push);
  // the back button is about to hide, so focus returns to the link followed
  if (onBack)
    (pages[cur].contains(t.from) ? t.from : pages[cur]).focus({ preventScroll: true });
  scroller().scrollTo({ top: t.scroll, behavior: "instant" });
  updateProgress();
  saveScroll();
  showBack();
}
// Browser Back/Forward, or an edited address. Going back to the page a
// cross-reference was followed from works like "Обратно към …" and restores
// the scroll position.
window.addEventListener("popstate", (e) => {
  const i = Math.max(0, pageFromHash());
  // an unknown address shows the cover; don't leave it in the address bar
  if (location.hash !== pageHash(i)) history.replaceState(null, "", pageUrl(i));
  if (backStack && backStack.page === i) return goBack(false);
  backStack = null;
  goTo(i, false);
  showBack();
  if (e.state && e.state.page === PAGES[i].file) {
    scrollToAt(e.state.at);
    updateProgress();
    saveScroll();
  }
});
// Links within the book: a cross-reference (<a class="xref" href="#<page>"
// data-back="…">) turns to that page with a way back, a source reference
// (<a class="seesrc" href="#<id>">) goes to the source card on this page, and
// a cross-reference within the page (<a class="xref" href="#<id>" data-here>)
// goes to that section of the help page.
// A click with a modifier is left to the browser, e.g. to open a new tab.
document.addEventListener("click", (e) => {
  const a = e.target.closest && e.target.closest("a.xref, a.seesrc");
  if (!a || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)
    return;
  e.preventDefault();
  const id = a.getAttribute("href").slice(1);
  if (a.hasAttribute("data-here")) helpTo(id);
  else if (a.classList.contains("xref")) jump(id, a.dataset.back, a);
  else toBottom(id);
});
// Notes and footnote definitions open in place. The button that toggles one
// says whether it's open: the note's own head, or the footnote mark that
// names the definition in aria-controls.
function setOpen(box, open) {
  box.classList.toggle("open", open);
  const b =
    box.querySelector(":scope > .note-head, :scope > .deepen-head") ||
    document.querySelector('[aria-controls="' + box.id + '"]');
  if (b) b.setAttribute("aria-expanded", open);
}
function toggleNote(id) {
  const box = document.getElementById(id);
  if (box) setOpen(box, !box.classList.contains("open"));
}
// The source card is a link, so focus lands on it too.
function toBottom(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.focus({ preventScroll: true });
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add("flash");
  setTimeout(function () {
    el.classList.remove("flash");
  }, 1600);
}
document.addEventListener("keydown", (e) => {
  // not while typing in the search box or with the contents drawer open
  if (toc.open || e.target.matches("input, textarea")) return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
    e.preventDefault();
    openToc(true);
  }
});

// Swipe left/right to turn pages. Only a quick, mostly horizontal stroke
// counts, so vertical scrolling and pinch-zoom are left alone.
let touch = null;
stage.addEventListener(
  "touchstart",
  (e) => {
    touch =
      e.touches.length === 1
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() }
        : null;
  },
  { passive: true },
);
stage.addEventListener(
  "touchend",
  (e) => {
    if (!touch) return;
    const dx = e.changedTouches[0].clientX - touch.x,
      dy = e.changedTouches[0].clientY - touch.y,
      quick = Date.now() - touch.t < 600;
    touch = null;
    if (!quick || Math.abs(dx) < 60 || Math.abs(dx) < 1.5 * Math.abs(dy))
      return;
    if (dx < 0) next();
    else prev();
  },
  { passive: true },
);

// Contents drawer: every page grouped by chapter, with search across the book.
const CHAPTERS = [CH1, CH2, CH3, CH4, CH5, CH6];
const toc = document.getElementById("toc"),
  tocList = document.getElementById("toc-list"),
  tocQuery = document.getElementById("toc-q"),
  tocResults = document.getElementById("toc-results");
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
// Consecutive pages with the same chapter number form a group; pages outside
// the chapters (cover, about…) get a group with no heading.
let group = null;
PAGES.forEach((p, i) => {
  const ch = chapterOf(p.file);
  if (!group || group.ch !== ch) {
    group = { ch: ch, ul: el("ul", "toc-pages") };
    if (ch) tocList.append(el("h3", "toc-group", CHAPTERS[ch - 1]));
    tocList.append(group.ul);
  }
  const b = el("button", "toc-link", p.nav);
  b.dataset.i = i;
  const li = el("li");
  li.append(b);
  group.ul.append(li);
});
function openToc(search) {
  tocList.querySelectorAll(".toc-link").forEach((b) => {
    if (+b.dataset.i === cur) b.setAttribute("aria-current", "page");
    else b.removeAttribute("aria-current");
  });
  toc.showModal();
  if (search) {
    tocQuery.focus();
    tocQuery.select();
  } else if (!tocQuery.value) {
    const b = tocList.querySelector("[aria-current]");
    b.focus({ preventScroll: true });
    b.scrollIntoView({ block: "center" });
  }
}
// A click on the backdrop (the dialog itself, outside its panel) closes it.
toc.addEventListener("click", (e) => {
  if (e.target === toc) return toc.close();
  const b = e.target.closest("[data-i]");
  if (!b) return;
  toc.close();
  goTo(+b.dataset.i);
  if (b.dataset.at) showHit(+b.dataset.i, +b.dataset.at, +b.dataset.len);
});

// Search. Pages are already in the DOM, so each one's text is indexed on first
// search: its text nodes joined into one string, remembering where each starts.
const textIndex = new WeakMap();
function indexOf(page) {
  let ix = textIndex.get(page);
  if (ix) return ix;
  ix = { text: "", nodes: [], starts: [] };
  // footnote numbers would glue onto the word before them ("кора4")
  const w = document.createTreeWalker(page, NodeFilter.SHOW_TEXT, (n) =>
    n.parentElement.closest(".fnmark")
      ? NodeFilter.FILTER_REJECT
      : NodeFilter.FILTER_ACCEPT,
  );
  // A space between blocks, so "…ствол</p><p>Област…" doesn't read as one
  // word. Not between inline elements, which can split a word ("амигдала<b>та</b>").
  const blockOf = (e) => {
    while (e !== page && getComputedStyle(e).display.startsWith("inline"))
      e = e.parentElement;
    return e;
  };
  let lastBlock = null;
  for (let n; (n = w.nextNode()); ) {
    const block = blockOf(n.parentElement);
    if (lastBlock && block !== lastBlock) ix.text += " ";
    lastBlock = block;
    ix.nodes.push(n);
    ix.starts.push(ix.text.length);
    ix.text += n.data;
  }
  textIndex.set(page, ix);
  return ix;
}
// Text node and offset inside it for a position in the joined text.
function locate(ix, pos) {
  let k = ix.starts.length - 1;
  while (k > 0 && ix.starts[k] > pos) k--;
  return [ix.nodes[k], pos - ix.starts[k]];
}
const tidy = (s) => s.replace(/\s+/g, " ");
function search(q) {
  // any run of spaces in the query matches any whitespace, e.g. a line break
  const re = new RegExp(
    q.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+"),
    "giu",
  );
  const hits = [];
  pages.forEach((page, i) => {
    if (page.querySelector(".load-error")) return;
    const ix = indexOf(page),
      found = [...ix.text.matchAll(re)];
    if (!found.length) return;
    const m = found[0],
      end = m.index + m[0].length;
    hits.push({
      i: i,
      at: m.index,
      len: m[0].length,
      count: found.length,
      before: tidy(ix.text.slice(Math.max(0, m.index - 50), m.index)).replace(/^\S*\s/, "…"),
      match: tidy(m[0]),
      after: tidy(ix.text.slice(end, end + 80)).replace(/\s\S*$/, "…"),
    });
  });
  return hits;
}
const plural = (n, one, many) => n + " " + (n === 1 ? one : many);
function showResults() {
  const q = tocQuery.value.trim(),
    searching = q.length >= 2;
  tocList.hidden = searching;
  tocResults.hidden = !searching;
  if (!searching) return;
  const hits = search(q);
  document.getElementById("toc-count").textContent = hits.length
    ? "Намерено в " + plural(hits.length, "страница", "страници")
    : "Няма намерени резултати";
  const list = document.getElementById("toc-hits");
  list.replaceChildren();
  hits.forEach((h) => {
    const b = el("button", "toc-hit");
    Object.assign(b.dataset, { i: h.i, at: h.at, len: h.len });
    const title = el("span", "hit-title", PAGES[h.i].nav);
    title.append(el("span", "hit-meta", [POSITION[h.i], plural(h.count, "съвпадение", "съвпадения")].filter(Boolean).join(" · ")));
    const snip = el("span", "hit-snip", h.before);
    snip.append(el("mark", null, h.match), h.after);
    b.append(title, snip);
    list.append(b);
  });
}
tocQuery.addEventListener("input", showResults);
// Enter opens the first result.
tocQuery.addEventListener("keydown", (e) => {
  const first = tocResults.querySelector(".toc-hit");
  if (e.key === "Enter" && first && !tocResults.hidden) first.click();
});
// Scroll to a match on the current page and highlight it. A match inside a
// closed note, deep-dive or definition opens it first, and the scroll waits
// for its expand animation.
function showHit(i, at, len) {
  const ix = indexOf(pages[i]),
    range = document.createRange();
  range.setStart(...locate(ix, at));
  range.setEnd(...locate(ix, at + len));
  let opened = false;
  for (
    let box = range.startContainer.parentElement.closest(".note, .deepen, .def");
    box;
    box = box.parentElement.closest(".note, .deepen, .def")
  ) {
    if (!box.classList.contains("open")) opened = true;
    setOpen(box, true);
  }
  if (window.CSS && CSS.highlights)
    CSS.highlights.set("search", new Highlight(range));
  setTimeout(
    () =>
      range.startContainer.parentElement.scrollIntoView({
        block: "center",
        behavior: opened ? "smooth" : "auto",
      }),
    opened ? 500 : 0,
  );
}
function clearSearchHighlight() {
  if (window.CSS && CSS.highlights) CSS.highlights.delete("search");
}

// Text size, as a zoom on each page's text (styles.css: --text-zoom). Kept in
// storage; the scroll position is carried over so the reader keeps their place.
const TEXT_SIZES = [0.9, 1, 1.1, 1.2, 1.35];
const TEXT_KEY = "book:text-size";
let textSize = 1;
try {
  textSize = TEXT_SIZES.indexOf(+localStorage.getItem(TEXT_KEY));
} catch (e) {}
if (textSize < 0) textSize = 1;
function setTextSize(k) {
  textSize = Math.max(0, Math.min(TEXT_SIZES.length - 1, k));
  const z = TEXT_SIZES[textSize],
    at = scrollAt();
  document.documentElement.style.setProperty("--text-zoom", z);
  scrollToAt(at);
  updateProgress();
  document.getElementById("text-size").textContent = Math.round(z * 100) + "%";
  document.getElementById("text-smaller").disabled = textSize === 0;
  document.getElementById("text-larger").disabled =
    textSize === TEXT_SIZES.length - 1;
  try {
    if (z === 1) localStorage.removeItem(TEXT_KEY);
    else localStorage.setItem(TEXT_KEY, z);
  } catch (e) {}
}
setTextSize(textSize);

// Light/dark theme. The script in index.html's <head> applies it before the
// first paint. A choice that matches the system setting isn't stored, so the
// page goes back to following the system.
const THEME_KEY = "book:theme";
const SYSTEM_DARK = matchMedia("(prefers-color-scheme: dark)");
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  const label = t === "dark" ? "Светла тема" : "Тъмна тема";
  document.getElementById("theme-label").textContent = label;
  document.querySelector(".nav .theme").title = label;
}
function toggleTheme() {
  const t =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(t);
  try {
    if (t === (SYSTEM_DARK.matches ? "dark" : "light"))
      localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, t);
  } catch (e) {}
}
SYSTEM_DARK.addEventListener("change", (e) => {
  let saved = null;
  try {
    saved = localStorage.getItem(THEME_KEY);
  } catch (err) {}
  if (!saved) setTheme(e.matches ? "dark" : "light");
});
// ═══ Страницата „Кога да потърсим специалист“ (винаги под ръка) ═══
// Отваря се от зелената лентичка горе вдясно; бутонът долу връща читателя обратно.
function openHelp() {
  const i = pageIndex("help");
  if (i < 0 || cur === i) return;
  const who = cur === 0 ? "корицата" : cur === 1 ? "съдържанието" : PAGES[cur].nav;
  jump(i, who);
}
// Превърта до раздел на страницата за помощ и отваря затворено падащо блокче.
function helpTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (el.classList.contains("deepen")) setOpen(el, true);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function ckToggle(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const o = el.classList.toggle("open");
  const b = el.querySelector(".ck-more");
  if (b) b.setAttribute("aria-expanded", o ? "true" : "false");
}
// Резюме в блокчето под списъка, според отметнатите сигнали.
  (function(){
  const THEMES=['тялото','поведението','чувствата и мислите','ежедневието'];
  const REC_Y={
    ped:'Започнете от личния лекар или педиатъра, за да се изключат телесни причини за оплакванията.',
    eat:'Помолете педиатъра да следи растежа и теглото, докато работите по страха около храната.',
    speech:'Помислете и за логопед, който да провери речта и езика.',
    psy:'Запишете час при детски или клиничен психолог за подробна оценка.',
    school:'Поговорете с учителката и, ако има, с психолога в градината или училището, за да имате общ план.',
    parent:'Питайте специалиста за подход, в който участвате и вие, например програма за родители. Междувременно вижте раздела „Докато чакате“.',
    mood:'Споменете на специалиста и промяната в настроението, за да бъде погледната и тя.'
  };
  const ORDER_Y=['ped','eat','speech','psy','school','parent','mood'];
  const REC_R={
    death:'Не оставяйте детето само, ако се тревожите за безопасността му, и попитайте спокойно какво има предвид. При непосредствена опасност звъннете на 112 или отидете в най-близкото спешно отделение.',
    food:'Свържете се с личния лекар на детето още днес.',
    body:'Потърсете лекар веднага, а при тежко състояние звъннете на 112.',
    change:'Свържете се с лекар още днес или поговорете с психолог на 116 111.',
    abuse:'При непосредствена опасност звъннете на 112. Сигнал можете да подадете и на 116 111 или на 0800 1 86 76.'
  };
  const ORDER_R=['death','body','abuse','food','change'];
  function esc(t){return t.replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function link(inp){
    const g=inp.dataset.go, t=esc(inp.dataset.sum);
    if(!g)return t;
    return g.charAt(0)==='#'
      ?'<a class="xref" href="'+g+'" data-here>'+t+'</a>'
      :'<a class="xref" href="#'+g+'" data-back="помощта">'+t+'</a>';
  }
  function plural(n){const w={2:'два',3:'три',4:'четири',5:'пет',6:'шест',7:'седем',8:'осем',9:'девет',10:'десет'};return n===1?'един сигнал':(w[n]||n)+' сигнала';}
  let lastText='';
  function update(){
    const box=document.getElementById('helpcheck'), out=document.getElementById('verdict');
    if(!box||!out)return;
    const Y=[...box.querySelectorAll('input[data-level="y"]:checked')];
    const R=[...box.querySelectorAll('input[data-level="r"]:checked')];
    out.className='verdict';
    if(!Y.length&&!R.length){
      lastText='';
      out.innerHTML='<div class="v-lab">Засега нищо не е отбелязано</div><p>Ако страхът е типичен за възрастта, отшумява и не пречи на ежедневието, най-вероятно е част от растенето. Наблюдавайте, подкрепяйте и се върнете тук, ако нещо се промени. Щом отметнете сигнал, тук ще се появи резюме, подредено по теми, с конкретни следващи стъпки.</p>';
      return;
    }
    let h='', txt=[];
    if(R.length){
      out.classList.add('r');
      h+='<div class="v-lab">Не чакайте планов час</div>';
      h+='<p>Отбелязали сте '+(R.length===1?'един спешен сигнал':({2:'два',3:'три',4:'четири',5:'пет'}[R.length]||R.length)+' спешни сигнала')+(Y.length?' и още '+plural(Y.length):'')+'. Потърсете помощ още днес. Ако имате нужда да поговорите с някого веднага, 116 111 отговаря денонощно, и на родители.</p>';
      h+='<div class="v-sec">Спешно</div><ul class="v-list">';
      txt.push('СПЕШНО');
      const keys=new Set(R.map(function(i){return i.dataset.rec;}));
      R.forEach(function(i){h+='<li><strong>'+link(i)+'</strong></li>';txt.push('- '+i.dataset.sum);});
      h+='</ul><div class="v-sec">Какво да направите сега</div><ul class="v-list">';
      ORDER_R.forEach(function(k){if(keys.has(k)){h+='<li>'+REC_R[k]+'</li>';txt.push('> '+REC_R[k]);}});
      h+='</ul><div class="v-calls"><a href="tel:112">112</a><a href="tel:116111">116 111</a>'+(keys.has('death')?'<a href="#h-death" onclick="helpTo(\'h-death\');return false;">Ако детето говори за смърт</a>':'')+'</div>';
    }else{
      out.classList.add('y');
      if(Y.length<3){
        h+='<div class="v-lab">Струва си да наблюдавате отблизо</div><p>Отбелязали сте '+plural(Y.length)+'. Ако продължава или се засилва през следващите седмици, запишете час. Един сигнал сам по себе си не е диагноза, а покана да погледнете по-внимателно.</p>';
      }else{
        h+='<div class="v-lab">Струва си да си запишете час</div><p>Отбелязали сте '+plural(Y.length)+'. В следващите седмици потърсете личния лекар или детски психолог. Това не значи, че нещо е непоправимо, а че детето заслужава поглед отблизо. Ранната подкрепа работи.</p>';
      }
    }
    if(Y.length){
      const by={};THEMES.forEach(function(t){by[t]=[];});
      Y.forEach(function(i){(by[i.dataset.theme]||(by[i.dataset.theme]=[])).push(i);});
      const used=THEMES.filter(function(t){return by[t].length;});
      h+='<div class="v-sec">'+(R.length?'Другите сигнали':'Какво отбелязахте')+'</div><ul class="v-list">';
      txt.push('','ОТБЕЛЯЗАНИ СИГНАЛИ');
      used.forEach(function(t){
        h+='<li><span class="v-theme">'+t.charAt(0).toUpperCase()+t.slice(1)+':</span> '+by[t].map(link).join(', ')+'</li>';
        txt.push('- '+t+': '+by[t].map(function(i){return i.dataset.sum;}).join(', '));
      });
      h+='</ul>';
      let obs='';
      if(used.length>=3){obs='Тревогата се проявява в '+(used.length===3?'три':'четири')+' различни области наведнъж. Това е още една причина за цялостна оценка, а не за отделни решения на всеки проблем.';}
      else{
        const max=Math.max.apply(null,used.map(function(t){return by[t].length;}));
        const top=used.filter(function(t){return by[t].length===max;});
        if(Y.length>=2&&top.length===1)obs='Повечето сигнали са в темата „'+top[0]+'“. Разкажете на специалиста най-напред за тях.';
      }
      if(obs){h+='<p class="v-obs">'+obs+'</p>';txt.push('',obs);}
      if(!R.length){
        const recs=new Set(['psy']);
        Y.forEach(function(i){i.dataset.rec.split(' ').forEach(function(r){recs.add(r);});});
        h+='<div class="v-sec">Откъде да започнете</div><ul class="v-list">';
        txt.push('','СЛЕДВАЩИ СТЪПКИ');
        ORDER_Y.forEach(function(k){if(recs.has(k)){h+='<li>'+REC_Y[k]+'</li>';txt.push('- '+REC_Y[k]);}});
        h+='</ul>';
        if(Y.length>=4||recs.has('mood'))h+='<p class="v-note">И за вас: ако се чувствате изтощени, подкрепа има и за родителя. Kabinet.bg, <a href="tel:080020202">0800 20 202</a>, предлага безплатни първи консултации.</p>';
      }
    }
    h+='<button class="v-copy" type="button" onclick="copySummary(this)">Копирай резюмето за срещата със специалиста</button>';
    lastText='Резюме от „Смелост на малки глътки“\n\n'+txt.join('\n');
    out.innerHTML=h;
  }
  window.copySummary=function(btn){
    const t=lastText;
    function done(ok){btn.textContent=ok?'Копирано. Можете да го поставите в бележките си.':'Копирането не успя. Маркирайте текста ръчно.';setTimeout(function(){btn.textContent='Копирай резюмето за срещата със специалиста';},2600);}
    function fallback(){try{const a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();const ok=document.execCommand('copy');document.body.removeChild(a);done(ok);}catch(e){done(false);}}
    try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){done(true);},fallback);}else fallback();}catch(e){fallback();}
  };
  document.addEventListener('change',function(e){if(e.target&&e.target.closest&&e.target.closest('#helpcheck'))update();});
})();

setTheme(document.documentElement.dataset.theme);
render(false);
