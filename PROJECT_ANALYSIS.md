# Margus Appliance App — Project Analysis

> Auto-generated reference. Do not delete — used as dev context for every new task.
> Last updated: 2026-06-08

---

## 1. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | 5.x (strict) |
| Styling | Tailwind CSS | v4 (no config file) |
| CSS Build | @tailwindcss/postcss | v4 |
| Fonts | Google Fonts via next/font | Manrope, Work Sans |
| Carousel | embla-carousel-react | 8.6.0 |
| Map | react-leaflet + leaflet | 5.0.0 / 1.9.4 |
| SVG | @svgr/webpack (via Turbopack config) | — |
| Lint | ESLint 9 + eslint-config-next | — |

---

## 2. Design Tokens (globals.css → @theme inline)

```css
--color-dark:      #141414       /* bg-dark */
--color-brand:     #5500CC       /* bg-brand, text-brand */
--color-secondary: #535756       /* text-secondary */
--color-grey:      #757B7A       /* text-grey */
--main-gradient:   linear-gradient(99.72deg, #F8F7FF 0%, #E2F4FB 100%)  /* bg-main-gradient */

--font-manrope:    var(--font-manrope)     /* font-manrope (body default) */
--font-work-sans:  var(--font-work-sans)   /* font-work-sans */

--animate-marquee:   marquee 22s linear infinite
--animate-marquee-y: marquee-y 22s linear infinite
--animate-float-in:  float-in 0.35s ease-out
```

**Custom Tailwind utilities:**
- `bg-main-gradient` — hero/navbar background
- `scrollbar-none` — hide scrollbars on carousels

---

