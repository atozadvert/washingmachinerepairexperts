import type { Metadata } from 'next';

const TITLE = 'Front Load Washing Machine Repair Dubai | Same-Day Expert Fix';
const DESC = 'Same-day front load washing machine repair in Dubai for LG, Samsung, Bosch & Siemens. Certified technicians, genuine parts and a 12-month workmanship warranty.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/front-load-washing-machine-repair' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/front-load-washing-machine-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Door%20Lock%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/Washing%20Machine%20Door%20Lock%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
