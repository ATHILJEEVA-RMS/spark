# SPARK site improvement implementation

This records the implementation of the [site audit and plan](SITE-AUDIT-AND-IMPROVEMENT-PLAN.md) after approval. The baseline captures in `audit-evidence/` show the reverted design; `implemented-*.png` captures show the updated layout. The cream, clay, typography, logo shape and eight product images remain the visual foundation.

## Completed

| Audit item | Result |
| --- | --- |
| A01 | Homepage flavour tiles and About spotlight link directly to their flavour pages. |
| A02 | Distributor links select the trade enquiry and bring the form into view. |
| A03 | Contact shortcuts are collapsed into one bottom-right launcher on phone/tablet widths. The launcher hides while key CTAs, product cards, the contact form or footer are in view, so it does not cover them. |
| A04 | Mobile menu moves focus into the menu, loops keyboard focus within its controls, makes background regions inert, restores focus on close, and closes on resize. |
| A05 | Contact cards/links shrink and wrap correctly at 320px. |
| A06 | Flavour detail headline text uses a deeper ink mix for contrast, especially Lemon. |
| A07 | The rapid eight-flavour intro and the row below the hero were removed. The hero rotates slowly; the pause and sound controls are currently hidden, and the recorded sound asset remains unused until a later decision. Desktop rail or mobile swipe selections continue through the flavour rotation. Hidden product animation is paused. |
| A08 | Each flavour page offers an availability enquiry carrying that flavour into the form. |
| A09 | The homepage explains the drink category immediately, the collection has taste-led guidance, and the last CTA offers availability and trade paths. Repetitive copy was reduced. |
| A10 | The large speculative launch teaser is now an occasion panel linking to three existing flavours. |
| A11 | Unsupported ingredient-origin/process language was removed from flavour and craft copy. Broad distribution/Australia claims were removed from the About text. |
| A12 | About leads with the emotional promise “Different tastes. One good moment.” It speaks to people sharing everyday breaks and catch-ups, while each person chooses a flavour of their own. Tamil Nadu is the brand's home; the eight-flavour range and three-milestone journey support the story, with clear paths to discovery or retail enquiry. |
| A13 | Product JSON-LD now renders in the document head. The unverified `Offer` object was removed. |
| A14 | Contact supports consumer, trade and general intents; consumer enquiries include city and flavour, trade enquiries include business and territory, and either email or phone can be supplied. A `+61` format is accepted. Submissions remain with the existing provider. |
| A15 | The hero no longer eagerly loads every flavour image for the opening montage. |
| A17 | Navigation shows the current section, desktop trade CTA is no longer duplicated in the text links, and the footer says “Flavours.” |

Other polish: collection arrows use the measured card gap and stop forcing smooth motion when reduced motion is requested; reveal transitions are shorter and smaller; the header logo is rendered black; a simple navigation fallback appears without JavaScript; form copy explains use of contact details.

## Still dependent on business inputs or a later design choice

- **Product information:** complete ingredients, nutrition, allergens, pack formats, stock and store locations need approved source material. The site therefore offers an honest availability enquiry rather than a store finder or unsupported label details.
- **Brand proof:** the story's founding/rebrand dates remain from existing content and should be verified before publishing. The About page now frames the story around Tamil Nadu as a whole. Genuine team/production photos and quality practices are needed before expanding the About/craft sections. Cola’s limited status also needs confirmation.
- **Trade terms:** case packs, minimums, territories, margins and response commitments were not invented. A business email address and official social identity should be confirmed.
- **Mobile collection density (A16):** the existing single-column cards were kept because they remain legible and the planned two-column idea requires visual review on actual devices.
- **Analytics (A18):** no provider or reporting destination exists in the project. The audit includes an event plan; instrumentation waits for that choice.
- **Privacy policy:** the form includes a plain statement about replying to enquiries, but a formal privacy page needs approved business/legal content.

## Verification

- `npm.cmd run check`: 0 errors, 0 warnings and 0 hints in Astro diagnostics.
- `npm.cmd run build`: all 12 routes built successfully. Product JSON-LD is present in generated flavour pages.
- Chrome checked Home, Flavours, About, Contact and Lemon detail at 320, 390, 768 and 1440px. These pages returned 200, with no script errors and no horizontal page overflow. The other seven product routes share the same template and had passed the baseline route audit.
- Browser interaction checks confirmed mobile focus stays in the menu and returns to the trigger, product links preselect flavour, and distributor links select the trade form near the top of the viewport. A later hero check confirmed automatic rotation, pause holding the current flavour for seven seconds, play advancing it, the active can and caption agreeing, non-overlapping controls, and reduced-motion mode hiding the play control. See [hero checks](audit-evidence/hero-final-checks.json) and the [final mobile spacing](audit-evidence/hero-final-spacing-390.png).
- Enquiry success was checked with an intercepted provider response. No real message was sent. The international-phone path also passed with a mocked response.
- Full-page implementation captures: [desktop home](audit-evidence/implemented-home-1440.png), [mobile home](audit-evidence/implemented-home-390.png), [desktop flavours](audit-evidence/implemented-flavours-1440.png), [mobile flavours](audit-evidence/implemented-flavours-390.png), [desktop contact](audit-evidence/implemented-contact-1440.png), [mobile contact](audit-evidence/implemented-contact-390.png). [Machine-readable checks](audit-evidence/implementation-checks.json).

The first automated mocked success assertion sampled the form immediately after clicking; it was too early for the asynchronous response. A follow-up awaited the visible success message and passed. The first menu-close check also sampled before the intended 250ms close delay; a settled check passed.
