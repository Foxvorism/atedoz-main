'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Package: React.FC = () => {
  const [packages, setPackages] = useState<any[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/packages`);
        // Ambil hanya 4 teratas
        setPackages(res.data.slice(0, 4));
      } catch (error) {
        console.error("Gagal mengambil data packages:", error);
      }
    };
    fetchPackages();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center p-14">
        <div className="text-center w-full">
          <h2 className="font-bold text-3xl mb-10">Paket Unggulan Kami</h2>

          <div className="px-[20vw] mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {packages.map((packages) => (
                <div
                  key={packages.id}
                  className="relative w-full rounded-xl overflow-hidden bg-[var(--color-gray-1)]"
                  // onClick={() => handlePhotoClick(photo)} // Handle click event for first modal
                >
                  <Image
                    layout="responsive"
                    width={400} // Tentukan ukuran gambar
                    height={0} // Tentukan ukuran gambar
                    src={packages.thumbnail}
                    alt={packages.nama_paket}
                    className="aspect-[4/3] w-full object-cover"
                  />

                  <div className="p-8 text-left truncate">
                    <h2 className="font-bold text-2xl mb-3">{packages.nama_paket}</h2>
                    <h2 className="font-semibold text-xl">{packages.harga}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <button className="px-10 py-3 rounded-md text-white bg-[var(--color-black-2)] hover:scale-[102%] cursor-pointer">
              Kontak Kami
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
