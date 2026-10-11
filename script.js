// Mobil menü
const b=document.querySelector('.menu-btn'),m=document.getElementById('m');
if(b){b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
// Űrlap (Web3Forms): AJAX küldés, oldalfrissítés nélkül
document.querySelectorAll('form[data-form]').forEach(f=>{
  const msg=f.querySelector('.form-msg'),btn=f.querySelector('button[type=submit]');
  f.addEventListener('submit',async ev=>{
    ev.preventDefault();btn.disabled=true;const t=btn.textContent;btn.textContent='Küldés…';msg.className='form-msg';
    try{
      const d=Object.fromEntries(new FormData(f));
      const r=await fetch(f.action,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});
      const j=await r.json();
      if(j.success){msg.textContent='Köszönöm! Megkaptam az üzeneted, 24 órán belül válaszolok.';msg.className='form-msg ok';f.reset()}
      else throw 0;
    }catch{msg.innerHTML='Nem sikerült elküldeni. Írj közvetlenül: <a href="mailto:ndgrowthmarketing@gmail.com">ndgrowthmarketing@gmail.com</a>';msg.className='form-msg err'}
    btn.disabled=false;btn.textContent=t;
  });
});
