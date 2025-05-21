"use client";
import { login } from "@/hooks/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import { EyeIcon, EyeCloseIcon } from "@/icons";

const LoginComp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [error, setError] = useState('');
  const router = useRouter();


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setError("");

    const result = await login(email, password);

    if (result.success) {
      router.push("/"); // arahkan ke halaman dashboard
    } else {
      if (typeof result.message === "object" && (result.message)) {
        setErrors(result.message);
      } else {
        setError(result.message || "Login gagal");
      }
    }

    setIsLoading(false);
  };
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
        <div className="flex items-center justify-center px-30">
          <Link href="/">
            <button className="cursor-pointer absolute w-7 h-7 rounded-md bg-[var(--color-black-2)] top-10 right-10 text-white font-semibold flex justify-center items-center">
              <div>X</div>
            </button>
          </Link>

          <div className="w-full">
            <div className="flex justify-center item-center">
              <Image
                layout="intrinsic"
                width={100} // Tentukan ukuran gambar
                height={100} // Tentukan ukuran gambar
                src="/img/logo-atedoz.png"
                alt="logo atedoz"
                className="w-[12rem] mb-10"
              />
            </div>
            <h2 className="mb-5 text-4xl font-bold text-center">Sign In</h2>

            <form onSubmit={handleLogin}>
              <div className="mb-5">
                <h2 className="mb-1.5 text-sm font-medium text-gray-700">
                  Email Address
                </h2>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukan email anda"
                  className={`w-full px-3 py-2 text-[14px] rounded-md bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-300'
                    } text-gray-800 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="mb-5">
                <h2 className="mb-1.5 text-sm font-medium text-gray-700">
                  Password
                </h2>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukan password anda"
                  className={`w-full px-3 py-2 text-[14px] rounded-md bg-transparent border ${errors.password ? 'border-red-500' : 'border-gray-300'
                    } text-gray-800 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {error && <p className="mb-3 text-sm text-red-600">{error}</p>}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-center bg-[var(--color-black-2)] text-white py-2 rounded-md font-semibold cursor-pointer hover:bg-[var(--color-brand-500)] disabled:opacity-50"
                >
                  {isLoading ? 'Loading...' : 'Login'}
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
              <h2 className="mb-3 text-base font-semibold text-center text-bold">
                atau
              </h2>

              <h2 className="text-base font-bold text-center underline cursor-pointer text-bold">
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
