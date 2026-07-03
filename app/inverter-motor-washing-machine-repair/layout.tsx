import type { Metadata } from 'next';

const TITLE = 'Inverter Motor Washing Machine Repair Dubai | Same-Day Fix';
const DESC = 'Same-day inverter motor washing machine repair in Dubai for LG, Samsung & Bosch. Certified technicians, genuine parts and a 12-month workmanship warranty.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/inverter-motor-washing-machine-repair' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/inverter-motor-washing-machine-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Drum%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/Washing%20Machine%20Drum%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
