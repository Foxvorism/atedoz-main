import React from "react";
import Image from "next/image";
import Link from "next/link";

const Photobooth: React.FC = () => {
  const photo = [
    { id: 1, src: "/img/home/photobooth3.jpg", alt: "Home Photobooth 1" },
    { id: 2, src: "/img/home/photobooth4.jpg", alt: "Home Photobooth 2" },
    { id: 3, src: "/img/home/photobooth5.png", alt: "Home Photobooth 3" },
    { id: 4, src: "/img/home/photobooth6.png", alt: "Home Photobooth 4" },
  ];

  return (
    <>
      <div className="flex justify-center items-center py-10 px-0 md:py-14 bg-[var(--color-gray-2)]">
        <div className="text-center text-white w-full">
          <div className="px-6">
            <h2 className="font-bold text-2xl md:text-3xl mb-4">Photobooth</h2>
            <p className="text-base md:text-lg">#BringingFunToEveryFrame.</p>
            <p className="text-base md:text-lg mb-8">
              We are open for collaboration, partnership & rental.
            </p>
            <Link href="/contact" className="mb-10 inline-block">
              <button className="px-10 py-3 rounded-md bg-[var(--color-black-2)] hover:scale-[102%] transition-transform duration-200 cursor-pointer">
                Kontak Kami
              </button>
            </Link>
          </div>

          <div className="w-full lg:flex lg:justify-center">
            {/* TAMBAHKAN CLASS 'no-scrollbar' DI SINI */}
            <div className="flex flex-row items-start gap-4 overflow-x-auto pb-4 px-6 lg:px-0 lg:overflow-visible no-scrollbar">
              {photo.map((photo) => (
                <div
                  key={photo.id}
                  className="relative rounded-lg overflow-hidden aspect-[4/5] w-[75vw] sm:w-[350px] flex-shrink-0"
                >
                  <Image
                    fill
                    objectFit="cover"
                    src={photo.src}
                    alt={photo.alt}
                    sizes="(max-width: 640px) 75vw, 350px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photobooth;
