import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Willis | Artist Portfolio",
  description: "Explore the portfolio of David Willis, contemporary artist and creator.",
  keywords: ["artist", "portfolio", "contemporary art", "David Willis"],
  authors: [{ name: "David Willis" }],
  openGraph: {
    title: "David Willis | Artist Portfolio",
    description: "Explore the portfolio of David Willis, contemporary artist and creator.",
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
      <body className="antialiased bg-surface-light text-gray-900">
        {children}
      </body>
    </html>
  );
}
