import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number;
  judul: string;
  thumbnail: string;
}

interface CategoriesProps {
  categories: Category[];
}

const Gallery: React.FC<CategoriesProps> = ({ categories }) => {
  const sortedPhotos = [...categories].sort((a, b) => b.id - a.id);

  return (
    <>
      {/* KUNCI 1: Ganti padding menjadi responsif dan valid */}
      <div className="w-full text-center py-16 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl font-bold mb-3 md:text-4xl">Gallery</h1>
        {/* KUNCI 2: Ganti h2 menjadi p dan batasi lebarnya agar mudah dibaca */}
        <p className="text-base text-gray-600 mb-12 max-w-xl mx-auto">
          Berikut adalah foto-foto yang diambil di studio Atedoz Space
        </p>

        <div className="flex justify-center items-center w-full">
          {/* KUNCI 3: Grid dibuat 1 kolom di mobile, lalu 2, dan 3 di layar lebih besar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {sortedPhotos.map((photo) => (
              <Link href={`/gallery/${photo.id}`} key={photo.id}>
                <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[102%] transition-all duration-300">
                  <div className="relative aspect-video w-full">
                    <Image
                      fill
                      objectFit="cover"
                      src={photo.thumbnail}
                      alt={photo.judul}
                      unoptimized
                      className="bg-gray-200"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="text-xl font-bold text-gray-900">
                      {photo.judul}
                    </h3>
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

export default Gallery;
