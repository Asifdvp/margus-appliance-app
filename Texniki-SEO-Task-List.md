# Texniki SEO Task List — Developer / Kod AI üçün
### SearchAtlas auditindən çıxan problemlər, prioritetlə. Hər task ayrı.

Bunları developerə və ya kod AI-na (Cursor/Copilot) ver. İngiliscə yazdım (kod AI-ları üçün), altında AZ izah var.

═══════════════════════════════════════════
## 🔴 PRIORITY 1 — TƏCİLİ (indekslənmə + H1)
═══════════════════════════════════════════

### TASK 1 — Fix canonical URL mismatch (1 page not indexing)

```
On my Next.js site, one page has a canonical URL that does not match 
its own URL, which is preventing it from being indexed by Google 
(SearchAtlas flags "URL not matching canonical" + "Not Indexable: 1").

Please:
1. Find the page whose <link rel="canonical"> value does not match 
   its actual live URL.
2. Fix the canonical so it is self-referential — it must point to 
   the page's own exact URL (same protocol https, same domain, same 
   path, no trailing-slash mismatch).
3. Check the generateMetadata / canonical logic — make sure every 
   page's canonical is built from its own real URL, not a hardcoded 
   or wrong path.
4. Confirm the fixed page returns index,follow (no noindex).

Show me which page was wrong and the before/after canonical value.
```
**AZ:** Bir səhifənin canonical-ı öz URL-i ilə uyğun deyil → o səhifə indekslənmir. Canonical öz səhifəsinə işarə etməlidir.

---

### TASK 2 — Fix multiple H1 headings (6 pages)

```
SearchAtlas found 6 pages with MORE THAN ONE <h1> tag. Each page 
must have exactly ONE h1.

Also, one h1 is rendering broken as "Appliance Repair inCleveland & 
Parmapresent" — with missing spaces and the word "present" stuck on. 
This looks like a string concatenation bug.

Please:
1. Find all pages with multiple <h1> tags and keep only ONE h1 per 
   page (the main page heading). Convert the extra h1s to h2 or the 
   appropriate heading level.
2. Fix the broken h1 string "inCleveland & Parmapresent" → it should 
   read "Appliance Repair in Cleveland & Parma" with proper spaces 
   and no stray "present" text. Check the template/variable that 
   builds this heading.
3. Verify each page's single h1 is between 20 and 70 characters.

Show me the pages fixed and the corrected h1 for each.
```
**AZ:** 6 səhifədə birdən çox H1 var (olmalı: 1). Bir H1 qırıqdır ("inCleveland & Parmapresent"). Düzəlt.

═══════════════════════════════════════════
## 🔴 PRIORITY 2 — Qırıq linklər
═══════════════════════════════════════════

### TASK 3 — Fix broken external links (26 pages)

```
SearchAtlas found broken external links on 26 pages (links pointing 
to external URLs that return errors / are dead).

Please:
1. Crawl the site and list every broken external link (the URL, 
   and which page it's on).
2. For each: either update it to the correct working URL, or remove 
   the link if the destination no longer exists.
3. Pay special attention to social media links (Facebook, Instagram, 
   X/Twitter) in the header/footer — a broken social link often 
   appears site-wide, which would explain "26 pages".

Show me the list of broken links found and what you changed each to.
```
**AZ:** 26 səhifədə qırıq xarici link var. Çox güman footer/header-dəki sosial media linki (hər səhifədə təkrarlanır). Tap, düzəlt/sil.

═══════════════════════════════════════════
## 🟡 PRIORITY 3 — Meta & şəkillər
═══════════════════════════════════════════

### TASK 4 — Fix meta description length (8 pages)

```
8 pages have meta descriptions that are too short or too long. 
Meta descriptions must be between 50 and 160 characters.

Please find the 8 pages with out-of-range meta descriptions and 
rewrite each to be 140–160 characters, keeping the main keyword, 
the city (Cleveland/Parma), and a call to action. Do not exceed 
160 characters.

List the 8 pages and their new meta descriptions for my review.
```
**AZ:** 8 səhifədə meta description səhv uzunluqda (50-160 olmalı). Düzəlt. (Mən sənə hər səhifə üçün düzgün description vermişəm — onları işlət.)

