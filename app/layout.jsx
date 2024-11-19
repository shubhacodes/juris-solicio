// app/layout.jsx
"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Disclaimer from "@/components/Disclaimer";
import { useState } from "react";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDisclaimerAccepted, setIsDisclaimerAccepted] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div
            className={`transition-opacity duration-300 ${
              !isDisclaimerAccepted ? "opacity-30" : "opacity-100"
            }`}
          >
            <NavBar />
            {children}
          </div>
          <Disclaimer setIsDisclaimerAccepted={setIsDisclaimerAccepted} />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
