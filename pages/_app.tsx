import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Layout from "@/components";
import "@/styles/indexPage.css";
import "@/styles/movieModal.css";
import "@/styles/genre.css";
import Script from "next/script";
declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  // function kakaoInit() {
  //   // 페이지가 로드되면 실행
  //   window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID);
  //   console.log(window.Kakao.isInitialized());
  // }

  return (
    <>
      <SessionProvider session={pageProps.session}>
        {/* <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          onLoad={kakaoInit}
        ></Script> */}
        <Layout />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
