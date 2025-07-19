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
  // tambahkan properti lain sesuai kebutuhan
};

const Package: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/packages`
        );
        // Ambil hanya 4 teratas
        setPackages(res.data.slice(0, 4));
      } catch (error) {
        console.error("Gagal mengambil data packages:", error);
      }
    };
    fetchPackages();
  }, []);

  // Helper function to format the price
  const formatPrice = (price: number | string) => {
    // Ensure price is a number
    const numericPrice = typeof price === "string" ? parseFloat(price) : price;

    if (isNaN(numericPrice)) {
      return "Rp0"; // Handle cases where price is not a valid number
    }

    // Format to Rupiah with thousands separator
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // No decimal places for thousands
      maximumFractionDigits: 0, // No decimal places for thousands
    }).format(numericPrice);
  };

  return (
    <>
      <div className="flex justify-center items-center p-14">
        <div className="text-center w-full">
          <h2 className="font-bold text-3xl mb-10">Paket Unggulan Kami</h2>

          <div className="px-[20vw] mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {packages.map(
                (
                  pkg // Changed 'packages' to 'pkg' to avoid naming conflict
                ) => (
                  <Link href={`https://wa.me/6285219805200`} key={pkg.id}>
                  <div
                    className="relative w-full rounded-xl overflow-hidden bg-[var(--color-gray-1)]"
                  >
                    <Image
                      layout="responsive"
                      width={400}
                      height={0}
                      src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${pkg.thumbnail}`}
                      alt={pkg.nama_paket}
                      className="aspect-[4/3] w-full object-cover"
                    />

                    <div className="p-8 text-left truncate">
                      <h2 className="font-bold text-xl mb-3">
                        {pkg.nama_paket}
                      </h2>
                      {/* Use the formatPrice helper here */}
                      <h2 className="font-semibold text-xl">
                        {formatPrice(pkg.harga)}
                      </h2>
                    </div>
                  </div>
                  </Link>
                )
              )}
            </div>
          </div>

          <Link href={`/contact`}>
            <div className="mb-8">
              <button className="px-10 py-3 rounded-md text-white bg-[var(--color-black-2)] hover:scale-[102%] cursor-pointer">
                Kontak Kami
              </button>
            </div>  
          </Link>
        </div>
      </div>
    </>
  );
};

export default Package;
