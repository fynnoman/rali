"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const PHONE = "0176 72799107";
const PHONE_TEL = "+4917672799107";
const WHATSAPP = "https://wa.me/4917672799107";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white border-b border-brand-100"
      }`}
    >
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group min-w-0">
          <div className="relative shrink-0">
            <Image
              src="/rali-logo.png"
              alt="RALI Entrümpelungen Logo"
              width={140}
              height={140}
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
              priority
            />
          </div>
          <div className="border-l border-brand-200 pl-2 sm:pl-3 min-w-0">
            <div className="text-brand-900 font-bold text-[14px] sm:text-[15px] md:text-base tracking-tight leading-none">
              RALI
            </div>
            <div className="text-signal-600 text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-widest mt-1 whitespace-nowrap">
              ENTRÜMPELUNGEN
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          <a href="#leistungen" className="text-[13px] font-semibold text-brand-900 hover:text-signal-600 transition-colors">
            Leistungen
          </a>
          <a href="#vorher-nachher" className="text-[13px] font-semibold text-brand-900 hover:text-signal-600 transition-colors">
            Vorher / Nachher
          </a>
          <a href="#ablauf" className="text-[13px] font-semibold text-brand-900 hover:text-signal-600 transition-colors">
            Ablauf
          </a>
          <a href="#preise" className="text-[13px] font-semibold text-brand-900 hover:text-signal-600 transition-colors">
            Preise
          </a>
          <a href="#kontakt" className="text-[13px] font-semibold text-brand-900 hover:text-signal-600 transition-colors">
            Kontakt
          </a>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden lg:flex items-center gap-2 text-[13px] font-semibold text-brand-900"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn-cta !min-h-[40px] !py-2 !px-3 sm:!px-4 !text-[13px]"
            aria-label={`Anrufen ${PHONE}`}
          >
            <Phone className="h-3.5 w-3.5 lg:hidden" />
            <span className="hidden sm:inline">Jetzt anfragen</span>
            <span className="sm:hidden">Anrufen</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2 text-brand-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Menü"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-100 bg-white">
          <nav className="container-tight py-3 flex flex-col">
            {[
              ["Leistungen", "#leistungen"],
              ["Vorher / Nachher", "#vorher-nachher"],
              ["Ablauf", "#ablauf"],
              ["Preise", "#preise"],
              ["Kundenstimmen", "#stimmen"],
              ["Kontakt", "#kontakt"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-brand-100 last:border-b-0 text-brand-900 font-semibold"
              >
                {label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a href={`tel:${PHONE_TEL}`} className="btn-cta w-full">
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                <MessageCircle className="h-4 w-4" />
                Per WhatsApp schreiben
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
