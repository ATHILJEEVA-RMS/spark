import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ============================================================
   FLAVOURS — the heart of the site.
   Everything flavour-related is driven by this collection.
   Adding a flavour forever = dropping one .md file here plus
   one cutout in /src/assets/flavours/. No page, component
   or route ever changes.

   Can artwork lives in src/assets so Astro's image pipeline
   can optimise every render (responsive srcset, modern
   formats) while the transparent PNG stays the source of
   truth. `image()` validates the referenced file at build
   time — a missing render fails the build, never the page.
   ============================================================ */
const flavours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/flavours' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      mood: z.string(),
      description: z.string(),
      status: z.enum(['current', 'limited', 'upcoming']).default('current'),
      featured: z.boolean().default(false),
      order: z.number(),
      volume: z.string().default('250 ml'),
      notes: z.array(z.string()).default([]),
      colors: z.object({
        primary: z.string(),
        deep: z.string(),
        soft: z.string(),
      }),
      image: z.object({
        /* Path to the transparent can cutout, relative to the .md
           file (e.g. ../../assets/flavours/orange.png). Cutouts are
           produced by tools/process_cans.py — see can-originals/. */
        src: image(),
        alt: z.string(),
      }),
    }),
});

export const collections = { flavours };
