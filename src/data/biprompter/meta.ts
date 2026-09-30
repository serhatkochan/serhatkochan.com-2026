export const BIPROMPTER_NAME = 'Biprompter';
export const BIPROMPTER_TAGLINE = 'Dynamic Island Teleprompter';
export const BIPROMPTER_SITE_URL = 'https://biprompter.serhatkochan.com';
export const BIPROMPTER_GITHUB_URL = 'https://github.com/serhatkochan/biprompter';
export const BIPROMPTER_RELEASES_URL = 'https://github.com/serhatkochan/biprompter/releases';
export const BIPROMPTER_OG_IMAGE = '/biprompter/logo.png';
export const BIPROMPTER_ICON = '/biprompter/app-icon.png';

export const BIPROMPTER_TITLE =
  'Biprompter — Windows için Mac Dynamic Island Estetiğinde Yapay Zekâ Ses Takipli Teleprompter';

export const BIPROMPTER_DESCRIPTION =
  'Windows için %100 yerel Vosk AI ses takipli, OBS ve ekran paylaşımlarında görünmez olabilen, tıklama geçirgen ve minimal çentik modlu açık kaynaklı masaüstü prompter.';

export function biprompterPublicPath(path = '/') {
  if (path === '/' || path === '') return '/';
  return `/${path.replace(/^\/+|\/+$/g, '')}`;
}

/** Yerelde `/biprompter...`, production’da alt alan adı. */
export function biprompterHref(path = '/') {
  const publicPath = biprompterPublicPath(path);
  if (import.meta.env.DEV) {
    return publicPath === '/' ? '/biprompter' : `/biprompter${publicPath}`;
  }
  return `${BIPROMPTER_SITE_URL}${publicPath === '/' ? '/' : publicPath}`;
}

export function biprompterCanonical(path = '/') {
  const publicPath = biprompterPublicPath(path);
  return `${BIPROMPTER_SITE_URL}${publicPath === '/' ? '/' : publicPath}`;
}

export const BIPROMPTER_SHORTCUTS = [
  { keys: ['Alt', 'P'], altKey: 'Boşluk', action: 'Prompteri Başlat / Duraklat', desc: 'Konuşma veya otomatik akışı durdurur veya devam ettirir.' },
  { keys: ['Alt', 'D'], action: 'Dynamic Island ↔ Zıplayan Ok (Çentik)', desc: 'Ekranın tepesinde zıplayan minimalist bir oka küçülür veya adaya genişler.' },
  { keys: ['Alt', 'C'], action: 'Tıklama Geçirgenliği (Click-Through)', desc: 'Fare tıklamalarını doğrudan prompter arkasındaki pencereye iletir.' },
  { keys: ['Alt', 'G'], action: 'Hayalet Modu (OBS / Yayın Gizleme)', desc: 'Win32 DWM API ile pencereyi Zoom, Teams, Meet ve OBS kayıtlarından gizler.' },
  { keys: ['Alt', 'M'], action: 'Fare İmlecini Takip Et', desc: 'Prompter farenin peşinden yumuşak fizik ivmesiyle (glide damping) süzülür.' },
  { keys: ['Alt', 'S'], action: 'Mikrofon Sustur / Aç', desc: 'Ses tanıma motorunu geçici olarak sessize alır.' },
  { keys: ['Alt', 'X'], altKey: 'ESC', action: 'Stüdyo Editörüne Dön', desc: 'Yüzen adayı kapatıp ana kontrol paneline geri döner.' },
  { keys: ['PageUp', 'PageDown'], action: 'Bölümler Arası Geçiş', desc: 'Metin içindeki sonraki ya da önceki bölüme anında atlar.' },
  { keys: ['↑', '↓'], action: 'Hız Arttır / Azalt', desc: 'Klasik veya sesli akış hız hassasiyetini ayarlar.' },
];

export const BIPROMPTER_TECH_STACK = [
  { name: 'Tauri v2', role: 'Masaüstü Motoru', badge: 'Rust Backend' },
  { name: 'React 19', role: 'Arayüz Katmanı', badge: 'TypeScript' },
  { name: 'Vosk Wasm', role: 'Yerel Konuşma AI', badge: '%100 Çevrimdışı' },
  { name: 'Astro 5 + Vite', role: 'Statik Paketleyici', badge: 'Ultra Hafif' },
  { name: 'Tailwind CSS v4', role: 'Tasarım Sistemi', badge: 'Modern CSS' },
  { name: 'Win32 API', role: 'DWM & Pencere', badge: 'C++ / Rust FFI' },
];
