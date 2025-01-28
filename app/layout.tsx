import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://staskazakov.com"),
  title: "Stas Kazakov Developer",
  description: "Stas Kazakov, Full Stack Developer. Web application development with AI for business.",
  keywords: "Стас Казаков, Stas Kazakov, Web application, Full Stack Developer, AI",
  verification: { google: "0dKmrC-uoluLadk54PyYVY1GxnfHJvCNS0mwZhiATpo"},
  authors: [{ name: "Stas Kazakov" }],
  openGraph: {
    title: "Stas Kazakov Developer",
    description: "Stas Kazakov, Full Stack Developer. Web application development with AI for business.",
    images: ["assets/prev.png"],
    url: "https://staskazakov.com",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
