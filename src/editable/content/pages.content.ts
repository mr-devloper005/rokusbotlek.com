import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find trusted local businesses',
      description: 'Discover local businesses, compare services, and connect with verified providers through a clean business listing directory.',
      openGraphTitle: 'Find trusted local businesses',
      openGraphDescription: 'Browse local business listings, categories, locations, and service details in one clear directory experience.',
      keywords: ['business listing', 'local directory', 'service providers', 'business discovery'],
    },
    hero: {
      badge: 'Business directory',
      title: ['Find the right business', 'for every local need.'],
      description: 'Search trusted companies, compare services, and contact local providers from a clean directory made for business discovery.',
      primaryCta: { label: 'Browse listings', href: '/listing' },
      secondaryCta: { label: 'List your business', href: '/create' },
      searchPlaceholder: 'Search businesses, services, locations, and categories',
      focusLabel: 'Directory',
      featureCardBadge: 'trusted local picks',
      featureCardTitle: 'Business profiles, service details, and contact routes in one place.',
      featureCardDescription: 'Use the directory to move from search to comparison to contact without losing context.',
    },
    intro: {
      badge: 'About the directory',
      title: 'Built for discovering businesses with less noise and more useful detail.',
      paragraphs: [
        'This site helps visitors compare local businesses by category, location, service focus, and practical contact details.',
        'Every page is designed around quick scanning first, then richer detail for visitors who want to evaluate a business before getting in touch.',
        'Businesses can use the directory to present services clearly, while customers can find relevant providers without sorting through scattered search results.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Business-first homepage with search, categories, and featured listings.',
        'Clean archive pages for comparison across providers and service areas.',
        'Detail pages built around contact, location, trust cues, and related listings.',
        'Responsive layouts that stay compact and readable on every screen.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Contact us', href: '/contact' },
    },
    cta: {
      badge: 'Start discovering',
      title: 'Find a reliable business and take the next step with confidence.',
      description: 'Browse service providers, compare locations and categories, and contact the right business directly.',
      primaryCta: { label: 'Browse Listings', href: '/listing' },
      secondaryCta: { label: 'Contact Support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A clearer way to find and compare local businesses.',
    description: `${slot4BrandConfig.siteName} helps customers discover trusted businesses and helps providers present their services with clarity.`,
    paragraphs: [
      'We organize business information into simple listings, searchable archives, and detail pages that make comparison easier.',
      'Visitors can browse by category, scan service highlights, review contact details, and move quickly from discovery to conversation.',
      'For businesses, the platform creates a focused storefront that highlights what they do, where they serve, and how customers can reach them.',
    ],
    values: [
      {
        title: 'Business-first discovery',
        description: 'Listings are shaped around the details customers actually need: services, location, contact options, and reputation cues.',
      },
      {
        title: 'Clean comparison',
        description: 'Archive and search pages use consistent cards, filters, and layouts so visitors can compare businesses quickly.',
      },
      {
        title: 'Direct contact paths',
        description: 'Every detail page keeps calls, emails, websites, and location context close to the business profile.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Need help with a listing, category, or business profile?',
    description: 'Tell us what you want to add, update, verify, or promote. We will route your request to the right directory support lane.',
    formTitle: 'Send a directory request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search businesses, services, categories, and locations across the directory.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Search businesses, services, and locations faster.',
      description: 'Use keywords, categories, and listing types to find relevant providers across the directory.',
      placeholder: 'Search by business name, service, category, or city',
    },
    resultsTitle: 'Latest searchable listings',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a business listing.',
      description: 'Use your account to open the listing workspace and submit a business profile with service details.',
    },
    hero: {
      badge: 'Listing workspace',
      title: 'Create a clear business profile.',
      description: 'Add the business name, category, website, images, summary, and service details customers need before contacting you.',
    },
    formTitle: 'Business listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your business directory account.',
      description: 'Login to create listings, manage saved business details, and continue from where you left off.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and list your business.',
      description: 'Sign up to submit business listings, save contact details, and build a sharper directory presence.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
