const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open);});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".nav a")];
const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
     links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id));
   }
 });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>observer.observe(s));
