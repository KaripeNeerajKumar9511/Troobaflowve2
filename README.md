# Trooba Flow — Next.js site

Pixel-identical Next.js port of the static `trooba-site` marketing website.

## Stack

- Next.js (App Router)
- Original frozen design tokens + `site.css` (unchanged)
- Original logo assets and OG image
- Site behaviour ported from `assets/js/site.js` into `SiteBehaviors`

## Pages

| Route | Source |
|---|---|
| `/` | `index.html` |
| `/how-it-works` | `how-it-works.html` |
| `/proof` | `proof.html` |
| `/about` | `about.html` |
| `/flow-analysis` | `flow-analysis.html` |
| `/privacy` | `privacy.html` |
| `/terms` | `terms.html` |
| `/product` | redirects to `/` |

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Refresh content from the static site

If `../trooba-site` HTML changes, regenerate the page bodies:

```bash
npm run extract-content
```

## Build

```bash
npm run build
npm start
```
