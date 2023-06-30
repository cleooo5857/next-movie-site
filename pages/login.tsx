//app/signin/page.tsx

"use client";
import React, { useRef, useEffect, useState } from "react";
import { ignIn, signOut, useSession } from "next-auth/react";

function Login() {
  // 추가된 부분
  const { data: session } = useSession();
  return (
    <>
      <button onClick={() => signIn("kakao")}>Sign in</button>
      <button onClick={() => signOut()}>Sign in</button>
      <style jsx>{`
        button {
          background: #fff;
        }
      `}</style>
    </>
  );
}

export default Login;
