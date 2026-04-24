const localeMap: Record<string, string> = {
  en: "en-US",
  cs: "cs-CZ",
  de: "de-DE",
};

/**
 * Get the full locale string (e.g. "en-US") for a given language code.
 */
export function getLocale(lang: string): string {
  return localeMap[lang] ?? "en-US";
}

/**
 * Get the base URL for a given language, with trailing slash.
 */
export function getLangUrl(lang: string): string {
  const base = "https://www.vycital.eu";
  if (lang === "en") return `${base}/`;
  return `${base}/${lang}/`;
}
