---
name: Next.js Migration
description: Portfolio converted from React+Vite (frontend/) to Next.js single-page at root level
type: project
---

Portfolio was migrated from React+Vite in `frontend/` to a Next.js 14 single-page app at the repo root.

**Why:** User wanted Next.js and a single scrollable page instead of multi-page routing.

**How to apply:** The active codebase is now at the root (`app/`, `components/`, `hooks/`, `data/`, `public/`). The `frontend/` folder is the old React+Vite version — it still exists but is no longer the active project. Run `npm run dev` from the root to start the dev server.

Key decisions:
- All routes collapsed into one page: sections separated by `id` anchors (#home, #about, #tech-stack, #experience, #projects, #certificates, #contact)
- Header nav uses `<a href="#section-id">` for smooth scroll instead of React Router
- Client components marked with `'use client'`: Header, Home, About, Contact, useTypingText hook
- Server components (static): TechStack, Experience, Projects, Certificates, Footer
- Env vars renamed from `VITE_*` to `NEXT_PUBLIC_*` in `.env.local`
- `emailjs-com` kept (deprecated — future: migrate to `@emailjs/browser`)
- Public assets copied from `frontend/public/` to root `public/`
