"use client";

import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MenuBar: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white/80 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-md z-50 w-[95%] max-w-xl">
      <nav className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center mb-3 md:mb-0">
          <Image
            src="/icon.png"
            alt="Logo"
            width={32} // Adjusted for mobile view
            height={32} // Adjusted for mobile view
          />
          <h1 className="text-lg md:text-xl font-bold ml-2">Jinxx</h1>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-6 md:space-x-8">
          <a
            href="/pricing"
            className="text-sm md:text-base text-black font-medium hover:font-bold"
          >
            Pricing
          </a>
          {session ? (
            <button
              onClick={() => signOut()}
              className="text-sm md:text-base text-black font-medium hover:font-bold"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={() => {
                signIn("google", { redirect: false }).then(() => {
                  router.push("/login");
                });
              }}
              className="text-sm md:text-base text-black font-medium hover:font-bold"
            >
              Log in
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MenuBar;
