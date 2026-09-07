/* ============================================================
   SPARK — GLOBAL SITE DATA
   Brand-level, non-flavour content lives here so pages stay
   data-driven. Copy follows SPARK_Website_Content_Strategy.md —
   edit here, the whole site follows.
   ============================================================ */

export const site = {
  brand: 'SPARK',
  tagline: 'Find your spark.',
  description:
    'SPARK is a new generation of sparkling refreshment — eight vibrant flavours, one unforgettable experience, crafted to refresh every moment.',
  url: 'https://athiljeeva-rms.github.io',
  base: '/spark',
};

export const nav = [
  { label: 'Home', href: '/spark/' },
  { label: 'Flavours', href: '/spark/flavours' },
  { label: 'About', href: '/spark/about' },
  { label: 'Distributor', href: '/spark/contact#distributor' },
  { label: 'Contact', href: '/spark/contact' },
];

export const cta = {
  label: 'Become a Distributor',
  href: '/spark/contact#distributor',
};

/* ---------- Hero ---------- */
export const hero = {
  eyebrow: 'New generation sparkling refreshment',
  title: ['FIND', 'YOUR', 'SPARK.'],
  lede: 'Eight vibrant flavours. Crafted in Tamil Nadu. Made to refresh every moment.',
  primaryCta: { label: 'Explore Flavours', href: '/spark/flavours' },
  secondaryCta: { label: 'Become a Distributor', href: '/spark/contact#distributor' },
  meta: 'Crafted in Tamil Nadu',
};

/* ---------- Why SPARK (brand argument) ---------- */
export const manifesto = {
  eyebrow: 'Why SPARK',
  heading: ['Born to', 'stand out.'],
  body: 'SPARK combines vibrant fruit flavours, refreshing sparkle, and distinctive packaging designed to brighten everyday moments.',
  signature: '',
};

/* ---------- Flavour collection intro (homepage strip) ---------- */
export const collection = {
  eyebrow: 'Our Collection',
  heading: ['Our', 'Collection'],
  lede: 'Eight signature flavours crafted for every mood.',
  cta: { label: 'Explore All Flavours', href: '/spark/flavours' },
};

/* ---------- Flavours page hero ---------- */
export const flavoursPage = {
  eyebrow: 'The Collection',
  heading: ['Eight moods.', 'One experience.'],
  lede: 'Every flavour tells its own story. Find the one that matches yours.',
};

/* ---------- Coming soon teaser ---------- */
export const future = {
  eyebrow: 'Coming next',
  heading: ['More spark is', 'coming.'],
  body: [
    'Eight flavours today.',
    'More vibrant creations are already in the making.',
    'Stay tuned for what’s next.',
  ],
  cta: { label: 'Stay Updated', href: '/spark/#newsletter' },
};

/* ---------- Our craft ---------- */
export const craft = {
  eyebrow: 'Our craft',
  heading: ['Crafted with care.', 'Perfected for you.'],
  cta: { label: 'Discover Our Craft', href: '/spark/about' },
  items: [
    {
      title: 'Real Fruit Flavours',
      body: 'Made with carefully selected real fruit concentrates.',
      icon: 'fruit',
    },
    {
      title: 'Premium Sparkle',
      body: 'Just the right amount of fizz for the perfect refresh.',
      icon: 'bubbles',
    },
    {
      title: 'Quality Assured',
      body: 'Hygienic production and strict quality standards.',
      icon: 'can',
    },
  ],
};

/* ---------- Featured flavour (spotlight) ---------- */
export const spotlight = {
  eyebrow: 'This week’s spark',
  cta: 'Taste the notes',
};

/* ---------- Editorial story beats ---------- */
export const story = {
  eyebrow: 'Our story',
  heading: 'Crafted for everyday moments.',
  lede: 'Whether it’s the first sip after a long day, a road trip with friends, or a celebration worth remembering, SPARK brings colour to every moment.',
  body: 'Enough said — every flavour is made to be remembered.',
};

