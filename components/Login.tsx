"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#11A37F] h-screen text-center">
      <Image
        className="p-20"
        src="/ChaseGPT Logo Only.svg"
        // src="/Chasegpt logo.svg"
        width={300}
        height={300}
        alt="logo"
      />

      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to Use ChaseGPT
      </button>
    </div>
  );
}

export default Login;
