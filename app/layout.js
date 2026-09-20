import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sazuna Jewellers | Best Affordable Price And Best Quality",
  description: "Get Best Affordable Price And Best Quality at Sazuna Jewellers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${inter.variable} antialiased flex flex-col min-h-screen text-zinc-900 bg-white overflow-x-hidden`}>
        <AnnouncementBar />
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
