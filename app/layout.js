import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PHProvider } from "./providers"; // Import the provider we created

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TeleHelix | Virtual Care, Physical Results",
  description: "Connecting digital healthcare to local communities. Join the waitlist for instant medical consultations and local clinic referrals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* We wrap the entire body in PHProvider so it can track everything inside */}
      <PHProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white min-h-screen`}
        >
          {children}
        </body>
      </PHProvider>
    </html>
  );
}