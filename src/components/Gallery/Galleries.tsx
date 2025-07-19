"use client";
import React, { useState } from "react";
import { useModal } from "@/hooks/useModal"; // Menggunakan hook untuk mengelola modal
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
  const {
    openModal: openModalPhoto,
  } = useModal(); // Mengelola status modal

  // Menyortir foto berdasarkan id secara descending
  const sortedPhotos = [...categories].sort((a, b) => b.id - a.id);

  return (
    <>
      <div className="p-14 w-full text-center px-50">
        <h2 className="text-2xl font-bold mb-3">Gallery</h2>
        <h2 className="text-base font-medium mb-10">
          Berikut adalah foto-foto yang diambil di studio Atedoz Space
        </h2>
        
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full">
            {sortedPhotos.map((photo) => (
              <Link href={`/gallery/${photo.id}`} key={photo.id}>
                <div
                  className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden hover:scale-[102%]"
                >
                  <Image
                    layout="responsive"
                    width={1000}
                    height={0}
                    src={photo.thumbnail}
                    alt={photo.judul}
                    unoptimized
                    className="aspect-video w-full object-cover cursor-pointer"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-3">{photo.judul}</h2>
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
