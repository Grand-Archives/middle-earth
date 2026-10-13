# Tolkien's Middle-earth

[![Deploy Pages](https://github.com/Grand-Archives/middle-earth/actions/workflows/pages.yml/badge.svg)](https://github.com/Grand-Archives/middle-earth/actions/workflows/pages.yml)

A bilingual guide to Tolkien's legendarium: an old-style map, a timeline of the Ages and profiles of peoples, languages, characters and places, with the books where each story is told.

| Language | Live site |
| --- | --- |
| Português (Brasil) | <https://grand-archives.github.io/middle-earth/> |
| English | <https://grand-archives.github.io/middle-earth/en/> |

Part of the [GrandArchives](https://github.com/Grand-Archives) organization. This is an unofficial fan project; see the [disclaimer](#disclaimer).

## About

From the Music that shaped the world to the departure of the Ring-bearers. The map shows where things happen, the timeline shows when, and the profiles explain who the peoples, languages and characters are and where to read about them.

## Features

- **Old-style map**: a hand-drawn parchment look (outlined peaks and trees) of the west of Middle-earth, built as SVG, with the places marked and a reading panel beside it. Pins work with mouse, touch and keyboard.
- **Timeline of the Ages**: a scaled ruler of the five Ages with key dates and the events of each one.
- **Profile explorer**: peoples, languages, characters and places in four tabs, with accent-insensitive search, linked names and the events where each profile appears.
- **Bookshelf**: the books where each story is told.
- **Family trees and branches** for peoples such as the Elves.
- **Reader dialog** and deep links (`#eras`, `#livros`, ...) that survive a language switch.
- **Two languages** (Portuguese and English) with a language selector that keeps the current hash and query string.

## Naming

The English version uses Tolkien's original names and terms (the Shire, Dwarves, Mirkwood, Mount Doom). The Portuguese version follows the current HarperCollins Brasil translation; where an older form is better known, it appears in parentheses.

## Tech stack

Plain HTML, CSS and JavaScript. No framework, no build step and no dependencies. The map is drawn in SVG by `js/app.js`; there are no raster images. The only external request is the Google Fonts stylesheet (IM Fell English, Alegreya Sans and IBM Plex Mono).

## Project structure

```text
.
├── CLAUDE.md                     # contributor/agent guide (architecture and rules)
├── README.md
├── .github/workflows/pages.yml   # deploys the site/ folder to GitHub Pages
└── site/                         # everything that gets published
    ├── index.html                # Portuguese page (site root)
    ├── en/index.html             # English page
    ├── sitemap.xml               # all language URLs with hreflang alternates
    ├── assets/icons/             # favicon.ico, favicon.svg, apple-touch-icon.png
    ├── css/style.css             # all styles (language-independent)
    ├── js/app.js                 # shared i18n core + page logic (no visible text)
    └── i18n/
        ├── languages.json        # languages offered by the selector
        ├── pt-BR/{ui.json,data.js}
        └── en/{ui.json,data.js}
```

Each language page is a thin HTML shell. `js/app.js` reads `<html lang>`, loads `i18n/<lang>/ui.json` (interface strings) and `i18n/<lang>/data.js` (profiles, Ages and events, books, sources and map labels), builds the page and renders the language selector. Map geometry and pin coordinates stay in `app.js`; everything the reader sees comes from the two i18n files.

## Running locally

The site loads JSON and ES modules with `fetch`/`import()`, so it must be served over HTTP; opening `index.html` through `file://` does not work.

```bash
cd site
python -m http.server 8000
# or: npx serve .
```

Then open <http://localhost:8000/> and <http://localhost:8000/en/>.

## Adding a language

`js/app.js` does not need to change.

1. Create `site/i18n/<code>/ui.json` (same keys as `pt-BR/ui.json`, including `lang.label`, the credits and the rights notice) and `site/i18n/<code>/data.js` (same structure and ids as `pt-BR/data.js`; only the text changes).
2. Add `{ "code": "<code>", "name": "<Native name>", "path": "<code>/" }` to `site/i18n/languages.json`.
3. Create `site/<code>/index.html` from the head template in [`CLAUDE.md`](CLAUDE.md): correct `lang`, title, description, Open Graph tags, canonical URL and `../` relative paths.
4. Add the new `hreflang` alternate to the `<head>` of every existing language page, and the new URL (with alternates) to `site/sitemap.xml`.
5. Serve the site and check: no console errors, favicons load, the selector lists the new language and switching keeps the hash and query.

Credits and the unofficial-fan-project notice are mandatory in every language.

## Deployment

Every push to `master` runs `.github/workflows/pages.yml`, which uploads `site/` as the GitHub Pages artifact and deploys it. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

## Contributing

Corrections to facts, links and translations are welcome through issues and pull requests.

- Branch: `master`.
- Commits are written in English and follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`...).
- Keep the project dependency-free and free of build steps.
- Do not edit the i18n core block at the top of `js/app.js` here; it is shared verbatim across all GrandArchives sites.

## Sources and credits

The base material is J.R.R. Tolkien's books, above all the Appendices of *The Lord of the Rings* and *The Silmarillion*. Dates and names were checked against Tolkien Gateway and Wikipedia; the full list of consulted pages is in the site's footer.

The map is an original drawing in the style of old maps and is not to scale. Dates before the Sun come from the annals Tolkien left in draft form and vary between versions. The texts of this guide are original.

## Disclaimer

This is an unofficial, free, non-profit fan project. It is not affiliated with or endorsed by the Tolkien Estate, Middle-earth Enterprises or any publisher. The works, names, characters and places mentioned belong to J.R.R. Tolkien and their respective rights holders. No excerpts of the works are reproduced; the texts are summaries and commentary for reference purposes.

## Copyright

Copyright © 2026 GrandArchives. Texts, map, organization and design of this guide.
