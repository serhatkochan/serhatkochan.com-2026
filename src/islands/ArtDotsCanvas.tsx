import { useEffect, useRef } from 'react';
import { initArtDots } from './ArtDots';

export default function ArtDotsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const cleanup = initArtDots(canvas);
    document.documentElement.classList.add('ready');

    return () => {
      cleanup();
      document.documentElement.classList.remove('ready');
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="art-dots-canvas"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
