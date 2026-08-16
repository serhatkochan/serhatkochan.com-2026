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
        className="cursor-pointer rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
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
            className="absolute inset-x-4 top-8 rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-medium">Menü</h2>
              <button
                type="button"
                aria-label="Kapat"
                className="cursor-pointer rounded-full p-1 text-zinc-500"
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
