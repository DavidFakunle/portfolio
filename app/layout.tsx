import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidfakunle.com"),
  title: "David Fakunle",
  description: "CS student, builder, coffee enjoyer.",
  openGraph: {
    title: "David Fakunle",
    description: "CS student, builder, coffee enjoyer.",
    url: "https://davidfakunle.com",
    siteName: "David Fakunle",
    images: [
      {
        url: "/david-headshot.jpg",
        width: 700,
        height: 560,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "David Fakunle",
    description: "CS student, builder, coffee enjoyer.",
    images: ["/david-headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
