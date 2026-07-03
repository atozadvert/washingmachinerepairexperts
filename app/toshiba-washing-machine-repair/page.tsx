'use client';

import BrandPage from '../brands/brand-page';
import { BRAND_BY_SLUG } from '../brands/brand-data';

export default function ToshibaWashingMachineRepairPage() {
  return <BrandPage brand={BRAND_BY_SLUG['toshiba-washing-machine-repair']} />;
}
