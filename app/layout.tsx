import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alamfarjan.lovable.app"),
  title: {
    default: "Farjan | AI/ML Engineer Portfolio",
    template: "%s | Farjan",
  },
  description:
    "Neo-Brutalist AI/ML portfolio for Farjan, focused on applied ML builds, interpretable systems, and research-minded experiments.",
  keywords: [
    "Farjan",
    "Farjan Alam",
    "AI ML Engineer",
    "Machine Learning",
    "SRMIST",
    "Deep Learning",
    "Portfolio",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Farjan" }],
  openGraph: {
    title: "Farjan | AI/ML Engineer Portfolio",
    description:
      "A brutalist digital lab for AI/ML builds, experimental systems, and technical curiosity.",
    type: "website",
    images: ["/assets/farjan-profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farjan | AI/ML Engineer Portfolio",
    description:
      "AI/ML engineering portfolio with flagship builds, research playgrounds, and playful brutalist motion.",
    images: ["/assets/farjan-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
