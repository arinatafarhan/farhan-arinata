/* =========================================================
   FARHAN ARINATA — PERSONAL ARCHIVE / V2
   Vanilla JS: menu, scroll progress, reveals, active nav,
   cursor glow, magnetic links, subtle card tilt.
   ========================================================= */

(() => {
  const doc = document.documentElement;
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const preloader = document.querySelector(".preloader");
  const progress = document.querySelector(".scroll-progress span");
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const currentSection = document.querySelector("[data-current-section]");
  const navLinks = [...document.querySelectorAll(".desktop-nav a")];
  const allMenuLinks = [...document.querySelectorAll(".mobile-menu a")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Preloader
  window.addEventListener("load", () => {
    setTimeout(() => preloader?.classList.add("hidden"), reducedMotion ? 0 : 650);
  });

  // Copyright year
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Mobile menu
  const setMenu = (open) => {
    menuButton?.classList.toggle("open", open);
    mobileMenu?.classList.toggle("open", open);
    menuButton?.setAttribute("aria-expanded", String(open));
    mobileMenu?.setAttribute("aria-hidden", String(!open));
    body.classList.toggle("menu-open", open);
  };

  menuButton?.addEventListener("click", () => {
    setMenu(!mobileMenu.classList.contains("open"));
  });

  allMenuLinks.forEach(link => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
  });

  // Scroll effects
  const onScroll = () => {
    const y = window.scrollY;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (y / max) * 100 : 0;
    if (progress) progress.style.width = `${pct}%`;
    header?.classList.toggle("scrolled", y > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal on intersection
  const revealEls = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  // Section spy
  const sections = [...document.querySelectorAll("[data-section]")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const id = visible.target.id;
      const index = visible.target.dataset.section || "00";
      if (currentSection) currentSection.textContent = index;

      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }, { threshold: [0.18, 0.35, 0.55], rootMargin: "-20% 0px -55% 0px" });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // Cursor glow
  const glow = document.querySelector(".cursor-glow");
  if (!reducedMotion && window.matchMedia("(pointer:fine)").matches && glow) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx, gy = my;

    window.addEventListener("mousemove", e => {
      mx = e.clientX;
      my = e.clientY;
      glow.style.opacity = "1";
    }, { passive: true });

    const animateGlow = () => {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      glow.style.left = `${gx}px`;
      glow.style.top = `${gy}px`;
      requestAnimationFrame(animateGlow);
    };
    animateGlow();
  }

  // Magnetic links — restrained so it still feels editorial
  if (!reducedMotion && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".magnetic").forEach(el => {
      el.addEventListener("mousemove", e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * .10}px, ${y * .14}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0,0)";
      });
    });
  }

  // Tiny 3D tilt for entry rows on desktop
  if (!reducedMotion && window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".tilt-card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 1.1).toFixed(2)}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(900px) rotateX(0deg)";
      });
    });
  }
})();
