import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartikay Rattan - Full-Stack Developer",
  description: "Full-stack developer focused on building modern web applications using Next.js, React, Node.js and modern databases.",
  keywords: ["Next.js", "React", "Full-Stack Developer", "Web Development", "Portfolio"],
  authors: [{ name: "Kartikay Rattan" }],
  openGraph: {
    title: "Kartikay Rattan - Full-Stack Developer",
    description: "Full-stack developer focused on building modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
