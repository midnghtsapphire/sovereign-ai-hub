# Deployment Guide (Vercel)

This project is a Vite SPA (static build output in `dist/`) and deploys cleanly to Vercel.

## Prereqs

- Node.js (LTS recommended)

## Local production preview

```sh
npm install
npm run build
npm run preview
```

## Vercel deploy

1. Create a new Vercel project and import this GitHub repo.
2. Configure:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

## Environment variables

No environment variables are required for the current site.

If you later add analytics, API calls, or auth, add a `.env.example` entry and document it here before deploying.
