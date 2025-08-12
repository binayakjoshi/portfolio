import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation/nav-bar";
import ThemeProviderWrapper from "@/components/background/theme-provider-wrapper";
import Footer from "@/components/background/footer";
import AppBackground from "@/components/background/app-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binayak Joshi",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 min-h-screen`}
      >
        <ThemeProviderWrapper>
          <div className="relative z-50"><NavigationBar />
          </div>
          <AppBackground/>
          <main className="pt-4 bg-white dark:bg-zinc-900 min-h-screen">
            {children}
          </main>
          <Footer/>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
