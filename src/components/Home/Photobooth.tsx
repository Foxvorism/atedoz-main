import React from "react";
import Image from "next/image";
import Link from "next/link";

const Photobooth: React.FC = () => {
  const photo = [
    { id: 1, src: "/img/home/photobooth1.png", alt: "Home Photobooth 1" },
    { id: 2, src: "/img/home/photobooth2.png", alt: "Home Photobooth 2" },
  ];

  return (
    <>
      <div className="flex justify-center items-center p-14 bg-[var(--color-gray-2)]">
        <div className="text-center text-white">
          <h2 className="font-bold text-3xl mb-10">Photobooth</h2>
          <p className="text-lg">#BringingFunToEveryFrame.</p>
          <p className="text-lg mb-8">
            We are open for collaboration, partnership & rental.
          </p>

          <Link href="/contact">
          <div className="mb-8">
            <button className="px-10 py-3 rounded-md bg-[var(--color-black-2)] hover:scale-[102%] cursor-pointer">
              Kontak Kami
            </button>
          </div>
          </Link>
          <div className="px-[20vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {photo.map((photo) => (
                <div
                  key={photo.id}
                  className="relative w-full rounded-lg overflow-hidden"
                  // onClick={() => handlePhotoClick(photo)} // Handle click event for first modal
                >
                  <Image
                    layout="responsive"
                    width={443} // Tentukan ukuran gambar
                    height={443} // Tentukan ukuran gambar
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-square w-full h-full object-fit"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* <div className="flex justify-center items-center gap-10">
            <div className="w-[35vw] h-[35vh] bg-white p-2 flex justify-center items-center">
              <Image
layout="intrinsic"
width={100} // Tentukan ukuran gambar
height={100} // Tentukan ukuran gambar
                src="/img/HomePhotobooth1.png"
                alt="HomePhotobooth1"
                className="w-auto"
              />
            </div>
            <div className="w-[35vw] h-[35vh] bg-white p-2 flex justify-center items-center">
              <Image
layout="intrinsic"
width={100} // Tentukan ukuran gambar
height={100} // Tentukan ukuran gambar
                src="/img/HomePhotobooth2.png"
                alt="img/HomePhotobooth2.png"
                className="w-full"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Photobooth;
