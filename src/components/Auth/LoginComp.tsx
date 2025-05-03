"use client";
import React from "react";
import Link from "next/link";
import { EyeIcon, EyeCloseIcon } from "@/icons";

const LoginComp: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-black">
          <div
            className="flex bg-black h-[100vh]"
            style={{
              backgroundImage: `url(/img/auth/login.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="flex justify-center items-center px-30">
          <Link href="/">
            <button className="cursor-pointer absolute w-7 h-7 rounded-md bg-[var(--color-black-2)] top-10 right-10 text-white font-semibold flex justify-center items-center">
              <div>X</div>
            </button>
          </Link>

          <div className="w-full">
            <div className="flex justify-center item-center">
              <img
                src="/img/logo-atedoz.png"
                alt="logo atedoz"
                className="w-[12rem] mb-10"
              />
            </div>
            <h2 className="font-bold text-4xl text-center mb-5">Sign In</h2>

            <form action="" className="">
              <div className="mb-5">
                <h2 className="mb-1.5 text-sm font-medium text-gray-700">
                  Email Address
                </h2>
                <input
                  type="email"
                  placeholder="Masukan email anda"
                  className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
                />
              </div>

              <div className="mb-5">
                <h2 className="mb-1.5 text-sm font-medium text-gray-700">
                  Password
                </h2>
                <input
                  type="password"
                  placeholder="Masukan password anda"
                  className="w-full px-3 py-2 text-[14px] rounded-md bg-transparent border text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full text-center bg-[var(--color-black-2)] text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-[var(--color-brand-500)]"
                >
                  Login
                </button>
              </div>
            </form>

            <hr className="my-5 opacity-20" />

            <div className="">
              <Link href="/register">
                <button className="w-full text-center bg-white text-[var(--color-black-2)] border-2 py-2 rounded-md font-semibold hover:bg-[var(--color-black-2)] hover:text-white cursor-pointer mb-3">
                  Belum punya akun? Register
                </button>
              </Link>
              <h2 className="text-bold text-base font-semibold text-center mb-3">
                atau
              </h2>

              <h2 className="text-bold text-base font-bold underline text-center cursor-pointer">
                Lupa Password?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComp;
