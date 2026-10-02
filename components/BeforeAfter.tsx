"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";

const PHONE_TEL = "+4917672799107";

const cases = [
  {
    id: "wohnzimmer",
    title: "Wohnzimmer-Entrümpelung",
    location: "Saarlouis",
    desc: "Vollgestellter Wohnraum mit Hausrat, Verpackungen und Alt-Mobiliar. Komplett geräumt und besenrein übergeben.",
    before: "/photos/before-wohnzimmer.jpg",
    after: "/photos/after-wohnzimmer.jpg",
  },
  {
    id: "keller",
    title: "Keller-Entrümpelung",
    location: "Saarland",
    desc: "Alter Keller mit Teppich, Mobiliar und Resten. Alles entfernt, Fläche besenrein für Umnutzung.",
    before: "/photos/before-keller.jpg",
    after: "/photos/after-keller.jpg",
  },
  {
    id: "garten",
    title: "Garten- & Grünschnitt",
    location: "Saarland",
    desc: "Garten mit Sperrmüll, Ast- und Holzresten. Vollständig abtransportiert, Fläche gereinigt.",
    before: "/photos/before-garten.jpg",
    after: "/photos/after-garten.jpg",
  },
];

function Comparison({
  before,
  after,
  altBefore,
  altAfter,
}: {
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-brand-900 select-none">
      <Image
        src={after}
        alt={altAfter}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={altBefore}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="absolute top-2.5 left-2.5 md:top-3 md:left-3 bg-brand-950/90 backdrop-blur-sm text-white text-[10px] md:text-[11px] font-bold tracking-widest uppercase px-2 md:px-2.5 py-1 rounded">
        Vorher
      </div>
      <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3 bg-signal-500 text-white text-[10px] md:text-[11px] font-bold tracking-widest uppercase px-2 md:px-2.5 py-1 rounded">
        Nachher
      </div>

      <div
        className="absolute inset-y-0 pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.5 h-full bg-white shadow-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 md:h-11 md:w-11 rounded-full bg-white shadow-2xl flex items-center justify-center ring-2 ring-brand-900/5">
          <div className="flex items-center text-brand-900 gap-0.5">
            <svg width="9" height="13" viewBox="0 0 8 12" fill="currentColor"><path d="M8 0L0 6l8 6z"/></svg>
            <svg width="9" height="13" viewBox="0 0 8 12" fill="currentColor" className="-scale-x-100"><path d="M8 0L0 6l8 6z"/></svg>
          </div>
        </div>
      </div>

      <div className="md:hidden absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-brand-900 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow pointer-events-none">
        Zum Vergleich schieben →
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Vorher Nachher Vergleich schieben"
      />
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="vorher-nachher" className="py-16 md:py-32 bg-brand-50/40 border-y border-brand-100">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 md:mb-16">
          <div className="lg:col-span-6">
            <div className="label-mono text-signal-600 mb-4 md:mb-5">
              Vorher · Nachher
            </div>
            <h2 className="display-tight text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.05]">
              Echte Arbeit.
              <br />
              <span className="text-brand-500">Echte Ergebnisse.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-base sm:text-lg text-brand-700 leading-relaxed">
              Projekte aus Saarlouis und dem Saarland. Ziehen Sie den Schieber,
              um den Unterschied zu sehen. Jedes Objekt wird besenrein übergeben.
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:gap-14">
          {cases.map((c, i) => (
            <div
              key={c.id}
              className={`grid lg:grid-cols-12 gap-5 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <Comparison
                  before={c.before}
                  after={c.after}
                  altBefore={`${c.title} vorher`}
                  altAfter={`${c.title} nachher`}
                />
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="label-mono text-brand-500 mb-2 md:mb-3">
                  Projekt 0{i + 1} · {c.location}
                </div>
                <h3 className="display-tight text-xl sm:text-2xl md:text-3xl font-bold text-brand-900 leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 md:mt-4 text-brand-700 leading-relaxed text-sm sm:text-base">{c.desc}</p>
                <div className="mt-4 md:mt-6 flex items-center gap-2 text-signal-700 font-semibold text-sm">
                  <ArrowRight className="h-4 w-4" />
                  Besenrein übergeben
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 sm:p-6 md:p-8 rounded-lg bg-brand-900 text-white">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              Ihr Objekt soll auch so aussehen?
            </h3>
            <p className="text-white/80 mt-2 text-sm sm:text-base">
              Kostenlose Besichtigung vereinbaren. Festpreis vor Beginn.
            </p>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="btn-cta btn-cta-lg w-full sm:w-auto shrink-0">
            <Phone className="h-4 w-4" />
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
