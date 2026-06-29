import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Washing Machine Repair Tips & Guides | Washing Machine Experts Dubai',
  description:
    'Expert washing machine care tips, troubleshooting guides and maintenance advice from Washing Machine Experts — Dubai\'s trusted same-day repair team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Washing Machine Repair Tips & Guides | Washing Machine Experts Dubai',
    description:
      'Expert washing machine care tips, troubleshooting guides and maintenance advice from Dubai\'s trusted repair team.',
    url: '/blog',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
