// app/layout.js
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components";
import { StateContext } from "@/context/StateContext";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

// Font setup
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

// Metadata
export const metadata = {
  title: "Sports-Providers",
  description: "Your ultimate shopping destination",
  icons: {
    icon: "/assets/footballlogo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased  overflow-x-hidden">
        <StateContext>
          <div className="layout min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow w-full p-2">{children}</main>
            <Toaster />
          </div>
        </StateContext>
        <Analytics />
      </body>
    </html>
  );
}
