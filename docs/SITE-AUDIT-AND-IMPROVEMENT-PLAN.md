# SPARK website audit and improvement plan

Date: 27 September 2026  
Status: Baseline audit. The user later approved implementation; see [implementation notes](IMPLEMENTATION-NOTES.md).  
Baseline: local reverted site, commit `91aedf2` (`align watsapp`).

## 1. Recommendation

Keep the current visual identity. Improve the buying/enquiry journey, make the writing more specific, and give the existing animation a clearer rhythm.

The site already has distinctive product presentation: warm cream backgrounds, soft clay surfaces, Fraunces headlines, Space Grotesk body text, colourful drink artwork, and a dark footer. Those elements belong together. The largest opportunity is to turn an attractive product showcase into a site that helps someone choose a flavour, ask where to find it, or enquire about stocking it.

Priority order:

1. Repair flavour links, distributor routing, and mobile interaction problems.
2. Clarify what SPARK sells, how the flavours differ, and the next step after choosing one.
3. Replace repeated brand language with a useful story and verified proof.
4. Refine hero transitions and supporting motion within the current theme.
5. Improve product information, discoverability, and conversion measurement.

These are qualitative recommendations and testable marketing hypotheses, not claims of a measured conversion increase. No customer analytics or sales data were available.

## 2. Scope and evidence

Reviewed the rollback summary, route structure, shared layout/navigation/footer, all active page content, all eight flavour records, product presentation, contact handling, design tokens, and animation code. Existing but unused components such as `FlavourWorlds` are not treated as current visitor experiences.

Browser checks used local Astro development output at `http://127.0.0.1:4321/spark/` in Chrome. All 12 routes were loaded at 1440 × 900 and 390 × 900:

| Route | Purpose | Result |
| --- | --- | --- |
| `/spark/` | Homepage | HTTP 200 |
| `/spark/flavours` | Collection | HTTP 200 |
| `/spark/about` | Brand story | HTTP 200 |
| `/spark/contact` | Enquiry form | HTTP 200 |
| `/spark/flavours/orange` | Product detail | HTTP 200 |
| `/spark/flavours/blueberry` | Product detail | HTTP 200 |
| `/spark/flavours/green-apple` | Product detail | HTTP 200 |
| `/spark/flavours/mango` | Product detail | HTTP 200 |
| `/spark/flavours/lemon` | Product detail | HTTP 200 |
| `/spark/flavours/litchi` | Product detail | HTTP 200 |
| `/spark/flavours/red-guava` | Product detail | HTTP 200 |
| `/spark/flavours/cola` | Product detail | HTTP 200 |

Additional checks covered normal motion at 390 × 844, reduced motion, mobile menu keyboard access, collection arrows, missing link targets, contact validation, simulated submission success/failure, international phone input, no-JavaScript homepage rendering, and contact widths of 320, 768 and 1024px.

Evidence:

- [Page checks and link inventory](audit-evidence/page-checks.json)
- [Interaction checks](audit-evidence/interaction-checks.json)
- [Lazy-image, strip and no-JavaScript checks](audit-evidence/fallback-checks.json)
- [Follow-up menu and narrow-screen checks](audit-evidence/followup-checks.json)
- [Desktop homepage](audit-evidence/home-1440.png), [mobile homepage](audit-evidence/home-390.png), [normal-motion mobile first screen](audit-evidence/home-mobile-normal.png)
- [Desktop collection](audit-evidence/flavours-1440.png), [mobile collection](audit-evidence/flavours-390.png)
- [Desktop About](audit-evidence/about-1440.png), [mobile About](audit-evidence/about-390.png)
- [Desktop Contact](audit-evidence/contact-1440.png), [mobile Contact](audit-evidence/contact-390.png), [320px Contact](audit-evidence/contact-320.png)
- [Lemon detail](audit-evidence/flavours-lemon-1440.png), [mobile Lemon detail](audit-evidence/flavours-lemon-390.png), [Green Apple detail](audit-evidence/flavours-green-apple-1440.png)

Most full-page captures use reduced motion for repeatable review and were scrolled to reveal content. The black floating Astro toolbar in these development captures is development tooling, not a production design issue. Reduced-motion captures are not evidence of normal animation timing.

Limits: no live email, WhatsApp message, call or SMS was sent. Submission responses were intercepted locally. Inbox delivery, social-account ownership, live deployment parity, stock levels, business claims, Safari/Firefox, physical-device behaviour and field performance remain unverified. No Lighthouse or Core Web Vitals score is claimed. This is an end-to-end review of the local visitor experience, not a formal accessibility certification.

