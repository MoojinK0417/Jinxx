"use client";

// pages/login.tsx
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "@/app/icon.png"; // Replace with your logo path
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page if the user is authenticated
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  // While checking authentication status, render nothing
  if (status === "loading" || status === "authenticated") {
    return null;
  }

  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8 bg-white">
        <Image src={logo} alt="Logo" width={50} height={50} className="mb-8" />
        <h1 className="text-3xl font-bold mb-6">Welcome back</h1>
        <button
          onClick={() => signIn("google")}
          className="w-full max-w-sm mb-4 py-3 px-6 bg-white border border-gray-300 rounded-full flex items-center justify-center text-black font-medium shadow-sm hover:bg-gray-100"
        >
          Continue with Google
        </button>
        <button className="w-full max-w-sm mb-4 py-3 px-6 bg-white border border-gray-300 rounded-full flex items-center justify-center text-black font-medium shadow-sm hover:bg-gray-100">
          See other options
        </button>
        <div className="w-full max-w-sm text-center text-gray-500 my-4">or</div>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full max-w-sm mb-4 py-3 px-6 border border-gray-300 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full max-w-sm py-3 px-6 bg-black text-white font-medium rounded-full hover:bg-gray-800">
          Continue
        </button>
        <p className="w-full max-w-sm text-center text-gray-500 mt-6 text-sm">
          By continuing, you agree to Mobbin's{" "}
          <a href="/terms" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Right Side - Blank Section */}
      <div className="hidden md:flex w-1/2 bg-gray-200"></div>
    </div>
  );
};

export default Login;
