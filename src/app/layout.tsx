import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-loaded",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body-loaded",
});

export const metadata: Metadata = {
  title: {
    default: "Thomas Woroniak Photography",
    template: "%s | Thomas Woroniak Photography",
  },
  description:
    "Concert and event photography based in Kansas City, MO. Covering heavy music, live events, and editorial work.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Thomas Woroniak Photography",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
