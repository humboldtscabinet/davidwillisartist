# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single, self-contained **Next.js 15 (App Router) + TypeScript + Tailwind** static portfolio site ("David Willis Artist Portfolio"). Package manager is **npm** (`package-lock.json`). Node 20+ works. There is no backend, database, API route, or environment variable — nothing external to provision.

Standard commands live in `package.json` scripts:
- `npm run dev` — dev server on http://localhost:3000 (use this for development/testing)
- `npm run lint` — ESLint (`next lint`)
- `npm run build` — production build; **statically exports** to `out/` (`next.config.ts` sets `output: "export"`, `images.unoptimized: true`)
- `npm run start` — serves the exported `out/` via `npx serve`; requires `npm run build` first (it does NOT build)

Non-obvious notes:
- The main interactive feature is the embedded **flipbook** ("The Spirit of Asia in Coral"), served as static HTML from `public/images/spirit-of-asia-in-coral/index.html` and embedded via an `<iframe>` in `app/page.tsx`. It is also directly reachable at `/images/spirit-of-asia-in-coral/index.html?embed=1`.
- `components/Lightbox.tsx` exists but is currently **not imported/wired** into any page, so gallery images are not clickable. This is the repo's current state, not a setup issue.
