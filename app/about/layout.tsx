import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Washing Machine Repair Experts in Dubai',
  description:
    'Learn about Washing Machine Experts — Dubai\'s trusted washing machine repair team. Certified technicians, genuine OEM parts, same-day service and 10+ years of experience.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Washing Machine Repair Experts in Dubai',
    description:
      'Certified technicians, genuine OEM parts and same-day washing machine repairs across Dubai. Discover the team behind Washing Machine Experts.',
    url: '/about',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
