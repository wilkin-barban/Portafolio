/**
 * Gestión del tema claro/oscuro
 */

export const setupThemeToggle = () => {
  const toggleBtn = document.querySelector("[data-theme-toggle]");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.dataset.theme = currentTheme;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = newTheme;
      localStorage.setItem("portfolio-theme", newTheme);
    });
  }
};
