import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Off Label Social Club | The Right People Know Where To Look",
  description:
    "A private members club for research, curiosity, and independent thinking. Off Label Social Club is for people who know where to look.",
  applicationName: "Off Label Social Club",
  openGraph: {
    title: "Off Label Social Club | The Right People Know Where To Look",
    description:
      "A private members club for research, curiosity, and independent thinking.",
    siteName: "Off Label Social Club",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Off Label Social Club | The Right People Know Where To Look",
    description:
      "A private members club for research, curiosity, and independent thinking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
