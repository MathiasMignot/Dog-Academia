import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "../components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dog Academia",
  description: "Votre solution pour l'éducation de votre chien. Votre chiens est aggressifs, craintif , aboie trop ? Vous voulez éduquer votre chiot dans les règles de l'art ? Où simplment profiter d'activité avec votre chiens? Dog Academia est la solution à ce que vous cherchez .",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="fr" suppressHydrationWarning>
      
      <body className={inter.className}>{children}
      <Header />
        

      </body>
     
    </html>
  );
}
