import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'simplebar-react/dist/simplebar.min.css';
import Navber from "./Components/Navber/Navber";
import MobileNavber from "./Components/Navber/MobileNavber";

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
  description: "The communication platform for nations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navber />
        </header>
        <main>
          {children}
        </main>
        <MobileNavber />
      </body>
    </html>
  );
}
