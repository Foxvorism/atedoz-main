"use client";
import React, { useState } from "react";
import { Modal } from "../modal"; // Mengimpor Modal
import { useModal } from "@/hooks/useModal"; // Menggunakan hook untuk mengelola modal
import Image from "next/image";

interface Photo {
  id: number;
  url: string;
  alt: string;
}

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const {
    isOpen: isModalPhotoOpen,
    openModal: openModalPhoto,
    closeModal: closeModalPhoto,
  } = useModal(); // Mengelola status modal

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null); // Menyimpan foto yang dipilih

  // Menyortir foto berdasarkan id secara descending
  const sortedPhotos = [...photos].sort((a, b) => b.id - a.id);

  // Fungsi untuk menangani klik pada gambar
  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo); // Menyimpan foto yang dipilih
    openModalPhoto(); // Membuka modal
  };

  return (
    <>
      <div className="p-14 w-full text-center px-50">
        <h2 className="text-2xl font-bold mb-3">Gallery</h2>
        <h2 className="text-base font-medium mb-10">
          Berikut adalah foto-foto yang diambil di studio Atedoz Space
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {sortedPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative w-full bg-gray-100 rounded-lg overflow-hidden hover:scale-[102%]"
                onClick={() => handlePhotoClick(photo)} // Menangani klik gambar
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  className="aspect-square w-full h-full object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal untuk menampilkan gambar yang dipilih */}
      {isModalPhotoOpen && selectedPhoto && (
        <Modal
          isOpen={isModalPhotoOpen}
          onClose={closeModalPhoto}
          className="lg:max-w-[45vw] max-w-[80vw]"
        >
          <div className="w-full">
            <Image
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="rounded-xl object-cover aspect-square"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Gallery;
