# Sovereign AI Hub


<!-- AUTO-PACKAGE-BADGES:START -->

<!-- AUTO-PACKAGE-BADGES:END -->
Privacy-first landing site for a “sovereign AI” desktop/local stack: run powerful LLMs locally, keep data on-device, and offer clear upgrade paths (Pro/Enterprise) for teams.

- Website-in-Test (Vercel): set after first deploy (see `DEPLOYMENT_GUIDE.md`)
- Status: marketing site + UI demo (no backend)

## Goals (S2M)

- Ship a clean, deployable site with working `lint`, `test`, and `build`.
- Provide revvel-standard docs: `CHANGELOG.md`, `DEPLOYMENT_GUIDE.md`, `GO_TO_MARKET.md`, `BRAND_GUIDELINES.md`, `SECURITY.md`.
- Maintain a single-iteration, production-minded baseline (installability + validation scripts).

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- Vitest + Testing Library
- ESLint

## Quickstart

```bash
npm install
npm run dev
```

## Commands

- Dev: `npm run dev`
- Lint: `npm run lint`
- Test: `npm test`
- Build: `npm run build`
- Preview build: `npm run preview`

## Deployment

Deploy on Vercel as a static Vite site.

- Guide: `DEPLOYMENT_GUIDE.md`
- Build output: `dist/`

## Security

- Policy and reporting: `SECURITY.md`

## Test Matrix

| Area | Status |
|------|--------|
| Install | ✅ `npm install` |
| Lint | ✅ `npm run lint` |
| Unit tests | ✅ `npm test` |
| Build | ✅ `npm run build` |
