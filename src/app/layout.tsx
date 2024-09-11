import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: "./fonts/Helvetica.woff",
  variable: "--font-helvetica",
  weight: "400",
});
const helveticaBold = localFont({
  src: "./fonts/Helvetica-Bold.woff",
  variable: "--font-helvetica-bold",
  weight: "700",
});
const helveticaLight = localFont({
  src: "./fonts/Helvetica-Light.woff",
  variable: "--font-helvetica-light",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Purity UI",
  description: "A beautiful dashboard UI for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} ${helveticaBold.variable} ${helveticaLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
