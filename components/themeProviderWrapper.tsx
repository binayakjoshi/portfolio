// components/ThemeProviderWrapper.tsx
"use client";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light" // ← match your light-first SSR
      enableSystem={false} // ← disable system if you want absolute control
      disableTransitionOnChange // ← prevents a flash when it does toggle
    >
      {children}
    </ThemeProvider>
  );
}
