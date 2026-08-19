function hrefPathname(href: string) {
  if (/^https?:\/\//i.test(href)) {
    try {
      return new URL(href).pathname.replace(/\/$/, '') || '/';
    } catch {
      return href;
    }
  }

  return href.replace(/\/$/, '') || '/';
}

export function navItemIsActive(href: string, currentPath: string) {
  const hrefPath = hrefPathname(href);
  const current = currentPath.replace(/\/$/, '') || '/';

  if (hrefPath === '/projects') {
    return current === '/projects' || current.startsWith('/animsat');
  }

  return current === hrefPath;
}
