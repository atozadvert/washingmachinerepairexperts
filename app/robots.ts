import type { MetadataRoute } from 'next';

const SITE_URL = (process.env.APP_URL || 'https://washingmachineexperts.com').replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
