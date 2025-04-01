import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

import { Poppins, Raleway, Montserrat } from 'next/font/google';
import Navbar from "./components/Navbar";
import Footer from "./components/customComponents/Footer";

// Load the fonts with specific weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: '300', // Light (300)
  variable: '--font-poppins',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular (400) and Bold (700)
  variable: '--font-raleway',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500'], // Regular (400) and Medium (500)
  variable: '--font-montserrat',
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Car Checkup",
  description: "Car Checkup is your ultimate companion for maintaining your vehicle's health. Get reminders for regular maintenance, track service history, and receive alerts for potential issues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
