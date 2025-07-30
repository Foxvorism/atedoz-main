"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";

// Definisikan tipe di luar komponen agar lebih rapi
interface Photo {
  id: number;
  foto: string;
}

interface Event {
  id: number;
  thumbnail: string;
  nama_event: string;
  tanggal_event: string;
  photos: Photo[];
}

export default function EventDetail({ id }: { id: number }) {
  const [event, setEvent] = useState<Event | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const fetchEventById = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/events/${id}`
      );
      setEvent(response.data);
    } catch (error) {
      console.log("Gagal mengambil detail event:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchEventById();
  }, [fetchEventById]);

  // --- Helper Functions ---
  const formatTanggalIndo = (dateString: string | undefined): string => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const goToNextPhoto = () => {
    if (!event) return;
    setCurrentPhotoIndex((prev) =>
      prev === event.photos.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevPhoto = () => {
    if (!event) return;
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? event.photos.length - 1 : prev - 1
    );
  };

  if (!event) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const hasPhotos = event.photos && event.photos.length > 0;
  const hasMultiplePhotos = event.photos && event.photos.length > 1;

  return (
    <>
      {/* KUNCI 1: Padding utama dibuat responsif */}
      <div className="py-10 px-4 sm:py-16 sm:px-6">
        <div className="text-center mb-8">
          {/* KUNCI 2: Tipografi dibuat responsif & perbaikan semantik */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {event.nama_event}
          </h1>
          <p className="text-base md:text-lg font-normal text-gray-500">
            {formatTanggalIndo(event.tanggal_event)}
          </p>
        </div>

        {!hasPhotos ? (
          <div className="text-center text-gray-500 py-10">
            Tidak ada foto untuk event ini.
          </div>
        ) : (
          /* KUNCI 3: Lebar slider dibuat responsif */
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentPhotoIndex * 100}%)`,
                }}
              >
                {event.photos.map((photo, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Image
                      width={1600}
                      height={900}
                      src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${photo.foto}`}
                      alt={`Event photo ${index + 1}`}
                      unoptimized
                      className="aspect-video w-full object-cover bg-gray-200"
                    />
                  </div>
                ))}
              </div>

              {/* Tombol Navigasi Slider */}
              {hasMultiplePhotos && (
                <>
                  <button
                    onClick={goToPrevPhoto}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors z-10"
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
                    onClick={goToNextPhoto}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors z-10"
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
            </div>

            {/* Indikator Titik */}
            {hasMultiplePhotos && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {event.photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`block w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentPhotoIndex
                        ? "bg-gray-800"
                        : "bg-gray-300 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to photo ${index + 1}`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
