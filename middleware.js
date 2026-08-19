const ANIMSAT_HOST = 'animsat.serhatkochan.com';
const MAIN_SITE = 'https://www.serhatkochan.com';

const POLICY_ALIASES = {
  '/policy': '/tr/policy',
  '/en/policy': '/en-US/policy',
  '/de/policy': '/de-DE/policy',
  '/fr/policy': '/fr-FR/policy',
  '/es/policy': '/es-ES/policy',
  '/nl/policy': '/nl-NL/policy',
  '/pt/policy': '/pt-BR/policy',
  '/ar/policy': '/ar-SA/policy',
  '/zh/policy': '/zh-Hans/policy',
  '/en-GB/policy': '/en-US/policy',
  '/en-AU/policy': '/en-US/policy',
  '/en-CA/policy': '/en-US/policy',
  '/fr-CA/policy': '/fr-FR/policy',
  '/es-MX/policy': '/es-ES/policy',
  '/pt-PT/policy': '/pt-BR/policy',
};

const MAIN_SITE_PREFIXES = ['/notes', '/projects', '/about', '/creating', '/rss.xml'];

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname || '/';
}

function rewrite(url, pathname) {
  const destination = new URL(url);
  destination.pathname = pathname;
  return new Response(null, {
    headers: {
      'x-middleware-rewrite': destination.toString(),
    },
  });
}

function notFound(url) {
  const destination = new URL(url);
  destination.pathname = '/404';
  return new Response(null, {
    status: 404,
    headers: {
      'x-middleware-rewrite': destination.toString(),
    },
  });
}

export default function middleware(request) {
  const url = new URL(request.url);
  const pathname = normalizePath(url.pathname);

  if (url.hostname !== ANIMSAT_HOST) {
    if (pathname === '/animsat' || pathname.startsWith('/animsat/')) {
      return notFound(url);
    }
    return;
  }

  if (
    pathname.startsWith('/_astro') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.png' ||
    pathname === '/apple-touch-icon.png' ||
    pathname === '/manifest.webmanifest' ||
    pathname === '/humans.txt'
  ) {
    return;
  }

  if (MAIN_SITE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    return Response.redirect(`${MAIN_SITE}${url.pathname}${url.search}`, 308);
  }

  if (pathname === '/animsat' || pathname.startsWith('/animsat/')) {
    const stripped = pathname.slice('/animsat'.length) || '/';
    const destination = new URL(url);
    destination.pathname = stripped;
    return Response.redirect(destination, 308);
  }

  const alias = POLICY_ALIASES[pathname];
  if (alias) {
    const destination = new URL(url);
    destination.pathname = alias;
    return Response.redirect(destination, 308);
  }

  if (pathname === '/robots.txt') {
    return rewrite(url, '/animsat-robots.txt');
  }

  if (pathname === '/sitemap.xml') {
    return rewrite(url, '/animsat/sitemap.xml');
  }

  if (pathname === '/') {
    return rewrite(url, '/animsat');
  }

  if (/^\/[^/]+\/policy$/.test(pathname)) {
    return rewrite(url, `/animsat${pathname}`);
  }
}

export const config = {
  matcher: ['/', '/((?!_astro/|assets/).*)'],
};
