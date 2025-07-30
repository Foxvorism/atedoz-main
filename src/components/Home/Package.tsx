"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type Package = {
  id: number;
  nama_paket: string;
  harga: string;
  thumbnail: string;
};

const Package: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/packages`
        );
        setPackages(res.data.slice(0, 4));
      } catch (error) {
        console.error("Gagal mengambil data packages:", error);
      }
    };
    fetchPackages();
  }, []);

  const formatPrice = (price: number | string) => {
    const numericPrice = typeof price === "string" ? parseFloat(price) : price;
    if (isNaN(numericPrice)) {
      return "N/A";
    }
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numericPrice);
  };

  return (
    <>
      {/* KUNCI 1: Padding utama dibuat responsif */}
      <div className="flex justify-center items-center py-14 px-4 sm:px-8 lg:px-14">
        <div className="text-center w-full">
          {/* KUNCI 2: Ukuran font judul dibuat responsif */}
          <h2 className="font-bold text-2xl md:text-3xl mb-10">
            Paket Unggulan Kami
          </h2>

          {/* KUNCI 3: HAPUS div dengan px-[20vw]. Grid diletakkan langsung di sini */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-10 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <Link href={`https://wa.me/6285219805200`} key={pkg.id}>
                <div
                  className="relative w-full rounded-xl overflow-hidden bg-[var(--color-gray-1)]
                                hover:scale-[102%] transition-transform duration-300 h-full"
                >
                  {/* Wadah gambar untuk menjaga rasio aspek */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      fill
                      objectFit="cover"
                      src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${pkg.thumbnail}`}
                      alt={pkg.nama_paket}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* KUNCI 4: Padding di dalam kartu dibuat responsif */}
                  <div className="p-4 md:p-6 text-left">
                    <h2 className="font-bold text-lg md:text-xl mb-2 truncate">
                      {pkg.nama_paket}
                    </h2>
                    <h2 className="font-semibold text-lg md:text-xl text-[var(--color-black-2)]">
                      {formatPrice(pkg.harga)}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link href={`/contact`}>
            <button className="px-10 py-3 rounded-md text-white bg-[var(--color-black-2)] hover:scale-[102%] transition-transform duration-200 cursor-pointer">
              Kontak Kami
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Package;