## 3. Preserve the theme

| Keep | Refine within it |
| --- | --- |
| Warm cream and pastel flavour backgrounds | Contrast and the spacing between sections |
| Fraunces + Space Grotesk | Heading wraps, reading hierarchy and small labels |
| Clay navigation, buttons and product cards | Shadow strength, consistent padding and clear interactive states |
| Current logo and eight product images | Scale, legibility and contextual captions |
| Floating product stage, soft splash, reflection | Which elements move, when, and how much |
| Large editorial headlines with italic accents | More specific supporting content |
| Dark footer | More compact mobile navigation and clearer labels |
| “Find your spark.” | A stronger product explanation underneath |

The previous summary records changes to fonts, palette, theme controls, campaign messaging and interaction at the same time. It does not establish exactly why the result felt worse. The lesson for this pass is to make small, reviewable changes against current screenshots. A theme toggle, new font system, new campaign identity, animation-library migration and wholesale layout replacement are outside the recommended first pass.

## 4. Marketing diagnosis and intended journeys

### What works

The range is recognisable, visually distinct and easy to remember. Product detail routes exist for every flavour. Tamil Nadu gives the brand a useful place-based identity. Direct contact channels and a working form interface already exist. The site has enough personality; it needs clearer reasons and routes to act.

### What is missing

- **Category clarity:** the hero says “Eight vibrant flavours” but does not explicitly call them sparkling drinks. The page title does, but visitors need that explanation in the page itself.
- **A consumer next step:** after finding a flavour, visitors mostly encounter more exploration links or distributor prompts. There is no explicit availability enquiry.
- **A focused trade proposition:** distributor CTAs are prominent, but the destination offers little about territory, pack options, process or the information required to start a conversation.
- **Distinct reasons to choose:** “premium”, “vibrant”, “moments”, “crafted” and “refreshing” recur without enough additional information.
- **Evidence:** the site makes manufacturing, ingredient and coverage claims without supporting detail on the page. They may be true; the repository is not evidence of their accuracy.
- **Purchase reassurance:** product pages lack practical ingredient/nutrition information and availability guidance.

Recommended journeys:

| Audience | Intended path | Conversion |
| --- | --- | --- |
| Person choosing a drink | Home → flavour → taste/product details → availability enquiry | An enquiry with flavour and city already supplied |
| Retailer/distributor | Header or trade section → partnership information → focused form | A qualified enquiry with business type and territory |
| Person checking the brand | About → verified origin/process/proof → flavours or contact | Confidence to continue or contact the team |

Working assumption: consumer discovery leads the homepage while trade remains a prominent secondary path. If most traffic is generated by distributor outreach, adjust emphasis using that evidence before implementation.

## 5. Prioritized changes

P0 = repair before visual polish. P1 = recommended first improvement release. P2 = later enhancement after business facts/assets are ready. Effort is relative: S = local change; M = coordinated components/content; L = new content or operational workflow.

