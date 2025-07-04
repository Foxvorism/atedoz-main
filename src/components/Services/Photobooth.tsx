import React from "react";
import Image from "next/image";
import Link from "next/link";

const Photobooth: React.FC = () => {
  return (
    <>
      <div className="px-30">
        <div className="w-full text-left px-40 mb-30">
          <div className="grid grid-cols-2 flex-justify-center items-center">
            <div className="px-15">
              <h2 className="text-2xl font-bold mb-5">Photobooth</h2>
              <h2 className="text-base font-medium mb-5 ">
                Abadikan momen seru kamu dengan photobox kekinian yang tersedia
                langsung di lokasi mitra kami!
              </h2>
              <h2 className="text-base font-medium mb-5 ">
                Atedoz memiliki banyak layanan photobooth berbeda yang bisa anda
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
            <div className="flex justify-center items-center">
              <Image
                layout="intrinsic"
                width={600} // Tentukan ukuran gambar
                height={600} // Tentukan ukuran gambar
                src="/img/services/photobooth2.jpg"
                alt="Photobooth"
                className="aspect-square w-[80%] object-cover rounded-md"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photobooth;
