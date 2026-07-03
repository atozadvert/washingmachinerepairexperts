import type { MetadataRoute } from 'next';
import { BRANDS } from './brands/brand-data';

// Public site URL. APP_URL is injected at runtime by the host; set it to the
// production domain so the sitemap contains absolute production URLs.
const SITE_URL = (process.env.APP_URL || 'http://localhost:3000').replace(/\/$/, '');

// Core static pages
const STATIC_PAGES = ['', '/about', '/blog', '/contact', '/brands'];

// Fault-specific service pages
const FAULT_PAGES = [
  '/drainage-repair',
  '/spin-cycle-repair',
  '/water-leakage-repair',
  '/drum-repair',
  '/door-lock-repair',
  '/noise-repair',
  '/power-fault-repair',
  '/water-inlet-repair',
];

// Machine-type service pages
const TYPE_PAGES = [
  '/automatic-washing-machine-repair',
  '/inverter-motor-washing-machine-repair',
  '/commercial-washing-machine-repair',
  '/freestanding-washing-machine-repair',
  '/front-load-washing-machine-repair',
  '/manual-washing-machine-repair',
  '/steam-wash-washing-machine-repair',
  '/top-load-washing-machine-repair',
  '/twin-tub-washing-machine-repair',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  ): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry('', 1, 'weekly'),
    ...STATIC_PAGES.slice(1).map((p) => entry(p, 0.8, 'monthly')),
    ...FAULT_PAGES.map((p) => entry(p, 0.9, 'monthly')),
    ...TYPE_PAGES.map((p) => entry(p, 0.9, 'monthly')),
    ...BRANDS.map((b) => entry(`/${b.slug}`, 0.9, 'monthly')),
  ];
}
