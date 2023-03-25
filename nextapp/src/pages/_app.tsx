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
      <Component {...pageProps} />
    </main>
  );
}
