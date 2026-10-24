const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (entry.isIntersecting) {
    entry.target.animate([{opacity:.5,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:550,easing:'ease-out'});
    observer.unobserve(entry.target);
   }
  });
 }, {threshold:.08});
 document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}
document.addEventListener('keydown', e => { if(e.key==='Escape' && nav && toggle){ nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus(); }});

// Switch each project between two real website screenshots.
document.querySelectorAll('.preview-toggle').forEach(button => {
 button.addEventListener('click', () => {
  const card=button.closest('.filled-project');
  const active=card.classList.toggle('is-previewing');
  button.setAttribute('aria-pressed',String(active));
  button.textContent=active?'Back to homepage ↔':'View another screen ↔';
 });
});
