import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const PHONE = "0176 72799107";
const PHONE_TEL = "+4917672799107";
const EMAIL = "Info@rali-entruempelungen.de";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white/70 border-t border-brand-800">
      <div className="container-tight pt-12 md:pt-16 pb-8 md:pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 pb-10 md:pb-12 border-b border-white/10">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="inline-flex items-center gap-3">
              <div className="h-12 w-12 bg-white rounded flex items-center justify-center">
                <Image
                  src="/rali-logo.png"
                  alt="RALI Entrümpelungen"
                  width={100}
                  height={100}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold text-base leading-none">
                  RALI
                </div>
                <div className="text-signal-400 label-mono mt-1">
                  Entrümpelungen
                </div>
              </div>
            </div>
            <p className="mt-5 md:mt-6 text-sm leading-relaxed max-w-sm">
              RALI Entrümpelungen aus Saarlouis. Entrümpelungen,
              Haushaltsauflösungen und Sperrmüll-Abholung im gesamten Saarland.
              Festpreis ab 199 €, kostenlose Besichtigung.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="btn-cta mt-5 md:mt-6 w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="label-mono text-white/50 mb-4 md:mb-5">Leistungen</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#leistungen" className="hover:text-white">Haushaltsauflösung</a></li>
              <li><a href="#leistungen" className="hover:text-white">Entrümpelung</a></li>
              <li><a href="#leistungen" className="hover:text-white">Sperrmüll-Abholung</a></li>
              <li><a href="#leistungen" className="hover:text-white">Keller & Garage</a></li>
              <li><a href="#leistungen" className="hover:text-white">Grünschnitt</a></li>
              <li><a href="#leistungen" className="hover:text-white">Bauschutt</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="label-mono text-white/50 mb-4 md:mb-5">Kontakt</div>
            <ul className="space-y-5 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-white block">
                  <div className="flex items-center gap-2 text-signal-400 mb-1">
                    <Phone className="h-3.5 w-3.5" />
                    <span className="label-mono text-white/50">Telefon</span>
                  </div>
                  <div className="text-white font-semibold">{PHONE}</div>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white block break-all">
                  <div className="flex items-center gap-2 text-signal-400 mb-1">
                    <Mail className="h-3.5 w-3.5" />
                    <span className="label-mono text-white/50">E-Mail</span>
                  </div>
                  <div className="text-white font-semibold">{EMAIL}</div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-signal-400 mb-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="label-mono text-white/50">Adresse</span>
                </div>
                <div className="text-white font-semibold">
                  Beethovenstraße 9A<br />
                  66740 Saarlouis
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
          <div>
            © {new Date().getFullYear()} RALI Entrümpelungen · Inhaber Rezkar Ali
          </div>
          <div className="flex gap-8">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
