'use client';

import BrandPage from '../brands/brand-page';
import { BRAND_BY_SLUG } from '../brands/brand-data';

export default function HooverWashingMachineRepairPage() {
  return <BrandPage brand={BRAND_BY_SLUG['hoover-washing-machine-repair']} />;
}
