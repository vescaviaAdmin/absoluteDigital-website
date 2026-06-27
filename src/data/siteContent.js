import assets, { clientWorkData, company_logos } from '../assets/assets'

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Industries', path: '/industries' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
]

export const companyProfile = {
  name: 'Absolute Digital',
  tag: 'Digital Marketing Agency & Software Product Builder',
  email: 'absolutedigital.business@gmail.com',
  phone: '+91 93043 56329',
  secondaryPhone: '+91 80835 52909',
  whatsapp: 'https://wa.me/919304356329',
  instagram: 'https://www.instagram.com/absolutedigital_official?igsh=d2dmbGliMjI2c2g3',
  facebook: 'https://www.facebook.com/share/1FYmXWtYSN/',
  address: 'Bettiah, Bihar, India',
  promise:
    'We help ambitious businesses build visibility, generate qualified leads, launch better digital experiences, and turn marketing into measurable growth.',
}

export const heroStats = [
  { value: '9+', label: 'Core service lines' },
  { value: '6', label: 'Industries actively served' },
  { value: '100%', label: 'Custom strategy approach' },
]

export const homeHighlights = [
  'SEO and local visibility systems that generate compounding traffic.',
  'Paid campaigns across Google and Meta focused on lead quality and cost control.',
  'Conversion-focused websites, landing pages, and software product experiences.',
]

