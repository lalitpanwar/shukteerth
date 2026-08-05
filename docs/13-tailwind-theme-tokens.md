# Tailwind CSS v4 — `:root` vs `@theme inline`

## Easy Analogy

### `:root` = Warehouse (Godown)

Yahan **actual values** store hoti hain.

```css
:root {
  --brand-saffron: #c76b12;
  --brand-maroon: #7b1e1e;
  --container-width: 1440px;
  --section-space-lg: 6rem;
  --shadow-card: 0 10px 40px rgb(0 0 0 / .08);
}
```

### `@theme inline` = Showroom

Yahan values create nahi hoti, sirf Tailwind ko bataya jata hai ki kaunsi CSS variable ko expose karna hai.

```css
@theme inline {
  --color-brand-saffron: var(--brand-saffron);
  --color-primary: var(--primary);
  --font-heading: var(--font-heading);
}
```

---

## Flow

```text
:root
│
├── --brand-saffron: #c76b12
├── --background: #fff8f0
└── --primary: #c76b12
        │
        ▼
@theme inline
│
├── --color-brand-saffron
├── --color-background
└── --color-primary
        │
        ▼
Tailwind Classes

bg-brand-saffron
text-brand-saffron
border-brand-saffron
```

---

## Kya `:root` me rakhna chahiye?

Design tokens (actual values):

- Brand colors
- Semantic colors
- Container width
- Section spacing
- Typography sizes
- Shadows
- Radius
- Motion duration

```css
:root {
  --brand-saffron: #c76b12;
  --container-width: 1440px;
  --section-space-lg: 6rem;
  --font-size-h1: clamp(2.75rem, 5vw, 4.5rem);
  --shadow-card: 0 10px 40px rgb(0 0 0 / .08);
}
```

---

## Kya `@theme inline` me rakhna chahiye?

Sirf Tailwind mappings:

```css
@theme inline {
  --color-brand-saffron: var(--brand-saffron);
  --color-primary: var(--primary);
  --color-border: var(--border);

  --font-heading: var(--font-heading);
  --font-body: var(--font-body);
}
```

---

## Background Example

### Whole website background

```jsx
<body className="bg-background">
```

Uses `--background`.

### Single section light background

```jsx
<section className="bg-brand-sand">
```

Uses `--brand-sand`.

### Hero dark

```jsx
<section className="bg-brand-maroon text-white">
```

---

## Better Surface System

Instead of remembering brand colors everywhere:

```css
:root {
  --surface-1: var(--brand-ivory);
  --surface-2: var(--brand-sand);
  --surface-3: #ffffff;
}
```

```css
@theme inline {
  --color-surface-1: var(--surface-1);
  --color-surface-2: var(--surface-2);
  --color-surface-3: var(--surface-3);
}
```

```jsx
<section className="bg-surface-1">
<section className="bg-surface-2">
<section className="bg-surface-3">
```

Agar future me client bole “cream thoda aur light kar do”, to sirf `--surface-2` ki value badalni hogi. Sab sections automatically update ho jayenge.

---

## Rule of Thumb

### `:root`

Store values:

- Colors
- Shadows
- Radius
- Spacing
- Typography
- Motion
- Container

### `@theme inline`

Expose values to Tailwind:

- `bg-*`
- `text-*`
- `border-*`
- `font-*`

---

## Final Recommendation

- **`:root` = Design Tokens**
- **`@theme inline` = Tailwind Mapping Layer**

Ye structure scalable, maintainable aur production-ready hota hai.
