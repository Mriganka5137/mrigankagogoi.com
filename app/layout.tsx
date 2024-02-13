import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({
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
    <html lang="en" className="dark">
      <body className={` ${spaceGrotesk.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NavBar />
          <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.1] relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
