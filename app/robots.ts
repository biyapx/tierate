import {MetadataRoute} from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*.json'],
    },
    sitemap: 'https://AmazingTier.com/sitemap.xml',
  }
}
