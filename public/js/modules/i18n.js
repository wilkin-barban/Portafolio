/**
 * Módulo de Internacionalización (i18n)
 */

const localeCache = new Map();

export const loadLocale = async (lang) => {
  if (localeCache.has(lang)) {
    return localeCache.get(lang);
  }

  try {
    const response = await fetch(`/locales/${lang}.json?v=20261109-3`);
    if (!response.ok) throw new Error(`No se pudo cargar /locales/${lang}.json`);
    const data = await response.json();
    localeCache.set(lang, data);
    return data;
  } catch (error) {
    console.error(`Error al cargar idioma ${lang}:`, error);
    // Si falla y no es 'es', intentar fallback a español
    if (lang !== "es") {
      return loadLocale("es");
    }
    throw error;
  }
};

export const detectLanguage = () => {
  const saved = localStorage.getItem("portfolio-language");
  if (saved && ["es", "en", "pt"].includes(saved)) return saved;
  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  return ["es", "en", "pt"].includes(browserLang) ? browserLang : "es";
};

export const getTranslationValue = (path, source) =>
  path.split(".").reduce((value, key) => value?.[key], source);

export const renderStaticText = (locale, currentLang) => {
  document.documentElement.lang = currentLang;
  document.title = locale.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", locale.meta.description);
  document.querySelector("[data-language-switcher]")?.setAttribute("aria-label", locale.meta.languageSelector);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = getTranslationValue(element.dataset.i18n, locale);
    if (text) element.textContent = text;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":");
      const val = getTranslationValue(key.trim(), locale);
      if (val) element.setAttribute(attr.trim(), val);
    });
  });

  const about = document.querySelector("[data-about-text]");
  if (about && locale.about?.paragraphs) {
    about.innerHTML = locale.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
  }
};

export const setupLanguageSwitcher = (onLanguageChange) => {
  const switcher = document.querySelector("[data-language-switcher]");
  if (!switcher) return;

  switcher.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", async () => {
      const nextLang = button.dataset.langOption;
      switcher.closest(".language-menu")?.removeAttribute("open");
      await onLanguageChange(nextLang);
    });
  });
};
