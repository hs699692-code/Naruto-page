// Page transition + simple client-side nav highlight + mobile menu
document.addEventListener('DOMContentLoaded', function(){
  // show page animation
  requestAnimationFrame(()=> document.body.querySelector('.page').classList.add('is-visible'));

  // Smooth scroll for internal anchors (if any)
  document.documentElement.style.scrollBehavior = 'smooth';

  // Mobile menu toggle
  document.querySelectorAll('.mobile-menu').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = document.querySelector('.main-nav');
      if(!nav) return;
      nav.classList.toggle('open');
      btn.classList.toggle('open');
    });
  });
});

// contact form handler (no backend) — shows confirmation
function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){ alert('Please fill all fields'); return false; }

  alert('Thanks! Your message was received (demo). Replace this with a backend endpoint to send messages.');
  form.reset();
  return false;
}

// graceful navigation animation when clicking nav links
document.addEventListener('click', function(ev){
  const a = ev.target.closest && ev.target.closest('a');
  if(!a) return;
  const href = a.getAttribute('href');
  if(!href) return;
  if(href.startsWith('http') || href.startsWith('#') || href.indexOf('.html')===-1) return;
  ev.preventDefault();
  const bodyPage = document.querySelector('.page');
  bodyPage.classList.remove('is-visible');
  setTimeout(()=> window.location = href, 300);
});
