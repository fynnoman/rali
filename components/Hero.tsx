import Image from "next/image";
import { Phone, MessageCircle, Check } from "lucide-react";

const PHONE = "0176 72799107";
const PHONE_TEL = "+4917672799107";
const WHATSAPP = "https://wa.me/4917672799107";

export default function Hero() {
  return (
    <section className="relative bg-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0 brand-grid opacity-60" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-950 to-transparent" />

      <Image
        src="/rali-logo.png"
        alt=""
        width={800}
        height={800}
        className="absolute -right-32 -top-40 w-[600px] h-[600px] opacity-[0.04] pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      />

      <div className="relative container-tight pt-10 pb-14 md:pt-20 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
              <div className="h-10 w-10 md:h-11 md:w-11 bg-white rounded flex items-center justify-center shrink-0">
                <Image
                  src="/rali-logo.png"
                  alt="RALI Entrümpelungen"
                  width={80}
                  height={80}
                  className="h-8 w-8 md:h-9 md:w-9 object-contain"
                  priority
                />
              </div>
              <div className="min-w-0">
                <div className="text-white font-bold text-sm leading-none">
                  RALI Entrümpelungen
                </div>
                <div className="text-signal-400 label-mono mt-1">
                  Saarlouis · Saarland
                </div>
              </div>
            </div>

            <h1 className="display-tight text-[36px] xs:text-[40px] sm:text-[52px] md:text-7xl lg:text-[80px] font-bold leading-[1.05]">
              Entrümpelt.
              <br />
              Besenrein.
              <br />
              <span className="text-signal-400">Zum Festpreis.</span>
            </h1>

            <p className="mt-5 md:mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Haushaltsauflösungen, Wohnungs- und Kellerentrümpelungen,
              Sperrmüll-Abholung in Saarlouis und im gesamten Saarland.
              Kostenlose Besichtigung, transparenter Festpreis ab 199 €.
            </p>

            <div className="mt-7 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
              <a href={`tel:${PHONE_TEL}`} className="btn-cta btn-cta-lg w-full sm:w-auto">
                <Phone className="h-4 w-4 shrink-0" />
                <span className="truncate">Jetzt anrufen · {PHONE}</span>
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

            <div className="mt-6 md:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-5 gap-y-2.5 text-sm">
              {[
                "Kostenlose Besichtigung",
                "Festpreisgarantie",
                "Kurzfristige Termine",
                "Besenreine Übergabe",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/85">
                  <Check className="h-4 w-4 text-signal-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative grid grid-cols-5 grid-rows-6 gap-2 sm:gap-3 aspect-[4/5] max-w-[380px] sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="col-span-3 row-span-4 relative overflow-hidden rounded-lg bg-brand-800">
                <Image
                  src="/photos/before-wohnzimmer.jpg"
                  alt="Vorher: unaufgeräumtes Zimmer"
                  fill
                  sizes="(max-width: 1024px) 60vw, 300px"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-brand-950/85 backdrop-blur-sm text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded">
                  Vorher
                </div>
              </div>

              <div className="col-span-2 row-span-3 col-start-4 relative overflow-hidden rounded-lg bg-brand-800">
                <Image
                  src="/photos/after-wohnzimmer.jpg"
                  alt="Nachher: besenrein übergeben"
                  fill
                  sizes="(max-width: 1024px) 40vw, 200px"
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-signal-500 text-white text-[9px] md:text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded">
                  Nachher
                </div>
              </div>

              <div className="col-span-2 row-span-3 col-start-4 row-start-4 relative overflow-hidden rounded-lg bg-brand-800">
                <Image
                  src="/photos/sperrmuell-pile.jpg"
                  alt="Sperrmüll Abholung"
                  fill
                  sizes="(max-width: 1024px) 40vw, 200px"
                  className="object-cover"
                />
              </div>

              <div className="col-span-3 row-span-2 row-start-5 relative bg-signal-500 text-white rounded-lg flex flex-col items-center justify-center p-3 sm:p-4">
                <div className="label-mono text-white/80 text-[9px] md:text-[10px]">
                  Festpreis
                </div>
                <div className="flex items-baseline gap-1 mt-0.5 sm:mt-1">
                  <span className="text-xs sm:text-sm font-semibold">ab</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none tracking-tight">
                    199
                  </span>
                  <span className="text-xl sm:text-2xl font-bold">€</span>
                </div>
                <div className="text-[9px] sm:text-[10px] mt-0.5 sm:mt-1 text-white/80 text-center leading-tight">
                  nach kostenloser Besichtigung
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-brand-950/60 backdrop-blur-sm">
        <div className="container-tight py-4 md:py-5 flex items-center gap-3 md:gap-4 overflow-x-auto no-scrollbar">
          <span className="label-mono text-signal-400 shrink-0">
            Leistungen
          </span>
          <div className="flex items-center gap-4 md:gap-7 text-xs md:text-sm text-white/80 whitespace-nowrap font-medium">
            <span>Haushaltsauflösung</span>
            <span className="text-white/25">·</span>
            <span>Entrümpelung</span>
            <span className="text-white/25">·</span>
            <span>Sperrmüll</span>
            <span className="text-white/25">·</span>
            <span>Keller &amp; Garage</span>
            <span className="text-white/25">·</span>
            <span>Grünschnitt</span>
            <span className="text-white/25">·</span>
            <span>Bauschutt</span>
          </div>
        </div>
      </div>
    </section>
  );
}
