import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Mriganka Gogoi",
  description: "Portfolio | Mriganka Mousum Gogoi | Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={(cn("font-spaceGrotesk"), spaceGrotesk.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
