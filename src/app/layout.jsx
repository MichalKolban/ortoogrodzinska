// import { Geist, Geist_Mono } from "next/font/google";
// import { PlayfairDisplay } from "next/font/google";
import {
  Manrope,
  Playfair_Display,
  Yellowtail,
  Tenor_Sans,
  Open_Sans,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-playfair",
  display: "swap",
});

const playfairItalic = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
  variable: "--font-playfair-italic",
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
      <body
        className={`${manrope.variable} ${playfair.variable} ${playfairItalic.variable} ${yellowtail.variable} ${tenorsans.variable} ${openSans.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
