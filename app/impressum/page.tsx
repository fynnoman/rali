import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="py-16 md:py-24 bg-white">
        <article className="container-tight max-w-3xl">
          <h1 className="display-tight text-4xl md:text-5xl font-bold text-brand-900">
            Impressum
          </h1>
          <p className="mt-4 text-brand-700">
            Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV.
          </p>

          <section className="mt-10 space-y-6 text-brand-800">
            <div>
              <h2 className="label-mono text-brand-500">
                Name des Unternehmens
              </h2>
              <p className="mt-2 text-lg">RALI Entrümpelungen</p>
            </div>

            <div>
              <h2 className="label-mono text-brand-500">
                Eingetragener Firmensitz
              </h2>
              <p className="mt-2 text-lg">
                Beethovenstraße 9A<br />
                66740 Saarlouis
              </p>
            </div>

            <div>
              <h2 className="label-mono text-brand-500">
                Kontaktinformationen
              </h2>
              <p className="mt-2 text-lg">
                Rezkar Ali<br />
                Telefon: <a href="tel:+4917672799107" className="text-signal-700 hover:underline">0176 72799107</a><br />
                E-Mail: <a href="mailto:Info@rali-entruempelungen.de" className="text-signal-700 hover:underline">Info@rali-entruempelungen.de</a>
              </p>
            </div>

            <div>
              <h2 className="label-mono text-brand-500">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-2 text-lg">
                Rezkar Ali<br />
                Beethovenstraße 9A<br />
                66740 Saarlouis
              </p>
            </div>

            <div>
              <h2 className="label-mono text-brand-500">
                Haftung für Inhalte
              </h2>
              <p className="mt-2 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>

            <div>
              <h2 className="label-mono text-brand-500">
                Urheberrecht
              </h2>
              <p className="mt-2 leading-relaxed">
                © RALI Entrümpelungen. Alle Rechte vorbehalten. Die durch die
                Seitenbetreiber erstellten Inhalte und Werke auf dieser Website
                unterliegen dem deutschen Urheberrecht.
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
