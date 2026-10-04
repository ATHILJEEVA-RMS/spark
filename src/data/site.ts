/* ============================================================
   SPARK — GLOBAL SITE DATA
   Brand-level, non-flavour content lives here so pages stay
   data-driven. Copy follows WEBSITE-CONTENT.md —
   edit here, the whole site follows.
   ============================================================ */

export const site = {
  brand: 'SPARK',
  description:
    'Explore eight SPARK sparkling drink flavours, from bright citrus and tropical fruit to berries and classic cola. Proudly crafted in Tamil Nadu.',
  url: 'https://athiljeeva-rms.github.io',
  base: '/spark',
};

export const nav = [
  { label: 'Home', href: '/spark/' },
  { label: 'Flavours', href: '/spark/flavours' },
  { label: 'Our Story', href: '/spark/about' },
  { label: 'Contact', href: '/spark/contact' },
];

export const cta = {
  label: 'Become a Distributor',
  href: '/spark/contact#distributor',
};

/* ---------- Hero ---------- */
export const hero = {
  title: ['FIND', 'YOUR', 'SPARK.'],
  lede: 'Bright, bold flavour for every kind of break.',
  primaryCta: { label: 'Explore Flavours', href: '/spark/flavours' },
  secondaryCta: { label: 'Become a Distributor', href: '/spark/contact#distributor' },
  meta: 'Crafted in Tamil Nadu',
};

/* ---------- Why SPARK (brand argument) ---------- */
export const manifesto = {
  eyebrow: 'Made for your moment',
  heading: ['Your taste.', 'Your SPARK.'],
  body: 'Explore the range and find the flavour you’re in the mood for.',
};

/* ---------- Flavour collection intro (homepage strip) ---------- */
export const collection = {
  eyebrow: 'The SPARK range',
  heading: ['Find your', 'flavour.'],
  lede: 'Explore eight sparkling drinks, from bright citrus and tropical fruit to berries and cola.',
  cta: { label: 'Explore All Flavours', href: '/spark/flavours' },
};

/* ---------- Flavours page hero ---------- */
export const flavoursPage = {
  eyebrow: 'Eight sparkling drink flavours',
  heading: ['Which flavour', 'is yours?'],
  lede: 'Meet the full SPARK range. Compare the tasting notes, choose a favourite, and ask us where to find it.',
};

/* ---------- Coming soon teaser ---------- */
export const future = {
  eyebrow: 'Choose your next sip',
  heading: ['Pick a flavour.', 'Make it yours.'],
  body: [
    'Go for bright Orange, tropical Mango, or the familiar taste of Cola.',
    'Explore the range and find the SPARK you feel like today.',
  ],
  cta: { label: 'Explore the Flavours', href: '/spark/flavours' },
};

/* ---------- Our craft ---------- */
export const craft = {
  eyebrow: 'A range with roots',
  heading: ['From Tamil Nadu.', 'Eight ways to choose.'],
  cta: { label: 'Read Our Story', href: '/spark/about' },
  items: [
    {
      title: 'Eight Flavours',
      body: 'Choose from citrus, tropical fruit, berries, litchi, guava and classic cola.',
      icon: 'fruit',
    },
    {
      title: 'Find Your Taste',
      body: 'Check each flavour’s tasting notes to find a bright, mellow, fruity or classic option.',
      icon: 'bubbles',
    },
    {
      title: 'Know Where to Look',
      body: 'Choose a flavour and tell us your city. We’ll help you check where SPARK is available.',
      icon: 'can',
    },
  ],
};

/* ---------- CTA ---------- */
export const ctaSection = {
  eyebrow: 'Take the next step',
  heading: 'Which SPARK will you try?',
  copy: 'Tell us your city and the flavour you have in mind. Interested in stocking SPARK? Share your shop or territory with our team.',
  primaryCta: { label: 'Check Availability', href: '/spark/contact#availability' },
  secondaryCta: { label: 'Stock SPARK', href: '/spark/contact#distributor' },
};

/* ---------- Contact ---------- */
export const contact = {
  eyebrow: 'Contact',
  heading: 'How can we help?',
  copy: 'Questions about SPARK, flavour availability, retail, or distribution? Get in touch with our team.',
  email: 'soundharyaramasamy1238@gmail.com',
  whatsapp: '918270596210',
  enquiries: [
    { title: 'Find a flavour', id: 'find-flavour',
      body: 'Tell us your city and the flavour you’d like to try. We’ll help you check availability.', icon: 'spark' },
    { title: 'Distributor partnerships', id: 'distributor',
      body: 'Tell us about your business and the territory you serve. Our team will follow up with you.', icon: 'globe' },
    { title: 'Retail opportunities', id: 'retail',
      body: 'Interested in carrying SPARK? Tell us about your shop and we’ll discuss the next steps.', icon: 'basket' },
    { title: 'Media & collaborations', id: 'media',
      body: 'For press, events and creative partnerships, send the team a note.', icon: 'pen' },
  ],
};

export const footer = {
  wordmark: { pre: 'Find your', accent: 'spark.' },
  tagline: 'Eight sparkling flavours, crafted in Tamil Nadu.',
  contact: {
    title: 'Let’s talk',
    copy: 'Questions about a flavour, stocking SPARK, or working together? Send our team a message.',
    cta: 'Get in touch',
    href: '/spark/contact',
  },
  columns: [
    {
      title: 'Company',
      links: [
        { label: 'Our Story', href: '/spark/about' },
        { label: 'Why SPARK', href: '/spark/#story' },
        { label: 'Flavours', href: '/spark/#collection' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/spark/contact' },
        { label: 'Distribution Enquiry', href: '/spark/contact#distributor' },
      ],
    },
  ],
  legal: '© ' + new Date().getFullYear() + ' SPARK Beverages. All rights reserved.',
};
