# SEO Strateji Planı — Oktyabr 2026 Audit Əsasında

### Mənbə: Site Explorer/Rank Tracker audit (DP 4, Authority 8/100, Content 40/100, Technical 95/100, UX Signals 30/100) + kod bazası araşdırması.
### Bu sənəd `Texniki-SEO-Task-List.md`-i əvəz etmir — onun tapşırıqlarının çoxu artıq commit tarixçəsində görünür ki, düzəlib (canonical, H1, meta, alt-text, schema). Bu sənəd NÖVBƏTİ mərhələdir: niyə sayt hələ də zəifdir və nə qurulmalıdır.

═══════════════════════════════════════════
## NİYƏ SAYT ZƏİFDİR — 4 KÖK SƏBƏB
═══════════════════════════════════════════

Holistic SEO Pillars: **Content 40/100 · Authority 8/100 · Technical 95/100 · UX Signals 30/100**

Technical 95/100 yüksəkdir çünki əvvəlki sessiyalarda canonical/H1/schema/meta işləri görülüb. Amma digər 3 sütun aşağı olduğu üçün ümumi DP cəmi 4-dür. Texniki sağlamlıq SEO-nun yalnız bir hissəsidir — "sayt düzgün qurulub" ilə "sayt Google-da rəqabətə davam gətirir" fərqli şeylərdir.

### 1) Authority 8/100 — Backlink profili TOKSİKDİR, kömək etmir

Rəqəmlər: **2.300 backlink, cəmi 6 referring domain.** Bu nisbət (~383:1) normal deyil — sağlam profildə adətən hər referring domain başına 5-20 backlink olur. Mənbələr sırf spam/PBN directory-lərdir:

- `seol.store`, `100ranking.info`, `2drankings.info`, `advanced-seo.com`, `backlinkfreeseo.com` — "backlink building services" adlı eyni spam məqalənin fərqli güzgüləri (eyni anchor text: "Expert SEO Backlink Services")
- `leadscoms.com` — 1.1K backlink tək bir domain-dən (anchor: "expert leadscoms.com li...")
- `factmags.com`, `seodomains.website`, `takes.homes`, `allwebsitesdirectory.com`, `bestwebstats.com` — generic directory/spam saytları

Bunlar çox güman ucuz "500 backlink - $10" tipli Fiverr/SEO paketindən gəlib (ya əvvəlki SEO vendor, ya da kiminsə "kömək" cəhdi). Nəticə: **Spam Score 8** (yüksəlib), Authority isə 8/100 qalır, çünki Google bu linkləri dəyərsiz sayır — bəzən hətta trust-a mənfi təsir edə bilər.

**Nə etmək:** Google Search Console → Disavow Tool-a bu domenləri `domain:` səviyyəsində daxil et. Real authority yalnız bunlarla qurulur: Google Business Profile, Yelp, Angi, HomeAdvisor, BBB, Nextdoor, yerli ticarət palatası, təchizatçı/marka partnyor səhifələri (Whirlpool/Samsung "find a repair pro" kimi), yerli media/bloq qonaq yazıları.

### 2) Content 40/100 — 57 şəhərin demək olar heç birinin öz səhifəsi yoxdur

Kod araşdırması: `src/content/service-areas.ts`-də 57 şəhər siyahıya alınıb (homepage mətnində də "57+ cities" deyilir), **amma `/service-areas` qovluğunda yalnız TƏK `page.tsx` var — heç bir `[slug]` dinamik route yoxdur.** Yəni bu 57 şəhər üçün axtarış edən heç kim öz şəhərinin adını Google-da ayrıca sayt səhifəsi kimi tapa bilmir — hamısı bir ümumi səhifədə mətn kimi basdırılıb.

Müqayisə üçün rəqiblər dərhal bunu göstərir: `parmaappliancerepair.com` — 111 keyword (cəmi 1 trafik, amma rəqabətə girib), `fixitcleveland.com` — 82 keyword/280 trafik, `anytime-appliance.com` — 43 keyword/120 trafik. Sizin saytda cəmi **21 keyword / 94 trafik** var. Bu, səhifə sayı fərqinin birbaşa nəticəsidir:

