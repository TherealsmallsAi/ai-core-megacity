# THE AI CORE — Small Talk AI News

**A living digital megacity inside a giant AI processor.**

Cinematic drone flight through OpenAI District, Robotics Harbor, Quantum Heights, and the NVIDIA Monument.

## Repository

https://github.com/TherealsmallsAi/ai-core-megacity

## Go live in 30 seconds

1. [Upload `player.html`](https://github.com/TherealsmallsAi/ai-core-megacity/upload/main) — use your local file:
   - `ai-core-megacity/dist/index.html` **or**
   - `ai-core-megacity/public/standalone.html`
   - Rename to **`player.html`** on upload
2. **Settings → Pages → Source: GitHub Actions** (workflow is already in the repo)
3. Open: **https://therealsmallsai.github.io/ai-core-megacity/**

Or from terminal:

```bash
cd ai-core-megacity
cp public/standalone.html player.html
git add player.html && git commit -m "Ship player" && git push
```

## Run locally

```bash
# Instant
open public/standalone.html

# Full R3F app
npm install && npm run dev
```

## Architecture

| Engine | Role |
|--------|------|
| **News** | Live RSS + keyword classifier + curated fallback |
| **Experience** | Stories → holographic billboards + district HUD |
| **Render** | R3F, InstancedMesh city, bloom, cinematic drone path |

**Small Talk AI News / THE AI CORE**