| ID | Priority / effort | Finding and evidence | Proposed change / acceptance |
| --- | --- | --- | --- |
| A01 | P0 / S | All eight homepage collection links use `/flavours#slug`; collection cards have no matching IDs. About spotlight repeats `#orange`. | Link directly to the selected product route. Every tile and “Taste the notes” must open the intended flavour. |
| A02 | P0 / M | Distributor links target an email card below the form. Browser test found subject empty and form above the viewport. | Make the destination a clearly headed distributor form/section, preselect intent and focus appropriately. Preserve incoming `#distributor` links. |
| A03 | P0 / S–M | At 390 × 844 the three fixed contact icons overlap the right side of both hero CTA areas. | Use a compact contact control or reposition/reserve space on small screens. No contact control may cover a button, field, text or focused element. |
| A04 | P0 / S–M | Open mobile menu leaves focus on its trigger; repeated Tab moves into content behind the overlay. | Manage focus, background interaction and focus return. Tab/Shift+Tab must stay within the active menu/close controls; Escape must restore focus. |
| A05 | P0 / S | Contact document width is 347px at a 320px viewport. | Correct card/link wrapping and grid shrink behaviour. No horizontal page scrolling at 320px. |
| A06 | P1 / S | Lemon title is pale yellow on a pale yellow background; flavour-coloured small labels also look faint. | Use a darker ink/deep tone for text while retaining yellow backgrounds/artwork. Measure actual contrast in all eight colour states. |
| A07 | P1 / M | Hero manual rail is hidden at ≤1280px; mobile shows zero visible hero control buttons. No persistent pause control. | Provide compact labelled selection and pause controls on all sizes. Manual choice remains stable until another explicit action. |
| A08 | P1 / M | Product pages primarily send visitors back to the collection, then repeat the generic CTA. | Add “Ask where to find [flavour]” and carry flavour context into the enquiry. Keep collection/previous/next as secondary navigation. |
| A09 | P1 / M | Copy repeats general brand language across home/About/CTA. | Apply the proposed content hierarchy and draft copy below, after fact review. Each section answers a distinct visitor question. |
| A10 | P1 / M | “More SPARK is coming” takes a large section before current-product proof; no date, confirmed release or update subscription is supplied. | Reduce to a small optional teaser, or replace its content with useful serving/occasion guidance in the same visual treatment. |
| A11 | P1 / M | Ingredient origins, production methods, “10+ cities”, Australia orders and Cola’s limited status need business confirmation. | Create an approved facts sheet and remove/rewrite unsupported specificity. No invented testimonials, certifications, stock or delivery promises. |
| A12 | P1 / M | About has a distinct Coimbatore story, but the opening/mission are generic and craft CTA lands on a page without substantial process detail. | Lead with origin; add factual process/team content and a real craft destination. Use genuine photos when available. |
| A13 | P1 / S–M | Product JSON-LD is placed in a `head` slot that `BaseLayout` never renders. Browser output contains Organization only on all product routes. | Render page schema correctly. Review the current Offer object before enabling it: it has no price and assumes InStock. Use truthful product information; do not invent offers for rich results. |
| A14 | P1 / M | General contact requires both email and phone plus subject/message; lacks consumer availability intent and city. International `+61` test rejected. | Design fields around enquiry type, ask for required contact details only, add city/territory and permit relevant international numbers if export enquiries are supported. |
| A15 | P1 / M | Hero requests all eight images eagerly once JS runs. Multiple hidden product layers keep CSS animations. | Prioritize first visible artwork, defer nonessential images and pause inactive/offscreen motion. Verify on production output. |
| A16 | P2 / M | Collection is eight tall single-column cards on phones: about 7070px total page height at 390 × 900. | Prototype more compact mobile cards with clear names/taste cues. Compare legibility before considering two columns. No filter system needed for just eight products. |
| A17 | P2 / S–M | Footer “The Worlds” is less direct than “Flavours”; Instagram uses the earlier company handle; no current-page nav state. | Clarify labels, confirm official social identity, add active navigation, and simplify mobile footer groups. |
| A18 | P2 / M | No analytics instrumentation found in source. | Add an agreed measurement plan; record meaningful enquiries and flavour interest without sending personal form contents to analytics. |

## 6. Homepage: section-by-section plan

### Header

Keep the floating clay pill and logo. Avoid spending two prominent desktop positions on effectively the same distributor link: the navigation can use Home, Flavours, Our Story, Contact, with the existing trade button retaining prominence. Add an active-page state. Keep mobile access simple and repair keyboard handling first.

### Hero

Keep “FIND / YOUR / SPARK.”, product artwork, warm colour changes and two-column desktop composition. Explain the category immediately beneath the headline. On mobile, rebalance the product stage so the product, proposition and primary action feel like one first-screen composition. At 390 × 844, the first CTA starts around y=677; this works on that height but leaves little flexibility on shorter screens.

Draft supporting copy:

> Eight sparkling drink flavours, crafted in Tamil Nadu. From bright citrus to smooth cola, find the one you’ll reach for next.

Keep **Explore Flavours** primary; retain **Become a Distributor** secondary. Place a small, clearly labelled availability route near the selected flavour rather than adding a third equally prominent hero button. Category and origin wording still require confirmation against the product facts sheet.

### Why SPARK

Keep the softly animated full-width band and existing “Born to stand out.” heading if preferred. Make the body explain the range rather than repeat the hero.

Draft:

> Bright citrus. Tropical favourites. A classic cola. SPARK brings eight distinct flavours together, so choosing your next drink starts with what you love.

Reduce the large vertical commitment if this remains a short statement. Move the collection closer to the initial product promise. Remove the empty signature element when implementing.

### Collection