| Tip | Say | Qeyd |
|---|---|---|
| Core service səhifə | 8 | hamısı generic "Cleveland & Parma" hədəfləyir, şəhər-spesifik deyil |
| `/service-areas` | 1 | 57 şəhərBURADA mətn kimi, URL kimi YOX |
| Job (service×city) | 12 | yeganə real şəhər-spesifik SEO səhifələri — amma 57-dən 8-9-u örtür |
| Blog | 15 | diaqnoz-hekayə formatı (yaxşı format, davam etdirilməli) |
| Brand | 5 | tam detal səhifəsi olan (lg, samsung, ge, bosch, whirlpool) |

Həmçinin diqqət: audit-də qəribə "pressure washer repair cleveland" (pos 11) keyword-ü görünür — bu sizin xidmətiniz deyil. Təcili deyil, amma sonra hansı səhifənin bu sözə görə rank aldığını yoxlamaq lazımdır (əlaqəsiz keyword adətən thin/duplicate content siqnalıdır).

### 3) UX Signals 30/100 — Şəkil çəkisi hələ də homepage-i yavaşladır

Bu sessiyada `job-7` → `job-12` şəkillərini sıxdıq, AMMA **`job-1` — `job-6` cover şəkilləri hələ də 1.7MB–3.3MB ölçüsündədir** (4284×5712, orijinal telefon fotoları, heç vaxt sıxılmayıb). Bunlar:
- Homepage-dəki Recent Jobs carousel-də göstərilir (ilk görünən məzmunlardan biri),
- `generateMetadata`-da Open Graph `image` və JSON-LD `image` sahəsində **birbaşa RAW fayl kimi** (next/image optimizasiyasından keçmədən) serve olunur.

Bu, həm Core Web Vitals (LCP) həm də "Image file size too large" flag-ının əsas səbəbidir — biz bunu artıq iki dəfə (job-7..12, əvvəlki sessiyada OG image) düzəltmişik, amma job-1..6 hələ qalıb.

### 4) E-E-A-T / Trust siqnalları zəifdir (Authority-nin bir hissəsi)

`about/page.tsx` və `AboutStory.tsx`-də "8 illik təcrübə", "ailə şirkəti", "4.9★" deyilir — yaxşı başlanğıc. Amma:
- Heç bir adlandırılmış texnik/sahib şəkli, bioqrafiyası, sertifikatı yoxdur (Google E-E-A-T üçün "kim yazır/kim təmir edir" görmək istəyir),
- `sameAs` schema-da yalnız Facebook + Instagram var — Google Business Profile, Yelp, BBB linki yoxdur (entity-ni bir-birinə bağlayan siqnal əskikdir),
- Blog/job yazıları "we" səsi ilədir, named technician yoxdur.

═══════════════════════════════════════════
## UZUNMÜDDƏTLİ YOL XƏRİTƏSİ
═══════════════════════════════════════════

### FAZA 0 — Təmizlik (bu həftə)
1. ✅ **Bitdi (istifadəçi özü etdi)** — Spam backlink domenləri GSC Disavow Tool-a yükləndi.
2. ✅ **Bitdi** — `job-1`...`job-6` cover + qalereya şəkilləri sıxıldı (~37MB → ~1.2MB).
3. ⬜ Google Business Profile-ı yoxla: claim edilib? kateqoriya, saatlar, şəkillər, Q&A dolu? (bunu birbaşa yoxlaya bilmirəm — sənin əlindədir).
4. ⬜ `sameAs` schema-ya GBP/Yelp/BBB linklərini əlavə et (onlar mövcuddursa — linkləri sən ver, mən schema-ya əlavə edərəm).

