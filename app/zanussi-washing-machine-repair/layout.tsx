import type { Metadata } from 'next';
import { BRAND_BY_SLUG } from '../brands/brand-data';

const brand = BRAND_BY_SLUG['zanussi-washing-machine-repair'];

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDesc,
  alternates: { canonical: '/zanussi-washing-machine-repair' },
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDesc,
    url: '/zanussi-washing-machine-repair',
    type: 'website',
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.metaTitle,
    description: brand.metaDesc,
  },
};

export default function BrandRouteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
