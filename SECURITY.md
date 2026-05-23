# Security Policy

## Supported versions

This repository is a static front-end site. Security issues typically fall into:

- Supply-chain/dependency vulnerabilities
- Build tooling vulnerabilities
- Misconfiguration during deployment

## Reporting a vulnerability

If you discover a security issue:

1. Do not open a public issue with exploit details.
2. Email: `security@sovereignai.nexus` (or open a private security advisory in GitHub if enabled).
3. Include reproduction steps and impact assessment.

## Dependency hygiene

- Install: prefer `npm ci` in CI/CD for reproducibility.
- Audit: run `npm audit` regularly and evaluate fixes for breaking changes.
- Pinning: keep `package-lock.json` committed and in sync with `package.json`.

## Production hardening checklist (Vercel)

- Ensure the Vercel project is owned by the correct org/account.
- Enable preview deployments for PR review.
- Avoid storing secrets in the repo; if added later, document in `.env.example`.

