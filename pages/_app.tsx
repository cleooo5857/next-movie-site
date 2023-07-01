import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Layout from "@/components";
import "@/styles/indexPage.css";
import "@/styles/movieModal.css";
import "@/styles/genre.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
