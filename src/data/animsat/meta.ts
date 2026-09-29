export const ANIMSAT_NAME = 'Anımsat';
export const ANIMSAT_TAGLINE = 'Kaç Gün Kaldı';
export const ANIMSAT_SUPPORT_EMAIL = 'serhatkochan@hotmail.com.tr';
export const ANIMSAT_SITE_URL = 'https://animsat.serhatkochan.com';
export const ANIMSAT_DEFAULT_LOCALE = 'tr' as const;
export const ANIMSAT_POLICY_UPDATED_ISO = '2026-08-16';
export const ANIMSAT_APP_STORE_ID = '6801894310';
export const ANIMSAT_APP_STORE_URL =
  'https://apps.apple.com/tr/app/an%C4%B1msat-ka%C3%A7-g%C3%BCn-kald%C4%B1/id6801894310?l=tr';
export const ANIMSAT_PLAY_STORE_URL = '';
export const ANIMSAT_OG_IMAGE = '/animsat-icon.png';

export function getAppStoreUrl(locale: string = 'tr'): string {
  if (!ANIMSAT_APP_STORE_ID) return '';
  if (locale === 'tr') {
    return ANIMSAT_APP_STORE_URL;
  }
  return `https://apps.apple.com/app/id${ANIMSAT_APP_STORE_ID}`;
}

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
