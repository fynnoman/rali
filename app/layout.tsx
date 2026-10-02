import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#081A33",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rali-entruempelungen.de"),
  title: {
    default: "RALI Entrümpelungen Saarlouis | Festpreis ab 199 € · Kostenlose Besichtigung",
    template: "%s | RALI Entrümpelungen Saarlouis",
  },
  description:
    "Professionelle Entrümpelung, Haushaltsauflösung und Sperrmüll-Abholung in Saarlouis und im Saarland. Festpreis, kostenlose Besichtigung, kurzfristige Termine. Jetzt anrufen 0176 72799107.",
  keywords: [
    "Entrümpelung Saarlouis",
    "Haushaltsauflösung Saarland",
    "Sperrmüll Saarlouis",
    "Entrümpelungsfirma Saarlouis",
    "Wohnungsauflösung Saarland",
    "Keller entrümpeln Saarlouis",
    "Garage entrümpeln",
    "Grünschnitt Entsorgung",
    "Bauschutt Entsorgung",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "RALI Entrümpelungen",
    title: "RALI Entrümpelungen Saarlouis | Festpreis ab 199 €",
    description:
      "Entrümpelung, Haushaltsauflösung und Sperrmüll im Saarland. Festpreis, kostenlose Besichtigung, kurzfristig verfügbar.",
    images: ["/rali-logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-white text-brand-900">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "RALI Entrümpelungen",
              image: "https://www.rali-entruempelungen.de/rali-logo.png",
              telephone: "+49 176 72799107",
              email: "Info@rali-entruempelungen.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Beethovenstraße 9A",
                postalCode: "66740",
                addressLocality: "Saarlouis",
                addressRegion: "Saarland",
                addressCountry: "DE",
              },
              areaServed: ["Saarlouis", "Saarland"],
              priceRange: "€€",
              description:
                "Entrümpelung, Haushaltsauflösung und Sperrmüll-Abholung in Saarlouis und im Saarland.",
            }),
          }}
        />
      </body>
    </html>
  );
}
