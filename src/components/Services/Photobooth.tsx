import React from "react";
import Image from "next/image";
import Link from "next/link";

const Photobooth: React.FC = () => {
  return (
    <>
      {/* KUNCI 1: Ganti semua padding/margin invalid dengan yang responsif */}
      <div className="py-16 px-6 lg:px-20">
        <div className="w-full max-w-6xl mx-auto">
          {/* KUNCI 2: Grid dibuat 1 kolom di mobile, 2 kolom di desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Kolom Teks */}
            {/* KUNCI 3: Di mobile, teks berada di bawah gambar (order-2) dan rata tengah */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Photobooth
              </h2>

              {/* Menggabungkan paragraf dan mengganti h2 menjadi p */}
              <p className="text-base md:text-lg mb-8 leading-relaxed">
                Abadikan momen seru kamu dengan photobox kekinian yang tersedia
                langsung di lokasi mitra kami! Atedoz memiliki banyak layanan
                photobooth berbeda yang bisa anda eksplor.
              </p>

              <div className="mt-8">
                <Link
                  href={`https://wa.me/6282249938235`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-10 py-3 bg-[var(--color-black-2)] text-white rounded-md cursor-pointer hover:scale-[102%] transition-transform">
                    Pelajari Lebih Lanjut
                  </button>
                </Link>
              </div>
            </div>

            {/* Kolom Gambar */}
            {/* Di mobile, gambar berada di atas teks (order-1) */}
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <Image
                width={500}
                height={500}
                src="/img/services/photobooth2.jpg"
                alt="Photobooth"
                className="aspect-square w-full max-w-md object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photobooth;
