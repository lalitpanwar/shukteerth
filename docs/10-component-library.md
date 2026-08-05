# Component Library

## Conventions

- One React component per file.
- Reusable primitives live in `src/components/ui`.
- Feature and section components live in `src/components/sections`.
- Use `cn()` for conditional class composition.
- Use variants for shared controls instead of duplicated markup.

## Current components

| Component | Location | Responsibility |
| --- | --- | --- |
| Button | `components/ui` | Reusable link or button treatment |
| Container | `components/ui/custom` | Centred layout and responsive page gutters |
| Brand | `components/layout` | Ashram identity link |
| NavigationLinks | `components/layout` | Desktop primary navigation |
| MobileNavigation | `components/layout` | Client-side mobile menu |
| HeroSection | `components/sections/hero` | Homepage Hero composition |

## shadcn-style principles

Keep primitives accessible, composable, variant-based, and free of page-specific copy or layout assumptions.

## Button variants

```jsx
<Button>Book Bhagwat</Button>

<Button variant="secondary">
  Explore Ashram
</Button>

<Button variant="sacred">
  Donate Now
</Button>

<Button variant="outline">
  Read More
</Button>

<Button variant="ghost">
  Home
</Button>

<Button variant="link">
  View All
</Button>
```