### FAZA 1 — Lokal content genişləndirməsi (30 gün)
5. ✅ **Bitdi** — 15 şəhər üçün `/service-areas/[city]` route yaradıldı (real job-larla dəstəklənən şəhərlər: Parma, Cleveland, Cleveland Heights, Lakewood, Westlake, Avon Lake, Strongsville, Brecksville, North Olmsted, Euclid, Akron, Solon, Independence, Shaker Heights, Parma Heights).
6. ⬜ Qalan ~42 şəhər üçün: hər yeni job əlavə olunanda (əgər şəhər hələ səhifəsi yoxdursa) onu `SERVICE_AREA_HIGHLIGHTS`-ə əlavə et → avtomatik yeni şəhər səhifəsi yaranır. Prioritet: trafik potensialı (əhali/axtarış həcmi) + rəqib boşluğu olanlar əvvəl.
7. ⬜ Job content-i davam etdir (indiki diaqnoz-hekayə formatı effektivdir) — hər yeni iş həm yeni şəhər, həm yeni xidmət kombinasiyası hədəfləsin ki, service×city matrisini doldursun.
7b. ⬜ "pressure washer repair cleveland" (pos 11) — hansı səhifənin bu sözə görə rank aldığını tap, əlaqəsizdirsə content-i aydınlaşdır.

### FAZA 2 — Authority qurma (60-90 gün) — HƏLƏ BAŞLANMAYIB
8. ⬜ Əsas lokal directory-lərdə profil: Yelp, Angi, HomeAdvisor, BBB, Nextdoor, Apple Maps, Bing Places — hamısında eyni NAP (ad/ünvan/telefon) dəqiq uyğun olmalıdır. (Bunlar mənim kənardan edə bilmədiyim, sənin/komandanın əlaqə/qeydiyyat tələb edən addımlardır.)
9. ⬜ Review velocity artır — hər tamamlanan işdən sonra Google review istəmək prosesi (SMS/email link). Review sayı + tezliyi lokal pack ranking-in ən güclü siqnallarından biridir.
10. ⬜ Marka tərəfdaşlıq linkləri: Whirlpool/Samsung/GE kimi brendlərin "find a service pro" səhifələrinə uyğunluq üçün müraciət.
11. ⬜ Named texnik/sahib bio-su + şəkli `about`-a əlavə et (mən kod/mətn tərəfini yaza bilərəm, amma real ad/şəkil/sertifikat sənin tərəfindən lazımdır).
11. Named texnik/sahib bio-su + şəkli `about`-a əlavə et.

### FAZA 3 — Davamlı (hər ay)
12. Rank/trafik izləməsi, ən çox potensiallı 5-10 keyword-ə fokuslanma.
13. Content cluster-lərini daxili linklərlə bağla (xidmət səhifəsi ↔ şəhər səhifəsi ↔ job ↔ blog) — "siloing" strategiyası.
14. Rəqib yenilənmələrini rüblük yoxla (`fixitcleveland.com`, `anytime-appliance.com` yeni səhifə əlavə edirsə, görmək lazımdır).

═══════════════════════════════════════════
## QISA CAVAB: "NİYƏ BU QƏDƏR ZƏİFDİR?"
═══════════════════════════════════════════

Texniki qurluş (schema, meta, canonical, sitemap) artıq sağlamdır (95/100) — bu, əvvəlki sessiyaların nəticəsidir. Amma SEO-da texniki sağlamlıq yalnız "oyuna girmə biletidir", qalib gətirmir. Sayt zəif qalır çünki:
- **Authority demək olar sıfırdır** və mövcud backlink-lərin əksəriyyəti zərərli spam-dır (real deyil),
- **Content həcmi rəqiblərin 1/4-1/5-i qədərdir**, çünki 57 vədlənmiş şəhərin demək olar heç biri öz URL-inə sahib deyil,
- **UX siqnalları** hələ sıxılmamış nəhəng şəkillərlə (job-1..6) ağırlaşır.

Bunların heç biri "sındırılmış" bir şey deyil — sadəcə hələ **qurulmayıb**. Yol xəritəsi yuxarıdadır.
