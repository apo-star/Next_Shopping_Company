import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "./componets/HeaderTop";
import HeaderMain from "./componets/HeaderMain";
import Navbar from "./componets/Navbar";
import { Providers } from "./Provider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobNavbar from "./componets/MobNavbar";
import FooterMain from "./componets/FooterMain";
import DarkMode from "./componets/DarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <HeaderTop />
          <HeaderMain />
          <Navbar />
          <MobNavbar />
        </Providers>
        
        {children}
        <FooterMain />  
        </body>
    </html>
  );
}
