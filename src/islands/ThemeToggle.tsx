import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

const TRANSITION_LOCK_ID = 'theme-transition-lock';

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark);
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  } catch {
    /* ignore */
  }
}

function getThemeFromDom() {
  return document.documentElement.classList.contains('dark');
}

function setTransitionOrigin(x: number, y: number, radius: number) {
  const root = document.documentElement;
  root.style.setProperty('--theme-x', `${x}px`);
  root.style.setProperty('--theme-y', `${y}px`);
  root.style.setProperty('--theme-r', `${radius}px`);
}

function lockTransitions() {
  if (document.getElementById(TRANSITION_LOCK_ID)) return;
  const style = document.createElement('style');
  style.id = TRANSITION_LOCK_ID;
  style.textContent = '*, *::before, *::after { transition: none !important; }';
  document.head.appendChild(style);
}

function unlockTransitions() {
  document.getElementById(TRANSITION_LOCK_ID)?.remove();
}

function clearTransitionOrigin() {
  const root = document.documentElement;
  root.classList.remove('theme-to-dark', 'theme-to-light');
  root.style.removeProperty('--theme-x');
  root.style.removeProperty('--theme-y');
  root.style.removeProperty('--theme-r');
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

export default function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(getThemeFromDom());
  }, []);

  const toggle = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    const nextDark = !getThemeFromDom();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startViewTransition = (document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    }).startViewTransition;

    const commit = () => {
      flushSync(() => {
        applyTheme(nextDark);
        setDark(nextDark);
      });
    };

    if (reduceMotion || typeof startViewTransition !== 'function') {
      commit();
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : event.clientX;
    const y = rect ? rect.top + rect.height / 2 : event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;
    setTransitionOrigin(x, y, endRadius);
    root.classList.add(nextDark ? 'theme-to-dark' : 'theme-to-light');
    lockTransitions();

    try {
      const transition = startViewTransition.call(document, commit);
      await transition.finished;
      await waitForPaint();
    } finally {
      clearTransitionOrigin();
      unlockTransitions();
      await waitForPaint();
    }
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Tema değiştir"
        className="h-10 w-10 cursor-pointer rounded-full bg-white/90 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:ring-white/10"
      />
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={dark ? 'Açık temaya geç' : 'Koyu temaya geç'}
      onClick={toggle}
      className="group cursor-pointer rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:ring-zinc-900/10 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      {dark ? (
        <svg className="h-6 w-6 stroke-zinc-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      ) : (
        <svg className="h-6 w-6 stroke-zinc-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      )}
    </button>
  );
}
