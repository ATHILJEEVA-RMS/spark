# SPARK — wording rewrite, effectiveness review and risk list

Date: 14 November 2026
Scope: copy pass across all 12 routes (home, flavours index, 8 flavour pages, about, contact). Build verified: `npm run build` → 12 pages built.

Decisions applied in this pass:
- Origin wording → **"Made in India"** (replacing "Crafted in India").
- English register kept as **"flavour"** (modern international). No route or URL changes, no SEO churn.
- Scope: wording + effectiveness fixes applied. Legal/commercial items are **listed, not changed**, because they need business facts, a label check or your sign-off.

---

## 1. Changes made

### 1.1 Origin wording — all 8 live instances

| # | File | Before | After |
| --- | --- | --- | --- |
| 1 | `src/data/site.ts:11` (meta/OG/Twitter description) | "…classic cola. **Proudly crafted in India.**" | "…classic cola. **Made in India.**" |
| 2 | `src/data/site.ts:34` (hero meta strip) | "Crafted in India" | "Made in India" |
| 3 | `src/data/site.ts:73` (homepage craft heading) | "Crafted in India. / Designed to stand out." | "**Made in India.** / Made to stand out." |
| 4 | `src/data/site.ts:124` (footer tagline) | "Eight sparkling flavours, crafted in India." | "Eight sparkling flavours, **made in India**." |
| 5 | `src/pages/about.astro:20` (page description) | "Crafted in India, SPARK pairs…" | "Made in India, SPARK pairs…" |
| 6 | `src/pages/about.astro:25` (About eyebrow) | "Crafted in India" | "Made in India" |
| 7 | `src/pages/about.astro:54` (journey paragraph) | "Crafted in India and designed to stand out…" | "Made in India and designed to stand out…" |
| 8 | `src/pages/about.astro:55` (signature) | "Proudly crafted in India" | "**Proudly made in India**" |
| 9 | `src/components/sections/Craft.astro:31` (origin pill) | "Crafted in India" (pin icon) | "**250 ml sparkling drink**" (bubbles icon) |

Why: "Crafted" is a quality/process claim (ASCI treats craft-style claims as requiring evidence of a genuine manual or artisanal process). "Made in India" is the plain, verifiable, internationally standard origin declaration used on beverage packs. The homepage craft heading now carries the origin in the headline — which is where an international buyer looks — and the redundant pill was converted into a product-spec fact instead of repeating the same words twice in one screen.

### 1.2 Effectiveness rewrites

