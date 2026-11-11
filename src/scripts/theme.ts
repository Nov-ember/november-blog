const THEME_KEY = "theme";
const LIGHT = "light";
const DARK = "dark";

function readPreference(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function savePreference(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Keep working without storage. */
  }
}

const palettes = ["nord", "catppuccin", "gruvbox", "everforest"];
const initialPalette = document.documentElement.dataset.palette ?? "nord";
let paletteValue = palettes.includes(initialPalette) ? initialPalette : "nord";

function getPreferredTheme(): string {
  const stored = readPreference(THEME_KEY);
  if (stored === LIGHT || stored === DARK) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? DARK
    : LIGHT;
}

// Reuse the value already set by the inline FOUC-prevention script if available.
let themeValue: string =
  (window as unknown as { __theme?: { value: string } }).__theme?.value ??
  getPreferredTheme();

function persist(): void {
  savePreference(THEME_KEY, themeValue);
  reflect();
}

function reflect(): void {
  const root = document.firstElementChild;
  root?.setAttribute("data-theme", themeValue);
  root?.setAttribute("data-palette", paletteValue);
  document
    .querySelectorAll<HTMLInputElement>('input[name="palette"]')
    .forEach(input => {
      input.checked = input.value === paletteValue;
    });
  root?.classList.toggle("dark", themeValue === DARK);
  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Fill <meta name="theme-color"> with the computed background colour so
  // Android's browser chrome matches the page background.
  const bg = window.getComputedStyle(document.body).backgroundColor;
  document
    .querySelector("meta[name='theme-color']")
    ?.setAttribute("content", bg);
}

function setup(): void {
  reflect();
  document
    .querySelector("#palette-picker")
    ?.addEventListener("change", event => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement) || input.name !== "palette")
        return;
      if (!palettes.includes(input.value)) return;
      paletteValue = input.value;
      savePreference("palette", paletteValue);
      reflect();
    });
  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    themeValue = themeValue === LIGHT ? DARK : LIGHT;
    persist();
  });
}

setup();

// Re-run after View Transitions navigation.
document.addEventListener("astro:after-swap", setup);

// Carry the theme-color value across View Transitions to prevent the
// Android navigation bar from flashing during page transitions.
document.addEventListener("astro:before-swap", event => {
  const nextRoot = (event as { newDocument: Document }).newDocument
    .documentElement;
  nextRoot.setAttribute("data-theme", themeValue);
  nextRoot.setAttribute("data-palette", paletteValue);
  nextRoot.classList.toggle("dark", themeValue === DARK);
  const color = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");
  if (color) {
    (event as { newDocument: Document }).newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", color);
  }
});

// Sync with OS-level dark/light preference changes.
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches }) => {
    themeValue = matches ? DARK : LIGHT;
    persist();
  });