## 3. Folder Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout (Emergency + Navbar + Footer)
│   ├── page.tsx                ← Home page (metadata + all home sections)
│   ├── globals.css             ← Tailwind v4 + @theme tokens + keyframes
│   └── (public)/
│       ├── layout.tsx          ← Same layout wrapper (public routes)
│       ├── services/
│       │   ├── page.tsx        ← /services
│       │   └── [slug]/page.tsx ← /services/:slug (generateStaticParams)
│       ├── blog/page.tsx       ← /blog
│       ├── brands/page.tsx     ← /brands
│       └── contact/page.tsx    ← /contact
│
├── sections/
│   ├── home/
│   │   ├── hero/
│   │   │   ├── index.tsx       ← Hero section (id="hero-section")
│   │   │   └── StarRating.tsx  ← Star rating + avatar stack + Google badge
│   │   ├── companyInfo/
│   │   │   └── index.tsx       ← [EMPTY PLACEHOLDER — to be built]
│   │   ├── Brands/
│   │   │   ├── index.tsx       ← 2-col: text + carousel
│   │   │   └── Carousel.tsx    ← Embla autoscroll, 2 rows (fwd + bwd)
│   │   ├── RecentJobs/
│   │   │   ├── index.tsx       ← Heading + CTA + carousel
│   │   │   └── Carousel.tsx    ← Embla single-row autoscroll
│   │   ├── ServiceAreas/
│   │   │   ├── index.tsx       ← City grid + map
│   │   │   ├── Map.tsx         ← React Leaflet map component
│   │   │   └── MapDynamic.tsx  ← dynamic() wrapper (ssr: false)
│   │   ├── Testimonials/
│   │   │   ├── index.tsx       ← Dark section wrapper
│   │   │   └── Carousel.tsx    ← Custom RAF-based 3-col vertical scroll
│   │   ├── Services.tsx        ← 4-col service card grid
│   │   ├── Stats.tsx           ← 4 stat cards (bg-brand)
│   │   ├── Steps.tsx           ← 4-step process cards
│   │   ├── FAQ.tsx             ← Accordion FAQ (single-open)
│   │   ├── Blogs.tsx           ← 3-col desktop / carousel mobile
│   │   └── BlogsCarousel.tsx   ← Embla autoscroll carousel
│   ├── services/
│   │   ├── ServicesList.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ServiceDetail.tsx
│   ├── blog/BlogList.tsx
│   ├── brands/BrandsList.tsx
│   └── contact/ContactSection.tsx
│
├── shared/
│   ├── components/
│   │   ├── Navbar.tsx          ← Sticky top-0 z-50, mobile drawer
│   │   ├── Footer.tsx          ← bg-brand, social links
│   │   ├── Emergency.tsx       ← Top bar, marquee on mobile
│   │   └── FloatingCTA.tsx     ← Fixed bottom-right, IntersectionObserver
│   ├── ui/
│   │   ├── Button.tsx          ← 3 variants: primary / secondary / outline
│   │   ├── Card.tsx            ← White card with shadow
│   │   ├── ServiceCard.tsx     ← Linked card (icon + title + desc + hover CTA)
│   │   ├── StepCard.tsx        ← Non-linked card (icon + title + desc)
│   │   └── BlogCard.tsx        ← Blog post card with image
│   ├── layout/
│   │   ├── Container.tsx       ← max-w-360 mx-auto px-4 sm:px-6 lg:px-20
│   │   └── PageWrapper.tsx     ← py-16 + Container
│   ├── icons/
│   │   └── ApplianceIcons.tsx  ← 8 SVG service icons as React components
│   └── lib/
│       └── utils.ts            ← cn(), formatDate(), formatDateShort()
│
├── content/
│   ├── services.ts             ← SERVICES[] — 8 appliance services
│   ├── steps.ts                ← STEPS[] — 4-step repair process
│   ├── brands.ts               ← brands[] — 6 brands (Samsung, LG, Bosch...)
│   ├── recent-jobs.ts          ← RECENT_JOBS[] — 5 job images
│   ├── testimonials.ts         ← testimonials[] — 9 customer reviews
│   ├── faq.ts                  ← faqs[] — 5 FAQ items
│   ├── blog.ts                 ← blogPosts[] — 3 posts (dummy)
│   └── service-areas.ts        ← SERVICE_AREAS[] — 8 cities + GPS coordinates
│
├── constants/index.ts          ← NAV_LINKS, SITE_NAME, CONTACT_INFO
└── types/index.ts              ← Service, BlogPost, Brand, NavLink, Testimonial, FaqItem...
```

---

## 4. TypeScript Types (src/types/index.ts)

```ts
Service      { id, title, description, href?, icon?, details? }
Step         { id, title, description }
BlogPost     { id, title, slug, date, coverImage? }
Brand        { id, name, logo, website? }
NavLink      { label, href }
RecentJob    { id, image, alt }
FaqItem      { id, question, answer }
Testimonial  { id, text, name, location, image? }
```

---

## 5. Constants & Contact Info (src/constants/index.ts)

```ts
SITE_NAME    = "Margus Appliance"
CONTACT_INFO = {
  phone:     "+789 458 78 78",
  phoneHref: "tel:+78945787878",
  email:     "info@margusappliance.com",
  emailHref: "mailto:info@margusappliance.com",
}
NAV_LINKS = [About Us, Services, All Jobs, Blog, Contact]
```

---

## 6. Shared UI Components — Quick Reference

### Button
```tsx
<Button variant="primary" | "secondary" | "outline" href?={string} className?>
// Renders <a> if href provided, <button> otherwise
// Base: rounded-full px-6 py-3 text-sm font-medium
```

### ServiceCard
```tsx
<ServiceCard icon={ReactNode} title href ctaLabel? className? />
// Hover: shows CTA text, lifts shadow
// Used in: Services section, /services page
```

### StepCard
```tsx
<StepCard icon={ReactNode} title description />
// Non-interactive version of ServiceCard
```

### BlogCard
```tsx
<BlogCard post={BlogPost} className? />
// next/image, links to /blog/{slug}
```

### Container
```tsx
<Container className?>  // max-w-360 mx-auto px-4 sm:px-6 lg:px-20
```

### PageWrapper
```tsx
<PageWrapper className?> // py-16 + Container
```

---

## 7. Home Page Section Order (src/app/page.tsx)

```
1. Hero              (id="hero-section", bg-main-gradient)
2. companyInfo       [EMPTY — NEXT TO BUILD]
3. Brands            (carousel, 2 rows)
4. Services          (4-col cards)
5. ServiceAreas      (city list + Leaflet map)
6. Steps             (4-step process)
7. RecentJobs        (carousel)
8. Blogs             (3-col desktop / carousel mobile)
9. Testimonials      (3-col vertical scroll, dark bg)
10. FAQ              (accordion)
11. FloatingCTA      (fixed, appears after hero scrolls out)
```

*Stats section is currently commented out.*

---

## 8. Public Assets

```
public/
├── logo.png
├── expert.png          ← Hero technician image
├── rate.png            ← Google Reviews badge (new)
├── images/
│   ├── brands/         ← bosch.png, haier.png, maytag.png, samsung.png
│   ├── jobs/           ← job-1.png, job-2.png, job-3.png
│   └── blogs/          ← blog.jpg
└── icons/              ← SVG icons (imported as React components via @svgr/webpack)
    ├── customer.svg, date.svg, phone.svg, star.svg, warranty.svg...
    ├── services/        ← 8 service SVGs
    └── steps/           ← booking.svg, diagnosis.svg, repair.svg, warranty.svg
