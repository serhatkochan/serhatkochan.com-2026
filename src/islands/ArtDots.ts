import { createNoise3D } from 'simplex-noise';

const SCALE = 200;
const LENGTH = 5;
const BASE_SPACING = 15;

type Point = { x: number; y: number; opacity: number };

function getSpacing() {
  return window.matchMedia('(max-width: 768px)').matches ? 22 : BASE_SPACING;
}

export function initArtDots(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const noise3d = createNoise3D();
  let width = window.innerWidth;
  let height = window.innerHeight;
  let spacing = getSpacing();
  let points: Point[] = [];
  let frameId = 0;
  let running = true;

  const rebuildPoints = () => {
    points = [];
    for (let x = -spacing / 2; x < width + spacing; x += spacing) {
      for (let y = -spacing / 2; y < height + spacing; y += spacing) {
        points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 });
      }
    }
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    spacing = getSpacing();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    rebuildPoints();
  };

  const getForce = (x: number, y: number, z: number) =>
    (noise3d(x / SCALE, y / SCALE, z) - 0.5) * 2 * Math.PI;

  const isTransitioning = () => {
    const root = document.documentElement;
    return root.classList.contains('theme-to-dark') || root.classList.contains('theme-to-light');
  };

  const tick = () => {
    if (!running) return;

    if (isTransitioning()) {
      frameId = window.requestAnimationFrame(tick);
      return;
    }

    const t = Date.now() / 10000;
    const isDark = document.documentElement.classList.contains('dark');

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = isDark ? '#cccccc' : '#71717a';

    for (const point of points) {
      const rad = getForce(point.x, point.y, t);
      const len = (noise3d(point.x / SCALE, point.y / SCALE, t * 2) + 0.5) * LENGTH;
      const nx = point.x + Math.cos(rad) * len;
      const ny = point.y + Math.sin(rad) * len;
      const alpha = (Math.abs(Math.cos(rad)) * 0.8 + 0.2) * point.opacity * (isDark ? 0.45 : 0.48);

      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(nx, ny, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    frameId = window.requestAnimationFrame(tick);
  };

  const onVisibility = () => {
    running = !document.hidden;
    if (running) {
      cancelAnimationFrame(frameId);
      tick();
    }
  };

  const onResize = () => resize();

  resize();
  tick();

  window.addEventListener('resize', onResize, { passive: true });
  document.addEventListener('visibilitychange', onVisibility);

  return () => {
    running = false;
    cancelAnimationFrame(frameId);
    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibility);
  };
}
