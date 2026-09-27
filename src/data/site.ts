/* ============================================================
   SPARK — GLOBAL SITE DATA
   Brand-level, non-flavour content lives here so pages stay
   data-driven. Copy follows SPARK_Website_Content_Strategy.md —
   edit here, the whole site follows.
   ============================================================ */

export const site = {
  brand: 'SPARK',
  tagline: 'Eight flavours. Find your spark.',
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

/* ---------- Featured flavour (spotlight) ---------- */
export const spotlight = {
  eyebrow: 'Meet the flavour',
  cta: 'Explore Orange',
};

/* ---------- Editorial story beats ---------- */
export const story = {
  eyebrow: 'Our story',
  heading: 'Different tastes. One good moment.',
  lede: 'SPARK began with a simple belief: a shared break feels better when everyone has a choice. Today, eight sparkling flavours each bring their own colour and character to the table.',
  body: 'Find your flavour. Share the moment.',
};

/* ---------- About preview (home) ---------- */
export const about = {
  eyebrow: 'About',
  heading: ['Different tastes.', 'One good moment.'],
  body: 'Crafted in Tamil Nadu, SPARK brings eight sparkling flavours to the shared breaks and catch-ups that make ordinary days feel brighter.',
  mission: {
    heading: 'Your taste, your SPARK',
    body: 'Taste is personal. With eight flavours across citrus, tropical fruit, berries, litchi, guava and cola, everyone can choose a favourite and still share the moment.',
  },
};

/* ---------- Our Journey ---------- */
export const journey = {
  eyebrow: 'Our journey',
  heading: ['Different tastes.', 'One shared moment.'],
  body: 'The story began in Tamil Nadu in 2022 with Hogwarts Food & Beverages Pvt Ltd. In 2024, the team introduced SPARK. Today, eight sparkling flavours give everyone their own way to join the moment.',
  milestones: [
    { year: '2022', label: 'The idea of more choice takes root' },
    { year: '2024', label: 'SPARK brings the idea together' },
    { year: 'Today', label: 'Eight flavours to share' },
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
  copy: 'Ask where to find a flavour, enquire about stocking SPARK, or send the team a general question. Choose an option and we’ll take it from there.',
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
