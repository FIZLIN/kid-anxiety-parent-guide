// Book pages in reading order: [file in pages/ without .html, label shown in the nav].
const PAGES = [
  ["cover", "Корица"],
  ["contents", "Съдържание"],
  ["ch1-map", "Тялото на страха"],
  ["ch1-alarm", "Алармата"],
  ["ch1-two-paths", "Двата пътя"],
  ["ch1-brake", "Спирачката"],
  ["ch1-stress-axis", "Оста на стреса"],
  ["ch1-stress-trace", "Следата на стреса"],
  ["ch1-three-gears", "Трите предавки"],
  ["ch1-freeze", "Замирането"],
  ["ch1-gut", "Корема"],
  ["ch1-temperament", "Темпераментът"],
  ["ch1-what-remains", "Какво остава"],
  ["ch1-figures", "На цифри"],
  ["ch2-intro", "Лицата на страха"],
  ["ch2-map", "Карта на втора глава"],
  ["ch2-sm", "Селективен мутизъм"],
  ["ch2-sad", "Тревожност при раздяла"],
  ["ch2-adapt", "Адаптационен синдром"],
  ["ch2-social", "Социална тревожност"],
  ["ch2-phobia", "Специфични фобии"],
  ["ch2-night", "Нощните страхове"],
  ["ch2-gad", "„Ами ако…“"],
  ["ch2-emeto", "Еметофобия"],
  ["ch2-arfid", "Когато чинията плаши"],
  ["ch2-comorb", "Коморбидност"],
  ["about-project", "За проекта"],
  ["about-authors", "Авторите"],
];
const labels = PAGES.map((p) => p[1]);
let cur = 0;
const total = PAGES.length;

// Each page starts as an empty placeholder and is swapped for pages/<name>.html once fetched.
const stage = document.getElementById("stage");
const pages = PAGES.map(([name]) => {
  const s = document.createElement("section");
  s.className = "page scroll";
  s.dataset.page = name;
  stage.insertBefore(s, stage.querySelector(".nav"));
  return s;
});
PAGES.forEach(([name], i) => {
  fetch("pages/" + name + ".html")
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
    })
    .catch((e) => {
      console.log("Failed to load page " + name + ": " + e);
      pages[i].innerHTML =
        '<p class="load-error">Страницата не можа да се зареди. Опитайте да презаредите.</p>';
    });
});
function pageIndex(p) {
  return typeof p === "number" ? p : PAGES.findIndex((x) => x[0] === p);
}
function render() {
  pages.forEach((p, i) => p.classList.toggle("active", i === cur));
  document.getElementById("prev").disabled = cur === 0;
  document.getElementById("next").disabled = cur === total - 1;
  document.getElementById("pageno").textContent = labels[cur] || "";
  if (pages[cur]) pages[cur].scrollTop = 0;
  document.getElementById("stage").scrollIntoView({ block: "nearest" });
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
    pn = document.getElementById("pageno");
  if (backStack) {
    b.textContent = "Обратно към " + backStack.who;
    b.hidden = false;
    pn.hidden = true;
  } else {
    b.hidden = true;
    pn.hidden = false;
  }
}
function jump(i, who) {
  backStack = { page: cur, scroll: pages[cur].scrollTop, who: who };
  goTo(i);
  showBack();
  document.getElementById("stage").scrollIntoView({ block: "start" });
}
function goBack() {
  if (!backStack) return;
  const t = backStack;
  backStack = null;
  goTo(t.page);
  pages[cur].scrollTop = t.scroll;
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
render();
