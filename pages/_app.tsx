import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "@/components";
import "../styles/indexPage.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}
