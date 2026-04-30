# Plan: Floating Phone CTA Button

## Context
Home page-də user Hero section-u scroll keçib Stats section-a çatdıqda sağ aşağı küncdə animasiyalı phone icon düyməsi görünəcək. Düyməyə click etdikdə kiçik popup açılır — Hero-dakı eyni iki CTA: "Repair Now" və telefon nömrəsi.

---

## Mövcud məlumatlar
- Phone number: `+789 458 78 78` → `tel:+78945787878` — `src/constants/index.ts` (`CONTACT_INFO`)
- Phone icon SVG: `src/shared/icons/phone.svg` (20×20, stroke `#5723FF`)
- Hero CTA-lar: "Repair Now" → `/contact`, Phone → `tel:+78945787878`
- Navbar: `sticky top-0 z-50` — floating button `z-40` olmalıdır

---

## Implementation

### 1. `src/app/globals.css` — keyframe əlavə et
```css
@keyframes float-in {
  from { transform: translateY(16px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
```
`@theme inline` blokuna token:
```css
--animate-float-in: float-in 0.35s ease-out;
```

### 2. `src/app/page.tsx` — sentinel div + FloatingCTA mount
Hero-dan sonra `<div id="hero-sentinel" />` əlavə et.  
`<FloatingCTA />` import edib page sonunda render et:
```tsx
import { FloatingCTA } from "@/shared/components/FloatingCTA";
// ...
<div id="hero-sentinel" />   {/* Hero-Stats arasına */}
<FloatingCTA />              {/* page-in sonunda */}
```

### 3. `src/shared/components/FloatingCTA.tsx` — yeni komponent
`"use client"` — `useEffect`, `useState`, `useRef` istifadə edilir.

**Scroll detection:** `IntersectionObserver` `#hero-sentinel` div-ini izləyir.  
Sentinel viewport-dan çıxanda (`isIntersecting === false`) → button görünür.

**State:**
- `visible: boolean` — button göstər/gizlət
- `open: boolean` — popup açıq/bağlı

**Popup content (Hero ilə eyni):**
```tsx
// Repair Now
<Link href="/contact" className="bg-brand text-white ...">
  Repair Now <ArrowIcon />
</Link>

// Phone
<Link href={CONTACT_INFO.phoneHref} className="border border-brand text-brand ...">
  <PhoneIcon /> {CONTACT_INFO.phone}
</Link>
```

**Animasiya:**
- Button görünəndə: `animate-float-in`
- Popup: `transition + scale-95/scale-100 + opacity`
- Click outside → popup bağlanır (`useRef` + `mousedown` listener)

**Z-index:** `z-40` (navbar `z-50`-dən aşağı)

---

## Dəyişəcək fayllar
| Fayl | Dəyişiklik |
|------|-----------|
| `src/app/globals.css` | `float-in` keyframe + `--animate-float-in` token |
| `src/app/page.tsx` | `hero-sentinel` div + `<FloatingCTA />` |
| `src/shared/components/FloatingCTA.tsx` | Yeni komponent (yaradılır) |

---

## Test
1. `npm run dev` — home page açıq
2. Hero görünəndə button görünməməlidir
3. Aşağı scroll etdikdə Stats görünəndə button sağ aşağıda animasiya ilə çıxmalıdır
4. Yuxarı scroll edib Hero-ya qayıtdıqda button gizlənməlidir
5. Button-a click → popup açılır, "Repair Now" və telefon nömrəsi görünür
6. Popup xaricə click → bağlanır
