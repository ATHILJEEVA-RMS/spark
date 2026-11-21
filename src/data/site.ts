/* ============================================================
   SPARK — GLOBAL SITE DATA
   Brand-level, non-flavour content lives here so pages stay
   data-driven. Copy follows WEBSITE-CONTENT.md —
   edit here, the whole site follows.
   ============================================================ */

export const site = {
  brand: 'SPARK',
  description:
    'Explore eight SPARK sparkling drink flavours, from bright citrus and tropical fruit to berries and classic cola. Made in India.',
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
  lede: 'Eight sparkling drink flavours — from bright citrus and tropical fruit to berries and classic cola.',
  primaryCta: { label: 'Explore Flavours', href: '/spark/flavours' },
  secondaryCta: { label: 'Become a Distributor', href: '/spark/contact#distributor' },
  meta: 'Made in India',
};

/* ---------- Why SPARK (brand argument) ---------- */
export const manifesto = {
  eyebrow: 'Made for your moment',
  heading: ['Your taste.', 'Your SPARK.'],
  body: 'Eight sparkling flavours, each with its own colour, character and finish. Pick the one that fits the moment.',
};

/* ---------- Flavour collection intro (homepage strip) ---------- */
export const collection = {
  eyebrow: 'The SPARK range',
  heading: ['Find your', 'flavour.'],
  lede: 'Start with citrus, go tropical, or keep it classic. Compare the tasting notes and pick the one you’ll try next.',
  cta: { label: 'Explore All Flavours', href: '/spark/flavours' },
};

/* ---------- Flavours page hero ---------- */
export const flavoursPage = {
  eyebrow: 'Eight sparkling drink flavours',
  heading: ['Which flavour', 'is yours?'],
  lede: 'Meet the full SPARK range. Compare the tasting notes, choose a favourite, and ask us where to find it.',
};

/* ---------- Occasion picker (homepage panel) ---------- */
export const future = {
  eyebrow: 'Choose your next sip',
  heading: ['Pick a flavour.', 'Make it yours.'],
  body: [
    'Go for bright Orange, tropical Mango, or the familiar taste of Cola.',
    'Every flavour is available in 250 ml. Explore the range and pick the SPARK you feel like today.',
    'Hosting a gathering? We supply for parties, weddings and events.',
  ],
  cta: { label: 'Explore the Flavours', href: '/spark/flavours' },
};

/* ---------- Our craft ---------- */
export const craft = {
  eyebrow: 'A range with roots',
  heading: ['Made in India.', 'Made to stand out.'],
  cta: { label: 'Read Our Story', href: '/spark/about' },
  items: [
    {
      title: 'Eight Flavours',
      body: 'Eight sparkling drinks in 250 ml — from bright citrus and tropical flavours to berries, litchi, guava and classic cola.',
      icon: 'fruit',
    },
    {
      title: 'A Bottle That Stands Out',
      body: 'A clear, contoured bottle pairs bold SPARK lettering with flavour artwork and a different colour for every flavour.',
      icon: 'bottle',
    },
    {
      title: 'Know Where to Look',
      body: 'Choose a flavour and tell us your city. Our team will help you check availability near you.',
      icon: 'can',
    },
  ],
};

/* ---------- CTA ---------- */
export const ctaSection = {
  eyebrow: 'Take the next step',
  heading: ['Found your', 'flavour?'],
  copy: 'Eight sparkling flavours. Find your favourite, or bring SPARK to your shelves — or your next event.',
  primaryCta: { label: 'Check Availability', href: '/spark/contact#availability' },
  secondaryCta: { label: 'Stock SPARK', href: '/spark/contact#distributor' },
};

/* ---------- Contact ---------- */
export const contact = {
  eyebrow: 'Contact',
  heading: 'How can we help?',
  copy: 'Questions about SPARK, flavour availability, retail, distribution, or event supply? Get in touch with our team.',
  email: 'soundharyaramasamy1238@gmail.com',
  whatsapp: '918270596210',
  enquiries: [
    { title: 'Find a flavour', id: 'find-flavour',
      body: 'Tell us your city and the flavour you’d like to try. We’ll help you check availability.', icon: 'spark' },
    { title: 'Distributor partnerships', id: 'distributor',
      body: 'Tell us about your business and the territory you serve. Our team will follow up with you.', icon: 'globe' },
    { title: 'Retail opportunities', id: 'retail',
      body: 'Interested in carrying SPARK? Tell us about your shop and we’ll discuss the next steps.', icon: 'basket' },
    { title: 'Event supply', id: 'events',
      body: 'Planning a party, wedding or gathering? Tell us the date, city and quantity you need.', icon: 'spark' },
  ],
};

export const footer = {
  wordmark: { pre: 'Find your', accent: 'spark.' },
  tagline: 'Eight sparkling flavours, made in India.',
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
        { label: 'Event Supply', href: '/spark/contact#events' },
      ],
    },
  ],
  legal: '© ' + new Date().getFullYear() + ' SPARK Beverages. All rights reserved.',
};
