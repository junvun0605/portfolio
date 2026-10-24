(() => {
  const stories = [...document.querySelectorAll('.scroll-story')];
  if (!stories.length) return;
  const mode = matchMedia('(min-width:901px) and (min-height:650px) and (prefers-reduced-motion:no-preference)');
  const links = [...document.querySelectorAll('[data-chapter]')];
  const clamp = x => Math.max(0, Math.min(1, x));
  const smooth = x => { x=clamp(x); return x*x*(3-2*x); };
  let queued = false;
  function render() {
    queued=false;
    let active=stories[0].id;
    const measurements=stories.map(story => ({story,rect:story.getBoundingClientRect()}));
    for (const {story,rect} of measurements) {
      if (rect.top <= innerHeight*.45) active=story.id;
      if (!mode.matches || rect.bottom<0 || rect.top>innerHeight) continue;
      const progress=clamp((132-rect.top)/(rect.height-(innerHeight-132)));
      const entrance=smooth(progress/.32);
      const change=smooth((progress-.43)/.18);
      const textOut=smooth((progress-.40)/.10);
      const textIn=smooth((progress-.53)/.10);
      story.style.setProperty('--progress',progress.toFixed(4));
      story.style.setProperty('--device-scale',(.86+.14*entrance).toFixed(4));
      story.style.setProperty('--device-tilt',`${9*(1-entrance)}deg`);
      story.style.setProperty('--device-y',`${24*(1-entrance)}px`);
      story.style.setProperty('--detail-opacity',change.toFixed(4));
      story.style.setProperty('--first-opacity',(1-textOut).toFixed(4));
      story.style.setProperty('--second-opacity',textIn.toFixed(4));
      story.style.setProperty('--first-y',`${-16*change}px`);
      story.style.setProperty('--second-y',`${20*(1-change)}px`);
    }
    links.forEach(link => {if(link.dataset.chapter===active)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');});
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(render);}}
  function configure(){document.documentElement.classList.toggle('showcase-enhanced',mode.matches);schedule();}
  stories.forEach(story=>story.querySelector('.story-switch').addEventListener('click',event=>{
    const active=story.classList.toggle('manual-detail');
    event.currentTarget.setAttribute('aria-pressed',String(active));
    event.currentTarget.textContent=active?'Reset view ↔':'Another view ↔';
  }));
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule,{passive:true});
  mode.addEventListener('change',configure);
  configure();
})();