/* ---------- About preview (home) ---------- */
export const about = {
  eyebrow: 'About',
  heading: ['We don’t just make drinks.', 'We create moments.'],
  body: 'SPARK was created to bring colour, energy and joy into everyday life. Every flavour is crafted to surprise. Every bottle is designed to stand out. Every sip is made to be remembered.',
  mission: {
    heading: 'Our mission',
    body: 'We believe refreshment isn’t just about taste. It’s about colour. Energy. Conversation. Laughter. And creating moments that stay with you.',
  },
};

/* ---------- Our Journey ---------- */
export const journey = {
  eyebrow: 'Our Journey',
  heading: ['Built from scratch.', 'Stronger than ever.'],
  body: 'Founded in 2022 in Coimbatore as Hogwarts Food & Beverages Pvt Ltd with a vision to create something different. When challenges tested us in 2024, we didn\'t stop — we rebuilt, rebranded, and came back stronger with SPARK. Today, with eight vibrant flavours and distribution across Tamil Nadu and international orders to Australia, we\'re just getting started.',
  milestones: [
    { year: '2022', label: 'Founded in Coimbatore' },
    { year: '2024', label: 'Reborn as SPARK' },
    { year: '2026', label: '10+ cities & growing' },
  ],
};

/* ---------- CTA ---------- */
export const ctaSection = {
  eyebrow: 'Find SPARK',
  heading: 'Your next favourite is waiting.',
  copy: 'Eight vibrant flavours crafted to colour your every moment. Find SPARK at a store near you or bring it to your shelves.',
  primaryCta: { label: 'Explore Flavours', href: '/spark/flavours' },
  secondaryCta: { label: 'Become a Distributor', href: '/spark/contact#distributor' },
};

/* ---------- Contact ---------- */
export const contact = {
  eyebrow: 'Contact',
  heading: 'Let\u2019s build something refreshing together.',
  copy: 'Have a question, partnership idea, or just want to say hi? Fill out the form below and we\u2019ll get back to you.',
  email: 'soundharyaramasamy1238@gmail.com',
  whatsapp: '918270596210',
  enquiries: [
    { title: 'Business enquiries', id: 'business',
      body: 'Partnerships, PR and collaborations with the SPARK brand team.', icon: 'spark' },
    { title: 'Distributor partnerships', id: 'distributor',
      body: 'Bring SPARK to a new market, city or chain. We\u2019re building everywhere.', icon: 'globe' },
    { title: 'Retail opportunities', id: 'retail',
      body: 'Shelf space for the colour burst. POs, ranging and display support.', icon: 'basket' },
    { title: 'Media & collaborations', id: 'media',
      body: 'Editorial, events and creative collaborations with the SPARK crew.', icon: 'pen' },
  ],
};

export const footer = {
  wordmark: { pre: 'Find your', accent: 'spark.' },
  tagline: 'Bold flavours. Real refreshment. Made for every moment.',
  newsletter: {
    title: 'Newsletter',
    copy: 'Stay updated with new flavours and exciting updates.',
    placeholder: 'Enter your email',
    cta: 'Subscribe',
  },
  columns: [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/spark/about' },
        { label: 'Our Story', href: '/spark/#story' },
        { label: 'Craft', href: '/spark/#craft' },
        { label: 'Careers', href: '/spark/contact' },
      ],
    },
    {
      title: 'Flavours',
      links: [
        { label: 'All Flavours', href: '/spark/flavours' },
        { label: 'New Arrivals', href: '/spark/flavours' },
        { label: 'Coming Soon', href: '/spark/flavours' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '/spark/contact' },
        { label: 'Contact Us', href: '/spark/contact' },
        { label: 'Distributor Enquiry', href: '/spark/contact#distributor' },
        { label: 'Privacy Policy', href: '#' },
      ],
    },
  ],
  legal: '© ' + new Date().getFullYear() + ' SPARK Beverages. All rights reserved.',
};
