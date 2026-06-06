import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Local business listing directory',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Listings', href: '/listing' },
      { label: 'Create Listing', href: '/create' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Browse listings', href: '/listing' },
      secondary: { label: 'List your business', href: '/create' },
    },
  },
  footer: {
    tagline: 'Verified local discovery for real businesses',
    description: 'Find trusted local businesses, compare services, and connect with teams that are ready to help.',
    columns: [
      {
        title: 'Directory',
        links: [
          { label: 'Browse Listings', href: '/listing' },
          { label: 'Search Businesses', href: '/search' },
          { label: 'Add Business', href: '/create' },
          { label: 'Contact Team', href: '/contact' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean business discovery and direct contact.',
  },
  commonLabels: {
    readMore: 'View details',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest listings',
    related: 'Related',
    published: 'Published',
  },
} as const
