export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint (inlined in <head>): applies the saved theme, or the
 * OS preference, so the page never flashes the wrong colours. Also follows OS
 * changes until the visitor picks a theme themselves.
 */
export const themeBootScript = `(function(){try{var k="${THEME_STORAGE_KEY}",d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: light)");var s=localStorage.getItem(k);d.dataset.theme=s||(m.matches?"light":"dark");m.addEventListener("change",function(e){if(!localStorage.getItem(k))d.dataset.theme=e.matches?"light":"dark";});}catch(e){}})();`;
