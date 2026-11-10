# Repository Guidelines

## Project Structure & Module Organization

The Next.js client is in `client/`; the Express API is in `server/`. Client routes and layouts live in `client/src/app/`; UI, hooks, services, types, and Zod schemas live in their matching `client/src/` directories. Static assets belong in `client/public/`. Server features are grouped under `server/src/app/module/<feature>/`, with `*.route.ts`, `*.controller.ts`, `*.service.ts`, and `*.validation.ts` files. Shared utilities and configuration live under `server/src/app/`. Prisma schemas and migrations are in `server/prisma/`.

## Build, Test, and Development Commands

Install dependencies with `pnpm install` in each package (the server pins pnpm 10.20.0). Client scripts run Next.js directly using Node.js.

- `cd server && pnpm dev`: start the API in watch mode.
- `cd server && pnpm generate && pnpm migrate`: generate the Prisma client and apply development migrations.
- `cd server && pnpm build`: compile TypeScript into `dist/`.
- `cd client && pnpm dev`: start the Next.js development server.
- `cd client && pnpm build`: create a production build.
- `pnpm lint` in either package: run its ESLint configuration.

For the PostgreSQL, API, and client containers, follow `README.md`.

## Coding Style & Naming Conventions

Use TypeScript with the existing strict compiler settings. Follow the surrounding file's indentation and formatting; no shared formatter is configured. Run ESLint before submitting changes. Keep server feature files together and use their established suffixes, such as `appointment.service.ts`. Name React components in PascalCase, hooks with a `use` prefix, and Next.js route files using framework names such as `page.tsx` and `layout.tsx`.

## Testing Guidelines

There is no automated test suite or coverage target configured. The server's `pnpm test` script is a placeholder that exits with an error; the client has no test script. Validate changes with both packages' lint and build commands, then manually check affected flows. The server includes a Postman collection at `server/Backend-PH-Healthcare-Management-System-API.postman_collection-test.json` for API checks.

## Commit & Pull Request Guidelines

Recent commits use short, descriptive subjects (for example, `Module 57 added`); no formal commit convention is evident. Use a concise imperative subject that names the change. In pull requests, explain the behavior changed, list verification performed, link relevant issues, and include screenshots for visible client changes.

## Security & Configuration

Keep credentials in local `.env` files and never commit them. Use `server/.env.example` and the Docker setup in `README.md` to identify required settings. Review Prisma migrations before applying them to shared databases.
