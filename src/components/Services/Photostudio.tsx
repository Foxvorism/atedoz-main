"use client";
import React, { useEffect, useState, useRef } from "react";
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

// Komponen Kartu Paket yang bisa digunakan di kedua layout
const PackageCard: React.FC<{ pkg: Package }> = ({ pkg }) => (
  <Link href={`https://wa.me/6285219805200`} key={pkg.id}>
    <div className="relative w-full h-full flex flex-col rounded-xl overflow-hidden bg-gray-100 text-black transition-transform duration-300 hover:scale-105">
      <div className="relative w-full aspect-[4/3]">
        <Image
          fill
          objectFit="cover"
          src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${pkg.thumbnail}`}
          alt={pkg.nama_paket}
          sizes="(max-width: 640px) 70vw, 300px"
        />
      </div>
      <div className="p-4 text-left">
        <h3 className="font-bold text-base mb-1 truncate">{pkg.nama_paket}</h3>
        <p className="font-semibold text-base">
          {"Rp " + Number(pkg.harga).toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  </Link>
);

const Photostudio: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  // Logika untuk mendeteksi ukuran layar
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Logika Fetch Data
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/packages`
        );
        setPackages(res.data);
      } catch (error) {
        console.error("Gagal mengambil data packages:", error);
      }
    };
    fetchPackages();
  }, []);

  // HANYA UNTUK SLIDER DESKTOP
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const chunkArray = (arr: Package[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const packageChunks = chunkArray(packages, 4);
  const goToPrevChunk = () =>
    setCurrentChunkIndex((prev) =>
      prev === 0 ? packageChunks.length - 1 : prev - 1
    );
  const goToNextChunk = () =>
    setCurrentChunkIndex((prev) =>
      prev === packageChunks.length - 1 ? 0 : prev + 1
    );
  useEffect(() => {
    if (isDesktop && sliderTrackRef.current) {
      const sliderContainerWidth =
        sliderTrackRef.current.parentElement?.clientWidth || 0;
      const transformValue = -(currentChunkIndex * sliderContainerWidth);
      sliderTrackRef.current.style.transform = `translateX(${transformValue}px)`;
      sliderTrackRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentChunkIndex, packageChunks.length, isDesktop]);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-14 px-0 bg-[var(--color-gray-2)] text-white text-center">
        <div className="px-6 w-full max-w-5xl">
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

        <div className="w-full">
          {isDesktop ? (
            // --- TAMPILAN DESKTOP (Slider JavaScript 2x2) ---
            <div className="w-full max-w-5xl mx-auto relative">
              <div className="overflow-hidden">
                <div ref={sliderTrackRef} className="flex">
                  {packageChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 gap-6">
                        {chunk.map((pkg) => (
                          <PackageCard key={pkg.id} pkg={pkg} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {packageChunks.length > 1 && (
                <>
                  {/* KUNCI: Ubah -left-4 menjadi -left-12 */}
                  <button
                    onClick={goToPrevChunk}
                    className="absolute top-1/2 -translate-y-1/2 -left-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  {/* KUNCI: Ubah -right-4 menjadi -right-12 */}
                  <button
                    onClick={goToNextChunk}
                    className="absolute top-1/2 -translate-y-1/2 -right-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-black"
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
            </div>
          ) : (
            // --- TAMPILAN MOBILE (Horizontal Scroll CSS) ---
            <div className="flex flex-row items-stretch gap-4 overflow-x-auto pb-4 px-4 no-scrollbar">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="w-[70vw] sm:w-[300px] flex-shrink-0"
                >
                  <PackageCard pkg={pkg} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Photostudio;
