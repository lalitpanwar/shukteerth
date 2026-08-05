# Development Rules

## Architecture

- Keep route files small and declarative.
- One component equals one file.
- Extract repeated UI and copy before it is duplicated.
- Default to Server Components; use Client Components only for browser APIs, state, or event handlers.

## Quality

- Follow the installed Next.js version documentation before implementation.
- Prioritise semantic HTML, keyboard operation, visible focus, and useful labels.
- Add metadata and content structure before visual polish.
- Use responsive, performant images with meaningful alt text.
- Run lint and a production build before handoff.

## Collaboration

- Analyse the existing project before changing architecture.
- Propose the next section and wait for approval before implementing it.
- Do not expand scope or introduce dependencies without a clear need.
