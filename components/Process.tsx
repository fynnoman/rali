import Image from "next/image";
import { Phone, PhoneCall, FileText, Truck, CheckCircle2 } from "lucide-react";

const PHONE_TEL = "+4917672799107";

const steps = [
  {
    icon: PhoneCall,
    title: "Anfrage",
    desc: "Rufen Sie uns an oder schreiben per WhatsApp. Wir vereinbaren eine kostenlose Besichtigung.",
  },
  {
    icon: FileText,
    title: "Festpreis",
    desc: "Nach der Besichtigung erhalten Sie ein schriftliches Festpreis-Angebot. Keine Nachforderungen.",
  },
  {
    icon: Truck,
    title: "Entrümpelung",
    desc: "Unser Team räumt zügig und sauber. Verwertbares wird getrennt, der Rest fachgerecht entsorgt.",
  },
  {
    icon: CheckCircle2,
    title: "Übergabe",
    desc: "Objekt besenrein und bereit für die nächste Nutzung. Punkt.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="relative py-24 md:py-32 bg-brand-900 text-white overflow-hidden">
      <Image
        src="/rali-logo.png"
        alt=""
        width={700}
        height={700}
        className="absolute -left-32 -bottom-32 w-[500px] h-[500px] opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 brand-grid opacity-40" />

      <div className="relative container-tight">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-10 md:mb-20">
          <div className="lg:col-span-6">
            <div className="label-mono text-signal-400 mb-4 md:mb-5">02 — Ablauf</div>
            <h2 className="display-tight text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              In vier Schritten
              <br />
              <span className="text-signal-400">erledigt.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
              Vom ersten Anruf bis zur besenreinen Übergabe. Transparent,
              planbar und ohne böse Überraschungen.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative bg-brand-800/50 border border-white/10 rounded-lg p-5 sm:p-6 md:p-7 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="h-11 w-11 sm:h-12 sm:w-12 rounded bg-signal-500 flex items-center justify-center">
                  <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="display-tight text-3xl sm:text-4xl font-bold text-white/15">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <a href={`tel:${PHONE_TEL}`} className="btn-cta btn-cta-lg w-full sm:w-auto">
            <Phone className="h-4 w-4" />
            Jetzt kostenlos besichtigen lassen
          </a>
          <div className="text-sm text-white/60">
            Rückruf meist innerhalb weniger Stunden.
          </div>
        </div>
      </div>
    </section>
  );
}