```

---

## 9. Component Conventions

- **Server Components by default** — only add `"use client"` for: useState, useEffect, event handlers, browser APIs
- **Named exports** for all shared/reusable components
- **Default exports** for route-level pages/sections
- **`className?: string`** prop on every layout/UI component
- **`cn()`** from `@/shared/lib/utils` for conditional classnames
- **`next/image`** for every `<img>` — no raw HTML img tags
- **No tailwind.config.js** — Tailwind v4 uses `@theme inline` in globals.css
- **No CSS Modules** — Tailwind utilities only
- **No inline styles** except for dynamic values unavailable via Tailwind

---

## 10. SEO Pattern (every page must have)

```tsx
export const metadata: Metadata = {
  title: "Page Title | Margus Appliance",
  description: "150-160 char keyword-rich description",
  openGraph: { title, description, type: "website", url, images },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "https://..." },
};
```

Dynamic pages use `generateMetadata()` pulling from `content/*.ts`.
JSON-LD structured data added as `<script type="application/ld+json">` in page body.

---

## 11. Routing

| URL | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Home |
| `/services` | `src/app/(public)/services/page.tsx` | |
| `/services/:slug` | `src/app/(public)/services/[slug]/page.tsx` | generateStaticParams |
| `/blog` | `src/app/(public)/blog/page.tsx` | |
| `/brands` | `src/app/(public)/brands/page.tsx` | |
| `/contact` | `src/app/(public)/contact/page.tsx` | |
| `/about` | Not yet created | linked in Nav |
| `/jobs` | Not yet created | linked in Nav |

---

## 12. What's NOT Built Yet

- `/about` page (linked from Navbar "About Us")
- `/jobs` page (linked from Navbar "All Jobs")
- `companyInfo` section (placeholder created, needs implementation)
- Contact form backend (form exists, no submission logic)
- Blog real content (3 duplicate dummy posts)
- Authentication / user accounts (N/A for static site)
- Sitemap + robots.txt (SEO gaps)
- OpenGraph images per-page

---

## 13. Key Architectural Rules

1. **Data source**: All content in `src/content/*.ts` — never hardcode data in components
2. **Icons**: SVG files in `public/icons/` imported as React components via `@svgr/webpack`
3. **Images**: Always `next/image` with `width`+`height` or `fill` + meaningful `alt`
4. **Carousels**: Embla carousel for horizontal, custom RAF for vertical testimonials
5. **Map**: React Leaflet, always wrapped in `dynamic()` with `ssr: false`
6. **Animations**: Add `@keyframes` to globals.css + `--animate-x` token in `@theme inline`
7. **Sections never import from other sections** — only from `shared/`
8. **FloatingCTA**: Observes `#hero-section` id — keep that id on Hero section
