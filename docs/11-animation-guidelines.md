# Animation Guidelines

## Principles

- Animation supports orientation and feedback; it must not compete with reflection or reading.
- Use opacity and transform for performant movement.
- Keep interface transitions between 150ms and 250ms.
- Avoid automatic looping decoration except subtle, non-essential ambience.

## Accessibility

- Respect `prefers-reduced-motion` everywhere.
- Do not convey essential information only through movement.
- Avoid parallax, large scale shifts, and scroll-jacking.

## Approval

Every new animation should document its purpose, trigger, duration, and reduced-motion fallback.
