# Security

## Supported Versions

Security support is provided for the latest code on the default branch.

## Reporting a Vulnerability

If you believe you have found a security issue:

1. Do not open a public issue with exploit details.
2. Contact the repository owner via GitHub (preferred) and include:
   - Impact summary
   - Reproduction steps
   - Affected files/paths
   - Suggested fix (if known)

## Dependency Hygiene

This repo is a front-end build with third-party dependencies. Keep `package-lock.json` in sync with `package.json`, and prefer addressing high-impact issues via routine dependency updates.

## Secrets

Do not commit secrets. If environment variables are introduced, document them in `.env.example` and configure them in the deployment platform (e.g., Vercel).
