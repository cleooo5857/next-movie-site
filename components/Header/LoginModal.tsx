import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import KoKologo from "../../public/kokologo.svg";
import Googlelogo from "../../public/googlelogo.svg";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

export default function LoginModal({ setLoginModalOpen }: any) {
  const router = useRouter();
  const onClickLogin = () => {
    signIn("kakao");
    router.push("/");
  };

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
          <div className="flex  h-full">
            <div className="w-4/12 h-full flex flex-col justify-center items-center  py-8 bg-neutral-800">
              <p className="font-bold">환영합니다!</p>
              <Image
                className="py-8"
                alt="안녕하세요"
                src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
                width={100}
                height={110}
                unoptimized={true}
              />
            </div>
            <div className="w-8/12 px-8 py-8 flex flex-col justify-center items-center">
              <p className="font-bold">소셜 계정으로 로그인</p>
              <div className="w-full flex justify-around  py-6">
                <button onClick={onClickLogin} className=" block pt-7">
                  <KoKologo />
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
