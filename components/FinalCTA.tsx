import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const PHONE = "0176 72799107";
const PHONE_TEL = "+4917672799107";
const WHATSAPP = "https://wa.me/4917672799107";
const EMAIL = "Info@rali-entruempelungen.de";

export default function FinalCTA() {
  return (
    <section id="kontakt" className="relative py-16 md:py-32 bg-brand-950 text-white overflow-hidden">
      <Image
        src="/rali-logo.png"
        alt=""
        width={1200}
        height={1200}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 brand-grid opacity-40" />

      <div className="relative container-tight">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <div className="h-12 w-12 md:h-14 md:w-14 bg-white rounded flex items-center justify-center">
              <Image
                src="/rali-logo.png"
                alt="RALI Entrümpelungen"
                width={120}
                height={120}
                className="h-9 w-9 md:h-11 md:w-11 object-contain"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm md:text-base leading-none">
                RALI Entrümpelungen
              </div>
              <div className="label-mono text-signal-400 mt-1">
                Saarlouis · Saarland
              </div>
            </div>
          </div>

          <h2 className="display-tight text-[40px] sm:text-5xl md:text-6xl lg:text-[88px] font-bold leading-[1.02]">
            Lassen Sie
            <br />
            <span className="text-signal-400">uns reden.</span>
          </h2>
          <p className="mt-5 md:mt-8 text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Ein kurzes Telefonat genügt. Wir vereinbaren eine kostenlose
            Besichtigung und machen Ihnen einen schriftlichen Festpreis.
          </p>

          <div className="mt-7 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={`tel:${PHONE_TEL}`} className="btn-cta btn-cta-lg w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light btn-cta-lg w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div className="mt-10 md:mt-14 grid sm:grid-cols-3 gap-3 text-left">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group bg-white/5 border border-white/10 rounded-lg p-5 md:p-6 hover:bg-white/10 hover:border-signal-500/40 transition-colors"
            >
              <Phone className="h-5 w-5 text-signal-400 mb-3" />
              <div className="label-mono text-white/60">Telefon</div>
              <div className="font-bold mt-1.5 md:mt-2 text-base md:text-lg">{PHONE}</div>
              <div className="text-xs text-white/60 mt-1">Mo bis Sa</div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group bg-white/5 border border-white/10 rounded-lg p-5 md:p-6 hover:bg-white/10 hover:border-signal-500/40 transition-colors"
            >
              <Mail className="h-5 w-5 text-signal-400 mb-3" />
              <div className="label-mono text-white/60">E-Mail</div>
              <div className="font-bold mt-1.5 md:mt-2 text-[13px] md:text-sm break-all">{EMAIL}</div>
            </a>
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 md:p-6">
              <MapPin className="h-5 w-5 text-signal-400 mb-3" />
              <div className="label-mono text-white/60">Adresse</div>
              <div className="font-bold mt-1.5 md:mt-2 text-sm md:text-base">Beethovenstraße 9A</div>
              <div className="text-white/75 text-xs md:text-sm">66740 Saarlouis</div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 inline-flex items-center gap-2 text-xs sm:text-sm text-white/60">
            <Clock className="h-4 w-4 shrink-0" />
            <span>Rückruf meist innerhalb weniger Stunden</span>
          </div>
        </div>
      </div>
    </section>
  );
}
