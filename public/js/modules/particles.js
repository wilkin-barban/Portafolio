/**
 * Animación interactiva de partículas en Canvas
 */

export const setupParticles = () => {
  const canvas = document.querySelector("[data-particles]");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const particles = Array.from({ length: 118 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 2.4 + 0.6,
    speed: Math.random() * 0.13 + 0.035,
    phase: Math.random() * Math.PI * 2,
    wave: Math.random() * 0.9 + 0.35,
    vx: 0,
    vy: 0
  }));

  const mouse = { x: null, y: null, radius: 160 };

  window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  const resize = () => {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.dataset.theme === "dark";
    const colorRGB = isDark ? "110, 231, 249" : "20, 110, 245";
    const now = performance.now() / 1000;
    context.fillStyle = `rgba(${colorRGB}, 0.78)`;
    context.lineWidth = 0.55 * window.devicePixelRatio;

    particles.forEach((particle, index) => {
      let x = particle.x * canvas.width;
      let y = particle.y * canvas.height;

      // Interacción con el cursor
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x * window.devicePixelRatio - x;
        const dy = mouse.y * window.devicePixelRatio - y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = mouse.radius * window.devicePixelRatio;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          particle.vx -= forceDirectionX * force * 0.5;
          particle.vy -= forceDirectionY * force * 0.5;
        }
      }

      particle.vx *= 0.95;
      particle.vy *= 0.95;
      particle.vx += Math.sin(now * 0.8 + particle.phase) * particle.wave * 0.006;
      particle.vy += Math.cos(now * 0.65 + particle.phase) * particle.wave * 0.004;
      x += particle.vx;
      y += particle.vy;

      particle.x = x / canvas.width;
      particle.y = y / canvas.height;

      context.beginPath();
      context.arc(x, y, particle.radius * window.devicePixelRatio, 0, Math.PI * 2);
      context.fill();

      // Conexiones entre partículas cercanas
      for (let j = index; j < particles.length; j++) {
        const p2 = particles[j];
        const p2x = p2.x * canvas.width;
        const p2y = p2.y * canvas.height;
        const dist = Math.sqrt(Math.pow(x - p2x, 2) + Math.pow(y - p2y, 2));

        const connectionDistance = 108 * window.devicePixelRatio;
        if (dist < connectionDistance) {
          context.strokeStyle = `rgba(${colorRGB}, ${0.24 - (dist / connectionDistance) * 0.24})`;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(p2x, p2y);
          context.stroke();
        }
      }

      particle.y -= particle.speed / 1000;
      if (particle.y < -0.02) particle.y = 1.02;
      if (particle.x < -0.02) particle.x = 1.02;
      if (particle.x > 1.02) particle.x = -0.02;
    });

    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
};
