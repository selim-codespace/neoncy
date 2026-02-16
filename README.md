# Neoncy

Production-grade Next.js starter focused on clean architecture, consistency, and quality automation.

## Stack

- Next.js 16 + React 19 + App Router
- TypeScript (strict mode)
- Tailwind CSS v4
- React Query (server-state management)
- Zustand (client-state management)
- Zod + React Hook Form (typed forms and validation)
- ESLint (flat config) + Prettier
- Vitest + Testing Library + Playwright
- Husky + lint-staged + commitlint

## Project Structure

```text
.
|-- .github/workflows/ci.yml
|-- src
|   |-- app
|   |   |-- api/health/route.ts
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components/ui
|   |   |-- badge.tsx
|   |   |-- button.tsx
|   |   |-- card.tsx
|   |   |-- input.tsx
|   |   `-- textarea.tsx
|   |-- config/site.ts
|   |-- features
|   |   |-- contact
|   |   |   |-- components/contact-form.tsx
|   |   |   `-- schemas/contact.schema.ts
|   |   `-- starter/components/starter-dashboard.tsx
|   |-- lib
|   |   |-- react-query/query-client.ts
|   |   |-- stores/counter-store.ts
|   |   |-- utils/cn.ts
|   |   |-- utils/fetch-json.ts
|   |   `-- validations/env.ts
|   |-- providers/app-providers.tsx
|   `-- types
|       |-- api.ts
|       `-- health.ts
|-- tests/e2e/home.spec.ts
|-- commitlint.config.mjs
|-- eslint.config.mjs
|-- playwright.config.ts
|-- prettier.config.mjs
|-- vitest.config.mts
`-- vitest.setup.ts
```

## Getting Started

```bash
npm install
npm run dev
```

## Quality Commands

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run check
```

## Engineering Conventions

- Keep feature code in `src/features/<feature-name>`.
- Keep shared reusable modules in `src/lib` and `src/components`.
- Validate input at boundaries using Zod schemas.
- Prefer typed utility wrappers (for fetch, config, and API types).
- Run `npm run check` before pushing.
