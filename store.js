const store=document.getElementById('store');
SERVICES.forEach(s=>{
const el=document.createElement('div');
el.className='card';
el.innerHTML=`<h3>${s.name}</h3><strong>${s.price}</strong>`;
store.appendChild(el);
});