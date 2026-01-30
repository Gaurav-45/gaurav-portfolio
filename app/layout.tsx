import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Parulekar | Full Stack Engineer",
  description:
    "Portfolio of Gaurav Parulekar - Full Stack Engineer with 2.5+ years of experience in building scalable web applications and innovative solutions.",
  keywords: [
    "Gaurav Parulekar",
    "Full Stack Engineer",
    "Software Engineer",
    "React",
    "Node.js",
    "Web Developer",
  ],
  authors: [{ name: "Gaurav Parulekar" }],
  openGraph: {
    title: "Gaurav Parulekar | Full Stack Engineer",
    description: "Full Stack Engineer with 2.5+ years of experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
