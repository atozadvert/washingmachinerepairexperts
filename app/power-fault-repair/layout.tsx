import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Power Fault Repair Dubai | Same-Day Fix',
  description: 'Machine won\'t turn on or trips the fuse? Our Dubai technicians fix washing machine power faults the same day with genuine parts and full warranty.',
  alternates: { canonical: '/power-fault-repair' },
  openGraph: {
    title: 'Washing Machine Power Fault Repair Dubai | Same-Day Fix',
    description: 'Machine won\'t turn on or trips the fuse? Our Dubai technicians fix washing machine power faults the same day with genuine parts and full warranty.',
    url: '/power-fault-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Washing%20Machine%20Power%20Fault%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Power Fault Repair Dubai | Same-Day Fix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Power Fault Repair Dubai | Same-Day Fix',
    description: 'Machine won\'t turn on or trips the fuse? Our Dubai technicians fix washing machine power faults the same day with genuine parts and full warranty.',
    images: ['/Washing%20Machine%20Power%20Fault%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
