import type { Metadata } from 'next';

const TITLE = 'Commercial Washing Machine Repair Dubai | 24/7 Expert Service';
const DESC = 'Same-day commercial washing machine repair in Dubai for Speed Queen, Maytag & IPSO. Certified technicians, genuine parts and a 12-month workmanship warranty.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/commercial-washing-machine-repair' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/commercial-washing-machine-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Power%20Fault%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/Washing%20Machine%20Power%20Fault%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
