import Image from "next/image";
import { Phone } from "lucide-react";

const PHONE_TEL = "+4917672799107";

const photos = [
  { src: "/photos/before-kartons.jpg", alt: "Entrümpelung Wohnraum" },
  { src: "/photos/sperrmuell-pile.jpg", alt: "Sperrmüll Abholung" },
  { src: "/photos/after-hof.jpg", alt: "Besenrein übergebener Hof" },
  { src: "/photos/after-wohnzimmer.jpg", alt: "Nach der Entrümpelung" },
  { src: "/photos/before-garten.jpg", alt: "Garten vor der Räumung" },
  { src: "/photos/after-keller.jpg", alt: "Keller nach der Entrümpelung" },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-32 bg-white border-t border-brand-100">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 md:mb-14">
          <div className="lg:col-span-6">
            <div className="label-mono text-signal-600 mb-4 md:mb-5">
              05 — Projekte
            </div>
            <h2 className="display-tight text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.05]">
              Einblicke aus
              <br />
              <span className="text-brand-500">unserer Arbeit.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-base sm:text-lg text-brand-700 leading-relaxed">
              Momentaufnahmen aus abgeschlossenen Entrümpelungen und
              Haushaltsauflösungen in Saarlouis und im Saarland.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={`relative overflow-hidden rounded-lg bg-brand-900 ${
                i === 0
                  ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-[4/3]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-brand-950/20" />
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a href={`tel:${PHONE_TEL}`} className="btn-cta w-full sm:w-auto">
            <Phone className="h-4 w-4" />
            Projekt anfragen
          </a>
          <span className="text-sm text-brand-500">
            Alle Fotos aus abgeschlossenen Projekten.
          </span>
        </div>
      </div>
    </section>
  );
}
