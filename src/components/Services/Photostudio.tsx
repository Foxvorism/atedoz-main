"use client";
import React, { useEffect, useState, useRef } from "react";
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
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0); // State untuk melacak indeks chunk/grup saat ini
  const sliderTrackRef = useRef<HTMLDivElement>(null); // Ref untuk elemen track slider

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

  // Fungsi untuk membagi array packages menjadi kelompok 4 item
  const chunkArray = (arr: Package[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const packageChunks = chunkArray(packages, 4); // Membagi paket menjadi kelompok 4

  // Fungsi untuk menggeser slider ke kiri
  const goToPrevChunk = () => {
    setCurrentChunkIndex((prevIndex) =>
      prevIndex === 0 ? packageChunks.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk menggeser slider ke kanan
  const goToNextChunk = () => {
    setCurrentChunkIndex((prevIndex) =>
      prevIndex === packageChunks.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efek untuk mengaplikasikan transformasi saat currentChunkIndex berubah
  useEffect(() => {
    if (sliderTrackRef.current) {
      const sliderContainerWidth =
        sliderTrackRef.current.parentElement?.clientWidth || 0;
      const transformValue = -(currentChunkIndex * sliderContainerWidth);

      sliderTrackRef.current.style.transform = `translateX(${transformValue}px)`;
      sliderTrackRef.current.style.transition = "transform 0.5s ease-in-out"; // Tambahkan transisi
    }
  }, [currentChunkIndex, packageChunks.length]);

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

          {/* Wrapper untuk semua tampilan paket, sekarang diubah menjadi relative */}
          <div className="px-[20vw] my-10 relative"> {/* TAMBAH `relative` DI SINI */}
            {/* Kondisi untuk 1, 2, 3, atau 4 paket */}
            {packages.length > 0 && packages.length <= 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {packages.map((pkg) => (
                  <Link href={`https://wa.me/6285219805200`} key={pkg.id}>
                    <div className="relative w-full rounded-xl overflow-hidden bg-[var(--color-gray-1)]">
                      <Image
                        layout="responsive"
                        width={400}
                        height={300}
                        src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${pkg.thumbnail}`}
                        alt={pkg.nama_paket}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <div className="p-8 pb-8 text-left truncate">
                        <h2 className="font-bold text-xl mb-3 text-gray-900">
                          {pkg.nama_paket}
                        </h2>
                        <h2 className="font-semibold text-xl text-gray-800">
                          {"Rp. " + Number(pkg.harga).toLocaleString("id-ID")}
                        </h2>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Kondisi untuk lebih dari 4 paket (Slider kustom 2x2 per slide) */}
            {packages.length > 4 && (
              <div className="w-full overflow-hidden"> {/* Hapus `relative` di sini */}
                <div
                  ref={sliderTrackRef}
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ width: `${packageChunks.length * 100}%` }}
                >
                  {packageChunks.map((chunk, chunkIndex) => (
                    <div
                      key={chunkIndex}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {chunk.map((pkg) => (
                          <Link href={`https://wa.me/6285219805200`} key={pkg.id}>
                            <div className="relative w-full rounded-xl overflow-hidden bg-[var(--color-gray-1)]">
                              <Image
                                layout="responsive"
                                width={400}
                                height={300}
                                src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${pkg.thumbnail}`}
                                alt={pkg.nama_paket}
                                className="aspect-[4/3] w-full object-cover"
                              />
                              <div className="p-8 pb-8 text-left truncate">
                                <h2 className="font-bold text-xl mb-3 text-gray-900">
                                  {pkg.nama_paket}
                                </h2>
                                <h2 className="font-semibold text-xl text-gray-800">
                                  {"Rp. " + Number(pkg.harga).toLocaleString("id-ID")}
                                </h2>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tombol navigasi slider (dipindahkan ke sini) */}
            {packages.length > 4 && packageChunks.length > 1 && (
              <>
                <button
                  onClick={goToPrevChunk}
                  // Sesuaikan posisi `left` untuk berada di luar `px-[20vw]`
                  className="absolute top-1/2 left-1/8 -translate-x-full -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75" // TAMBAH `md:-left-12`
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNextChunk}
                  // Sesuaikan posisi `right` untuk berada di luar `px-[20vw]`
                  className="absolute top-1/2 right-1/8 translate-x-full -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 " // TAMBAH `md:-right-12`
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Indikator titik (dots) */}
            {packages.length > 4 && packageChunks.length > 1 && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {packageChunks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentChunkIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentChunkIndex ? "bg-white" : "bg-gray-500"
                    }`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Photostudio;