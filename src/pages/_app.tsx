import "@/styles/globals.css";
import { Inter, Cairo } from "next/font/google";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/context/LanguageContext";

/** Latin script — English UI */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

/** Arabic script — cleaner rendering for RTL content */
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className={`${inter.variable} ${cairo.variable} font-body-md`}>
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  );
}
