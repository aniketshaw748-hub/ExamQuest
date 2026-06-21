// Light/dark theme control. The INITIAL attribute is set by an inline script in index.html
// (before React mounts, so there's no flash of the wrong theme); this module reads and flips it
// at runtime and persists the choice. Default precedence: saved choice -> OS preference -> dark.
const KEY = "quest.theme";
const LIGHT_BG = "#f4f1ea";
const DARK_BG = "#0a0e17";

export function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  try { localStorage.setItem(KEY, t); } catch {}
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t === "light" ? LIGHT_BG : DARK_BG);
}

export function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}
