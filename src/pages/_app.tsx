import type { AppProps } from "next/app";
// i18n
import "@/app/config/i18n/i18nConfig";
// providers
import { RefBlockProvider } from "@/app/providers/context/RefBlock/RefBlockProvider";
// widgets
import { Header } from "@/widgets/header/ui/Header/Header";
import { Footer } from "@/widgets/footer/ui/Footer/Footer";
// styles
import "@/app/styles/reset.scss";
import "@/app/styles/global.scss";
import "@/app/styles/fonts.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RefBlockProvider>
      <Head>
        <title>Mor Tattoos</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </RefBlockProvider>
  );
}
