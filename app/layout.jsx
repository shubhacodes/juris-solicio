"use client";

import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";

// Load Roboto font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Load Roboto Mono font
const robotoMono = Roboto_Mono({
  weight: ["400", "500", "700"], // Choose the desired weights
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" sizes="any" />
      </Head>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <NavBar />
          <main className={robotoMono.className}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