Keep the pastel product strip, swipe and arrow affordances. Change the heading to **Find your flavour.** or retain “Our Collection” with a useful taste-led subtitle:

> Start with citrus, go tropical, or keep it classic.

Show a short taste descriptor under each name. Link each tile directly to its detail page. Give the arrow controls clear start/end states, use the actual card gap for scrolling, and respect reduced motion. Keep names readable at mobile sizes.

### Current “Coming next” section

This is visually attractive but asks visitors to care about unspecified future products before resolving the current offer. “Ask What’s Next” creates work for the visitor with little defined benefit.

Recommended first option: reuse the existing clay/pastel panel for a concise occasion section, **A flavour for your kind of break.** Three editorial suggestions could be “Lunch break”, “An afternoon catch-up” and “Weekend plans”, each linked to existing flavours. Pairings are suggestions, not validated taste or health claims; confirm them by tasting.

Keep it simple text/product content initially. An occasion quiz or planner is unnecessary for this pass. If a real launch is scheduled, retain a smaller teaser with an approved date/product and genuine updates destination.

### Craft / reasons to trust

Preserve three clay cards. Replace vague reassurance with approved specifics. Possible structure:

| Card | Content needed |
| --- | --- |
| Rooted in Tamil Nadu | Confirmed place of production and short origin fact |
| Inside each drink | Accurate ingredient/process summary, with product-specific exceptions |
| Made with care | A named, verifiable production/quality practice |

Do not publish placeholder facts. “Real fruit concentrates” must not be assumed to apply uniformly across fruit flavours and Cola. The craft link should reach an actual process section on About.

### Final CTA

Keep the existing rounded pastel panel, but make it an endpoint rather than another loop to “Explore”.

Draft heading: **Found your flavour?**  
Draft body: **Tell us your city and the flavour you’d like to try. Want to stock SPARK? Talk to us about your shop or territory.**  
Actions: **Ask about availability** and **Stock SPARK**.

Do not label this “Find a store” until a reliable store directory exists. Availability enquiries are an honest first step with the current infrastructure.

Recommended flow: Hero → short Why SPARK → Collection → occasion panel (optional) → verified Craft → consumer/trade CTA → footer. This mostly reuses existing sections and styling.

## 7. Collection and all eight product pages

Keep the collection’s colourful poster cards. The collection intro can become **Eight flavours. Which one’s yours?** with a direct instruction to explore taste and availability. Remove “more coming tomorrow” unless that promise has a real basis.

Each product page should answer, in order:

1. What flavour is it, and what does it taste like?
2. What is in it, what is the pack size, and what practical product information matters?
3. How can I find this particular flavour?
4. What else might I like?

Keep the current flavour-colour hero and staged artwork. Add a compact information block using approved label details: ingredients, nutrition, allergens where applicable, serving/storage directions and pack format. Keep flavour navigation, but label “All Flavours” visibly instead of relying solely on the star-shaped icon between previous/next cards.

The following are candidate sensory descriptions, not confirmed formulation statements. Validate through product tasting and label review before publication:

| Flavour | Draft taste copy | Current specificity to verify |
| --- | --- | --- |
| Orange | Bright orange flavour with a lively citrus finish. | Valencia orange; zest oils |
| Blueberry | Smooth berry flavour with a crisp, sparkling finish. | Wild blueberries; apple note; “folded into” implies ingredients |
| Green Apple | Crisp green apple flavour with a refreshing tart edge. | Granny Smith; white grape |
| Mango | Rounded mango flavour with a bright tropical finish. | Alphonso; honey as a note versus ingredient |
| Lemon | Bright lemon flavour with a clean citrus finish. | Cold-pressed process; Sicilian origin |
| Litchi | Soft litchi flavour with a fragrant floral finish. | Nectar; rose water; creamy language versus actual ingredients |
| Red Guava | Tropical guava flavour with a gently tangy finish. | Pink-fleshed fruit; cranberry is currently an analogy, not necessarily an ingredient |
| Cola | Familiar cola flavour with warm spice notes. | Limited-edition availability; kola nut; vanilla |

Use “tasting notes” explicitly when describing perceived flavours. Avoid making an ingredient assertion through casual sensory language. Retain the 250 ml display only after checking current packs. The source uses “can” while brand copy says “bottle”; agree the consumer-facing package term from actual packaging.

## 8. About and Contact

### About

