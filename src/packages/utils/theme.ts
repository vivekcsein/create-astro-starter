import { THEME_STORAGE_KEY } from "../configs/theme.config";

/**
 * Runs inline in <head> before first paint so the right `.dark` class is
 * on <html> immediately — prevents a flash of the wrong theme.
 * Stored "light"/"dark" wins; otherwise follow the system preference
 * and keep following it live.
 */
export const themeInitScript = `
(function () {
  try {
    var root = document.documentElement;
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var apply = function () {
      var s = localStorage.getItem("${THEME_STORAGE_KEY}");
      root.classList.toggle("dark", s === "dark" || (s !== "light" && mq.matches));
    };
    apply();
    mq.addEventListener("change", apply);
  } catch (_) {}
})();
`;
