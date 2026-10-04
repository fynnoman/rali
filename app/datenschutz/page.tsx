import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von RALI Entrümpelungen. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="py-16 md:py-24 bg-white">
        <article className="container-tight max-w-3xl">
          <h1 className="display-tight text-4xl md:text-5xl font-bold text-brand-900">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 text-brand-700">
            Diese Erklärung informiert Sie über die Verarbeitung Ihrer
            personenbezogenen Daten gemäß DSGVO.
          </p>

          <section className="mt-10 space-y-10 text-brand-800">
            <div>
              <h2 className="text-xl font-bold text-brand-900">1. Verantwortlicher</h2>
              <p className="mt-3 leading-relaxed">
                RALI Entrümpelungen<br />
                Rezkar Ali<br />
                Beethovenstraße 9A, 66740 Saarlouis<br />
                Telefon: 0176 72799107<br />
                E-Mail: Info@rali-entruempelungen.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-900">2. Erhebung von Daten beim Besuch der Website</h2>
              <p className="mt-3 leading-relaxed">
                Beim Aufruf unserer Website werden technisch notwendige Daten
                (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite) kurzzeitig
                vom Hosting-Anbieter verarbeitet. Rechtsgrundlage ist Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren
                Bereitstellung).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-900">3. Kontaktaufnahme</h2>
              <p className="mt-3 leading-relaxed">
                Wenn Sie uns per Telefon, WhatsApp oder E-Mail kontaktieren,
                werden Ihre Angaben zur Bearbeitung Ihrer Anfrage gespeichert.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                (vorvertragliche Maßnahmen) bzw. lit. f DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-900">4. Ihre Rechte</h2>
              <p className="mt-3 leading-relaxed">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
                und Widerspruch. Zudem können Sie sich bei der zuständigen
                Aufsichtsbehörde beschweren.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-900">5. Cookies</h2>
              <p className="mt-3 leading-relaxed">
                Diese Website verwendet keine Tracking-Cookies. Es werden
                lediglich technisch notwendige Daten verarbeitet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-900">6. Hosting</h2>
              <p className="mt-3 leading-relaxed">
                Diese Website wird auf externen Servern eines Dienstleisters
                gehostet. Die dabei anfallenden Server-Log-Dateien werden
                ausschließlich zur Sicherstellung des Betriebs verarbeitet.
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