| # | File | Before | After | Why |
| --- | --- | --- | --- | --- |
| 10 | `src/data/site.ts:31` (hero lede) | "Bright, bold flavour for every kind of break." | "Eight sparkling drink flavours — from bright citrus and tropical fruit to berries and classic cola." | Hero never named the product category. A visitor landing from an ad needs "sparkling drink" in the first screen. |
| 11 | `src/data/site.ts:41` (Why SPARK body) | "Explore the range and find the flavour you're in the mood for." | "Eight sparkling flavours, each with its own colour, character and finish. Pick the one that fits the moment." | The old line was an instruction with no information; the new one explains the range. |
| 12 | `src/data/site.ts:48` (collection lede) | "Explore eight sparkling drinks, from bright citrus and tropical fruit to berries and cola." | "Start with citrus, go tropical, or keep it classic. Compare the tasting notes and pick the one you'll try next." | Was a near-duplicate of the hero. Now a taste-path and it tells people what the next page contains. |
| 13 | `src/data/site.ts:65` (occasion panel, line 2) | "Explore the range and find the SPARK you feel like today." | "Every flavour is available in 250 ml. Explore the range and pick the SPARK you feel like today." | Was a third repetition of "explore the range". Now adds a verified fact. |
| 14 | `src/data/site.ts:78` (craft card 1) | "Choose from citrus, tropical fruit, berries, litchi, guava and classic cola." | "Eight sparkling drinks in 250 ml — from bright citrus and tropical flavours to berries, litchi, guava and classic cola." | Adds pack size; "tropical fruit" → "tropical flavours" (see §4). |
| 15 | `src/data/site.ts:83` (craft card 2) | "**Our** clear, contoured bottle pairs bold SPARK lettering with **fruit artwork** and **a vivid colour** for every flavour." | "A clear, contoured bottle pairs bold SPARK lettering with **flavour artwork** and **a different colour** for every flavour." | Drops first-person "Our"; "fruit artwork" → "flavour artwork"; "a vivid colour" was wrong for Lemon/Litchi/Blueberry, which are not vivid. |
| 16 | `src/data/site.ts:88` (craft card 3) | "Choose a flavour and tell us your city. We'll help you check where SPARK is available." | "…Our team will help you check availability near you." | Says who does the work, and "near you" is a clearer outcome than "where SPARK is available". |
| 17 | `src/data/site.ts:97` + `src/components/sections/CtaSection.astro:32` | Heading hardcoded in the component as "Which SPARK / will you try?" while `ctaSection.heading` sat unused in the data file. | Data now drives the component: `heading: ['Found your', 'flavour?']`. | Removes a content-drift trap (two sources of truth) and turns a question that loops the visitor back into browsing into a question that hands them to the enquiry form. |
| 18 | `src/data/site.ts:98` + `CtaSection.astro:36` | `ctaSection.copy` existed but was never rendered; the component hardcoded its own lede. | Component now renders `ctaSection.copy` ("Eight sparkling flavours. Find your favourite, or bring SPARK to your shelves."). | Same drift trap, same fix. |
| 19 | `src/pages/about.astro:13` (timeline 2024) | "…**fruit-forward** artwork…" | "…**flavour-led** artwork…" | Same wording as the About hero lede; removes the fruit implication. |
| 20 | `src/pages/about.astro:28` (About lede) | "…**fruit-forward** artwork…" | "…**flavour-led** artwork…" | As above. |
| 21 | `src/pages/about.astro:36` (image alt text) | "…vivid flavour colours and **fruit artwork**" | "…vivid flavour colours and **flavour artwork**" | Alt text must describe the design, not imply contents. |
| 22 | `src/pages/about.astro:78` (About CTA) | "…Want SPARK on your shelves? Let's talk." | "…**Every SPARK is a 250 ml sparkling drink.** Want SPARK on your shelves? Let's talk." | Adds a verified spec where the visitor decides. |
| 23 | `src/pages/index.astro:13` (home description) | "…from bright citrus and **tropical favourites** to classic cola." | "…from bright citrus and **tropical fruit** to **berries** and classic cola. **Made in India.**" | "Tropical favourites" is vague; the range list is now accurate and the origin is in the search snippet. |
| 24 | `src/pages/flavours/index.astro:23` (collection description) | "…from bright citrus and tropical favourites to classic cola." | "…from bright citrus and tropical fruit to berries and classic cola. Made in India." | Same, plus origin in the snippet. |
| 25 | `src/pages/flavours/[slug].astro:48` (product page title) | "Orange Sparkling Drink — SPARK Drinks" | "**Orange Sparkling Drink, 250 ml** — SPARK Drinks" | Adds the pack size to the product title (matches the label art). |
| 26 | `src/content/flavours/mango.md:3` | "**Ripe** mango. Tropical lift." | "**Golden** mango. Tropical lift." | "Ripe" implies real fruit ripeness. "Golden" is a colour note. |
| 27 | `src/content/flavours/green-apple.md:5` | "**Green apple** brings a crisp first taste…" | "**Green apple flavour** brings a crisp first taste…" | Other flavours all said "…flavour"; this one read as fruit content. |
| 28 | `src/data/site.ts:59` (code comment) | "/* ---------- Coming soon teaser ---------- */" | "/* ---------- Occasion picker (homepage panel) ---------- */" | The section is no longer a "coming soon" teaser. |

Verified after the pass: `grep -ri "crafted in india"` returns **zero** matches in `src/`. Build output confirmed "Made in India" on home, about, flavours index and all 8 product pages.

---

## 2. Content that is not effective — what we can still alter

