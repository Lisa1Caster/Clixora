/**
 * Business Configuration for Clixora SEO
 * 
 * CRITICAL: Every piece of business content, text, contact information,
 * color tokens, service definitions, and image URLs lives strictly in this file.
 * A non-technical business owner can modify this single file to update the entire site.
 */

export const business = {
  name: "Clixora SEO",
  legalName: "Clixora SEO Dundee",
  type: "General Local Business",
  category: "Local SEO & Search Visibility Consultancy",
  tagline: "Strategic Search Visibility for Dundee Businesses",
  headline: "Position Your Business Where Dundee Customers Actually Search",
  heroSupportingText: "We build structured local search visibility, technical website health, and Google Map authority for independent businesses across Dundee and Tayside.",
  
  description: "Clixora SEO delivers bespoke local search strategies and technical search visibility for independent companies and enterprises across Dundee and the surrounding Tayside region. We help your business appear when local customers are ready to buy.",
  
  about: {
    eyebrow: "About Clixora SEO",
    heading: "Practical, High-Standard Search Consultancy Grounded in Dundee",
    paragraphs: [
      "Clixora SEO was established at 85 Balunie Avenue in Dundee to provide local businesses with honest, technically sound search engine optimization without confusing marketing buzzwords or inflated retainers.",
      "When customers in Dundee, Broughty Ferry, and across Angus search for trusted local services, your company needs to appear prominently in the Google 3-Pack and organic search rankings. We build the exact foundation required: precise local citations, structured schema data, fast-loading mobile pages, and high-intent local keyword optimization.",
      "We work directly with our clients with clear communication, fast WhatsApp responsiveness, and regular transparent reporting on ranking progression and customer enquiry calls."
    ],
    highlightQuote: "Search optimization is not a gimmick. It is core commercial infrastructure for any modern Dundee enterprise.",
    authorTitle: "Clixora SEO Dundee Consultancy"
  },

  brandStyle: "Corporate",
  
  location: {
    areaName: "Dundee, Scotland",
    street: "85 Balunie Avenue",
    city: "Dundee",
    region: "Scotland",
    postalCode: "DD4 8RB",
    country: "United Kingdom",
    fullAddress: "85 Balunie Avenue, Dundee, Scotland, DD4 8RB",
    mapsUrl: "https://maps.google.com/?q=85+Balunie+Avenue,+Dundee,+Scotland,+DD4+8RB",
    directionsLabel: "Get Directions via Google Maps"
  },

  contact: {
    phone: "447985248298",
    phoneDisplay: "+44 7985 248298",
    phoneHref: "tel:447985248298",
    whatsapp: "447985248298",
    whatsappDisplay: "+44 7985 248298",
    whatsappUrl: "https://wa.me/447985248298?text=Hello%20Clixora%20SEO,%20I%20would%20like%20to%20inquire%20about%20local%20SEO%20services%20in%20Dundee.",
    email: "clixoraemaan@gmail.com",
    emailHref: "mailto:clixoraemaan@gmail.com",
    mainCTA: {
      label: "Message on WhatsApp",
      shortLabel: "WhatsApp Us",
      href: "https://wa.me/447985248298?text=Hello%20Clixora%20SEO,%20I%20would%20like%20to%20inquire%20about%20local%20SEO%20services%20in%20Dundee.",
      isExternal: true
    },
    secondaryCTA: {
      label: "Call +44 7985 248298",
      shortLabel: "Call Directly",
      href: "tel:447985248298",
      isExternal: false
    },
    consultationCTA: {
      label: "Enquire Online",
      href: "#contact",
      isExternal: false
    }
  },

  openingHours: {
    summary: "Mon – Fri: 9:00 AM – 5:30 PM",
    schedule: [
      { days: "Monday – Friday", hours: "9:00 AM – 5:30 PM", status: "Open for consultations" },
      { days: "Saturday", hours: "10:00 AM – 2:00 PM", status: "By appointment" },
      { days: "Sunday", hours: "Closed", status: "Enquiries via WhatsApp" }
    ],
    statusBadge: "Open Mon–Fri · Dundee Based"
  },

  colors: {
    primary: "#0f4c3a",       // Deep corporate British racing emerald
    primaryHover: "#083327",
    primaryLight: "#16654e",
    primarySubtle: "#edf6f2",
    secondary: "#1e293b",     // Crisp slate neutral
    accent: "#059669",        // Refined emerald accent
    background: "#fbfcfb",    // Soft, crisp off-white
    surface: "#ffffff",
    surfaceAlt: "#f4f7f5",    // Alternating section tint
    textPrimary: "#111827",   // Near-black ink
    textSecondary: "#4b5563",
    textMuted: "#6b7280",
    border: "#e5e7eb",
    borderLight: "#edf1ee"
  },

  images: {
    // Real, specific Unsplash photo URLs formatted exactly as specified
    hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    about: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    office: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80"
  },

  services: [
    {
      id: "local-seo",
      title: "Local SEO & Google Business Profile",
      description: "Comprehensive optimization of your Google Maps presence, business profile categories, and local Dundee citations to secure top 3-pack visibility.",
      deliverables: [
        "Google Business Profile verification and category tuning",
        "Dundee and Tayside geo-targeted landing page structure",
        "Local citation building and NAP consistency auditing"
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "technical-audit",
      title: "Technical Search Audits & Architecture",
      description: "Rigorous forensic analysis of your site code, mobile performance, structured schema markup, and crawlability issues preventing organic indexing.",
      deliverables: [
        "Core Web Vitals and mobile responsiveness diagnosis",
        "Schema.org local business structured data implementation",
        "Internal link optimization and duplicate URL mitigation"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "keyword-content",
      title: "High-Intent Keyword & Content Strategy",
      description: "Identification of high-value commercial queries typed by ready-to-hire local customers, turned into clear, authoritative on-page content.",
      deliverables: [
        "Dundee regional search demand and intent mapping",
        "Competitor ranking gap analysis and counter-strategy",
        "Conversion-focused page titles and meta asset overhaul"
      ],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80"
    }
  ],

  secondaryServices: [
    {
      title: "Local Directory Synchronization",
      description: "Aligning your address and contact details across authoritative UK trade directories to solidify local trust signals."
    },
    {
      title: "On-Page Structural Tuning",
      description: "Refining meta titles, header hierarchies, and internal page link flow for maximum topic relevance."
    },
    {
      title: "Search Ranking Analytics",
      description: "Plain-English tracking of keyword positions, local impressions, and customer call clicks."
    }
  ],

  usps: [
    {
      number: "01",
      title: "Dedicated Dundee Focus",
      description: "Directly located at 85 Balunie Avenue in Dundee with deep understanding of local search behavior and commercial intent across Tayside."
    },
    {
      number: "02",
      title: "Direct WhatsApp & Phone Line",
      description: "No ticketing queues or layers of account managers. Speak directly with an experienced search professional who knows your project."
    },
    {
      number: "03",
      title: "Technical Proof Over Vanity Metrics",
      description: "We focus exclusively on organic impressions, local map pack prominence, and actual customer enquiries that drive business revenue."
    },
    {
      number: "04",
      title: "Clear, Honest Scottish Work Ethic",
      description: "Realistic timeframes, transparent audit findings, and reliable communication during regular business hours."
    }
  ],

  faq: [
    {
      question: "Why is local SEO critical for Dundee businesses specifically?",
      answer: "When Dundee residents search for services on their phones or computers, Google serves the 'Local 3-Pack' maps box first. If your business doesn't appear in those top 3 positions, you are losing immediate inquiries to competitors who do. Local SEO ensures your business is visible right when buyers are making hiring decisions."
    },
    {
      question: "How do we get started with Clixora SEO?",
      answer: "The easiest way is to tap 'Message on WhatsApp' or call us at +44 7985 248298. Send us your website URL and target Dundee area, and we will carry out an initial review of your local search footprint."
    },
    {
      question: "Can I meet or consult with you directly in Dundee?",
      answer: "Yes. We are based at 85 Balunie Avenue, Dundee (DD4 8RB). We provide direct phone consultations, WhatsApp correspondence, and in-person scheduled meetings for businesses in the Dundee and Angus area."
    },
    {
      question: "What information do you need to review our website?",
      answer: "Just your website address, your primary service, and the locations in Dundee or Tayside you wish to target. We evaluate your current Google Business Profile, ranking signals, and competitor landscape."
    }
  ],

  // Testimonials: Rendered only if non-empty real content is provided (Prompt instruction: include ONLY if real content exists)
  testimonials: null,

  navLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],

  contactForm: {
    eyebrow: "Direct Consultation",
    heading: "Start a Conversation With Clixora SEO",
    description: "Send a direct message below or contact us via WhatsApp for an immediate response during business hours.",
    fields: {
      name: { label: "Your Full Name", placeholder: "e.g. Alistair Ross" },
      businessName: { label: "Business Name", placeholder: "e.g. Dundee Trades Co" },
      phone: { label: "Phone Number", placeholder: "e.g. 07985 248298" },
      email: { label: "Email Address", placeholder: "e.g. contact@yourbusiness.co.uk" },
      website: { label: "Website URL (Optional)", placeholder: "e.g. www.yourbusiness.co.uk" },
      service: { 
        label: "Service of Interest",
        options: [
          "Local SEO & Google Business Profile",
          "Technical Site Audit & Fixes",
          "Keyword Strategy & Content",
          "General Search Consultation"
        ]
      },
      message: { label: "How can we help your business?", placeholder: "Tell us a bit about your business and your target area in Dundee..." }
    },
    submitLabel: "Send Consultation Request",
    submittingLabel: "Sending Request...",
    successMessage: "Thank you. Your enquiry has been received. A search specialist from Clixora SEO will respond within one business day."
  },

  footer: {
    note: "Clixora SEO provides specialized local search optimization, technical site auditing, and search ranking consulting for independent enterprises in Dundee, Scotland.",
    copyrightNotice: "Clixora SEO. All rights reserved."
  }
};
