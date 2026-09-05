export const languages = { en: 'EN', id: 'ID' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** A bilingual string. Every piece of copy on the site is authored as one of these. */
export type L = { en: string; id: string };

/** Pick the active language out of a bilingual string. */
export const t = (value: L, lang: Lang): string => value[lang] ?? value[defaultLang];

/** Read the active language from the current URL (`/id/...` => `id`). */
export function getLang(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}

/**
 * Build a href for the active language.
 * `path` is always the canonical English-rooted path, e.g. `/services/design-system`.
 */
export function localize(path: string, lang: Lang): string {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/|\/$/g, '')}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/id' : `/id${clean}`;
}

/** The same page in the other language, for the language switcher. */
export function alternatePath(url: URL, lang: Lang): string {
  const stripped = url.pathname.replace(/^\/id(?=\/|$)/, '') || '/';
  return localize(stripped, lang === 'en' ? 'id' : 'en');
}
