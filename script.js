(()=>{const p=document.querySelector(".progress"),m=document.querySelector(".menu"),n=document.querySelector(".mobile-nav");function u(){const x=document.documentElement.scrollHeight-innerHeight;p.style.width=x>0?(scrollY/x*100)+"%":"0%"}addEventListener("scroll",u,{passive:true});u();m?.addEventListener("click",()=>n?.classList.toggle("open"));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".fade").forEach(e=>io.observe(e));document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear())})();
document.addEventListener("DOMContentLoaded", () => {
  const dock = document.createElement("div");
  dock.className = "music-dock";
  dock.innerHTML = `
    <button class="music-toggle" type="button" aria-label="Open music player" aria-expanded="false">
      <svg class="spin-slow"><use href="sprites.svg#vinyl"></use></svg><span>Music</span>
    </button>
    <div class="music-panel" aria-hidden="true">
      <div class="music-panel-head">
        <div><span class="music-eyebrow">Archive radio</span><strong>Songs that remind me of her</strong></div>
        <button class="music-close" type="button" aria-label="Close music player">×</button>
      </div>
      <iframe src="https://open.spotify.com/embed/playlist/4F3lstGyli9H4dXO0U5jp0?utm_source=generator&theme=0"
        height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <p class="music-note">Playback starts only when you choose it — no forced autoplay.</p>
    </div>`;
  document.body.appendChild(dock);
  const toggle = dock.querySelector(".music-toggle");
  const panel = dock.querySelector(".music-panel");
  const close = dock.querySelector(".music-close");
  const setOpen = (open) => {
    dock.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    panel.setAttribute("aria-hidden", String(!open));
  };
  toggle.addEventListener("click", () => setOpen(!dock.classList.contains("open")));
  close.addEventListener("click", () => setOpen(false));
});
