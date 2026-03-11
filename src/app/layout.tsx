import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yottanest.com"),
  title: "YottaNest | AI-Powered Banking Compliance & Credit Decisions",
  description:
    "Transform KYC/AML compliance and credit evaluation with YottaNest. Our AI agents automate intelligence gathering, analysis, and report drafting — reducing costs by 90%. Built for European banks.",
  keywords:
    "KYC automation, AML compliance, RegTech, banking compliance, credit evaluation, SME lending, due diligence, AI compliance, European banking, GDPR, SAR automation, compliance AI, YottaNest",
  authors: [{ name: "YottaNest" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://yottanest.com",
    title: "YottaNest — The Agentic Compliance Engine",
    description:
      "AI that transforms banking compliance. From data chaos to decision ready in minutes.",
    siteName: "YottaNest",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YottaNest - AI Banking Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YottaNest — AI Banking Compliance",
    description: "Transform KYC/AML compliance with AI. 90% faster processing.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#3F3F3F" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
