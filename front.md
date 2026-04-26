# Frontend Agent — Margus Appliance App

You are a senior frontend developer working on this project. Follow every rule below without exception.

---

## Stack

- Next.js 16 App Router
- React 19
- TypeScript 5 (strict)
- Tailwind CSS v4 (`@theme inline`, no `tailwind.config.js`)
- Font: Manrope via `next/font/google`, variable `--font-manrope`
- Static data from `src/content/*.ts` — no database, no API routes

---

## Folder Conventions

| Path | Purpose |
|---|---|
| `src/app/` | Routes, layouts, metadata |
| `src/shared/components/` | Global shared components (Navbar, Footer, etc.) |
| `src/shared/ui/` | Reusable UI primitives (Button, Card) |
| `src/shared/layout/` | Layout wrappers (Container, PageWrapper) |
| `src/shared/lib/utils.ts` | `cn()`, `formatDate()` |
| `src/sections/` | Page-specific feature sections |
| `src/content/` | Static typed data |
| `src/types/index.ts` | Shared TypeScript types |
| `src/constants/index.ts` | NAV_LINKS, SITE_NAME, SITE_DESCRIPTION |

---

## Tailwind CSS v4 Rules

- NEVER create `.module.css` files — use Tailwind utility classes only
- Animations: add `@keyframes` to `globals.css`, add `--animate-name` token to `@theme inline`, use `animate-name` class in JSX
- Custom tokens go inside `@theme inline {}` block in `globals.css`
- Use `cn()` from `src/shared/lib/utils.ts` for conditional classes

---

## TypeScript Rules

- All props typed — no `any`, no implicit types
- Shared types go in `src/types/index.ts`
- Prefer `interface` for object shapes, `type` for unions/primitives
- Named exports for shared components, default exports for route components
- Every shared component accepts optional `className?: string` prop

---

## SEO Rules (CRITICAL — this is a local service business)

### Metadata — every page must have:
```ts
export const metadata: Metadata = {
  title: "Page Title | Margus Appliance",
  description: "150-160 char keyword-rich description",
  openGraph: {
    title: "...",
    description: "...",
    url: "https://...",
    type: "website",
    images: [{ url: "...", width: 1200, height: 630, alt: "..." }],
  },
  twitter: { card: "summary_large_image", title: "...", description: "..." },
  alternates: { canonical: "https://..." },
}
```

### Dynamic routes — always use `generateMetadata()`:
```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> { ... }
```

### Static params — always export for dynamic routes:
```ts
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}
```

### Semantic HTML — mandatory:
- One `<h1>` per page, correct hierarchy: h1 → h2 → h3
- Use `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`
- Links must have descriptive text (never "click here")

### JSON-LD Structured Data — add where applicable:
- Root layout: `LocalBusiness`
- Service pages: `Service`
- Blog posts: `BlogPosting`
- Breadcrumbs: `BreadcrumbList`

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

---

## Images — ALWAYS `next/image`

```tsx
import Image from "next/image"

// Fixed size
<Image src="/img.webp" alt="descriptive text" width={400} height={300} />

// Fill container
<div className="relative h-64 w-full">
  <Image src="/img.webp" alt="..." fill className="object-cover" />
</div>
```

- Never use raw `<img>` tags
- Always provide meaningful `alt` text
- Above-fold images: add `priority` prop

---

## Performance Rules

- Default to **Server Components** — no `"use client"` unless `useState` / `useEffect` / event handlers are needed
- Use `React.Suspense` + `loading.tsx` for async sections
- Never block rendering with synchronous data fetching

---

## Accessibility Rules

- All interactive elements keyboard-navigable
- Icon-only buttons must have `aria-label`
- Color contrast ≥ 4.5:1
- Use `<button>` for actions, `<a>` for navigation
- Focus styles: use `focus-visible:` Tailwind prefix

---

## Component Patterns

```tsx
// Shared component template
interface Props {
  className?: string
  children: React.ReactNode
}

export function MyComponent({ className, children }: Props) {
  return (
    <div className={cn("base-classes", className)}>
      {children}
    </div>
  )
}
```

- Sections import from `shared/` — never cross-import between sections
- No inline styles except for dynamic values not expressible in Tailwind
