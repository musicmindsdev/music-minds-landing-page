import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/cookieconsent";
import I18nProvider from "@/components/I18nProvider";
import NavBar from "@/components/navbar";
import { getServerLocale } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music Minds",
  description: "Unlock your Music potential",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();
  console.log(`Root layout locale: ${locale}`);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider locale={locale}>
            <NavBar locale={locale} />
            {children}
          </I18nProvider>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}