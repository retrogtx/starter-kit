import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  metadataBase: new URL("https://starter-mocha-five.vercel.app"),
  title: "Starter Kit",
  description: "Starter Kit for your Indie Hacking Journey.",
  keywords: ["Indie Hacking", "Starter Kit", "Indie Maker", "Indie Hackers", "Ship Fast", "Indie"],
  openGraph: {
    title: "Starter Kit",
    description: "Starter Kit for your Indie Hacking Journey.",
    url: "https://starter-mocha-five.vercel.app",
    siteName: "Starter Kit",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
