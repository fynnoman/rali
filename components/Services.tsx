import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";

const PHONE_TEL = "+4917672799107";

const services = [
  {
    title: "Haushaltsauflösung",
    desc: "Komplette Auflösung von Wohnungen und Häusern. Sorgfältig und respektvoll, mit festem Ansprechpartner.",
    img: "/photos/before-wohnzimmer.jpg",
  },
  {
    title: "Wohnungs­entrümpelung",
    desc: "Komplette Wohnungen, einzelne Zimmer, Dachböden. Schnell geräumt, verwertbares getrennt.",
    img: "/photos/before-kartons.jpg",
  },
  {
    title: "Sperrmüll-Abholung",
    desc: "Kurzfristige Abholung und Entsorgung von Sperrmüll. Auch für einzelne Möbelstücke.",
    img: "/photos/sperrmuell-pile.jpg",
  },
  {
    title: "Keller & Garage",
    desc: "Lagerräume, Keller und Garagen gründlich geleert. Alles sortiert, alles mitgenommen.",
    img: "/photos/before-keller.jpg",
  },
  {
    title: "Grünschnitt-Entsorgung",
    desc: "Äste, Laub, Sträucher und Gartenabfälle. Abtransport und umweltgerechte Entsorgung.",
    img: "/photos/before-gruenschnitt.jpg",
  },
  {
    title: "Bauschutt-Entsorgung",
    desc: "Beton, Fliesen, Ziegel und Rückbaureste. Saubere Entsorgung bei Umbau, Renovierung oder Rückbau.",
    img: "/photos/before-bauschutt.jpg",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-16 md:py-32 bg-white">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 md:mb-20">
          <div className="lg:col-span-6">
            <div className="label-mono text-signal-600 mb-4 md:mb-5">
              01 — Leistungen
            </div>
            <h2 className="display-tight text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.05]">
              Was wir für
              <br />
              Sie übernehmen.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-base sm:text-lg text-brand-700 leading-relaxed">
              Von der Sperrmüll-Abholung bis zur kompletten Haushaltsauflösung.
              Alles aus einer Hand, mit einem festen Ansprechpartner und einem
              transparenten Festpreis.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-lg bg-brand-900 aspect-[16/11] sm:aspect-[4/5]"
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/50 to-brand-950/10" />

              <div className="absolute top-4 left-4 label-mono text-signal-400">
                0{i + 1}
              </div>
              <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center group-hover:bg-signal-500 group-hover:border-signal-500 transition-colors">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-sm text-white/85 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 p-5 sm:p-6 md:p-8 border-l-4 border-signal-500 bg-brand-50/50">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-brand-900 tracking-tight">
              Ihre Leistung ist nicht dabei?
            </h3>
            <p className="text-brand-700 mt-1 text-sm sm:text-base">
              Rufen Sie uns an. Wir finden eine Lösung.
            </p>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="btn-cta w-full sm:w-auto shrink-0">
            <Phone className="h-4 w-4" />
            Kostenlose Besichtigung
          </a>
        </div>
      </div>
    </section>
  );
}
