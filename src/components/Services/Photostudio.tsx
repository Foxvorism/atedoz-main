import React from "react";
import Image from "next/image";
import Link from "next/link";

const Photostudio: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center p-14 bg-[var(--color-gray-2)]">
        <div className="text-center text-white">
          <h2 className="font-bold text-3xl mb-10">Photo Studio</h2>
          <p className="text-lg">
            Photo Studio kami memberikan layanan untuk pemotretan indoor.
          </p>
          <p className="text-lg mb-8">
            Rekam dan cetak momen berkesan anda secara profesional!
          </p>

          <div className="mb-8">
            <Link href={"/order"}>
              <button className="px-10 py-3 rounded-md bg-[var(--color-black-2)] hover:scale-[102%] cursor-pointer">
                Reservasi
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <Image
              layout="intrinsic"
              width={443} // Tentukan ukuran gambar
              height={443} // Tentukan ukuran gambar
              src="/img/services/photostudio.png"
              alt="Photo Suudio"
              className="aspect-viceo w-[60rem] object-fit rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Photostudio;
