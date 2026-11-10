# Maple Mono NF CN

These webfonts come from Maple Mono NF CN version 7.900 installed on the author's
Windows machine (`C:\Windows\Fonts`). Upstream:
https://github.com/subframe7536/maple-font

The Regular (400), Medium (500), SemiBold (600), and Bold (700) TTF files were
compressed to WOFF2 using FontTools. No character subsetting was applied: Chinese
characters, programming ligatures, and Nerd Font icons remain available. The
font's original name, copyright, and license metadata are retained. See OFL.txt.

Astro registers these files in `astro.config.ts` using `fontProviders.local()`.
`src/layouts/Layout.astro` includes the font declaration, and
`src/styles/theme.css` selects it through `--font-app`.

The complete Chinese fonts are still sizeable after compression. They are not
preloaded; the browser requests the weights used on a page. If initial page
loading becomes too slow, consider a separate character-subsetting workflow.
Adding posts does not require regenerating these font files.

