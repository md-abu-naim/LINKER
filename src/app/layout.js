import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./Components/Navber/Navber";
import MobileNavber from "./Components/Navber/MobileNavber";
import AuthProviders from "@/Providers/AuthProviders";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "LINKER",
  description: "The social media communication platform for the nations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AuthProviders>
            <header>
              <Navber />
            </header>
            <main>
              {children}
              <SpeedInsights />
            </main>
            <footer>
              <MobileNavber />
            </footer>
          </AuthProviders>
        </body>
    </html>
  );
}
