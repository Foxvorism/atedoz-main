import React from "react";
import Image from "next/image";
import Link from "next/link";

const Photobox: React.FC = () => {
  return (
    <>
      <div className="px-30">
        <div className="w-full text-left px-40 mb-30">
          <div className="grid grid-cols-2 flex-justify-center items-center">
            <div className="flex justify-center items-center">
              <Image
                layout="intrinsic"
                width={100} // Tentukan ukuran gambar
                height={100} // Tentukan ukuran gambar
                src="/img/services/photobox.png"
                alt="Photobox"
                className="aspect-square w-[80%] object-cover rounded-md"
              ></Image>
            </div>
            <div className="px-15">
              <h2 className="text-2xl font-bold mb-5">Photobox</h2>
              <h2 className="text-base font-medium mb-5 ">
                Photobox kami memiliki keunikan tersendiri. Eksplor lebih banyak
                dan abadikan momen terbaikmu.
              </h2>
              <h2 className="text-base font-medium mb-5 ">
                Atedoz memiliki banyak layanan photobox berbeda yang bisa anda
                eksplor.
              </h2>

              <div className="flex gap-5 mt-20">
                {/* <button className="px-10 py-2 bg-[var(--color-black-2)] text-white rounded-sm">
                  Reservasi
                </button> */}
                <Link
                  href={`https://wa.me/6282249938235`}
                  target="_blank"
                  rel="noopener noreferrer" // Adding rel attribute for security
                >
                  <button className="px-10 py-2 bg-[var(--color-black-2)] text-white rounded-sm cursor-pointer">
                    Pelajari Lebih Lanjut
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photobox;
