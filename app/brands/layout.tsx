import type { Metadata } from 'next';

const TITLE = 'Washing Machine Brands We Repair in Dubai | 38+ Makes';
const DESC = 'Same-day washing machine repair in Dubai for LG, Samsung, Bosch, Siemens, Whirlpool & 33 more brands. Genuine parts, certified techs, 12-month warranty.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/brands' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/brands',
    type: 'website',
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
};

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