Keep the editorial type, warm background and timeline. Lead with the specific Coimbatore/Tamil Nadu origin, subject to approval, instead of “We don’t just make drinks. We create moments.” The founding/rebrand story is more distinctive than repeated language about colour and joy.

Suggested content order: origin → why the range exists → real production/team detail → verified milestones → flavour or partnership action. The 2024 rebuilding story can stay, but explain its relevance to the brand today without vague references to challenges.

Use a real founder/team, production or retail photo when available; match its crop and colour treatment to the cream/clay site. No fabricated factory imagery or customer proof. Replace “This week’s spark” with “Meet Orange” unless someone actually maintains a weekly feature. Repair its CTA to the product detail route.

### Contact and trade enquiries

Keep the clay form. Introduce clear enquiry intent: **Find SPARK**, **Stock SPARK**, **General enquiry**. A link from a flavour should carry that flavour; a distributor link should open the trade state directly.

For availability: name, city, flavour, preferred contact method and relevant contact detail. For trade: contact name, business/shop name, city/territory, business type, contact detail and optional message. Only ask for volume estimates or experience when the sales team actually uses them.

Before the trade form, provide a short explanation of who can enquire and what happens next. Pack/case options, minimum orders, territory coverage, margins and response times require business input. Do not invent them. Initially say “Tell us about your shop or distribution area. We’ll discuss availability and next steps.”

The current form has useful strengths: visible labels, autocomplete, field-level validation, first-error focus, loading/disabled submission state, success/error messages, and an email fallback. Preserve them. Simulated success and failure worked, and failure retained the typed message. Improve “Tell us something!” to “Please enter your message.” Consider whether both phone and email need to be compulsory.

Add a plain explanation of how enquiry information is used and a real privacy information destination. Prefer an approved brand email address if one exists; the current personal Gmail address works as a channel but weakens the trade presentation. Consolidate four cards that repeat the same email into more useful contact guidance. Confirm support languages and hours before displaying them.

## 9. Animation direction

Aim: make the product feel lively while helping visitors read, choose and act. Keep the existing floating drink, soft clay depth and flavour colour changes.

### Current behaviour

- Hero waits for eight images, then shows an initial sequence at roughly 420ms per change after the first 550ms delay; normal rotation is every 4500ms.
- Hover pauses the regular interval, but does not cancel the intro. Keyboard focus/manual selection does cancel the intro.
- Manual rail exists only above 1280px. Selection has a visual class but no programmatic selected state.
- Hidden product layers still contain animated stage effects. A normal-motion mobile sample reported 85 browser animations; this is a workload signal, not a measured frame-rate failure.
- Product stages combine glow, splash morph, ring rotation, float, shadow and droplets. Manifesto separately animates gradient positions, orb shapes and shimmer.
- Global reveals use 1s transitions and 2.5rem movement. Reduced-motion styling disables most animation, but does not reset every reveal translation/scale immediately.
- The collection arrow handler explicitly requests smooth scrolling even when reduced motion is enabled.

### Proposed motion specification

| Area | Recommended behaviour | Initial timing to review |
| --- | --- | --- |
| Hero entry | One clear arrival: headline, product, supporting copy and action. No eight-product rapid montage. | 500–700ms product entrance; small 60–100ms stagger; essential content never waits for the whole sequence |
| Flavour switch | Crossfade product with slight vertical/rotational settling; coordinate background, name and caption. Keep headline and CTA steady. | 450–650ms; 12–20px travel; at most a few degrees of rotation |
| Hero idle | Gentle product float and subtle shadow; pause extra effects while switching. | 6–8s cycle; approximately 4–8px float |
| Rotation | Prefer visitor-controlled selection on mobile. If desktop auto-rotation remains, offer visible persistent pause/play and stable selection. | Trial 6–8s dwell rather than rapid intro; verify by observation |
| Collection | Static readable tiles at rest; slight lift on hover/focus. Keep swipe native. | 180–240ms; 2–4px lift; no hover-only information |
| Section entrance | Small fade/translation once; reduce repeated reveal theatre. | 350–500ms; 12–20px; at most 60ms stagger |
| Clay ambience | One slow supporting movement in a visible section; keep gradients mostly static. | 10–16s subtle drift |
| Buttons | Small press feedback and arrow movement, with equal keyboard focus clarity. | 140–200ms; 1–2px press |
| Mobile menu | Short fade/open transition; closing and focus state do not depend solely on a transition event. | 180–240ms |
| Reduced motion | Stable product, immediate selection, static ambience, no reveal offsets or smooth-scrolling requirement. | No nonessential movement |

