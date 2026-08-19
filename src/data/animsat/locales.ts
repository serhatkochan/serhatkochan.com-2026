import { animsatCanonical, animsatHref } from './meta';

export const ANIMSAT_POLICY_LOCALES = [
  { id: 'tr', nativeName: 'Türkçe', htmlLang: 'tr', ogLocale: 'tr_TR', hreflang: 'tr', languageLabel: 'Dil', rtl: false },
  { id: 'en-US', nativeName: 'English', htmlLang: 'en-US', ogLocale: 'en_US', hreflang: 'en-US', languageLabel: 'Language', rtl: false },
  { id: 'de-DE', nativeName: 'Deutsch', htmlLang: 'de-DE', ogLocale: 'de_DE', hreflang: 'de-DE', languageLabel: 'Sprache', rtl: false },
  { id: 'fr-FR', nativeName: 'Français', htmlLang: 'fr-FR', ogLocale: 'fr_FR', hreflang: 'fr-FR', languageLabel: 'Langue', rtl: false },
  { id: 'es-ES', nativeName: 'Español', htmlLang: 'es-ES', ogLocale: 'es_ES', hreflang: 'es-ES', languageLabel: 'Idioma', rtl: false },
  { id: 'it', nativeName: 'Italiano', htmlLang: 'it', ogLocale: 'it_IT', hreflang: 'it', languageLabel: 'Lingua', rtl: false },
  { id: 'nl-NL', nativeName: 'Nederlands', htmlLang: 'nl-NL', ogLocale: 'nl_NL', hreflang: 'nl-NL', languageLabel: 'Taal', rtl: false },
  { id: 'ja', nativeName: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP', hreflang: 'ja', languageLabel: '言語', rtl: false },
  { id: 'ko', nativeName: '한국어', htmlLang: 'ko', ogLocale: 'ko_KR', hreflang: 'ko', languageLabel: '언어', rtl: false },
  { id: 'zh-Hans', nativeName: '简体中文', htmlLang: 'zh-Hans', ogLocale: 'zh_CN', hreflang: 'zh-Hans', languageLabel: '语言', rtl: false },
  { id: 'zh-Hant', nativeName: '繁體中文', htmlLang: 'zh-Hant', ogLocale: 'zh_TW', hreflang: 'zh-Hant', languageLabel: '語言', rtl: false },
  { id: 'ar-SA', nativeName: 'العربية', htmlLang: 'ar-SA', ogLocale: 'ar_SA', hreflang: 'ar-SA', languageLabel: 'اللغة', rtl: true },
  { id: 'pt-BR', nativeName: 'Português', htmlLang: 'pt-BR', ogLocale: 'pt_BR', hreflang: 'pt-BR', languageLabel: 'Idioma', rtl: false },
  { id: 'ru', nativeName: 'Русский', htmlLang: 'ru', ogLocale: 'ru_RU', hreflang: 'ru', languageLabel: 'Язык', rtl: false },
] as const;

export type AnimsatLocale = (typeof ANIMSAT_POLICY_LOCALES)[number]['id'];

const LOCALE_BY_ID = new Map(ANIMSAT_POLICY_LOCALES.map((item) => [item.id, item]));

export function isAnimsatLocale(value: string | undefined): value is AnimsatLocale {
  return Boolean(value) && LOCALE_BY_ID.has(value as AnimsatLocale);
}

export function getAnimsatLocale(locale: AnimsatLocale) {
  return LOCALE_BY_ID.get(locale) ?? ANIMSAT_POLICY_LOCALES[0];
}

export function policyPath(locale: AnimsatLocale) {
  return animsatHref(`/${locale}/policy`);
}

export function policyCanonical(locale: AnimsatLocale) {
  return animsatCanonical(`/${locale}/policy`);
}
