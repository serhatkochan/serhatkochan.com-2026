const ANIMSAT_HOST = 'animsat.serhatkochan.com';
const BIPROMPTER_HOST = 'biprompter.serhatkochan.com';
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

const SUPPORT_ALIASES = {
  '/support': '/tr/support',
  '/en/support': '/en-US/support',
  '/de/support': '/de-DE/support',
  '/fr/support': '/fr-FR/support',
  '/es/support': '/es-ES/support',
  '/nl/support': '/nl-NL/support',
  '/pt/support': '/pt-BR/support',
  '/ar/support': '/ar-SA/support',
  '/zh/support': '/zh-Hans/support',
  '/en-GB/support': '/en-US/support',
  '/en-AU/support': '/en-US/support',
  '/en-CA/support': '/en-US/support',
  '/fr-CA/support': '/fr-FR/support',
  '/es-MX/support': '/es-ES/support',
  '/pt-PT/support': '/pt-BR/support',
};

/** Landing + policy locale segmentleri (tr ana dil; /tr → /) */
const ANIMSAT_LOCALES = new Set([
  'tr',
  'en-US',
  'de-DE',
  'fr-FR',
  'es-ES',
  'it',
  'nl-NL',
  'ja',
  'ko',
  'zh-Hans',
  'zh-Hant',
  'ar-SA',
  'pt-BR',
  'ru',
]);

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

  // --- BIPROMPTER SUBDOMAIN HANDLER ---
  if (url.hostname === BIPROMPTER_HOST) {
    if (
      pathname.startsWith('/_astro') ||
      pathname.startsWith('/assets') ||
      pathname.startsWith('/biprompter') ||
      pathname === '/humans.txt'
    ) {
      return;
    }

    if (
      pathname === '/favicon.ico' ||
      pathname === '/favicon.png' ||
      pathname === '/favicon.svg' ||
      pathname === '/apple-touch-icon.png'
    ) {
      return rewrite(url, `/biprompter${pathname === '/apple-touch-icon.png' ? '/app-icon.png' : pathname}`);
    }

    if (MAIN_SITE_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))) {
      return Response.redirect(`${MAIN_SITE}${url.pathname}${url.search}`, 308);
    }

    if (pathname === '/biprompter' || pathname.startsWith('/biprompter/')) {
      const stripped = pathname.slice('/biprompter'.length) || '/';
      const destination = new URL(url);
      destination.pathname = stripped;
      return Response.redirect(destination, 308);
    }

    if (pathname === '/robots.txt') {
      return rewrite(url, '/biprompter-robots.txt');
    }

    if (pathname === '/sitemap.xml') {
      return rewrite(url, '/biprompter/sitemap.xml');
    }

    if (pathname === '/llms.txt') {
      return rewrite(url, '/biprompter-llms.txt');
    }

    if (pathname === '/manifest.webmanifest') {
      return rewrite(url, '/biprompter-manifest.webmanifest');
    }

    if (pathname === '/') {
      return rewrite(url, '/biprompter');
    }

    return rewrite(url, `/biprompter${pathname}`);
  }

  // --- ANIMSAT SUBDOMAIN HANDLER ---
  if (url.hostname === ANIMSAT_HOST) {
    if (pathname === '/favicon.png' || pathname === '/apple-touch-icon.png') {
      return rewrite(url, '/animsat-icon.png');
    }

    if (
      pathname.startsWith('/_astro') ||
      pathname.startsWith('/assets') ||
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

    const alias = POLICY_ALIASES[pathname] || SUPPORT_ALIASES[pathname];
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

    if (pathname === '/llms.txt') {
      return rewrite(url, '/animsat-llms.txt');
    }

    if (pathname === '/llms-full.txt') {
      return rewrite(url, '/animsat-llms-full.txt');
    }

    if (pathname === '/manifest.webmanifest') {
      return rewrite(url, '/animsat-manifest.webmanifest');
    }

    if (pathname === '/') {
      return rewrite(url, '/animsat');
    }

    // /tr → ana landing (canonical)
    if (pathname === '/tr') {
      const destination = new URL(url);
      destination.pathname = '/';
      return Response.redirect(destination, 301);
    }

    // /en-US, /ja, … → /animsat/en-US, …
    const localeMatch = pathname.match(/^\/([^/]+)$/);
    if (localeMatch && ANIMSAT_LOCALES.has(localeMatch[1])) {
      return rewrite(url, `/animsat/${localeMatch[1]}`);
    }

    if (/^\/[^/]+\/(policy|support)$/.test(pathname)) {
      return rewrite(url, `/animsat${pathname}`);
    }

    return notFound(url);
  }

  // --- MAIN SITE HANDLER (serhatkochan.com) ---
  // Subdomain sayfalarını ana sitede gizle (404)
  if (pathname === '/animsat' || pathname.startsWith('/animsat/')) {
    return notFound(url);
  }
  if (pathname === '/biprompter' || pathname.startsWith('/biprompter/')) {
    return notFound(url);
  }
}

export const config = {
  matcher: ['/', '/((?!_astro/|assets/).*)'],
};