export const services = [
  {
    slug: 'seo',
    title: 'Search Engine Optimization',
    image: assets.hero_img,
    short: 'Improve rankings, visibility, and long-term inbound growth.',
    description:
      'Our SEO programs combine research, technical fixes, local search optimization, and on-page improvements so your business gets found by the right audience.',
    outcomes: ['Higher Google rankings', 'Qualified organic traffic', 'Long-term growth'],
    deliverables: [
      'Keyword research and competitor analysis',
      'On-page SEO optimization',
      'Technical SEO improvements',
      'Website speed optimization',
      'Local SEO services',
      'Google Business Profile optimization',
      'Link building and authority growth',
      'Monthly SEO reporting',
    ],
    accent: 'from-primary to-rose-300',
  },
  {
    slug: 'google-ads',
    title: 'Google Ads Management',
    image: assets.work_dashboard_management,
    short: 'Generate immediate traffic and leads from high-intent searches.',
    description:
      'We build and optimize search, display, remarketing, YouTube, and lead generation campaigns that balance scale with return on ad spend.',
    outcomes: ['Immediate visibility', 'Measurable ROI', 'Scalable acquisition'],
    deliverables: [
      'Search ads',
      'Display ads',
      'Shopping ads',
      'YouTube advertising',
      'Remarketing campaigns',
      'Lead generation campaigns',
    ],
    accent: 'from-rose-200 to-white',
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    image: assets.work_mobile_app,
    short: 'Reach and convert audiences on Facebook and Instagram.',
    description:
      'From creative direction to retargeting and conversion tracking, we use Meta’s targeting ecosystem to drive demand, leads, and sales.',
    outcomes: ['Lower cost per lead', 'Better audience targeting', 'More conversions'],
    deliverables: [
      'Lead generation ads',
      'Brand awareness campaigns',
      'E-commerce sales campaigns',
      'Retargeting ads',
      'Audience research',
      'Creative design and copywriting',
      'Conversion tracking',
    ],
    accent: 'from-primary/15 to-rose-100',
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing',
    image: assets.group_profile,
    short: 'Build attention, trust, and consistency across key platforms.',
    description:
      'We plan, create, publish, and refine social campaigns for businesses that want a stronger brand presence and a more active community.',
    outcomes: ['Stronger brand recall', 'Content consistency', 'Audience engagement'],
    deliverables: [
      'Content planning',
      'Graphic designing',
      'Reels creation',
      'Social media management',
      'Community engagement',
      'Monthly growth reporting',
    ],
    accent: 'from-amber-100 to-rose-100',
  },
  {
    slug: 'website-development',
    title: 'Website Design & Development',
    image: assets.work_dashboard_management,
    short: 'Modern websites built for credibility, speed, and conversion.',
    description:
      'We design responsive business websites, landing pages, portfolios, and commerce experiences that turn visitors into enquiries and customers.',
    outcomes: ['Higher trust', 'Better lead conversion', 'Faster page experience'],
    deliverables: [
      'Business websites',
      'Corporate websites',
      'E-commerce stores',
      'Landing pages',
      'Portfolio websites',
      'Custom web development',
    ],
    accent: 'from-white to-rose-100',
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation Systems',
    image: assets.work_fitness_app,
    short: 'Attract, capture, and nurture prospects into customers.',
    description:
      'We connect ad channels, landing pages, messaging flows, and follow-up systems to create repeatable lead generation engines for growth-focused teams.',
    outcomes: ['More enquiries', 'Higher-quality leads', 'Clear pipeline visibility'],
    deliverables: [
      'Google Ads funnels',
      'Facebook Ads funnels',
      'Landing pages',
      'WhatsApp marketing',
      'Email marketing',
      'LinkedIn marketing',
    ],
    accent: 'from-primary to-rose-200',
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    image: assets.riseInRise,
    short: 'Publish content that supports rankings, trust, and conversion.',
    description:
      'We develop website messaging, blogs, articles, social content, and ad copy that gives your brand a consistent, persuasive voice.',
    outcomes: ['Better authority', 'SEO support', 'Clear brand messaging'],
    deliverables: [
      'Website content writing',
      'Blog writing',
      'SEO articles',
      'Social media content',
      'Ad copywriting',
      'Product descriptions',
    ],
    accent: 'from-rose-50 to-white',
  },
  {
    slug: 'software-products',
    title: 'Software Products',
    image: assets.work_mobile_app,
    short: 'Build digital products, MVPs, and internal tools that support real business operations.',
    description:
      'We help businesses plan, design, and build software products that improve customer experience, team workflows, and digital delivery. From idea validation to usable interfaces and launch-ready builds, we focus on product decisions that create measurable business value.',
    outcomes: ['Faster product launches', 'Better user experience', 'Scalable digital systems'],
    deliverables: [
      'Product discovery workshops',
      'MVP planning and feature prioritization',
      'UI and UX design',
      'Admin panels and dashboards',
      'Customer-facing web applications',
      'Internal business tools',
      'Landing systems for product launches',
      'Ongoing iteration and optimization',
    ],
    accent: 'from-primary/10 to-amber-50',
  },
  {
    slug: 'branding-design',
    title: 'Branding & Graphic Design',
    image: assets.colorPrints,
    short: 'Create a brand system people remember and trust.',
    description:
      'We create visual identities, campaign creatives, and sales materials that strengthen perception and support every stage of your marketing funnel.',
    outcomes: ['Stronger identity', 'More cohesive campaigns', 'Better market recall'],
    deliverables: [
      'Logo design',
      'Brand identity design',
      'Social media creatives',
      'Brochures and flyers',
      'Business cards',
      'Marketing materials',
    ],
    accent: 'from-rose-100 to-amber-50',
  },
]

export const processSteps = [
  {
    title: 'Discovery & Audit',
    text: 'We study your market, current visibility, funnel gaps, and audience behavior before recommending tactics.',
  },
  {
    title: 'Strategy & Positioning',
    text: 'We map channels, offers, creative direction, and KPIs around your business goals instead of generic packages.',
  },
  {
    title: 'Launch & Optimize',
    text: 'Campaigns, content, websites, and product experiences are improved continuously using performance data.',
  },
]

export const metrics = [
  { value: 'SEO', label: 'Long-term acquisition engine' },
  { value: 'Ads', label: 'Fast-track lead generation' },
  { value: 'Web', label: 'Conversion-led digital presence' },
  { value: 'Prod', label: 'Software product thinking' },
]

