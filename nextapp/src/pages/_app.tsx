import FooterSection from "@/components/sections/all-pages/FooterSection";
import GutterSection from "@/components/sections/all-pages/GutterSection";
import NavigationSection from "@/components/sections/all-pages/NavigationSection";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bitter } from "next/font/google";

const brandFont = Bitter({
  subsets: ["latin"],
  variable: "--font-brand",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${brandFont.variable} font-sans`}>
      <NavigationSection />
      <Component {...pageProps} />
      <FooterSection />
      <GutterSection />
    </main>
  );
}
