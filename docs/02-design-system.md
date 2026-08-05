# Design System

## Foundations

- Build from semantic design tokens rather than raw repeated values.
- Prefer spacing increments of 4, 8, 12, 16, 24, 32, 48, 64, and 96 pixels.
- Use responsive `clamp()` values only for typography and deliberate fluid layouts.

## Layout

- Standard desktop content gutters: `clamp(24px, 5vw, 78px)`.
- Use a single primary heading per page.
- Preserve generous whitespace around devotional and editorial content.

## Interaction states

- Every actionable element has hover, focus-visible, disabled, and loading states where relevant.
- Focus indicator: 3px saffron outline with a 4px offset.
- Respect `prefers-reduced-motion`.

## Layering system

Use this z-index scale to keep overlays and navigation consistently layered:

| Element | Tailwind class |
| --- | --- |
| AnnouncementBar | `z-40` |
| Header | `z-50` |
| Overlay | `z-90` |
| Sheet | `z-100` |
| Modal | `z-110` |
| Toast | `z-120` |
