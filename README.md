# Deutsch Curuts

A static site for learning **German letters** (alphabet, umlauts ä ö ü ß, articles), then **CEFR A1–C2 words**, plus **Office** and **Home** (friends and neighbors) sentence fill-ins.

Live site: **https://curuts-developer.github.io/de/**

Levels follow the Council of Europe **CEFR** (Common European Framework of Reference for Languages): A1 / A2 basic user, B1 / B2 independent user, C1 / C2 proficient user.

Stage 0 is for people who have never treated German letters as German sounds. It teaches the mapping first (a = ah, then later ä ö ü ß). After the cards, you tap **A–F** to choose the matching letter or word.

Progress is stored in this browser (`localStorage`, key `de-progress-v1`). Use **Reset all progress**, or reset one track from its stage list. There is no account and no server.

## Run locally

```bash
python3 -m http.server 4173
```

Open http://localhost:4173/

## Checks

```bash
node tests/validate.mjs
```

## GitHub Pages

The app is published as a project site on this repo:

**https://curuts-developer.github.io/de/**

1. Merge to `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. The **GitHub Pages** workflow deploys the static files.

Relative asset URLs plus a `/de/` base tag make the project path work. Localhost is unchanged (no base tag).

## Product notes

See [PRD.md](./PRD.md).
