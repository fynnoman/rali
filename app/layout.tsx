import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const SITE_URL = "https://www.rali-entruempelungen.de";
const BUSINESS_NAME = "RALI Entrümpelungen";
const PHONE = "+4917672799107";
const PHONE_DISPLAY = "0176 72799107";
const EMAIL = "Info@rali-entruempelungen.de";
const STREET = "Beethovenstraße 9A";
const POSTAL_CODE = "66740";
const CITY = "Saarlouis";
const REGION = "Saarland";
const COUNTRY = "DE";
// Approximate coordinates for Saarlouis (used by Google/Bing for local pack)
const GEO_LAT = 49.3133;
const GEO_LNG = 6.7533;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#081A33",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Entrümpelung Saarlouis & Saarland | Festpreis ab 199 € · RALI Entrümpelungen",
    template: "%s | RALI Entrümpelungen Saarlouis",
  },
  description:
    "Professionelle Entrümpelung, Haushaltsauflösung und Sperrmüll-Abholung in Saarlouis und im gesamten Saarland. Festpreis ab 199 €, kostenlose Besichtigung, kurzfristige Termine. Jetzt anrufen: 0176 72799107.",
  applicationName: BUSINESS_NAME,
  authors: [{ name: "Rezkar Ali" }],
  generator: "Next.js",
  keywords: [
    "Entrümpelung Saarlouis",
    "Entrümpelung Saarland",
    "Haushaltsauflösung Saarlouis",
    "Haushaltsauflösung Saarland",
    "Sperrmüll Saarlouis",
    "Sperrmüll Abholung Saarland",
    "Entrümpelungsfirma Saarlouis",
    "Wohnungsauflösung Saarland",
    "Keller entrümpeln Saarlouis",
    "Garage entrümpeln Saarland",
    "Grünschnitt Entsorgung Saarland",
    "Bauschutt Entsorgung Saarlouis",
    "Entrümpelung Festpreis",
    "Entrümpelung Dillingen",
    "Entrümpelung Völklingen",
    "Entrümpelung Saarbrücken",
    "Entrümpelung Lebach",
    "RALI Entrümpelungen",
  ],
  category: "Local Business",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: BUSINESS_NAME,
    url: SITE_URL,
    title:
      "Entrümpelung Saarlouis & Saarland | Festpreis ab 199 € · RALI Entrümpelungen",
    description:
      "Entrümpelung, Haushaltsauflösung und Sperrmüll-Abholung in Saarlouis und im Saarland. Festpreis ab 199 €, kostenlose Besichtigung, kurzfristig verfügbar.",
    images: [
      {
        url: "/rali-logo.png",
        width: 1024,
        height: 1024,
        alt: "RALI Entrümpelungen Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrümpelung Saarlouis & Saarland | Festpreis ab 199 €",
    description:
      "RALI Entrümpelungen aus Saarlouis. Haushaltsauflösung, Sperrmüll und Entrümpelung im Saarland. Festpreis, kostenlose Besichtigung.",
    images: ["/rali-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/rali-logo.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/rali-logo.png",
    apple: [
      { url: "/rali-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    // Add Google / Bing verification tokens here when available
  },
  other: {
    "geo.region": "DE-SL",
    "geo.placename": `${CITY}, ${REGION}`,
    "geo.position": `${GEO_LAT};${GEO_LNG}`,
    ICBM: `${GEO_LAT}, ${GEO_LNG}`,
  },
};

const servicesList = [
  {
    name: "Haushaltsauflösung",
    description:
      "Komplette Auflösung von Wohnungen und Häusern in Saarlouis und im Saarland. Besenreine Übergabe zum Festpreis.",
  },
  {
    name: "Wohnungs-Entrümpelung",
    description:
      "Komplette Wohnungen, einzelne Zimmer und Dachböden werden zügig geräumt und fachgerecht entsorgt.",
  },
  {
    name: "Sperrmüll-Abholung",
    description:
      "Kurzfristige Sperrmüll-Abholung und umweltgerechte Entsorgung in Saarlouis und Umgebung.",
  },
  {
    name: "Keller- und Garagen-Entrümpelung",
    description:
      "Lagerräume, Keller und Garagen werden gründlich geleert und besenrein übergeben.",
  },
  {
    name: "Grünschnitt-Entsorgung",
    description:
      "Fachgerechte Entsorgung von Grünschnitt, Astwerk, Laub und Gartenabfällen im Saarland.",
  },
  {
    name: "Bauschutt-Entsorgung",
    description:
      "Entsorgung von Beton, Fliesen, Ziegel und Rückbauresten bei Umbau oder Renovierung.",
  },
];

const reviews = [
  {
    author: "Kerstin N.",
    rating: 5,
    text: "Top Entrümpelungsfirma in Saarlouis. Die Arbeit wurde schnell, sauber und absolut zuverlässig erledigt. Besonders beeindruckt hat mich der faire Preis und die kurzfristige Terminvergabe.",
  },
  {
    author: "Fam. Heinz",
    rating: 4,
    text: "Super Service für Sperrmüll-Abholung in Saarlouis. Ich hatte kurzfristig viel Sperrmüll zu entsorgen und habe schnell einen Termin bekommen. Die Entsorgung lief stressfrei und zu einem günstigen Preis.",
  },
  {
    author: "Fam. Feit",
    rating: 5,
    text: "Super Betrieb für kurzfristige Entrümpelungen in Saarlouis. Das Haus war an einem Tag leer. Danke!",
  },
  {
    author: "Fam. Braun",
    rating: 4,
    text: "Sehr gute Entrümpelung in Saarlouis. Ich habe eine Wohnungsauflösung im Saarland gebraucht und wurde hier perfekt unterstützt. Klare Empfehlung.",
  },
];

const avgRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

const faqs = [
  {
    q: "Wie schnell kann die Entrümpelung starten?",
    a: "In der Regel innerhalb weniger Tage. Bei dringenden Fällen sind kurzfristige Termine oft noch in derselben Woche möglich. Rufen Sie uns am besten direkt an.",
  },
  {
    q: "Was kostet eine Entrümpelung in Saarlouis?",
    a: "Kleinere Entrümpelungen starten ab 199 Euro. Der endgültige Preis richtet sich nach Umfang, Erreichbarkeit und Entsorgungsaufwand und wird vorab als Festpreis vereinbart. Die Besichtigung ist kostenlos.",
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
    a: "Wir decken Saarlouis und das gesamte Saarland ab, unter anderem Dillingen, Lebach, Völklingen, Saarbrücken und Merzig. Fragen Sie einfach nach, ob wir in Ihrem Ort fahren.",
  },
];

const areaServed = [
  "Saarlouis",
  "Dillingen",
  "Lebach",
  "Völklingen",
  "Saarbrücken",
  "Merzig",
  "Wadgassen",
  "Bous",
  "Schwalbach",
  "Überherrn",
  "Rehlingen-Siersburg",
  "Nalbach",
  "Saarwellingen",
  "Ensdorf",
  "Wallerfangen",
  "Beckingen",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  alternateName: ["RALI", "RALI Entrümpelung"],
  description:
    "Entrümpelung, Haushaltsauflösung und Sperrmüll-Abholung in Saarlouis und im Saarland. Festpreis ab 199 Euro, kostenlose Besichtigung.",
  url: SITE_URL,
  logo: `${SITE_URL}/rali-logo.png`,
  image: [
    `${SITE_URL}/rali-logo.png`,
    `${SITE_URL}/photos/after-wohnzimmer.jpg`,
    `${SITE_URL}/photos/sperrmuell-pile.jpg`,
  ],
  telephone: PHONE,
  email: EMAIL,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Bar, Überweisung",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Rezkar Ali",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: STREET,
    postalCode: POSTAL_CODE,
    addressLocality: CITY,
    addressRegion: REGION,
    addressCountry: COUNTRY,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO_LAT,
    longitude: GEO_LNG,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${STREET}, ${POSTAL_CODE} ${CITY}`,
  )}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  areaServed: areaServed.map((city) => ({
    "@type": "City",
    name: city,
    address: {
      "@type": "PostalAddress",
      addressRegion: REGION,
      addressCountry: COUNTRY,
    },
  })),
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Saarland",
  },
  makesOffer: servicesList.map((s) => ({
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "199",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      minPrice: "199",
      description: "Festpreis ab 199 Euro, Endpreis nach kostenloser Besichtigung",
    },
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "AdministrativeArea", name: "Saarland" },
    },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen RALI Entrümpelungen",
    itemListElement: servicesList.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
      },
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    reviewCount: reviews.length,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.text,
  })),
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: SITE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body className="font-sans antialiased bg-white text-brand-900">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </body>
    </html>
  );
}
