import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { austinNewsFont, graphikFont } from "./fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dekr - Smarter Trading, Simplified",
  description: "Swipe through stocks & crypto, track market insights, and invest with confidence—all in one intuitive platform.",
  icons: {
    icon: '/32.png',
    apple: '/32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${austinNewsFont.variable} ${graphikFont.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
