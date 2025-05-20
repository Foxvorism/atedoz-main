import Link from "next/link";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

const RegisterComp: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-black">
        <div
          className="flex bg-black h-[100vh]"
          style={{
            backgroundImage: `url(/img/auth/register.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>
      <div className="flex justify-center items-center px-30 relative w-full">
        <Link href="/">
          <button className="cursor-pointer absolute w-7 h-7 rounded-md bg-[var(--color-black-2)] top-10 right-10 text-white font-semibold flex justify-center items-center">
            <div>X</div>
          </button>
        </Link>
        <div className="w-full">
          <div className="flex justify-center item-center">
            <Image
              layout="intrinsic"
              width={100}
              height={100}
              src="/img/logo-atedoz.png"
              alt="logo atedoz"
              className="w-[12rem] mb-10"
            />
          </div>
          <h2 className="font-bold text-4xl text-center mb-5">Register</h2>

          <RegisterForm />

          <hr className="my-5 opacity-20" />

          <Link href="/login">
            <button className="w-full text-center bg-white text-[var(--color-black-2)] border-2 py-2 rounded-md font-semibold hover:bg-[var(--color-black-2)] hover:text-white cursor-pointer mb-3">
              Sudah punya akun? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterComp;
