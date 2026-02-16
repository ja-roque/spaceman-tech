import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spaceman Tech | Software Consultancy & Custom Development",
  description:
    "Spaceman Tech LLC builds custom software, web apps, AI agents, and provides nearshore engineering talent from Honduras. From idea to launch, we build what matters.",
  keywords: [
    "software consultancy",
    "custom software development",
    "AI agents",
    "web applications",
    "nearshore outsourcing",
    "Honduras developers",
    "legacy system modernization",
  ],
  openGraph: {
    title: "Spaceman Tech | Software Consultancy & Custom Development",
    description:
      "We build custom software, web apps, AI agents, and provide nearshore engineering talent. From idea to launch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
