import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Mysvg from "../../public/profile.svg";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { useSession, signOut } from "next-auth/react";

export default function Profile() {
  const [LoginmodalOpen, setLoginModalOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const onClickLoginModalOpen = () => {
    setLoginModalOpen(true);
  };
  const onClickLogOut = () => {
    signOut();
    router.push("/");
  };
  return (
    <div>
      {session ? (
        <div className="flex">
          <Image
            style={{ borderRadius: "50%", marginRight: "1rem" }}
            alt="유저 이미지"
            src={`${session?.user?.image}`}
            width={50}
            height={50}
          />
          <div onClick={onClickLogOut}>
            <button className="bg-none hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white rounded">
              로그아웃
            </button>
          </div>
        </div>
      ) : (
        <div onClick={onClickLoginModalOpen}>
          <Mysvg />
        </div>
      )}
      {LoginmodalOpen && <LoginModal setLoginModalOpen={setLoginModalOpen} />}
    </div>
  );
}
