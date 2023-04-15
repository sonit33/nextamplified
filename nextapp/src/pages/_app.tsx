import BannerSection from "@/components/sections/all-pages/BannerSection";
import FooterSection from "@/components/sections/all-pages/FooterSection";
import GutterSection from "@/components/sections/all-pages/GutterSection";
import NavigationSection from "@/components/sections/all-pages/NavigationSection";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bitter } from "next/font/google";
import Image from "next/image";

const brandFont = Bitter({
  subsets: ["latin"],
  variable: "--font-brand",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${brandFont.variable} font-sans bg-white`}>
      <BannerSection hidden={false} />
      <NavigationSection />
      <div className="mx-auto md:max-w-4xl lg:max-w-6xl">
        <Component {...pageProps} />
      </div>
      <FooterSection />
      <GutterSection />
    </main>
  );
}
