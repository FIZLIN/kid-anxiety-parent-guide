const pages=[...document.querySelectorAll('.page')];
let cur=0; const total=pages.length;
const labels=['Корица','Съдържание','Тялото на страха','Алармата','Двата пътя','Спирачката','Оста на стреса','Следата на стреса','Трите предавки','Замирането','Корема','Темпераментът','Какво остава','На цифри','Лицата на страха','Карта на втора глава','Селективен мутизъм','Тревожност при раздяла','Адаптационен синдром','Социална тревожност','Специфични фобии','Нощните страхове','„Ами ако…“','Еметофобия','Когато чинията плаши','Коморбидност','За проекта','Авторите'];
function render(){
  pages.forEach((p,i)=>p.classList.toggle('active',i===cur));
  document.getElementById('prev').disabled=cur===0;
  document.getElementById('next').disabled=cur===total-1;
  document.getElementById('pageno').textContent=labels[cur]||'';
  if(pages[cur])pages[cur].scrollTop=0;
  document.getElementById('stage').scrollIntoView({block:'nearest'});
}
function next(){if(cur<total-1){cur++;render();}}
function prev(){if(cur>0){cur--;render();}}
function goTo(i){cur=i;render();}
let backStack=null;
function showBack(){
  const b=document.getElementById('back'), pn=document.getElementById('pageno');
  if(backStack){b.textContent='Обратно към '+backStack.who;b.hidden=false;pn.hidden=true;}
  else{b.hidden=true;pn.hidden=false;}
}
function jump(i,who){
  backStack={page:cur,scroll:pages[cur].scrollTop,who:who};
  goTo(i);showBack();
  document.getElementById('stage').scrollIntoView({block:'start'});
}
function goBack(){
  if(!backStack)return;
  const t=backStack;backStack=null;
  goTo(t.page);pages[cur].scrollTop=t.scroll;showBack();
}
document.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target.matches&&e.target.matches('.xref,.seesrc'))e.target.click();
});
function toggleNote(id){document.getElementById(id).classList.toggle('open');}
function toggleFn(id){var el=document.getElementById(id);if(el)el.classList.toggle('open');}
function toBottom(id){var el=document.getElementById(id);if(!el)return;el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('flash');setTimeout(function(){el.classList.remove('flash');},1600);}
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev();});
render();
