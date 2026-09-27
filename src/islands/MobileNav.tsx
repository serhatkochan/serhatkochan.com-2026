import { useEffect, useState } from 'react';
import { navItemIsActive } from '../lib/nav';

type NavItem = { name: string; href: string };

type Props = {
  items: NavItem[];
  currentPath: string;
};

export default function MobileNav({ items, currentPath }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="cursor-pointer rounded-full border border-zinc-200/80 bg-zinc-50/50 px-3 py-1 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
      >
        Menü
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Menüyü kapat"
            className="absolute inset-0 cursor-pointer bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="absolute inset-x-4 top-20 rounded-3xl bg-white/95 p-6 shadow-2xl ring-1 ring-zinc-900/10 backdrop-blur-2xl dark:bg-zinc-900/95 dark:ring-white/10"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Gezinme</h2>
              <button
                type="button"
                aria-label="Kapat"
                className="cursor-pointer rounded-full p-1.5 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <nav>
              <ul className="divide-y divide-zinc-100 dark:divide-zinc-100/5">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={navItemIsActive(item.href, currentPath) ? 'page' : undefined}
                      className={`block cursor-pointer py-3 text-base ${navItemIsActive(item.href, currentPath) ? 'text-primary' : 'text-zinc-800 dark:text-zinc-300'}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
