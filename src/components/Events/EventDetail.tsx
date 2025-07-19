"use client";
import React, { useState, useEffect, useCallback } from "react"; // Import useCallback
import Image from "next/image";
import axios from "axios";

export default function EventDetail({ id }: { id: number }) {
  const [event, setEvent] = useState({
    id: 0,
    thumbnail: "",
    nama_event: "",
    tanggal_event: "",
    photos: [
      {
        id: 0,
        foto: "",
      },
    ],
  });
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const fetchEventById = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/events/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setEvent({
        id: response.data.id,
        thumbnail: response.data.thumbnail || "",
        nama_event: response.data.nama_event || "",
        tanggal_event: response.data.tanggal_event || "",
        photos: response.data.photos || [],
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]); // id is a dependency for fetchEventById
  // --- End of change ---

  function formatTanggalIndo(dateString: string): string {
    if (!dateString) return "-";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-";

    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === event.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? event.photos.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    fetchEventById();
  }, [id, fetchEventById]); // Include fetchEventById in the dependency array

  // Determine photo content status
  const hasPhotos = event.photos && event.photos.length > 0;
  const hasMultiplePhotos = event.photos && event.photos.length > 1;
  console.log(event);

  return (
    <>
      <div className="px-30 py-20">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold mb-3">{event.nama_event}</h2>
          <h2 className="text-lg font-normal text-gray-800/50">
            {formatTanggalIndo(event.tanggal_event)}
          </h2>
        </div>

        {!hasPhotos ? ( // Scenario 1: No photos
          <div className="text-center text-gray-500 py-10">Tidak ada konten</div>
        ) : (
          <div className="flex justify-center items-center mb-8 relative overflow-hidden rounded-xl w-[50%] mx-auto">
            {" "}
            {/* Added mx-auto */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPhotoIndex * 100}%)` }}
            >
              {event.photos.map((photo, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    layout="responsive" // Use responsive for better scaling
                    width={1000}
                    height={562} // Use an appropriate height to maintain aspect ratio (e.g., 16:9 for 1000 width)
                    src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${photo.foto}`}
                    alt={`Event photo ${index + 1}`}
                    unoptimized
                    className="aspect-video object-cover" // Ensure consistent aspect ratio
                  />
                </div>
              ))}
            </div>

            {hasMultiplePhotos && ( // Display previous button only if multiple photos
              <button
                onClick={goToPrevPhoto}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity ml-4"
              >
                &#10094;
              </button>
            )}

            {hasMultiplePhotos && ( // Display next button only if multiple photos
              <button
                onClick={goToNextPhoto}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity mr-4"
              >
                &#10095;
              </button>
            )}

            {hasMultiplePhotos && ( // Display indicators only if multiple photos
              <div className="absolute bottom-4 flex space-x-2">
                {event.photos.map((_, index) => (
                  <span
                    key={index}
                    className={`block w-3 h-3 rounded-full cursor-pointer ${
                      index === currentPhotoIndex ? "bg-white" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentPhotoIndex(index)}
                  ></span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}