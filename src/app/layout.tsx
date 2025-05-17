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
  title: "Blackhole",
  description: "Compartilhe arquivos de forma rápida e segura.",
  keywords: ["blackhole", "file", "upload", "share"],
  authors: [{ name: "Guilherme Alves Profirio", url: "https://useblackhole.com.br" }],
  creator: "Seu Nome ou Empresa",
  openGraph: {
    title: "Blackhole",
    description: "Bem-vindo ao Blackhole! Compartilhe arquivos de forma rápida e segura.",
    url: "https://useblackhole.com.br",
    siteName: "Blackhole",
    images: [
      {
        url: "https://useblackhole.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Texto escrito blackhole no centro da imagem",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackhole",
    description: "Bem-vindo ao Blackhole! Compartilhe arquivos de forma rápida e segura",
    images: ["https://useblackhole.com.br/og-image.png"],
    creator: "@justAlves",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
