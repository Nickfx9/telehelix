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

// Full SEO + Open Graph + Twitter metadata
export const metadata = {
  title: "TeleHelix | Smart Telemedicine Platform in Kenya",
  description:
    "TeleHelix is a modern telemedicine platform connecting patients with licensed doctors across Kenya. Fast, secure online consultations with AI-assisted tools for smarter healthcare decisions.",
  keywords: [
    "Telemedicine Kenya",
    "Online Doctor Kenya",
    "TeleHelix",
    "Digital Healthcare",
    "Virtual Clinic Kenya",
    "AI-assisted healthcare",
    "Remote Medical Consultation",
  ],
  openGraph: {
    title: "TeleHelix | Smart Telemedicine Platform in Kenya",
    description:
      "Connect with licensed doctors online in Kenya. Fast, secure consultations with AI-assisted healthcare tools.",
    url: "https://telehelix.co.ke",
    siteName: "TeleHelix",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TeleHelix | Smart Telemedicine Platform in Kenya",
    description:
      "Fast, secure online consultations with AI-assisted tools for smarter healthcare decisions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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