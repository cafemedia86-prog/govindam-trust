## Govindam Trust — Copilot instructions

Short goal: help an AI coding assistant be immediately productive in this small static website repo.

Key facts (quick skim):
- This is a static landing site: primary files are `index.html`, `script.js`, and the `assets/` folder.
- Styling uses Tailwind via CDN (see inline `tailwind.config` in `index.html`). There is no package.json or build tool present.
- Fonts come from Google Fonts (Inter + Merriweather) and images/icons live under `assets/`.
- `script.js` implements two small behaviors: mobile nav toggle (`#navToggle` / `#mobileMenu`) and a client-only contact form handler (no backend integration).

What you should do first:
- Edit UI or styles: modify tailwind values inside the inline `tailwind.config` script in `index.html` (colors, fonts). The project relies on Tailwind utility classes spread directly through HTML.
- Change text/content or sections: update `index.html`. Section anchors (`#home`, `#about`, `#causes`, `#visit`, `#contact`, `#donate`) are used by the nav — keep ids intact unless also updating nav links.
- Update interaction logic: edit `script.js`. Note the contact form currently only shows client-side messages (no network request). If you add a backend endpoint, replace the in-file form handler with a fetch POST to `/api/contact` (or your chosen endpoint) and add success/error handling consistent with the current UI classes (`text-red-500`, `text-green-600`, `hidden`).

Project-specific patterns and examples:
- Tailwind via CDN + inline config: the theme extension (colors, fontFamily) is declared in an inline script near the top of `index.html`. Example: to change primary orange, edit the `primary` hex in that block.
- Minimal JS DOM API usage: `script.js` waits for `DOMContentLoaded`, uses `document.getElementById(...)`, toggles `classList` (`hidden`) and manipulates `textContent`. Follow that simple, dependency‑free style when adding small interactions.
- Assets are referenced relatively: use `assets/<name>` and commit image/icon files to the same folder.
- Content anchor conventions: nav links are plain anchors to IDs. If you rename a section id, update all anchors.

Running and debugging locally:
- No build step. Open `index.html` in a browser for quick changes. For a better local server (avoids some browser restrictions), run a simple static server from the repo root. Example (PowerShell):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

What *not* to assume:
- There is no backend in this repo. The contact form is intentionally client-only (it shows a demo success message). Do not try to call non-existent endpoints without adding them and the server code.
- There is no bundler or Tailwind build step: adding Tailwind classes that require a build (e.g., arbitrary variants removed) is unnecessary — the CDN version supports utilities used here.

Integration points and external dependencies:
- External: Tailwind CDN and Google Fonts are loaded from the web — expect network calls at runtime.
- No CI, no package manifests, and no tests were found. If you add node-based tooling, include a `package.json` and document install/run steps.

Small tasks examples (how AI should edit files):
- Change primary color: update `tailwind.config` colors object in `index.html`.
- Add a new section: create a new `<section id="...">` in `index.html`, add anchor in the nav, and optionally add simple interactions in `script.js` following existing patterns.
- Wire contact form to a new API: replace the form submit handler in `script.js` with a `fetch('/api/contact', {method:'POST', body: JSON.stringify({...})})` and show responses using the `#formMsg` element.

If you modify structure or add major features, leave short TODO comments and update the README (no README was found) explaining any new build steps or server components.

If anything here is unclear or you want the instructions to focus more on a specific task (e.g., adding a donations flow or adding a build step with Tailwind CLI), tell me which area and I will iterate.