| # | Where | Problem | Proposed change | Status |
| --- | --- | --- | --- | --- |
| E1 | `src/pages/contact.astro` | `contact.eyebrow`, `contact.heading` and the four `contact.enquiries` cards in `src/data/site.ts:104-120` are **never rendered** — the page hardcodes its own "Get in touch" / "How can we help?" and gives no guidance on who to contact for what. | Render the four enquiry paths as a short "Who should I contact?" list above the form (copy already exists in `data/site.ts`), or delete the dead data. | Open — needs markup/CSS |
| E2 | All 8 product pages | No ingredients, nutrition, allergens, storage/serving directions, or pack-format detail on the product pages. The only product info is the 250 ml size. | Add an "at a glance" block per flavour from the approved label. | Open — needs label facts |
| E3 | `src/components/sections/Craft.astro` | The section promises a "craft" story but contains no process, team or quality fact. Its only CTA is "Read Our Story", and the About page has no process detail either. | Add one genuinely verifiable process fact (plant, line, QC step, bottling date) — or rename the section so it stops implying a process. | Open — needs facts |
| E4 | Homepage order | Hero → Why → Collection → Occasions → Craft → CTA. The strongest product proof (the range) sits below two narrative sections. | Move the collection strip directly under the hero. | Open — layout change |
| E5 | `src/pages/about.astro:11-15` | The story is 2022 → 2024 → "Today" and never says where the product is made, by whom, or since when it has been sold. It reads as a brand-portfolio piece, not a provenance page. | Lead with origin, then the 8-SKU design decision, then the dates. | Open — needs facts |
| E6 | Trade CTAs (header, hero, footer, About, CTA, contact) | "Become a Distributor" / "Stock SPARK" appear 6+ times but the site never states pack/case options, minimums, territory coverage or what happens after an enquiry. | Add a short "Trade enquiries" paragraph stating only what is true (who can enquire, what the team will discuss next). | Open — needs facts |
| E7 | Footer `src/components/layout/SiteFooter.astro:15` | The Instagram link carries a share/sticker token (`?stkn=...`) that expires, and the handle is a personal/business handle rather than a brand handle. | Replace with a clean profile URL and confirm the account is the official one. | Open — needs the right URL |
| E8 | Footer nav `src/data/site.ts:136` | Link label "Why SPARK" points at `#story`, a section whose visible eyebrow is "Made for your moment". | Align the label with the section, or label the section "Why SPARK". | Minor |
| E9 | `src/data/site.ts:104-120` | `contact.email` is a personal Gmail address used as the brand's public trade contact (footer, contact page, form fallback). | Use a domain mailbox for trade/press. | Open — needs an address |
| E10 | Hero badge | "Now Featuring" rotates automatically with no visible pause control, and it auto-rotates a promo message on a page with a permanent "Explore Flavours" CTA. | Make the badge static (Orange is the `featured` SKU) and let the flavour rail handle the rest. | Open — small UI change |
| E11 | Product pages | The "Ask Where to Find It" button goes to the contact form, but the form has no store list, so the visitor is asked to write a message to learn something simple. | Consider a simple "Where to buy" answer per city, or prefill the city field and confirm the enquiry type. | Open |

---

## 3. Content that goes beyond legal rules — needs your sign-off (not changed)

These are compliance and truth-in-advertising exposures, not copywriting preferences. Nothing here was altered in this pass because each one needs a business fact, a label check, or a legal decision.

