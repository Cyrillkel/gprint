export const locales = ["en", "ru"] as const;
// export const locales = ["en", "ru", "de", "hi", "zh"] as const;
export const defaultLocale = "en" as const;

// Типизированные локали
export type Locale = typeof locales[number];

// Флаги для переключателя языков
export const flagsMap: Record<string, string> = {
  en: "gb",
  ru: "ru",
};