These timings are design proposals, not externally mandated values. Start with CSS and the existing browser animation APIs. Add a library only if an approved interaction requires it; changing tooling is not itself a visual improvement.

Pause inactive layers and offscreen decorative animation. Prefer transform/opacity for moving elements over continuously repainting large gradients or morphing many surfaces. Avoid scroll locking, forced horizontal storytelling, cursor followers, long loading sequences and mobile parallax in this pass.

W3C recommends pause controls and pausing carousel motion for hover/focus; a persistent user mechanism matters for ongoing automatic movement. See [WAI carousel animation guidance](https://www.w3.org/WAI/tutorials/carousels/animations/) and [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide).

## 10. Responsive design, accessibility and resilience

Observed strengths: meaningful image alternatives, skip link, labelled navigation/form fields, focus styles, image dimensions, mobile layouts, and a reduced-motion path already exist. All 12 routes stayed within viewport width at 390px and 1440px. The initially unloaded mobile strip Cola image loaded successfully after horizontal scrolling; it is lazy loading, not a confirmed broken asset.

Required refinements:

- Fix the confirmed 320px Contact overflow and floating-contact overlap.
- Give mobile menu focus an explicit lifecycle. Also test rapid open/close, resize to desktop while open and reduced-motion closing.
- In the first interaction log, the normal menu was checked after 400ms while its transition is 600ms; that early `menuClosed: false` is not sufficient to call it a normal-close failure. Use the follow-up log for settled state. Rapid reduced-motion closure needs its own reliable state handling.
- Keep small text dark enough across all flavour backgrounds. Lemon, Litchi and Green Apple deserve particular attention. Measure contrast rather than changing the palette wholesale.
- Use a practical 44px minimum touch target goal for compact controls; the mobile collection arrows currently shrink to 2.6rem (about 41.6px at the default root size).
- Expose current flavour selection and current navigation page to assistive technology. Hidden-name styling should not leave ambiguous rail labels.
- At 200% zoom, preserve meaningful heading breaks and visible focused elements. Check all long names, especially Green Apple and Red Guava.
- Without JavaScript, homepage text remains visible, but the mobile burger is inert and desktop navigation is hidden; provide a usable fallback navigation path near the top. Also revisit `novalidate` when custom form handling is unavailable.
- If the inline `.js` marker runs but the module observer fails, reveal content can stay hidden. Implement a fail-visible fallback.
- Keep meaningful fields and confirmations visible while mobile keyboards are open; check real devices before release.

## 11. Search, sharing and performance

Existing strengths: page titles/descriptions, canonical URLs, social tags, Organization schema, sitemap integration, responsive WebP product images and image dimensions.

Recommended follow-up:

1. Fix the unused product `head` slot. All eight rendered product pages currently omit their intended Product schema.
2. Review the Offer data before rendering it: current source assumes stock and omits price. Product markup should describe real, visible information. Google rich-result eligibility has additional requirements and is not guaranteed; see [Google Product snippet documentation](https://developers.google.com/search/docs/appearance/structured-data/product-snippet).
3. Give detail pages descriptive titles such as “SPARK Lemon Sparkling Drink — 250 ml”, if category and size are verified. Use product-specific social images when practical.
4. Confirm whether the GitHub Pages address is the intended public brand URL. If a brand domain is adopted later, update canonical, sitemap, social and Organization URLs together. The current Organization URL points at the host root rather than `/spark/`.
5. Clarify product/category metadata that currently groups Cola under “fruit flavours”.
6. Improve first-product image priority and defer hidden products. Review image `sizes` against actual rendered artwork width to avoid excess downloads.
7. Profile a production build before claiming speed gains. Dev screenshots and animation counts do not establish real-user performance. Compare initial image bytes, rendering work during transitions, layout shift and interaction responsiveness on a mid-range phone.
8. Keep the current fonts. If font delivery is a material loading issue, evaluate self-hosting the same families rather than introducing a new visual identity.

## 12. Measurement and business inputs

Suggested events after an analytics approach is approved:

| Event | Useful context | Interpretation |
| --- | --- | --- |
| Flavour opened | Flavour, source section | Which placements create product interest |
| Availability enquiry started | Flavour, source page | Whether interest reaches a next step |
| Trade enquiry started | Source placement, intent | Whether trade CTAs reach the right form |
| Form success / failure | Enquiry category, result | Completion and reliability; success requires confirmed service response |
| Contact channel clicked | WhatsApp/email/call, placement | Intent only; not proof of a completed conversation |

Do not collect message contents, names, email addresses or phone numbers as analytics event properties. Compare meaningful enquiries per visit and qualified leads, not just clicks or page time. Establish a baseline before judging an improvement.

Business inputs needed for content approval:

- Official product category, pack format/size and label details for each flavour.
- Approved ingredient/process wording and sensory descriptions.
- Current cities/retail availability, and whether there is a maintained stockist list.
- Confirmation of the 2022/2024/2026 timeline, “10+ cities” and Australia orders.
- Current Cola status and any actual new-launch schedule.
- Trade requirements: territories, pack/case options, minimums, enquiry owner and realistic response expectations.
- Official brand email/social links, approved team/production photos and any genuine customer/retailer proof.

These inputs are needed before publishing those statements. They do not block approving the direction or the confirmed interaction repairs.

## 13. Implementation and review sequence — after approval

| Phase | Scope | Review gate |
| --- | --- | --- |
| 1. Journey repairs | Flavour links, distributor intent, mobile overlap/overflow, menu focus | Demonstrate the three intended journeys with the current theme intact |
| 2. Content | Hero clarification, taste-led collection, shorter Why section, useful CTA, About/craft facts | Review actual final copy alongside current copy; confirm product/business facts |
| 3. Motion pilot | Hero selection/transition and one collection interaction | Review normal and reduced motion on desktop/mobile before spreading changes |
| 4. Remaining polish | Spacing/contrast, product information, mobile card density/footer, metadata/schema | Screenshot comparison across all pages; complete interaction checks |
| 5. Release verification | Production build, representative performance/accessibility review, controlled delivery verification | No release until approved scope is working; real test enquiry only with authorization |

Approval can cover individual IDs or phases. A useful first scope is A01–A09 plus the content fact review in A11, with the large teaser/content substitutions reviewed separately. This reduces the chance of another broad redesign that loses what currently works.

Acceptance checklist for the eventual implementation:

- Cream/clay theme, fonts, logo, flavour identity and current product artwork remain recognisable.
- All 12 routes and all flavour/CTA destinations work.
- Each flavour offers a clear, contextual availability enquiry.
- Distributor links open the correct enquiry state.
- No page overflow at 320, 390, 768, 1024 and 1440px; no floating contact obstruction.
- Menu and flavour controls work with touch and keyboard; focus stays visible.
- Reduced-motion mode is fully usable, and primary content survives script failures.
- Copy contains only approved product and business facts.
- No invented prices, stock, testimonials, certifications or response-time promises.
- No real submission is sent during automated checks; success/failure paths are simulated.
- Performance is evaluated on production output; comparisons use the same conditions.
- Final screenshots are compared with this baseline before approval to release.

## 14. Source map for future work

| Area | Files |
| --- | --- |
| Shared copy/navigation | `src/data/site.ts` |
| Homepage order | `src/pages/index.astro` |
| Hero behaviour | `src/components/sections/Hero.astro` |
| Product stage/artwork | `src/components/CanStage.astro`, `src/components/FlavourCan.astro` |
| Home narrative | `Manifesto.astro`, `CollectionStrip.astro`, `Future.astro`, `Craft.astro`, `CtaSection.astro` in `src/components/sections/` |
| Collection/detail | `src/pages/flavours/index.astro`, `src/pages/flavours/[slug].astro`, `src/components/cards/FlavourCard.astro` |
| Product facts | `src/content/flavours/*.md`, `src/content.config.ts` |
| About/spotlight | `src/pages/about.astro`, `src/components/sections/FlavourSpotlight.astro` |
| Contact | `src/pages/contact.astro` |
| Navigation/contact/footer | `src/components/layout/SiteHeader.astro`, `SiteFooter.astro`, `src/components/ui/FloatingContact.astro` |
| Theme/reveals/metadata | `src/styles/tokens.css`, `base.css`, `clay.css`, `src/layouts/BaseLayout.astro` |

Audit method used the local UI/UX skill's review priorities, source inspection and browser evidence. Its optional Python search utility could not run in this environment; no database search result is claimed. External references above are limited to primary accessibility/search documentation. The retained `SESSION-WORK-SUMMARY.md` was read and left unchanged.
