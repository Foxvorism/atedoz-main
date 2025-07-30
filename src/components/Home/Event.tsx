import React from "react";
import Image from "next/image";
import Link from "next/link";

interface EventItem {
  id: number;
  nama_event: string;
  tanggal_event: string;
  deskripsi_event: string;
  thumbnail: string;
}

interface EventProps {
  events: EventItem[];
}

const Event: React.FC<EventProps> = ({ events }) => {
  const sortedEvents = [...events].sort((a, b) => b.id - a.id);

  return (
    <>
      {/* KUNCI 1: Ganti padding horizontal menjadi responsif */}
      <div className="flex justify-center items-center py-14 px-4 sm:px-6 md:px-10 lg:px-40">
        <div className="text-center w-full">
          {/* KUNCI 2: Buat ukuran font judul menjadi responsif */}
          <h2 className="font-bold text-2xl md:text-3xl mb-10">
            Acara Terkini dari Photobooth
          </h2>

          <div className="flex justify-center items-center">
            {/* Grid sudah cukup responsif, hanya disederhanakan sedikit */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {sortedEvents.map((event) => (
                <Link href={`/events/detail-event/${event.id}`} key={event.id}>
                  {/* KUNCI 3: Tambahkan transisi untuk animasi hover yang mulus */}
                  <div
                    className="bg-gray-100 rounded-lg overflow-hidden h-full
                               hover:scale-[102%] transition-transform duration-300"
                  >
                    {/* Wadah gambar untuk menjaga rasio aspek */}
                    <div className="relative aspect-video w-full">
                      <Image
                        fill
                        objectFit="cover"
                        src={event.thumbnail}
                        alt={event.nama_event}
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4 text-left">
                      <h2 className="text-lg font-bold mb-2">
                        {event.nama_event}
                      </h2>
                      <h3 className="text-gray-400 text-xs">
                        {event.tanggal_event}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
