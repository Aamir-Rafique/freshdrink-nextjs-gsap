import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { dmSerif, mona, negra } from "./ui/fonts";


export const metadata: Metadata = {
  title: "Fresh Drink",
  description: "Developed by Aamir Rafique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mona.variable} ${negra.variable} ${dmSerif.variable} antialiased`}>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
