import type { Metadata } from "next";
import {
  Inter_Tight,
  Instrument_Serif,
  Space_Mono,
  Bebas_Neue,
  Playfair_Display,
  DM_Sans,
  JetBrains_Mono,
  Syne,
  Plus_Jakarta_Sans,
  Outfit,
} from "next/font/google";
import ClientProviders from "@/components/shared/ClientProviders";
import "./globals.css";

/* -----------------------------------------------------------------------
   Google Fonts
   ----------------------------------------------------------------------- */

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/* Fallback fonts for Fontshare fonts not available on Google Fonts:
   - Clash Display  -> Syne
   - Satoshi        -> Plus Jakarta Sans
   - General Sans   -> Outfit
*/

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

/* -----------------------------------------------------------------------
   Metadata
   ----------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "peacedata | Software Studio",
  description:
    "Cutting-edge software solutions for businesses and organizations",
};

/* -----------------------------------------------------------------------
   Root Layout
   ----------------------------------------------------------------------- */

const fontVariables = [
  interTight.variable,
  instrumentSerif.variable,
  spaceMono.variable,
  bebasNeue.variable,
  playfairDisplay.variable,
  dmSans.variable,
  jetbrainsMono.variable,
  syne.variable,
  plusJakartaSans.variable,
  outfit.variable,
].join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontVariables}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
