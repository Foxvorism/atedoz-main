"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

export default function EventDetail({ id }: { id: number }) {
  const [event, setEvent] = useState({
    id: 0,
    thumbnail: "",
    nama_event: "",
    tanggal_event: "",
    deskripsi_event: "",
    longitude: "",
    latitude: "",
  });

  const fetchEventById = async () => {
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
        deskripsi_event: response.data.deskripsi_event || null,
        tanggal_event: response.data.tanggal_event || "",
        longitude: response.data.longitude || "",
        latitude: response.data.latitude || "",
      });
      console.log(response.data);
    } catch (error) {
      //   handleError(error);
      console.log(error);
    }
  };

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

  useEffect(() => {
    fetchEventById();
    console.log("UPDATED_AT RAW:", event.tanggal_event);
  }, [id]);

  return (
    <>
      {/* <ComponentCard title={`Detail of  ${event.nama_event}`} href="/events"> */}
      {/* <div className="flex justify-end item-center p-5">
        <button className="bg-black text-white px-5 py3">Back</button>
      </div> */}

      <div className="px-30 py-20">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold mb-3">{event.nama_event}</h2>
          <h2 className="text-lg font-normal text-gray-800/50">
            {formatTanggalIndo(event.tanggal_event)}
          </h2>
        </div>

        <div className="flex justify-center items-center mb-8">
          <Image
            layout="intrinsic" // Menggunakan layout intrinsic agar width menyesuaikan dengan height
            width={300} // Tentukan lebar gambar sebagai referensi rasio
            height={0}
            src={`${process.env.NEXT_PUBLIC_BACKEND_HOST}/photos/${event.thumbnail}`}
            alt={event.thumbnail}
            className="aspect-video rounded-xl w-[50%] h-full object-cover cursor-pointer"
          />
        </div>
        {/* <div className="text-center mb-5">
          <h2 className="text-sm font-medium text-gray-800/50">
            Location : {event.longitude}, {event.latitude}
          </h2>
        </div> */}

        <div className="text-center mx-16 ">
          <p className="text-lg font-medium">{event.deskripsi_event}</p>
        </div>
        {/* </ComponentCard> */}
      </div>
    </>
  );
}
