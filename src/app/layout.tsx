import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom Blinds, Shutters & Shades | Vineyard Blind & Shutter | Southern California",
  description: "Vineyard Blind & Shutter offers the lowest possible prices on plantation shutters, blinds and window coverings in Southern California. Free estimates, free installation. Serving San Diego, Riverside & South Orange County.",
  openGraph: {
    title: "Custom Blinds, Shutters & Shades | Vineyard Blind & Shutter | Southern California",
    description: "Vineyard Blind & Shutter offers the lowest possible prices on plantation shutters, blinds and window coverings in Southern California. Free estimates, free installation. Serving San Diego, Riverside & South Orange County.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* CTM — Universal account, afterInteractive */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}