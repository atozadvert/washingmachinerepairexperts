'use client';

import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '+971508931985';
const WHATSAPP = 'https://wa.me/971508931985';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
      >
        <MessageCircle className="h-6 w-6 stroke-[2.5]" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-[#f2b134] text-neutral-900 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
      >
        <Phone className="h-6 w-6 stroke-[2.5]" />
      </a>
    </div>
  );
}