| # | Where | The exposure | Why it is a risk | Action |
| --- | --- | --- | --- | --- |
| L1 | "Made in India" — 8 live places | Country-of-origin statement | Legal Metrology (Packaged Commodities) Rules require an accurate country-of-origin declaration, and FSSAI licensing/label rules key off the manufacturer and packer. If filling or bottling happens elsewhere, "Made in India" would be wrong even though it reads well. | Confirm the actual manufacturing/packing location and the FSSAI licence holder. If it is a contract packer, use the exact declaration used on the back label. |
| L2 | `src/content/flavours/cola.md` (`status: limited`) → renders "Limited edition" badge on the Cola card, hero badge and product page; the can art also prints "LIMITED EDITION" | A limited-edition claim | ASCI/FSSAI treat scarcity claims as factual representations. If Cola is in continuous production and freely available, the claim is misleading on the site and on pack. The earlier audit also flagged Cola's status as unconfirmed. | Confirm whether Cola is genuinely a limited run. If it is a permanent SKU, change `status` to `current` and re-issue the artwork. |
| L3 | Product artwork — `can-originals/` and `src/assets/flavours-studio/` | Photorealistic **real fruit** on every fruit flavour (whole orange, cut lemon, mango, litchi, guava, blueberries, green apple) | With no real fruit or juice in the product, a consumer can reasonably read the pack as implying fruit content. That is the single largest real-fruit signal on the site and it is on the pack, not the copy. The front label carries no "flavoured drink" qualifier, no ingredients panel and no FSSAI mark in the artwork used on the site. | Have the label reviewed: back-label ingredients, "flavoured drink" category declaration, FSSAI number, and a front-of-pack qualifier if needed. |
| L4 | Orange tasting note "Citrus zest" (`orange.md`) and Lemon "Citrus peel" (`lemon.md`) | Sensory notes that name a plant part | Under "Tasting notes" this is perception, but "zest"/"peel" edge toward implying zest or peel in the product. | Confirm these are sensory-only, or soften to "Citrus finish" / "Fresh citrus". |
| L5 | Pack + site company name | The pack logo reads **"Hopwards"** (orange, mango) on some SKUs and **"Hogwards"** (green apple, lemon, blueberry, litchi, red guava) on others. The site says "Hogwards Foods and Beverages" (footer + About). The Instagram handle is `hogwards_foods_and_beverages`. | Manufacturer name on the pack is a regulated declaration; two spellings across the same product range is a traceability, invoicing and trademark-registration problem, and the site currently reproduces only one of them. | Fix the artwork to one spelling, then align the site, the Instagram handle and all paperwork to that spelling. |
| L6 | `src/data/site.ts:148` | "© 2026 **SPARK Beverages**. All rights reserved." | "SPARK Beverages" is not a name that appears anywhere else on the site or on the pack. If it is not the registered entity, the copyright/ownership statement is inaccurate. | Replace with the legal entity name as per your GST/FSSAI records. |
| L7 | Contact form collects name, email, phone, city, business name, territory; the only privacy text is "We'll use your details only to reply to your enquiry." (`src/pages/contact.astro:102`) | No privacy notice, no consent capture, no retention or grievance route | India's DPDP Act 2023 expects a notice covering data collected, purpose, retention and grievance contact when personal data is collected digitally. The site also uses a third-party form processor (Web3Forms) with a hard-coded access key. | Add a short privacy notice (or privacy page) with the legal entity, purpose, retention and a grievance contact, plus a consent checkbox. Needs the legal entity details. |
| L8 | "Eight sparkling flavours" / "Eight Flavours" — repeated in 2 meta descriptions, 2 page intros, the footer tagline and the craft card | A quantity claim tied to the live range | The schema allows a `upcoming` status, so the moment a 9th SKU is added, "eight" becomes false across every page and every search snippet. | Make the count data-driven (count the collection) rather than typed, or accept annual review. |
| L9 | "250 ml" — now in `site.ts` (3 places), the product title, the flavour content `volume` field and the pack art | Pack-size claim | Legal Metrology requires an accurate net quantity declaration; the number now appears in more places than before, which raises the cost of a pack-size change. | Centralise it in one place and derive the rest. |
| L10 | `src/pages/about.astro:12-13` | "2022 — Hogwards Foods and Beverages begins…" and "2024 — A visual identity takes shape" | Historical facts published to the public. Unverified dates in a corporate story are a misrepresentation risk in a distributor or investor due-diligence process. | Confirm both dates before the About page is used in any trade document. |
| L11 | No FSSAI licence number, manufacturer/packer name or address anywhere on the site | Missing trust and compliance signals | Not required on a website (they are label requirements), but the site now makes an origin claim ("Made in India") and asks for trade enquiries. Publishing the FSSAI licence number and the manufacturer name supports both. | Add to the footer or a product-information block. |

**Verified as clean:** the site contains **no** "natural", "no artificial colours/flavourings", "no preservatives", "no added sugar", "zero sugar", "healthy", "vitamin", "organic", "authentic", "real juice", "100%" or "best/premium" claims anywhere in `src/`. There are no invented prices, stock levels, testimonials, certifications or delivery promises, and the Product JSON-LD carries no fabricated `Offer` or `aggregateRating`. There is also no "Find a store" promise — availability is an enquiry, which is the honest description of the current operation.

---

## 4. "Real fruit" check — we are not adding real fruit

**Result: the website copy now contains zero real-fruit claims.** No occurrence of "real fruit", "fruit juice", "made from fruit", "with real fruit", "contains fruit", "fresh fruit", "from concentrate", or "natural fruit" exists anywhere in `src/` (verified by grep across the whole source tree, including the built HTML in `dist/`).

