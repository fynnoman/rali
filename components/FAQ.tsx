"use client";

import { useState } from "react";
import { Plus, Phone, MessageCircle } from "lucide-react";

const PHONE_TEL = "+4917672799107";
const WHATSAPP = "https://wa.me/4917672799107";

const faqs = [
  {
    q: "Wie schnell kann die Entrümpelung starten?",
    a: "In der Regel innerhalb weniger Tage. Bei dringenden Fällen sind kurzfristige Termine oft noch in derselben Woche möglich. Rufen Sie uns am besten direkt an.",
  },
  {
    q: "Was kostet eine Entrümpelung?",
    a: "Kleinere Entrümpelungen starten ab 199 €. Der endgültige Preis richtet sich nach Umfang, Erreichbarkeit und Entsorgungsaufwand und wird vorab als Festpreis vereinbart. Die Besichtigung ist kostenlos.",
  },
  {
    q: "Ist die Besichtigung wirklich kostenlos?",
    a: "Ja. Wir kommen vorbei, schauen uns das Objekt an und erstellen Ihnen ein transparentes Festpreis-Angebot. Erst wenn Sie zusagen, legen wir los.",
  },
  {
    q: "Was passiert mit dem Mobiliar und den Gegenständen?",
    a: "Noch brauchbare Dinge werden fachgerecht getrennt und wiederverwertet. Alles andere wird umweltgerecht entsorgt. Auf Wunsch können verwertbare Gegenstände vom Preis abgezogen werden.",
  },
  {
    q: "Übernehmen Sie auch Haushaltsauflösungen bei Todesfällen?",
    a: "Ja. Wir arbeiten bei Haushaltsauflösungen besonders sorgfältig und respektvoll. Persönliche Dokumente werden gesammelt und übergeben, auf Wunsch helfen wir bei der Sortierung.",
  },
  {
    q: "In welchen Orten sind Sie tätig?",
    a: "Wir decken Saarlouis und das gesamte Saarland ab, u. a. Dillingen, Lebach, Völklingen, Saarbrücken und Merzig. Fragen Sie einfach nach, ob wir in Ihrem Ort fahren.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-32 bg-white border-t border-brand-100">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="label-mono text-signal-600 mb-4 md:mb-5">
              07 — Häufige Fragen
            </div>
            <h2 className="display-tight text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 leading-[1.05]">
              Alles, was Sie
              <br />
              <span className="text-brand-500">wissen möchten.</span>
            </h2>
            <p className="mt-5 md:mt-8 text-base sm:text-lg text-brand-700 leading-relaxed max-w-sm">
              Keine Antwort gefunden? Ein kurzer Anruf oder eine WhatsApp genügt.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a href={`tel:${PHONE_TEL}`} className="btn-cta w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Anrufen
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
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t-2 border-brand-900">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className="border-b border-brand-200">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-5 md:py-6 flex items-start justify-between gap-4 md:gap-6 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg md:text-xl font-bold text-brand-900 tracking-tight group-hover:text-brand-700 pr-2">
                        {item.q}
                      </span>
                      <span
                        className={`shrink-0 mt-0.5 h-7 w-7 rounded flex items-center justify-center transition-all ${
                          isOpen
                            ? "bg-signal-500 text-white rotate-45"
                            : "bg-brand-50 text-brand-700 border border-brand-100"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-5 md:pb-6"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-brand-700 leading-relaxed max-w-2xl text-sm sm:text-base">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
