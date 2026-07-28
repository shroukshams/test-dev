import { Container } from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { ReactNode } from "react";

const meta = {
  title: "Blog",
  description: "Laravel Blog with Next",
  image: `${process.env.WEBSITE_HOST_URL}/og-preview.jpg`,
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s | Hunter Chang",
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: process.env.WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: "en-US",
    type: "website",
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: "summary_large_image",
  },
  alternates: {
    canonical: process.env.WEBSITE_HOST_URL,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-2xl mx-auto py-10 px-4">
        <header>
          <div className="flex items-center justify-between">
            <nav className="ml-auto text-sm font-medium space-x-6">
              <Link href="/">Anasayfa</Link>
              <Link href="/login">Giriş Yap</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
