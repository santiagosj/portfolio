# AGENTS.md — Portfolio

## Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` (runs `tsc -b && vite build`) |
| Lint | `npm run lint` |
| Preview build | `npm run preview` |

## Notable quirks

- **No tests.** There is no test framework installed.
- **SASS** for styles (`.scss` files co-located with components).
- **`verbatimModuleSyntax: true`** — must use `import type` for type-only imports.
- **`noUnusedLocals` / `noUnusedParameters`** — both on. Unused vars/params cause build failure.
- **React Compiler** enabled via `babel-plugin-react-compiler` in `vite.config.ts`. Impacts dev/build perf.
- **Navbar filename is `Navar.tsx`** (typo). Component imported as `Navar` in `AppHolder.tsx`. Don't rename without updating the import.
- **Router:** 6 routes — `/`, `/home`, `/about`, `/projects`, `/projects/:projectId`, `/posts`, `/posts/:postId`.

## Architecture

```
src/
  Pages/            # Route-level page components
    Home/, About/, Projects/, ProjectDetail/, Posts/, PostDetail/
  Components/
    AppHolder/      # Layout wrapper (Navar + P5Canvas + Router)
    Navbar/         # Navar.tsx (typo in filename)
    Router/         # Route definitions
    Canvas/         # p5.js animated background
    Breadcrumb/     # Breadcrumb.tsx (unused?)
```

- All routes are static, client-side rendered. No SSR, no API calls.
- Project and post detail data is **hardcoded** in `ProjectDetail.tsx` and `PostDetail.tsx` — not fetched.
- `p5` renders a canvas background. It is not interactive content.

## Style conventions

- Terminal/hacker aesthetic. Dark background (`#090909`), monospace (`Courier New`), accent color `#eda8d8` / `#c4a7e7`.
- CSS class naming: `.kebab-case` with BEM-like nesting in SCSS.
- Firefox scrollbar hiding uses `scrollbar-width: none` (or `thin` for filter bars).
- Portfolio positions as "Web Developer → Pentester". Do not add DevSecOps content.