import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kerstin N.",
    stars: 5,
    text: "Top Entrümpelungsfirma in Saarlouis. Die Arbeit wurde schnell, sauber und absolut zuverlässig erledigt. Besonders beeindruckt hat mich der faire Preis und die kurzfristige Terminvergabe.",
  },
  {
    name: "Fam. Heinz",
    stars: 4,
    text: "Super Service für Sperrmüll-Abholung in Saarlouis. Ich hatte kurzfristig viel Sperrmüll zu entsorgen und habe schnell einen Termin bekommen. Die Entsorgung lief stressfrei und zu einem günstigen Preis.",
  },
  {
    name: "Fam. Feit",
    stars: 5,
    text: "Super Betrieb für kurzfristige Entrümpelungen in Saarlouis. Das Haus war an einem Tag leer. Danke!",
  },
  {
    name: "Fam. Braun",
    stars: 4,
    text: "Sehr gute Entrümpelung in Saarlouis. Ich habe eine Wohnungsauflösung im Saarland gebraucht und wurde hier perfekt unterstützt. Klare Empfehlung.",
  },
];

export default function Testimonials() {
  return (
    <section id="stimmen" className="relative py-16 md:py-32 bg-brand-50/50 border-t border-brand-100 overflow-hidden">
      <Image
        src="/rali-logo.png"
        alt=""
        width={700}
        height={700}
        className="absolute -right-24 top-10 w-[400px] h-[400px] opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="relative container-tight">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 md:mb-16">
          <div className="lg:col-span-6">
            <div className="label-mono text-signal-600 mb-4 md:mb-5">
              04 — Kundenstimmen
            </div>
            <h2 className="display-tight text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.05]">
              Was unsere Kunden
              <br />
              <span className="text-brand-500">sagen.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-base sm:text-lg text-brand-700 leading-relaxed">
              Auszüge aus Rückmeldungen von Kundinnen und Kunden aus Saarlouis
              und dem Saarland.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative bg-white border border-brand-100 rounded-lg p-5 sm:p-7 md:p-8"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < t.stars
                          ? "fill-signal-500 text-signal-500"
                          : "text-brand-200"
                      }`}
                    />
                  ))}
                </div>
                <div className="h-7 w-7 rounded bg-brand-50 border border-brand-100 flex items-center justify-center">
                  <Image
                    src="/rali-logo.png"
                    alt="RALI"
                    width={40}
                    height={40}
                    className="h-5 w-5 object-contain"
                  />
                </div>
              </div>
              <blockquote className="text-brand-900 leading-relaxed text-[15px] md:text-base">
                „{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-brand-100 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-brand-900 text-signal-400 flex items-center justify-center font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-brand-900 text-sm">{t.name}</div>
                  <div className="text-xs text-brand-500">Kunde aus dem Saarland</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
