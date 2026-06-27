import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Washing Machine Spin Cycle Repair in Dubai | Trusted Same-Day Fix',
  description: 'Washing machine spin cycle repair in Dubai. Our trusted technicians fix weak spins and no-spin faults on the same day with genuine parts and warranty.',
  alternates: { canonical: '/spin-cycle-repair' },
  openGraph: {
    title: 'Washing Machine Spin Cycle Repair in Dubai | Trusted Same-Day Fix',
    description: 'Washing machine spin cycle repair in Dubai. Our trusted technicians fix weak spins and no-spin faults on the same day with genuine parts and warranty.',
    url: '/spin-cycle-repair',
    type: 'website',
    locale: 'en_AE',
    images: [{ url: '/Spin%20Cycle%20Repair%20Hero%20Section.png', width: 1200, height: 630, alt: 'Washing Machine Spin Cycle Repair in Dubai | Trusted Same-Day Fix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Spin Cycle Repair in Dubai | Trusted Same-Day Fix',
    description: 'Washing machine spin cycle repair in Dubai. Our trusted technicians fix weak spins and no-spin faults on the same day with genuine parts and warranty.',
    images: ['/Spin%20Cycle%20Repair%20Hero%20Section.png'],
  },
};

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
