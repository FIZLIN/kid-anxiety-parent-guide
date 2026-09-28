// Running-head titles (left side of the header above each page).
const BOOK = "Смелост на малки глътки";
const CH1 = "I. Тялото на страха";
const CH2 = "II. Лицата на страха";
const CH3 = "III. Знаците на повърхността";
const CH4 = "IV. Истории от кабинета";

// Book pages in reading order.
//   file:    pages/<file>.html
//   nav:     label shown in the bottom nav
//   runhead: [left, right] text of the header above the page, or null for none
const PAGES = [
  { file: "cover", nav: "Корица", runhead: null },
  { file: "contents", nav: "Съдържание", runhead: [BOOK, "Съдържание"] },
  { file: "ch1-map", nav: "Тялото на страха", runhead: [BOOK, "Глава първа"] },
  { file: "ch1-alarm", nav: "Алармата", runhead: [CH1, "Алармата в мозъка"] },
  { file: "ch1-two-paths", nav: "Двата пътя", runhead: [CH1, "Двата пътя на страха"] },
  { file: "ch1-brake", nav: "Спирачката", runhead: [CH1, "Спирачката, която узрява"] },
  { file: "ch1-stress-axis", nav: "Оста на стреса", runhead: [CH1, "Бавната вълна на стреса"] },
  { file: "ch1-stress-trace", nav: "Следата на стреса", runhead: [CH1, "Когато стресът остави следа"] },
  { file: "ch1-three-gears", nav: "Трите предавки", runhead: [CH1, "Трите предавки на тялото"] },
  { file: "ch1-freeze", nav: "Замирането", runhead: [CH1, "Когато тялото замръзва"] },
  { file: "ch1-gut", nav: "Корема", runhead: [CH1, "Когато тревогата боли"] },
  { file: "ch1-temperament", nav: "Темпераментът", runhead: [CH1, "Роден по-предпазлив"] },
  { file: "ch1-what-remains", nav: "Какво остава", runhead: [CH1, "Какво остава за нас"] },
  { file: "ch1-figures", nav: "На цифри", runhead: [CH1, "На цифри"] },
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
let cur = loadSavedPage();

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
      if (i === cur) updateProgress();
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
function pageIndex(p) {
  return typeof p === "number" ? p : PAGES.findIndex((x) => x.file === p);
}
function render() {
  savePage();
  pages.forEach((p, i) => p.classList.toggle("active", i === cur));
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
  document.getElementById("stage").scrollIntoView({ block: "nearest" });
  updateProgress();
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
function goTo(p) {
  const i = pageIndex(p);
  if (i < 0) return;
  cur = i;
  render();
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
function jump(i, who) {
  backStack = { page: cur, scroll: scroller().scrollTop, who: who };
  goTo(i);
  showBack();
  document.getElementById("stage").scrollIntoView({ block: "start" });
}
function goBack() {
  if (!backStack) return;
  const t = backStack;
  backStack = null;
  goTo(t.page);
  scroller().scrollTop = t.scroll;
  showBack();
}
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Enter" &&
    e.target.matches &&
    e.target.matches(".xref,.seesrc")
  )
    e.target.click();
});
function toggleNote(id) {
  document.getElementById(id).classList.toggle("open");
}
function toggleFn(id) {
  var el = document.getElementById(id);
  if (el) el.classList.toggle("open");
}
function toBottom(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add("flash");
  setTimeout(function () {
    el.classList.remove("flash");
  }, 1600);
}
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
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
setTheme(document.documentElement.dataset.theme);
render();
