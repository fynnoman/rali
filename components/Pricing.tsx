import Image from "next/image";
import { Phone, Check, MessageCircle } from "lucide-react";

const PHONE = "0176 72799107";
const PHONE_TEL = "+4917672799107";
const WHATSAPP = "https://wa.me/4917672799107";

const includes = [
  "Kostenlose Besichtigung vor Ort",
  "Schriftliches Festpreis-Angebot",
  "Komplettes Räumen des Objekts",
  "Fachgerechte Trennung & Entsorgung",
  "Besenreine Übergabe",
  "Keine versteckten Kosten",
];

export default function Pricing() {
  return (
    <section id="preise" className="py-16 md:py-32 bg-white">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="label-mono text-signal-600 mb-4 md:mb-5">03 — Preis</div>
            <h2 className="display-tight text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.05]">
              Festpreis.
              <br />
              <span className="text-brand-500">Punkt.</span>
            </h2>
            <p className="mt-5 md:mt-8 text-base sm:text-lg text-brand-700 leading-relaxed max-w-md">
              Nach der kostenlosen Besichtigung erhalten Sie einen schriftlichen
              Festpreis. Was wir vereinbaren, zahlen Sie. Keine Überraschungen,
              keine Nachforderungen.
            </p>

            <div className="mt-7 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a href={`tel:${PHONE_TEL}`} className="btn-cta btn-cta-lg w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Jetzt Festpreis anfragen
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-link"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <div className="mt-6 md:mt-8 text-sm text-brand-500">
              {PHONE} · Mo bis Sa erreichbar
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative bg-brand-900 rounded-lg overflow-hidden text-white p-6 sm:p-8 md:p-10">
              <Image
                src="/rali-logo.png"
                alt=""
                width={400}
                height={400}
                className="absolute -right-10 -bottom-10 w-48 h-48 sm:w-56 sm:h-56 opacity-[0.06] pointer-events-none select-none"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="label-mono text-signal-400">
                    Entrümpelung
                  </div>
                  <div className="h-9 w-9 sm:h-10 sm:w-10 bg-white rounded flex items-center justify-center shrink-0">
                    <Image
                      src="/rali-logo.png"
                      alt="RALI"
                      width={60}
                      height={60}
                      className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-baseline gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl md:text-3xl text-white/70">ab</span>
                  <span className="display-tight text-[72px] sm:text-[96px] md:text-[128px] font-bold leading-none">
                    199
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold">€</span>
                </div>
                <div className="mt-3 text-xs sm:text-sm text-white/70">
                  Endpreis individuell nach Umfang & Besichtigung
                </div>

                <div className="mt-6 sm:mt-8 border-t border-white/15">
                  {includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 py-3 sm:py-3.5 border-b border-white/10"
                    >
                      <div className="shrink-0 h-5 w-5 rounded-full bg-signal-500 flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-white/95 text-sm sm:text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
