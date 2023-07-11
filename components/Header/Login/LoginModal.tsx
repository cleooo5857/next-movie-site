import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import KoKologo from "@/public/kokologo.svg";
import Googlelogo from "@/public/googlelogo.svg";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getToken } from "next-auth/jwt";
import axios from "axios";

export default function LoginModal({ setLoginModalOpen }: any) {
  const router = useRouter();
  const [code, setCode] = useState<string | null>(null);
  const onClickLogin = () => {
    signIn("kakao");
    router.push("/");
  };
  useEffect(() => {
    const redirectURI = "http://localhost:3000";
    const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${redirectURI}`;

    console.log(kakaoAuthURL);
    if (code) {
      setCode(code);
    }
  }, []);
  // const handleLoginClick = () => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const code = urlParams.get("code");

  // };
  const getCode = async () => {
    try {
      const response = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        null,
        {
          params: {
            grant_type: "authorization_code",
            client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
            redirect_uri: "http://localhost:3000",
            code: code,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const { access_token } = response.data;
      console.log(access_token);
      return access_token;
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   const getCode = async (code : string | null) => {
  //     try {
  //       const response = await axios.post(
  //         "https://kauth.kakao.com/oauth/token",
  //         null,
  //         {
  //           params: {
  //             grant_type: "authorization_code",
  //             client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
  //             redirect_uri: "http://localhost:3000",
  //             code: code,
  //           },
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         }
  //       );

  //       const { access_token } = response.data;
  //       console.log(access_token);
  //       return access_token;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //     getCode(code);
  // }, []);
  // Make a POST request to the Kakao token API

  return (
    <div className="presentation">
      <div className="wrapper-modal center">
        <div className="modal w-96 h-72 rounded-md">
          <span
            onClick={() => setLoginModalOpen(false)}
            className="modal-close"
          >
            X
          </span>
          <div className="flex h-full">
            <div className="w-4/12 h-full flex flex-col justify-center items-center py-8 bg-neutral-800">
              <p className="font-bold">Welcome!</p>
              <Image
                className="py-8"
                alt="Hello"
                src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
                width={100}
                height={110}
                unoptimized={true}
              />
            </div>
            <div className="w-8/12 px-8 py-8 flex flex-col justify-center items-center">
              <p className="font-bold">Log in with your social account</p>
              <div className="w-full flex justify-around py-6">
                <button onClick={onClickLogin} className=" block pt-7">
                  <KoKologo />
                </button>
                <button
                  onClick={getCode} // href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
                  //   process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
                  // }&redirect_uri=${"http://localhost:3000"}`}
                >
                  Log in with Kakao
                </button>
                <button className=" block pt-7">
                  <Googlelogo />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
