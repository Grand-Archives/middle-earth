# CLAUDE.md

**Always respond to the user in Brazilian Portuguese (pt-BR)**, regardless of the language of the conversation, an issue/PR or any file. Everything written into the repository (code, comments, commits, docs) stays in English, except the site's own translated content (`site/i18n/<code>/`).

## What this repo is

"A Terra-média de Tolkien": a static, multilingual guide to Tolkien's Middle-earth (old-style SVG map, Ages timeline, profile explorer, bookshelf), published on GitHub Pages at `https://grandarchives.github.io/middle-earth/`. Plain HTML/CSS/JS: no framework, no build step, no dependencies. Part of the GrandArchives org (sibling sites: stephen-king, harry-potter).

## Folder structure

```
.github/workflows/pages.yml     publishes the whole site/ folder to GitHub Pages
site/                           everything that is deployed
  index.html                    pt-BR page (site root, keeps the published URL)
  sitemap.xml                   one <url> per language, with xhtml hreflang alternates
  <code>/index.html             pages of other languages (e.g. site/en/index.html)
  assets/icons/                 favicon.ico, favicon.svg, apple-touch-icon.png (shared by all languages)
  assets/img/                   language-independent images (none yet)
  css/style.css                 all styles
  js/app.js                     i18n core (pasted verbatim at the top) + logic only: NO user-visible text
  i18n/languages.json           [{ "code", "name", "path" }] used by the language selector
  i18n/<code>/ui.json           flat { "section.key": "text" } UI strings (may hold trusted inline HTML)
  i18n/<code>/data.js           content as `export default {...}` (profiles, eras, books, sources, map labels)
```

How a page works: `<html lang="<code>">` is also the folder name under `site/i18n/`. `app.js` calls `I18N.load()`, injects the page skeleton into `<div id="app">`, applies `data-i18n` / `data-i18n-attr`, fills the language selector and runs the logic with the data from `data.js`. Strings built in JS use `I18N.t` / `I18N.tn` (plural keys `.one` / `.other`) with `{placeholders}`. Locale-sensitive code uses `I18N.LANG`. Non-text presentation config (map geometry, pin coordinates, colour/type ids) lives in `app.js`; everything a translator must provide lives in `ui.json` and `data.js` (the header of `pt-BR/data.js` documents its structure).

pt-BR is the primary language and stays at the root URL. There is no automatic redirect by browser language and no language memory.

## How to add a language

1. Create `site/i18n/<code>/ui.json` (copy `pt-BR/ui.json`, translate every value, keep every key, including `lang.label`) and `site/i18n/<code>/data.js` (copy `pt-BR/data.js`, translate the text values; keep keys, ids, numbers, colour ids and URLs).
2. Add the language to `site/i18n/languages.json`, e.g. `{ "code": "en", "name": "English", "path": "en/" }`. The selector is always rendered (a single-entry list today).
3. Create `site/<code>/index.html` from the head template below, with the correct `lang`, title, description, Open Graph tags, canonical URL and `../` relative paths.
4. Add the new language's `hreflang` alternate to the `<head>` of EVERY existing page (including `site/index.html`) and to every `<url>` in `site/sitemap.xml` (and add a `<url>` for the new page). Add the language to `og:locale:alternate` on every page.
5. `app.js` must not need any edit. Test through a static server (never `file://`): no console errors, favicons 200, selector switches keeping hash/query.

Head template for `site/<code>/index.html` (example: English; for the pt-BR root page drop the `../` prefixes):

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>TITLE | GrandArchives</title>
<meta name="description" content="DESCRIPTION">
<link rel="canonical" href="https://grandarchives.github.io/middle-earth/en/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="GrandArchives">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="pt_BR">
<meta property="og:title" content="TITLE | GrandArchives">
<meta property="og:description" content="DESCRIPTION">
<meta property="og:url" content="https://grandarchives.github.io/middle-earth/en/">
<link rel="alternate" hreflang="pt-BR" href="https://grandarchives.github.io/middle-earth/">
<link rel="alternate" hreflang="en" href="https://grandarchives.github.io/middle-earth/en/">
<link rel="alternate" hreflang="x-default" href="https://grandarchives.github.io/middle-earth/">
<link rel="icon" href="../assets/icons/favicon.ico" sizes="any">
<link rel="icon" href="../assets/icons/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="../assets/icons/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="../css/style.css">
<script src="../js/app.js" defer></script>
</head>
<body>
<div id="app"><noscript>Message in the page language: this guide needs JavaScript.</noscript></div>
</body>
</html>
```

## Rules

- Mandatory in every language: the credits (sources, CC BY-SA attributions, "consulted pages") and the unofficial-fan-project / rights notice (`credits.*` and `footer.*` keys, `sources` in `data.js`). Never drop them from a translation.
- The i18n core at the top of `site/js/app.js` is shared verbatim by all GrandArchives sites. Do not edit it here; report problems instead.
- No visible text in `app.js` or in the page skeleton literals: add a key to `ui.json` (and to every language) instead.
- No build step, framework or new dependencies. Always test through a static server, never `file://`.
- Git: branch `master`; commits in English following Conventional Commits (`feat:`, `fix:`, `refactor:`...). Never add AI-attribution trailers (no `Co-Authored-By`, no `Claude-Session`, no "Generated with" lines) to commits or PRs.
