import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

const PHONE_TEL = "+4917672799107";

const cities = [
  "Saarlouis",
  "Dillingen",
  "Lebach",
  "Völklingen",
  "Saarbrücken",
  "Merzig",
  "Wadgassen",
  "Bous",
  "Schwalbach",
  "Überherrn",
  "Rehlingen-Siersburg",
  "Nalbach",
  "Saarwellingen",
  "Ensdorf",
  "Wallerfangen",
  "Beckingen",
];

export default function ServiceArea() {
  return (
    <section className="relative py-16 md:py-32 bg-brand-900 text-white overflow-hidden border-t border-brand-800">
      <Image
        src="/rali-logo.png"
        alt=""
        width={800}
        height={800}
        className="absolute -right-40 -top-40 w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 brand-grid opacity-30" />

      <div className="relative container-tight">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="label-mono text-signal-400 mb-4 md:mb-5">
              06 — Einsatzgebiet
            </div>
            <h2 className="display-tight text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Im gesamten
              <br />
              Saarland für Sie
              <br />
              <span className="text-signal-400">unterwegs.</span>
            </h2>
            <p className="mt-5 md:mt-8 text-base sm:text-lg text-white/75 leading-relaxed max-w-md">
              Hauptsitz in Saarlouis, Einsätze im gesamten Saarland. Ihr Ort
              ist nicht gelistet? Fragen Sie trotzdem an.
            </p>

            <a href={`tel:${PHONE_TEL}`} className="mt-6 md:mt-8 btn-cta btn-cta-lg w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Verfügbarkeit prüfen
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="bg-brand-800/50 border border-white/10 rounded-lg p-5 sm:p-6 md:p-8 backdrop-blur-sm">
              <div className="label-mono text-signal-400 mb-4 md:mb-5">
                Städte im Einsatzgebiet
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-0.5">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 py-2 sm:py-2.5 border-b border-white/10 text-white font-medium"
                  >
                    <MapPin className="h-3.5 w-3.5 text-signal-400 shrink-0" />
                    <span className="text-[13px] sm:text-sm truncate">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
