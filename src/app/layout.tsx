import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import Container from "@/components/Container";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trade Whispers",
  description: "Join a Community of real Traders. Access Resources and Build srategies that work for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-100 text-zinc-900 flex flex-col min-h-screen `}
      > 
        
        <Container>
        <TopNav />
        <Header />
        {children}
        <Footer />
        </Container>
       
        
      </body>
    </html>
  );
}
