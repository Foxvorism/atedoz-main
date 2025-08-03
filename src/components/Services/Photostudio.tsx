"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

// Definisikan tipe data di luar komponen
type Package = {
  id: number;
  nama_paket: string;
  harga: string;
  thumbnail: string;
};

const Photostudio: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/packages`
        );
        setPackages(res.data); // tampilkan semua package
      } catch (error) {
        console.error("Gagal mengambil data packages:", error);
      }
    };
    fetchPackages();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-14 px-0 bg-[var(--color-gray-2)] text-white text-center">
        <div className="px-6">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Photo Studio</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Photo Studio kami memberikan layanan untuk pemotretan indoor. Rekam
            dan cetak momen berkesan anda secara profesional!
          </p>
          <div className="my-8">
            <Link href={`https://wa.me/6285219805200`}>
              <button className="px-10 py-3 rounded-md bg-[var(--color-black-2)] hover:scale-[102%] transition-transform cursor-pointer">
                Reservasi
              </button>
            </Link>
          </div>
        </div>

        {/* KUNCI: Mengadopsi struktur horizontal scroll dari komponen Photobooth */}
        <div className="w-full lg:flex lg:justify-center">
          {/* Container yang bisa di-scroll dengan class 'no-scrollbar' */}
          <div className="flex flex-row items-stretch gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-0 lg:overflow-visible no-scrollbar">
            {packages.map((pkg) => (
              <Link
                href={`https://wa.me/6285219805200`}
                key={pkg.id}
                // KUNCI: Ukuran kartu dibuat responsif, mirip seperti Photobooth
                className="block w-[70vw] sm:w-[300px] flex-shrink-0"
              >
                <div className="relative w-full h-full flex flex-col rounded-xl overflow-hidden bg-gray-100 text-black transition-transform duration-300 hover:scale-105">
                  {/* Bagian Gambar */}
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      fill
                      objectFit="cover"
                      src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${pkg.thumbnail}`}
                      alt={pkg.nama_paket}
                      sizes="(max-width: 640px) 70vw, 300px"
                    />
                  </div>
                  {/* Bagian Teks (Info Paket) */}
                  <div className="p-4 text-left">
                    <h3 className="font-bold text-base mb-1 truncate">
                      {pkg.nama_paket}
                    </h3>
                    <p className="font-semibold text-base">
                      {"Rp " + Number(pkg.harga).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Photostudio;
