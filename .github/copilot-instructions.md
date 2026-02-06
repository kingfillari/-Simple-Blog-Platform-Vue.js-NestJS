Purpose
-------
Give concise, repository-specific guidance so an AI coding agent can be productive immediately.

High level
----------
- Backend: `blog-backend` — NestJS (TypeScript). Root module: [src/app.module.ts](blog-backend/src/app.module.ts#L1-L20).
- Frontend: `blog-frontend` — Vite + Vue 3. API client: [src/services/api.js](blog-frontend/src/services/api.js#L1-L20).

What to know first
------------------
- The backend exposes a tiny posts API at `/posts` implemented in [src/posts](blog-backend/src/posts).
  - Controller: [posts.controller.ts](blog-backend/src/posts/posts.controller.ts#L1-L40)
  - Service (in-memory): [posts.service.ts](blog-backend/src/posts/posts.service.ts#L1-L60)
- The frontend calls the backend via axios configured in [blog-frontend/src/services/api.js](blog-frontend/src/services/api.js#L1-L20) (baseURL `http://localhost:3000`).

Data shape & examples
---------------------
- Post interface (backend): `id: number`, `title: string`, `content: string` — see [posts.service.ts](blog-backend/src/posts/posts.service.ts#L1-L40).
- Example POST body (frontend uses this pattern):
  ```json
  { "id": 1670000000000, "title": "My Title", "content": "Body" }
  ```
  - Frontend creates `id` via `Date.now()` in [CreatePost.vue](blog-frontend/src/components/CreatePost.vue#L1-L40).

Developer workflows (commands)
-----------------------------
- Backend (from repo root):
  ```bash
  cd blog-backend
  npm install
  npm run start:dev   # local dev with watch (NestJS)
  npm run build       # compile to dist
  npm run start:prod  # run compiled app
  npm run test        # run jest unit tests
  ```
- Frontend (from repo root):
  ```bash
  cd blog-frontend
  npm install
  npm run dev         # vite dev server (usually :5173)
  npm run build
  npm run preview
  ```

Project-specific conventions & notes
----------------------------------
- Persistence: the backend stores posts in-memory only (`PostsService.posts`). There's no DB config. Changes are ephemeral — useful for local demos and tests.
- API ownership: the backend is authoritative for the `/posts` contract (controller + service pair). When adding fields, update both the interface in `posts.service.ts` and the frontend components that read/write those fields.
- Frontend pattern: components use `api` (axios instance) for all HTTP calls (`BlogList.vue`, `CreatePost.vue`). Update `api.js` if backend host/port changes.
- IDs: the current frontend generates numeric `id` with `Date.now()` before POST; backend does not generate IDs.

Where to change behavior
-----------------------
- Make data persistent: replace `PostsService` in [blog-backend/src/posts/posts.service.ts](blog-backend/src/posts/posts.service.ts#L1-L60) with DB logic (e.g., TypeORM, Prisma) and update `PostsModule` imports.
- Add routes: modify [posts.controller.ts](blog-backend/src/posts/posts.controller.ts#L1-L40) and corresponding service methods.

Tests & lint
-----------
- Backend tests use Jest: `npm run test`. E2E config is under `test/` and `test:e2e` script is available.
- Formatting: `prettier` is used (see `format` scripts in `package.json` for each package).

Files to inspect first
----------------------
- Backend: [blog-backend/package.json](blog-backend/package.json#L1-L200), [src/posts/posts.controller.ts](blog-backend/src/posts/posts.controller.ts#L1-L40), [src/posts/posts.service.ts](blog-backend/src/posts/posts.service.ts#L1-L60)
- Frontend: [blog-frontend/package.json](blog-frontend/package.json#L1-L200), [src/services/api.js](blog-frontend/src/services/api.js#L1-L20), [src/components/CreatePost.vue](blog-frontend/src/components/CreatePost.vue#L1-L80), [src/components/BlogList.vue](blog-frontend/src/components/BlogList.vue#L1-L80)

Quick implementation tips for AI agents
-------------------------------------
- When adding an API route: add controller method with the appropriate decorator (`@Get()`, `@Post()`, etc.), then add a matching method in `PostsService` and update the exported interface if the payload changes.
- Frontend changes: use `api` from `src/services/api.js` for network calls. After changing the API contract, update both `BlogList.vue` and `CreatePost.vue` accordingly.
- For local end-to-end testing, run the backend on `:3000` and the frontend dev server on the default Vite port; ensure `api.js` baseURL points to the backend.

If anything here is unclear or you want more examples (e.g., adding a DB migration, authentication, or CI steps), say which area and I will expand these instructions.
