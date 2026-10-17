# THE AI CORE — Small Talk AI News

## Current runnable experience

The root page is a self-contained, responsive Emerald Noir visual experience. It has no model/API dependency and labels the live news pipeline as disconnected. It does not fetch, verify, or publish news.

## Run locally (Windows PowerShell)

Requires Node.js 20+.

```powershell
npm run dev
```

Open http://127.0.0.1:4173.

Build and preview the static site:

```powershell
npm run build
npm run preview
```

## Important implementation status

The previous Base64 loader depended on player chunks that were not present. That startup path has been removed. The older React/Three.js files under `src/` remain a non-runnable experiment: they have missing imports and are not part of the static build. They must be restored as a separate, tested application before claiming the 3D megacity or live-news features are implemented.

GitHub Pages now deploys only the validated `dist/` output, not the entire repository. Pull requests run the static build; deployment runs only after a change reaches `main`.

## Next phase

Reconnect a live feed only after implementing source attribution, evidence links, independent claim verification, timestamps, regression tests, and human approval before public publishing.
