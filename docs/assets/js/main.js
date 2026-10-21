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
