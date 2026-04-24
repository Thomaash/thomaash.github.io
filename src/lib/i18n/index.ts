import en from "./en.json";
import cs from "./cs.json";
import de from "./de.json";

type TranslationKey = keyof typeof en;

const translations: Record<string, Record<string, string>> = { en, cs, de };

/**
 * Get a translated string for the given language and key.
 * Falls back to English if the key is not found in the requested language.
 */
export function t(lang: string, key: TranslationKey): string {
  return translations[lang]?.[key] ?? translations["en"][key] ?? key;
}

const localeMap: Record<string, string> = {
  en: "en_US",
  cs: "cs_CZ",
  de: "de_DE",
};

/**
 * Get the full locale string (e.g. "en_US") for a given language code.
 */
export function getLocale(lang: string): string {
  return localeMap[lang] ?? "en_US";
}

/**
 * Get the base URL for a given language, with trailing slash.
 */
export function getLangUrl(lang: string): string {
  const base = "http://www.vycital.eu";
  if (lang === "en") return `${base}/`;
  return `${base}/${lang}/`;
}
