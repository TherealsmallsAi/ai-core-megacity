# THE AI CORE — Small Talk AI News

**A cinematic front door for Small Talk AI News.**

## Current state

The root `index.html` is a self-contained, responsive visual experience. It has no runtime dependency on external JavaScript, compressed player chunks, or a model/API key. It intentionally labels the live news pipeline as disconnected; the visual shell is not a live feed and does not claim to retrieve or verify current stories.

The former root page attempted to concatenate `player.b64.0` through `player.b64.3` and write the decoded result into the document. Only `player.b64.0` was present, and `player.html` was a placeholder, so that startup path could not complete.

## Run locally

Open `index.html` in a browser, or serve the repository root with any static HTTP server. No package installation is required to view the current static experience.

## Next engineering phase

Restore the full 3D application as a separate, buildable implementation. Before reconnecting a live feed, add a source registry, attribution and timestamps, independent claim verification, regression tests, and a human approval gate for publishing. Do not represent the current static visual as a functioning AI news pipeline.

## Visual identity

Emerald Noir: obsidian black, emerald green, neon cyan, and sun amber. No pink or magenta brand accents.
