"use client";

import { Phone, MessageCircle } from "lucide-react";

const PHONE_TEL = "+4917672799107";
const WHATSAPP = "https://wa.me/4917672799107";

export default function StickyMobileCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-950/95 backdrop-blur-sm border-t border-brand-800 px-3 pt-2.5 safe-bottom"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-2">
        <a
          href={`tel:${PHONE_TEL}`}
          className="btn-cta flex-1 !min-h-[48px] !py-3 !text-sm"
          aria-label="Jetzt anrufen"
        >
          <Phone className="h-4 w-4" />
          Kostenlos anrufen
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-12 w-12 bg-white text-brand-900 shrink-0 rounded-md"
          aria-label="WhatsApp Chat öffnen"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