export const differentiators = [
  {
    title: 'Data-Driven Strategy',
    text: 'Every engagement starts with market research, channel logic, and measurable objectives.',
  },
  {
    title: 'Customized Execution',
    text: 'No one-size-fits-all templates. We shape campaigns and product work to match your business model.',
  },
  {
    title: 'Transparent Reporting',
    text: 'You get clear performance visibility, not vague activity reports or vanity metrics.',
  },
  {
    title: 'Dedicated Support',
    text: 'Our team stays involved through iteration, testing, optimization, and practical recommendations.',
  },
]

export const industries = [
  {
    title: 'Real Estate',
    text: 'Generate site visits, property enquiries, and stronger local visibility using search, landing pages, and ads.',
  },
  {
    title: 'Education',
    text: 'Attract admissions enquiries with trust-building content, paid acquisition, and strong institution positioning.',
  },
  {
    title: 'Healthcare',
    text: 'Improve local reach, patient trust, and service discovery through compliant visibility and clear communication.',
  },
  {
    title: 'Insurance & Finance',
    text: 'Capture intent-driven leads with performance campaigns, educational content, and optimized conversion journeys.',
  },
  {
    title: 'Manufacturing',
    text: 'Support B2B credibility, dealer communication, and enquiry generation through a stronger digital presence.',
  },
  {
    title: 'Local Businesses',
    text: 'Grow footfall, calls, WhatsApp enquiries, and regional brand awareness with local-first digital marketing.',
  },
]

export const productServices = [
  {
    title: 'MVP Design & Build',
    text: 'We help founders and growing companies shape internal tools, customer platforms, and launch-ready product experiences.',
  },
  {
    title: 'Landing Page Systems',
    text: 'High-converting pages for campaigns, offers, admissions, product launches, and lead generation initiatives.',
  },
  {
    title: 'Growth Integrations',
    text: 'Analytics, forms, lead routing, CRM workflows, and channel tracking stitched into your digital funnel.',
  },
]

export const faqs = [
  {
    question: 'Do you work with small businesses and startups?',
    answer:
      'Yes. We work with startups, local businesses, service providers, and established brands. The strategy changes based on stage, budget, and growth target.',
  },
  {
    question: 'Can you handle both marketing and website execution?',
    answer:
      'Yes. Absolute Digital combines performance marketing, brand communication, design, and development so the funnel works as one system.',
  },
  {
    question: 'How do you report performance?',
    answer:
      'We focus on rankings, traffic quality, leads, conversion trends, ad efficiency, and business-relevant KPIs rather than reporting activity alone.',
  },
]

export const workHighlights = clientWorkData.map((item, index) => ({
  ...item,
  category: ['Brand Growth', 'Wellness', 'Healthcare', 'E-commerce', 'Retail', 'Product'][index] || 'Digital',
  summary:
    'Strategy, creative execution, and digital presentation tailored to the client’s growth stage and customer journey.',
}))

export const trustedLogos = company_logos

export const aboutStory = {
  heading: 'Built for businesses that need both visibility and execution',
  body:
    'Absolute Digital works at the intersection of marketing, design, and product thinking. We do not just bring traffic. We improve how your business is discovered, understood, and converted online.',
}

export const teamSnapshot = [
  { name: 'Vikash Kumar', role: 'CEO & Cofounder' },
  { name: 'Ashish Bhardwaj', role: 'Digital Marketing Expert & Cofounder' },
  { name: 'Campaign & Design Team', role: 'Creative, social, and advertising execution' },
  { name: 'Web & Product Team', role: 'Web development and digital product delivery' },
]

export const contactReasons = [
  'Need a stronger SEO and local ranking strategy',
  'Want paid campaigns that actually deliver qualified leads',
  'Need a modern website, landing page, or conversion funnel',
  'Exploring a software product, internal tool, or digital platform',
]

export const galleryImages = [
  assets.hero_img,
  assets.work_dashboard_management,
  assets.work_mobile_app,
  assets.work_fitness_app,
]
