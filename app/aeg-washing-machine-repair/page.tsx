'use client';

import BrandPage from '../brands/brand-page';
import { BRAND_BY_SLUG } from '../brands/brand-data';

export default function AegWashingMachineRepairPage() {
  return <BrandPage brand={BRAND_BY_SLUG['aeg-washing-machine-repair']} />;
}
