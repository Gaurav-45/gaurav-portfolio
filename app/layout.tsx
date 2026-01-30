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
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%230ea5e9;stop-opacity:1' /><stop offset='100%' style='stop-color:%23a855f7;stop-opacity:1' /></linearGradient></defs><rect fill='%23000000' width='100' height='100'/><text x='50' y='50' font-size='60' font-weight='bold' fill='url(%23grad)' text-anchor='middle' dy='.35em' font-family='system-ui, -apple-system'>GP</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
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