What was changed to reach that state:

| Removed / reworded | Where | Why |
| --- | --- | --- |
| "Ripe mango. Tropical lift." → "Golden mango. Tropical lift." | `src/content/flavours/mango.md:3` | Ripeness describes a real fruit. |
| "Green apple brings…" → "Green apple flavour brings…" | `src/content/flavours/green-apple.md:5` | Read as fruit content. |
| "fruit artwork" → "flavour artwork" | `site.ts:83`, `about.astro:20, 28, 36` | Artwork shows fruit; the copy should not say the product does. |
| "fruit-forward artwork" → "flavour-led artwork" | `about.astro:13, 28` | Same. |
| "tropical fruit" → "tropical flavours" (in the range list) | `site.ts:78` | Range categories, not contents. |
| "Proudly crafted in India" → "Proudly made in India" | `site.ts` → `about.astro:55` | "Crafted" implies a making process that adds fruit. |

Where fruit still legitimately appears (reviewed and kept):

| # | Where | What it is | Verdict |
| --- | --- | --- | --- |
| R1 | The pack artwork on every flavour image | Photorealistic whole/cut fruit | **Keep, but see L3.** This is the real-fruit message on the site. It is standard flavour depiction and is not a written claim, but with no real fruit in the product the front-of-pack art should carry a qualifier on the physical label. |
| R2 | Flavour names and moods (Mango, Green Apple, Red Guava, Litchi, Lemon, Blueberry, "Bright Citrus", "Tropical Mango"…) | Product names / flavour designations | Keep. A product may be named after a flavour; it is not a content claim. |
| R3 | Tasting notes that name a fruit ("Blueberry", "Mango", "Guava", "Litchi", "Green apple") | Labelled "Tasting notes" on every product page | Keep. Perception, clearly labelled. The two to watch are "Citrus zest" (orange) and "Citrus peel" (lemon) — see L4. |
| R4 | `site.ts:11, 48` and page descriptions: "bright citrus and tropical fruit to berries and classic cola" | Describes the flavour families in the range | Keep. The sentence is governed by "sparkling drink flavours". If you want zero ambiguity, change to "…from bright citrus to tropical notes, berries and classic cola" — one word either way, your call. |
| R5 | `src/content/flavours/*.md` `image.alt` values ("SPARK Mango sparkling drink bottle") | Accessibility text | Keep for now, but see E-list item on can/bottle below — the alt text should describe the pack accurately. |

---

## 5. Open decisions I need from you

1. **Is the product a can or a bottle?** Every image is a 250 ml can (`can-originals/`, and the artwork prints "250ml" on a can), but the copy calls it a "bottle" in **21 visible places**: the craft card title "A Bottle That Stands Out" (`site.ts:82`) and its body, the craft intro, the "Bottle size" label on every product page (`[slug].astro:91`), the "bottle designs / one SPARK" caption on the About art, seven About-story mentions, the Contact lede, and all 8 product image alt texts. One of the two is wrong. Say the word and I will switch all of it in one pass — or confirm "bottle" is intentional.
2. **Where is it actually made?** Needed to finalise "Made in India" (L1) and to write the About page (E5).
3. **Is Cola genuinely limited edition?** (L2)
4. **One spelling for the parent brand**: Hopwards or Hogwards — including the artwork (L5).
5. **Legal entity name** for the copyright line and the privacy notice (L6, L7).
6. **A domain email** for trade/press enquiries (E9).
7. **The official Instagram profile URL** (E7).
8. **Approved label facts** per flavour — ingredients, nutrition, allergens, storage — so product pages can carry real product information (E2) and the label review in L3 can be completed.

---

## 6. Source map

| Area | Files |
| --- | --- |
| All brand-level copy | `src/data/site.ts` |
| Origin / story copy | `src/pages/about.astro` |
| Homepage sections | `src/components/sections/Hero.astro`, `Manifesto.astro`, `CollectionStrip.astro`, `Future.astro`, `Craft.astro`, `CtaSection.astro` |
| Product copy | `src/content/flavours/*.md`, `src/pages/flavours/[slug].astro`, `src/pages/flavours/index.astro` |
| Contact | `src/pages/contact.astro`, `src/data/site.ts` (`contact`) |
| Pack artwork | `can-originals/`, `src/assets/flavours-studio/` |
