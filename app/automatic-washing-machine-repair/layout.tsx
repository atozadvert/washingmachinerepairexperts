import type { Metadata } from 'next';

const TITLE = 'Automatic Washing Machine Repair Dubai | Same-Day Expert Fix';
const DESC = 'Same-day automatic washing machine repair in Dubai for LG, Samsung, Bosch & Whirlpool. Certified technicians, genuine parts and a 12-month workmanship warranty.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/automatic-washing-machine-repair' },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/automatic-washing-machine-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Spin%20Cycle%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/Spin%20Cycle%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
