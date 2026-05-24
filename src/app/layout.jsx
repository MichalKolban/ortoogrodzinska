// import { Geist, Geist_Mono } from "next/font/google";
// import { PlayfairDisplay } from "next/font/google";
import { Manrope, Yellowtail, Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
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
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"], // dodaje warianty normal i italic
  display: "swap",
});

export const metadata = {
  title: "OrtoOgrodzińska | Karolina Ogrodzińska-Kołban Ortodonta",
  description: "OrtoOgrodzińska | Karolina Ogrodzińska-Kołban Ortodonta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
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
        className={`${manrope.variable} ${yellowtail.variable} ${openSans.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
