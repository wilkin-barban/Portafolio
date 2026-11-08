/**
 * Componentes de UI: Navegación, Efecto Tilt 3D, Animaciones Reveal y Contadores
 */

export const setupNavigation = () => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const header = document.querySelector("[data-header]");

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  });
};

let revealObserver;
export const refreshReveals = () => {
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
          delay += 100;
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    element.style.transitionDelay = "0ms";
    revealObserver.observe(element);
  });
};

export const setupCounters = async () => {
  const counters = document.querySelectorAll("[data-counter]");

  try {
    const response = await fetch("/api/stats");
    if (response.ok) {
      const stats = await response.json();
      if (counters.length >= 2 && stats.projects) {
        counters[1].dataset.counter = stats.projects;
      }
    }
  } catch (error) {
    console.error("Failed to fetch stats", error);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const target = Number(element.dataset.counter);
        const start = performance.now();
        const duration = 900;

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          element.textContent = Math.floor(progress * target);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(element);
      });
    },
    { threshold: 0.8 }
  );

  counters.forEach((counter) => observer.observe(counter));
};

export const setupCardsTilt = () => {
  const cards = document.querySelectorAll(".project-card, .service-card, .hero-card, .glass-panel");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--x", "50%");
      card.style.setProperty("--y", "50%");
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
};
