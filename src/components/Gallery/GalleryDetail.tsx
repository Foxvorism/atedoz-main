"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Modal } from "../modal";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";

interface Photo {
  id: number;
  foto: string;
  deskripsi: string;
}

interface Gallery {
  id: number;
  judul: string;
  photos: Photo[];
}

interface GalleryProps {
  galleries: Gallery[];
}

const Gallery: React.FC<GalleryProps> = ({ galleries }) => {
  const {
    isOpen: isModalPhotoOpen,
    openModal: openModalPhoto,
    closeModal: closeModalPhoto,
  } = useModal();

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Menggabungkan semua foto dari semua galeri dan menyortirnya
  const sortedPhotos = galleries
    .flatMap((gallery) => gallery.photos)
    .sort((a, b) => b.id - a.id);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    openModalPhoto();
  };

  return (
    <>
      {/* KUNCI 1: Padding utama dibuat responsif dan valid */}
      <div className="w-full text-center py-16 px-4 sm:px-6 md:px-8">
        {/* Menggunakan judul generik karena menampilkan semua foto */}
        <h1 className="text-3xl font-bold mb-3 md:text-4xl">Galeri Foto</h1>
        <p className="text-base text-gray-600 mb-12 max-w-xl mx-auto">
          Jelajahi momen-momen tak terlupakan yang diabadikan di Atedoz Space.
        </p>

        <div className="flex justify-center items-center w-full">
          {/* KUNCI 2: Grid dibuat lebih adaptif untuk berbagai ukuran layar */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl">
            {sortedPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative w-full bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handlePhotoClick(photo)}
              >
                <Image
                  width={500}
                  height={500}
                  src={photo.foto}
                  alt={photo.deskripsi || "Gallery Photo"}
                  unoptimized
                  className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay saat hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal untuk menampilkan gambar (sudah responsif) */}
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
              alt={selectedPhoto.deskripsi || "Selected Photo"}
              unoptimized
              className="rounded-xl object-cover w-full h-auto aspect-square"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Gallery;