---

### TASK 5 — Add alt text to images (17 pages)

```
17 pages have images missing alt attributes. Add descriptive, 
SEO-friendly alt text to every image.

Use the pattern: "[what it shows] in Cleveland & Parma" — for example:
- Refrigerator repair images → alt="Refrigerator repair technician 
  in Cleveland & Parma"
- Washer images → alt="Washing machine repair in Cleveland"
- Brand logos → alt="[Brand] appliance repair" (e.g. "Samsung 
  appliance repair")

Make each alt unique and relevant to the image and page. Don't 
keyword-stuff — one natural descriptive phrase each.

Show me the images updated and the alt text added.
```
**AZ:** 17 səhifədə şəkil alt-text yoxdur. Təsviri alt-text əlavə et (marka logolarına da: "Samsung appliance repair").

═══════════════════════════════════════════
## 🟡 PRIORITY 4 — Struktur & schema
═══════════════════════════════════════════

### TASK 6 — Add LocalBusiness + review schema

```
23 pages are missing recommended schema markup. Add JSON-LD 
structured data:

1. On all pages (site-wide): add "LocalBusiness" schema with:
   - name: "Margus Appliance Repair LLC"
   - address: 6520 Broadview Rd, Parma, OH 44134
   - telephone: (216) 304-0665
   - areaServed: Cleveland, Parma, and Greater Cleveland
   - aggregateRating: 4.9 stars, 184 reviews (Google)
   - priceRange and openingHours if available

2. On service pages: add "Service" schema for each repair type.

3. On the homepage: add "AggregateRating" so the 4.9★ (184 reviews) 
   can appear as rich snippets in Google.

Use valid schema.org JSON-LD. Show me the schema added to each 
page type.
```
**AZ:** Schema markup əlavə et — xüsusən LocalBusiness (ünvan, telefon, 4.9★ 184 rəy). Bu, Google nəticəsində ulduzları göstərə bilər (rich snippet). Güclü lokal SEO.

---

### TASK 7 — Fix protocol/WWW redirects

```
HTTP, HTTPS, www, and non-www variants of the domain don't all 
redirect to one canonical version. 

Please set up 301 redirects so that http://, https://www, and 
http://www all redirect to the single canonical https:// 
(non-www) version of margusappliancerepair.com. Only one version 
should be reachable; the rest redirect to it.
```
**AZ:** HTTP/HTTPS/www variantları bir əsas versiyaya yönləndirilməlidir (301 redirect). Texniki, developerin işi.

═══════════════════════════════════════════
## 🔵 IGNORE ET (issue kimi görünür, amma problem DEYİL)
═══════════════════════════════════════════

- **Meta keywords missing (41 pages)** → BUNU ƏLAVƏ ETMƏ. Meta keywords ölüdür, Google işlətmir. "Yoxdur" olması YAXŞIDIR. İgnore.
- **Robots.txt blocking LLM crawlers** → Google-a təsir etmir (yalnız AI botları). İstəsən sonra açarsan, təcili deyil.
- **Non-modern image format / image size** → şəkilləri WebP-ə çevirmək faydalıdır, amma kiçik məsələdir. Sonraya.
- **Inline style / JS size / DOM size** → performans xırdalıqları. Site Health onsuz da 927/1000 "Healthy" — təcili deyil.

═══════════════════════════════════════════
## SIRA (belə et)
1. Task 1 (canonical) + Task 2 (H1) — indekslənmə + qırıq başlıq
2. Task 3 (broken links)
3. Task 4 (meta) + Task 5 (alt-text)
4. Task 6 (schema) + Task 7 (redirects)
5. Qalanı ignore / sonraya

## HƏR TASK-DAN SONRA
Developerə/AI-a "dəyişikliyi göstər" dedim hər task-da. Yoxla:
- Telefon 304-0665 qalıb?
- Heç nə sındırılmayıb?
- Sonra SearchAtlas-da RECRAWL et → problem getdimi bax
