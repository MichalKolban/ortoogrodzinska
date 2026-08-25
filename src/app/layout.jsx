import { Yellowtail, Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yellowtail",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title:
    "Ortodonta Szczecin i Goleniów - lek. dent. Karolina Ogrodzińska-Kołban | OrtoOgrodzińska",
  description:
    "Ortodonta Szczecin i Goleniów - lek. dent. Karolina Ogrodzińska-Kołban. Nowoczesne leczenie ortodontyczne dzieci i dorosłych: aparaty stałe, ruchome, Invisalign. Umów wizytę w NB Dental Clinic lub Ortodoncja przy Parku.",
  keywords:
    "ortodonta Szczecin, ortodoncja Szczecin, stomatolog Szczecin, ortodonta Goleniów, stomatolog Goleniów, Invisalign Szczecin, aparat ortodontyczny Szczecin, ortodoncja dzieci Szczecin, Karolina Ogrodzińska-Kołban, OrtoOgrodzińska, NB Dental Clinic, Ortodoncja przy Parku",
  authors: [{ name: "lek. dent. Karolina Ogrodzińska-Kołban" }],
  openGraph: {
    title:
      "Ortodonta Szczecin i Goleniów - lek. dent. Karolina Ogrodzińska-Kołban",
    description:
      "Nowoczesne leczenie ortodontyczne dzieci i dorosłych w Szczecinie i Goleniowie. Aparaty stałe, ruchome oraz nakładki Invisalign.",
    locale: "pl_PL",
    type: "website",
    siteName: "OrtoOgrodzińska",
  },
  alternates: {
    canonical: "https://ortoogrodzinska.pl",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "OrtoOgrodzińska - lek. dent. Karolina Ogrodzińska-Kołban",
  description:
    "Ortodonta Szczecin i Goleniów. Nowoczesne leczenie ortodontyczne dzieci i dorosłych - aparaty stałe, ruchome, Invisalign.",
  url: "https://ortoogrodzinska.pl",
  image: "https://ortoogrodzinska.pl/karo.jpg",
  telephone: "",
  priceRange: "$$",
  medicalSpecialty: "Orthodontics",
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Leczenie ortodontyczne aparatem stałym",
    },
    {
      "@type": "MedicalProcedure",
      name: "Leczenie ortodontyczne aparatem ruchomym",
    },
    {
      "@type": "MedicalProcedure",
      name: "Invisalign - nakładki przezroczyste",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "ul. Jana Kazimierza 21/1u",
      addressLocality: "Szczecin",
      postalCode: "71-620",
      addressCountry: "PL",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "ul. Juliusza Słowackiego 1A",
      addressLocality: "Goleniów",
      postalCode: "72-100",
      addressCountry: "PL",
    },
  ],
  sameAs: [
    "https://www.facebook.com/p/Karolina-Ogrodzi%C5%84ska-Dentysta-100063768894482/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18186177231"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18186177231');
          `}
        </Script>
      </head>
      <body
        className={`${yellowtail.variable} ${openSans.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
