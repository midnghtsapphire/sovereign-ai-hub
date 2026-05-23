# Deployment Guide (Vercel)

This repo is a static Vite site. The default target is Vercel.

## Prereqs

- Node.js LTS
- Vercel account + project created for this repository

## Local verification

```bash
npm install
npm run lint
npm test
npm run build
```

## Vercel (recommended)

1. Create a new Vercel project and import this GitHub repository.
2. Configure build settings:
   - Framework preset: Vite
   - Install command: `npm ci`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

## Website-in-Test URL

After the first Vercel deploy:

1. Copy the Vercel preview/production URL.
2. Update `README.md` “Website-in-Test (Vercel)” with the actual URL so reviewers always have a clickable test surface.

## Custom domains

Use Vercel “Domains” in the project settings, then add the DNS records Vercel provides.

## Environment variables

No environment variables are required for the current static build.
If you add any `VITE_...` variables later, document them in `.env.example`.

