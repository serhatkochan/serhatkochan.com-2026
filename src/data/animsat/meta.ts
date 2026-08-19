export const ANIMSAT_NAME = 'Anımsat';
export const ANIMSAT_TAGLINE = 'Kaç Gün Kaldı';
export const ANIMSAT_SUPPORT_EMAIL = 'serhatkochan@hotmail.com.tr';
export const ANIMSAT_SITE_URL = 'https://animsat.serhatkochan.com';
export const ANIMSAT_DEFAULT_LOCALE = 'tr' as const;
export const ANIMSAT_POLICY_UPDATED_ISO = '2026-08-16';

export const ANIMSAT_DESCRIPTION =
  'Doğum günü, düğün, yolculuk… Tarihi kaydet, ana ekranda kaç gün kaldığını gör. Verilerin yalnızca bu cihazda durur.';

export function animsatPublicPath(path = '/') {
  if (path === '/' || path === '') return '/';
  return `/${path.replace(/^\/+|\/+$/g, '')}`;
}

/** Yerelde `/animsat...`, production’da alt alan adı. */
export function animsatHref(path = '/') {
  const publicPath = animsatPublicPath(path);
  if (import.meta.env.DEV) {
    return publicPath === '/' ? '/animsat' : `/animsat${publicPath}`;
  }
  return `${ANIMSAT_SITE_URL}${publicPath === '/' ? '/' : publicPath}`;
}

export function animsatCanonical(path = '/') {
  const publicPath = animsatPublicPath(path);
  return `${ANIMSAT_SITE_URL}${publicPath === '/' ? '/' : publicPath}`;
}

export const ANIMSAT_PATH = animsatHref('/');
