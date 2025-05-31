"use client";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} disableTransitionOnChange>
      <Theme 
        grayColor="sage" 
        accentColor="ruby" 
        radius="none"
        className="radix-themes"
        scaling="110%"
      >
        {children}
      </Theme>
    </ThemeProvider>
  );
}
