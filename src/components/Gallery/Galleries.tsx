"use client";
import React, { useState } from "react";
import { Modal } from "../modal"; // Mengimpor Modal
import { useModal } from "@/hooks/useModal"; // Menggunakan hook untuk mengelola modal
import Image from "next/image";

interface Gallery {
  id: number;
  foto: string;
  deskripsi: string;
}

interface GalleryProps {
  galleries: Gallery[];
}

const Gallery: React.FC<GalleryProps> = ({ galleries }) => {
  const {
    isOpen: isModalPhotoOpen,
    openModal: openModalPhoto,
    closeModal: closeModalPhoto,
  } = useModal(); // Mengelola status modal

  const [selectedPhoto, setSelectedPhoto] = useState<Gallery | null>(null); // Menyimpan foto yang dipilih

  // Menyortir foto berdasarkan id secara descending
  const sortedPhotos = [...galleries].sort((a, b) => b.id - a.id);

  // Fungsi untuk menangani klik pada gambar
  const handlePhotoClick = (photo: Gallery) => {
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
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full">
            {sortedPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative w-full bg-gray-100 rounded-lg overflow-hidden hover:scale-[102%]"
                onClick={() => handlePhotoClick(photo)} // Menangani klik gambar
              >
                <Image
                  width={2000} // Tentukan ukuran gambar
                  height={2000} // Tentukan ukuran gambar
                  src={photo.foto}
                  alt={photo.deskripsi ? photo.deskripsi : "Gallery Photo"}
                  className="w-full h-auto object-cover cursor-pointer rounded-lg aspect-square"
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
          className="lg:max-w-[40vw] max-w-[85vw]"
        >
          <div className="w-full">
            <Image
              width={1200}
              height={1200}
              src={selectedPhoto.foto}
              alt={selectedPhoto.deskripsi ? selectedPhoto.deskripsi : "Selected Photo"}
              className="rounded-xl object-cover w-full h-auto aspect-square"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Gallery;
