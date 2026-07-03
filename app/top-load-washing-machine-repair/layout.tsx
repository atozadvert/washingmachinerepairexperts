import type { Metadata } from 'next';

const TITLE = 'Top Load Washing Machine Repair Dubai | Same-Day Expert Fix';
const DESC = 'Same-day top load washing machine repair in Dubai for LG, Samsung, Whirlpool & Haier. Certified technicians, genuine parts and a 12-month workmanship warranty.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/top-load-washing-machine-repair' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/top-load-washing-machine-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Machine_with_folded_clothes_202606232148.jpeg', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/Machine_with_folded_clothes_202606232148.jpeg'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
