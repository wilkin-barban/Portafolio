/**
 * Portafolio de Wilkin Barban — Punto de Entrada Principal (ES Module)
 */
"use strict";

import { setupThemeToggle } from "./modules/theme.js";
import { setupParticles } from "./modules/particles.js";
import {
  setupNavigation,
  setupCounters,
  setupCardsTilt,
  refreshReveals
} from "./modules/ui.js";
import { closeGalleryViewer } from "./modules/gallery.js";
import { openSupportDialog, closeSupportDialog } from "./modules/support.js";
import {
  loadLocale,
  detectLanguage,
  renderStaticText,
  setupLanguageSwitcher
} from "./modules/i18n.js";
import {
  renderSkills,
  renderServices,
  renderContacts,
  renderProjects,
  showProject
} from "./modules/projects.js";

// Estado de la aplicación
let currentLang = "es";
let activeProjectId = null;
let localeData = null;
let projectMeta = [];
let appConfig = {
  contactLinks: [],
  supportTargets: {},
  sharedSkills: []
};

// Control del Loader
document.body.classList.add("is-loading");
window.addEventListener("load", () => {
  const loader = document.querySelector("[data-loader]");
  window.setTimeout(() => {
    loader?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  }, 360);
});

// Combinar metadatos técnicos con textos traducidos del proyecto
const getMergedProjects = () => {
  if (!localeData?.projects?.projects) return [];
  return localeData.projects.projects.map((project, index) => ({
    ...(projectMeta[index] || {}),
    ...project
  }));
};

// Renderizado completo del contenido reactivo
const renderContent = async () => {
  document.body.classList.add("is-translating");

  renderStaticText(localeData, currentLang);
  renderSkills(localeData);
  renderServices(localeData);

  const projects = getMergedProjects();
  renderProjects({
    projects,
    locale: localeData,
    onSelectProject: async (id) => {
      activeProjectId = id;
      await showProject({
        projectId: id,
        projects: getMergedProjects(),
        locale: localeData,
        shouldScroll: true
      });
    }
  });

  renderContacts({
    locale: localeData,
    currentLang,
    contactLinks: appConfig.contactLinks,
    onSupportClick: () => {
      openSupportDialog({
        currentLang,
        supportTargets: appConfig.supportTargets,
        getSupportText: (key) => localeData.support[key]
      });
    }
  });

  refreshReveals();

  if (activeProjectId) {
    await showProject({
      projectId: activeProjectId,
      projects,
      locale: localeData,
      shouldScroll: false
    });
  }

  window.setTimeout(() => document.body.classList.remove("is-translating"), 180);
};

// Cambio de idioma
const handleLanguageChange = async (nextLang) => {
  if (nextLang === currentLang) return;

  currentLang = nextLang;
  localStorage.setItem("portfolio-language", currentLang);

  document.querySelectorAll("[data-language-switcher] button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langOption === currentLang);
  });

  localeData = await loadLocale(currentLang);
  await renderContent();
};

// Arranque inicial (Boot)
const boot = async () => {
  setupThemeToggle();

  // Carga de configuración y metadatos
  try {
    const [metaRes, configRes] = await Promise.all([
      fetch("/data/projects.json?v=20261114-1"),
      fetch("/data/config.json?v=20261114-1")
    ]);
    if (metaRes.ok) projectMeta = await metaRes.json();
    if (configRes.ok) appConfig = await configRes.json();
  } catch (error) {
    console.warn("Usando valores por defecto ante fallo de carga de datos:", error);
  }

  // Idioma inicial
  currentLang = detectLanguage();
  document.querySelectorAll("[data-language-switcher] button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langOption === currentLang);
  });

  localeData = await loadLocale(currentLang);
  await renderContent();

  // Inicializar componentes interactivos
  setupLanguageSwitcher(handleLanguageChange);
  setupNavigation();
  setupCounters();
  setupParticles();
  setupCardsTilt();

  // Atajos de teclado (Escape cierra modales)
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeGalleryViewer();
      closeSupportDialog();
    }
  });
};

boot();
