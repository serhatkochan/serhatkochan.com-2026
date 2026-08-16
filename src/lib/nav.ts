export function navItemIsActive(href: string, currentPath: string) {
  if (href === '/projects') {
    return currentPath === '/projects' || currentPath.startsWith('/animsat');
  }

  return currentPath === href;
}
