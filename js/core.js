document.body.dataset.theme=localStorage.getItem('theme')||'dark';
document.getElementById('themeToggle').onclick=()=>{
const t=document.body.dataset.theme==='dark'?'light':'dark';
document.body.dataset.theme=t;
localStorage.setItem('theme',t);
};
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('show')));
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));