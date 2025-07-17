"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

type Package = {
  id: number;
  nama_paket: string;
  harga: string;
  thumbnail: string;
  // tambahkan properti lain sesuai kebutuhan
};

const Photostudio: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/packages`);
        setPackages(res.data); // tampilkan semua package
      } catch (error) {
        console.error("Gagal mengambil data packages:", error);
      }
    };
    fetchPackages();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center p-14 bg-[var(--color-gray-2)]">
        <div className="text-center w-full text-white">
          <h2 className="font-bold text-3xl mb-10">Photo Studio</h2>
          <p className="text-lg">
            Photo Studio kami memberikan layanan untuk pemotretan indoor.
          </p>
          <p className="text-lg mb-8">
            Rekam dan cetak momen berkesan anda secara profesional!
          </p>

          <div className="mb-8">
            <Link href={`https://wa.me/6285219805200`}>
              <button className="px-10 py-3 rounded-md bg-[var(--color-black-2)] hover:scale-[102%] cursor-pointer">
                Reservasi
              </button>
            </Link>
          </div>

          {/* Tampilkan semua package */}
          <div className="px-[20vw] my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {packages.map((pkg) => (
                <Link href={`https://wa.me/6285219805200`} key={pkg.id}>
                <div
                  className="relative w-full rounded-xl overflow-hidden bg-[var(--color-gray-1)]"
                >
                  <Image
                    layout="responsive"
                    width={400}
                    height={300}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${pkg.thumbnail}`}
                    alt={pkg.nama_paket}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-8 text-left truncate">
                    <h2 className="font-bold text-2xl mb-3 text-gray-900">{pkg.nama_paket}</h2>
                    <h2 className="font-semibold text-xl text-gray-800">
                      {"Rp. " + Number(pkg.harga).toLocaleString("id-ID")}
                    </h2>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photostudio;