'use client';

import BrandPage from '../brands/brand-page';
import { BRAND_BY_SLUG } from '../brands/brand-data';

export default function AristonWashingMachineRepairPage() {
  return <BrandPage brand={BRAND_BY_SLUG['ariston-washing-machine-repair']} />;
}
