/** Viewport-sized rendering keeps the cost independent of homepage length.
 * Carbonated bubbles rise through the hero and pool, ending at the pool edge. */
export function startHomeAtmosphere(canvas: HTMLCanvasElement, poolFlow: HTMLElement) {
  const context = canvas.getContext('2d');
  if (!context) return;
  const ctx = context;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, poolEnd = 0;
  let frame = 0, last = 0, elapsed = 0;
  let primary = '#f47b00';
  let inView = !('IntersectionObserver' in window);
  const seeded = (n: number) => { const x = Math.sin(n * 127.1) * 43758.5453; return x - Math.floor(x); };
  const bubbles = Array.from({ length: 76 }, (_, i) => ({
    x: seeded(i + 1), y: seeded(i + 89), radius: 1.1 + seeded(i + 40) * 3.6,
    speed: 0.018 + seeded(i + 140) * 0.037, phase: seeded(i + 220) * Math.PI * 2,
  }));
  const measure = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    poolEnd = poolFlow.getBoundingClientRect().bottom + window.scrollY;
  };
  const refreshColours = () => {
    const style = getComputedStyle(document.documentElement);
    primary = style.getPropertyValue('--active-flavour-primary').trim() || primary;
  };
  const draw = (now: number) => {
    frame = 0;
    if (document.hidden || motion.matches) return;
    frame = requestAnimationFrame(draw);
    if (last && now - last < 32) return;
    const delta = last ? Math.min((now - last) / 1000, 0.07) : 0;
    last = now; elapsed += delta;
    refreshColours();
    ctx.clearRect(0, 0, width, height);
    const count = width < 600 ? 38 : bubbles.length;
    for (let i = 0; i < count; i++) {
      const b = bubbles[i];
      const life = (b.y + elapsed * b.speed) % 1;
      const pageY = poolEnd * (1 - life);
      const y = pageY - window.scrollY;
      if (y < -12 || y > height + 12) continue;
      const x = b.x * width + Math.sin(elapsed * 0.7 + b.phase + life * 5) * 13;
      const fade = Math.min(1, life * 8, (1 - life) * 8);
      // Lighter across copy, denser at the page margins.
      ctx.globalAlpha = fade * (b.x < 0.13 || b.x > 0.87 ? 0.66 : 0.32);
      ctx.lineWidth = 0.8; ctx.strokeStyle = primary;
      ctx.beginPath(); ctx.arc(x, y, b.radius, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.25)'; ctx.fill();
      ctx.strokeStyle = 'white'; ctx.lineWidth = 1.1;
      ctx.beginPath(); ctx.arc(x - 0.4, y - 0.4, b.radius * 0.7, Math.PI, Math.PI * 1.55); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  };
  const restart = () => {
    cancelAnimationFrame(frame); frame = 0; last = 0;
    if (motion.matches || document.hidden || !inView) { ctx.clearRect(0, 0, width, height); return; }
    refreshColours(); frame = requestAnimationFrame(draw);
  };
  measure();
  const resizeObserver = new ResizeObserver(measure);
  resizeObserver.observe(poolFlow);
  const visibilityObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(([entry]) => {
        const visible = entry?.isIntersecting ?? false;
        if (visible !== inView) { inView = visible; restart(); }
      }, { rootMargin: '120px' })
    : undefined;
  visibilityObserver?.observe(poolFlow);
  window.addEventListener('resize', measure, { passive: true });
  document.addEventListener('visibilitychange', restart);
  motion.addEventListener('change', restart);
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(frame);
    frame = 0;
    resizeObserver.disconnect();
    visibilityObserver?.disconnect();
  });
  window.addEventListener('pageshow', () => {
    resizeObserver.observe(poolFlow);
    visibilityObserver?.observe(poolFlow);
    measure();
    restart();
  });
  restart();
}
